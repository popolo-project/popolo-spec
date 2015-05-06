---
layout: default
title: JSON Serialization Patterns | Popolo
id: appendix
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li>Appendices</li>
  <li class="active">JSON serialization patterns</li>
</ul>

This document collects some emerging patterns for JSON serializations. If you are developing your own data specification, you may benefit from reading the different solutions to design problems discussed below.

* [Include data about a related object](#relations)
* [Remove unnecessary complexity](#complexity)
  * [Pagination and metadata](#metadata)
* [Flag non-specification properties](#flag-properties)

<h2 id="relations">Include data about a related object</h2>

It is very common for a JSON document to embed data about a related object. For example, it makes sense to put information about a bill's sponsors on the bill object. In this example, you may start off with a relatively flat structure like:

```json
{
  "name": "HR 3501",
  "title": "Humanity and Pets Partnered Through the Years (HAPPY) Act",
  "sponsorships": [
    {
      "entity_type": "person",
      "entity_id": "400260",
      "name": "Thaddeus McCotter",
      "chamber": "lower",
      "sponsorship_type": "sponsor",
      "primary": true
    }
  ]
}
```

Two problems:

1. Each Sponsorship object in the `sponsorships` array contains fields about both the sponsorship (`sponsorship_type` and `primary`) and the sponsor (`name` and `chamber`), which is not [object-oriented](http://en.wikipedia.org/wiki/Object-oriented_modeling).
1. The `entity_type` and `entity_id` fields make the Sponsorship class [polymorphic](http://en.wikipedia.org/wiki/Polymorphism_in_object-oriented_programming), i.e. a Sponsorship object represents either a person or a committee depending on the values of those two fields. If polymorphism can be avoided, the data model will be simpler.

To eliminate the polymorphism, we can replace the Sponsorship objects like:

```json
{
  "name": "HR 3501",
  "title": "Humanity and Pets Partnered Through the Years (HAPPY) Act",
  "sponsorships": [
    {
      "type": "person",
      "id": "400260",
      "name": "Thaddeus McCotter",
      "chamber": "lower",
      "sponsorship_type": "sponsor",
      "primary": true
    }
  ]
}
```

Each object in the `sponsorships` array is now either a Person or a Committee object. If the type of the sponsor is unknown, we can omit the `type` field. However, we are still left with the first problem of mixing data about the sponsorship with data about the sponsor.

To avoid injecting the `sponsorship_type` and `primary` properties onto the Person object, consider:

```json
{
  "name": "HR 3501",
  "title": "Humanity and Pets Partnered Through the Years (HAPPY) Act",
  "sponsorships": [
    {
      "person": {
        "id": "400260",
        "name": "Thaddeus McCotter",
        "chamber": "lower"
      },
      "sponsorship_type": "sponsor",
      "primary": true
    }
  ]
}
```

The Sponsorship object uses a `person` field, whose value is an abbreviated Person object (that is, the Person object omits fields that are irrelevant to the sponsorship, e.g. the person's date of birth). If the sponsor were a committee, the Sponsorship object would use a `committee` field. If the type of the sponsor is unknown, we can instead use a field corresponding to a [superclass](http://en.wikipedia.org/wiki/Superclass_\(computer_science\)#Subclasses_and_superclasses), like `thing`.[<sup>1</sup>](#note1)

A less object-oriented approach to isolating the data about the sponsorship from the data about the sponsor is to prefix all sponsor fields, e.g.:

```json
{
  "name": "HR 3501",
  "title": "Humanity and Pets Partnered Through the Years (HAPPY) Act",
  "sponsorships": [
    {
      "person_id": "400260",
      "person_name": "Thaddeus McCotter",
      "person_chamber": "lower",
      "sponsorship_type": "sponsor",
      "primary": true
    }
  ]
}
```

However, this approach should be avoided, as it is more difficult to identify and collect the fields for the related object than the previous approach.

<p class="note" id="note1">1. The <a href="http://www.w3.org/TR/owl2-overview/">Web Ontology Language (OWL)</a> defines an <code><a href="http://www.w3.org/TR/owl2-syntax/#Classes">owl:Thing</a></code> class, which is the superclass to all classes. <a href="http://schema.org/">Schema.org</a> also defines a <a href="http://schema.org/Thing">Thing</a> class.</p>

<h2 id="complexity">Remove unnecessary complexity</h2>

For example, consider the following response from an API call:

```json
{
  "objects": [
    {
      "id": "foo"
    },
    {
      "id": "bar"
    }
  ]
}
```

The array datatype already captures the fact that the response is a list of objects. The surrounding object is redundant and unnecessary:

```json
[
  {
    "id": "foo"
  },
  {
    "id": "bar"
  }
]
```

<h3 id="metadata">Pagination and metadata</h3>

[Django REST framework](http://django-rest-framework.org/), [Tastypie](http://tastypieapi.org/) and other API frameworks return responses like:

```json
{
  "count": 20,
  "next": "/path?limit=20&offset=20",
  "previous": null,
  "results": [
    {
      "id": "foo"
    },
    ...
  ]
}
```

Or with all metadata fields inside a single `meta` object:

```json
{
  "meta": {
    "limit": 20,
    "next": "/path?limit=20&offset=20",
    "offset": 0,
    "previous": null,
    "total_count": 50
  },
  "objects": [
    {
      "id": "foo"
    },
    ...
  ]
}
```

To eliminate the metadata from the response, APIs like [GitHub's](http://developer.github.com/v3/#pagination) put this information in the Link HTTP header, following [RFC 5988](http://tools.ietf.org/html/rfc5988):

```http
GET https://example.com/path HTTP/1.1
Content-Type: application/json; charset=utf-8
Status: 200 OK
Link: <https://example.com/path?offset=20>; rel="next"


[
  {
    "id": "foo"
  },
  ...
]
```

<h2 id="flag-properties">Flag non-specification properties</h2>

It is impractical to define every possible property for a given class in order to satisfy all possible use cases. Some properties used for specific use cases will therefore not be defined in the data specification. For example, the following JSON document adds a `hair_colour` property:

```json
{
  "name": "Mr. John Q. Public, Esq.",
  "hair_colour": "brown"
}
```

Data consumers, who are less familiar with the specification itself, might assume that the `hair_colour` property is part of the specification and expect it to be defined on other documents with the same semantics over the long term.

To avoid misinterpretation, some implementations flag additional properties that may be subject to change using one of the two strategies below:

1. Prefix the additional property with a `+` character, e.g.:

    ```json
    {
      "name": "Mr. John Q. Public, Esq.",
      "+hair_colour": "brown"
    }
    ```

1. Collect all additional properties into a subdocument, e.g.:

    ```json
    {
      "name": "Mr. John Q. Public, Esq.",
      "extra": {
        "hair_colour": "brown"
      }
    }
    ```
