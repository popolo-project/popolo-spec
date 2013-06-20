---
layout: default
title: Software Components | The Popolo Project
id: components
---
{% include navigation.html %}

# Best Practices for Software Components

This document describes best practices for software components implementing the Popolo specification.

## Identifiers

It is recommended to use a URL as the [permanent, unique identifier](/specs/#use-cases-and-requirements) of each instance of each class. A software component may choose instead to use e.g. MongoDB's automatically-assigned hexadecimal strings and put URLs in metadata, e.g. using the [Hypertext Application Language (HAL)](http://stateless.co/hal_specification.html):

```json
{
  "_links": {
    "self": { "href": "http://example.com/people/507f1f77bcf86cd799439011" }
  },
  "id": "507f1f77bcf86cd799439011",
}
```

## Databases

### Isolation

Reusable software components implementing the data specification may want to isolate themselves from their host applications. A software component may therefore namespace its SQL tables or MongoDB collections by prepending `popolo_` to the names of its tables or collections.

### Interoperability

If two software components are to interoperate by allowing direct access to each others' database (as opposed to offering an API), those databases must agree on the names of their SQL tables or MongoDB collections. The names must be among the following (optionally prefixed with `popolo_`:

* `contact_details`
* `memberships`
* `organizations`
* `people`
* `posts`

<div class="well well-example">
  <p>A developer creates a platform for citizens to ask questions to legislators in public. The platform relies on a third-party data collection system to provide the legislator profiles. The platform is distributed as open source, and lets re-users choose a Popolo-compliant data collection system that best fits their process; for example, an organization with active volunteers may prefer a manual data entry system, whereas another with technical expertise may prefer a data scraping system.</p>

  <p>Unless all these systems use the same names for their tables/collections, the question-and-answer platform will need to add logic to test for known "in-the-wild" table/collection names used by various Popolo-compliant projects in order to interoperate with them.</p>
</div>

### MongoDB caveats

Many MongoDB ODMs, including [Mongoid](http://mongoid.org/), use a `_type` field on a document to indicate that the document represents an instance of a subclass of the base class that is otherwise associated with the MongoDB collection. The management of the `_type` field should be left to the ODM. [*[issue 24]*](https://github.com/opennorth/popolo-spec/issues/24)

MongoDB does not support reduced dates as in XML Schema; it stores a [date](http://docs.mongodb.org/manual/core/document/#date) as a 64-bit integer that represents the number of milliseconds since the [Unix epoch](http://en.wikipedia.org/wiki/Unix_time). Unless a use case emerges requiring fast date operations, dates should be serialized as strings in MongoDB.
