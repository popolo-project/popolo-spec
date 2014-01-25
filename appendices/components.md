---
layout: default
title: Best Practices for Software Components | The Popolo Project
id: appendix
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li>Appendices</li>
  <li class="active">Best practices for software components</li>
</ul>

This document describes best practices for software components implementing the Popolo specification.

* [Identifiers](#identifiers)
* [Databases](#databases)
  * [Isolation](#isolation)
  * [Interoperability](#interoperability)
  * [MongoDB caveats](#mongodb)

<h2 id="identifiers">Identifiers</h2>

It is recommended to use a URI as the [permanent, unique identifier](/specs/#use-cases-and-requirements) of each instance of each class when distributing data as JSON:

```json
{
  "id": "http://example.com/people/john-q-public",
}
```

A software component may instead choose to use e.g. MongoDB's automatically-assigned hexadecimal strings as its internal, permanent, unique identifier and to put URIs in the metadata of the JSON document, e.g. using the [Hypertext Application Language (HAL)](http://stateless.co/hal_specification.html):

```json
{
  "_links": {
    "self": { "href": "http://example.com/people/507f1f77bcf86cd799439011" }
  },
  "id": "507f1f77bcf86cd799439011",
}
```

<h2 id="databases">Databases</h2>

<h3 id="isolation">Isolation</h3>

Reusable software components implementing the data specification may want to isolate their database tables from those of their host application. A software component may therefore namespace its database tables by prepending `popolo_` to the names of its database tables.

<h3 id="interoperability">Interoperability</h3>

If two software components are to interoperate by allowing direct access to each others' database (as opposed to offering an API), those databases must agree on the names of their tables. The names must be among the following (optionally prefixed with `popolo_`):

* `contact_details`
* `identifiers`
* `links`
* `memberships`
* `organizations`
* `other_names`
* `people`
* `posts`

<div class="well well-sm well-example">
  <p>A developer creates a platform for citizens to ask questions to legislators in public. The platform relies on a third-party data collection system to provide the legislator profiles. The platform is distributed as open source, and lets re-users choose a Popolo-compliant data collection system that best fits their process; for example, an organization with active volunteers may prefer a manual data entry system, whereas another with technical expertise may prefer a data scraping system.</p>

  <p>Unless all these systems use the same names for their database tables, the question-and-answer platform will need to add logic to test for known "in-the-wild" database table names used by various Popolo-compliant projects in order to interoperate with them.</p>
</div>

<h3 id="mongodb">MongoDB caveats</h3>

MongoDB does not support reduced dates like `2004-08` as in XML Schema; it stores a [date](http://docs.mongodb.org/manual/core/document/#date) as a 64-bit integer that represents the number of milliseconds since the [Unix epoch](http://en.wikipedia.org/wiki/Unix_time). Unless a use case emerges requiring fast date operations, dates should be serialized as strings in MongoDB.

Many MongoDB ODMs, including [Mongoid](http://mongoid.org/), use a `_type` field on a document to indicate that the document represents an instance of a subclass of the base class that is otherwise associated with the MongoDB collection. The management of the `_type` field should be left to the ODM.
