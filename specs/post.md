---
layout: class
title: Post | The Popolo Project
id: post
---

<h1 id="use-cases-and-requirements">1. Use Cases &amp; Requirements</h1>

The Post class should have properties for:

1. label

    > Member of Parliament for Avalon

1. the role that the holder of the post fulfills

    > Member of Parliament

1. the person who holds the post

    > John Doe

1. the organization in which the post is held

    > House of Commons

1. the address at which the post is based

    > 1 Main Street  
    Anytown, USA

<h1 id="classes-and-properties">3. Classes and properties</h1>

<table>
  <caption>Definitions and mappings of classes and properties</caption>
  <thead>
    <tr>
      <th width="130">Term</th>
      <th>Mapping</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr id="org:Post">
      <td><strong>Post</strong></td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:Post" title="http://www.w3.org/ns/org#Post">org:Post</a></code></td>
      <td>A position that exists independent of the person holding it</td>
    </tr>
    <tr id="skos:prefLabel2">
      <td>label</td>
      <td><code><a href="http://www.w3.org/TR/skos-reference/#labels" title="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></code></td>
      <td>A label describing the post</td>
    </tr>
    <tr id="org:role-Post">
      <td>role</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:role" title="http://www.w3.org/ns/org#role">org:role</a></code></td>
      <td>The role that the holder of the post fulfills</td>
    </tr>
    <tr id="org:heldBy">
      <td>person</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:heldBy" title="http://www.w3.org/ns/org#heldBy">org:heldBy</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>The person who holds the post</td>
    </tr>
    <tr id="org:postIn">
      <td>organization</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:postIn" title="http://www.w3.org/ns/org#postIn">org:postIn</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>The organization in which the post is held</td>
    </tr>
    <tr>
      <td>address</td>
      <td></td>
      <td>The address at which the post is based</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. ORG defines the inverse properties <code>org:hasSubOrganization</code>, <code>org:holds</code>, <code>org:hasPost</code> and <code>org:hasMembership</code>.</p>

<h1 id="serialization">4. Serialization</h1>

Schemas are given in [JSON Schema](http://json-schema.org/) (draft [v3](http://tools.ietf.org/html/draft-zyp-json-schema-03)) and apply to the JSON serialization. The schemas use [snake case](http://en.wikipedia.org/wiki/Snake_case) instead of [camel case](http://en.wikipedia.org/wiki/CamelCase), due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s and <abbr title="object-document mapper">ODM</abbr>s. The RDF serialization follows the [classes and properties](#classes-and-properties) section above; example RDF documents are given in [Turtle notation](http://www.w3.org/TeamSubmission/turtle/).

In order to satisfy the [requirement](#use-cases-and-requirements) to allow the use of imprecise dates, the use of [ISO 8601:2004](http://www.iso.org/iso/catalogue_detail?csnumber=40874) reduced dates is <em class="rfc2119">recommended</em>. [XML Schema](http://www.w3.org/XML/Schema.html) supports [reduced dates](http://www.w3.org/TR/xmlschema-2/#truncatedformats) such as [`YYYY`](http://www.w3.org/TR/xmlschema-2/#gYear) and [`YYYY-MM`](http://www.w3.org/TR/xmlschema-2/#gYearMonth). Dates <em class="rfc2119">must</em> be stored in <abbr title="Coordinated Universal Time">UTC</abbr>.

**Differences from RDF:** The term `name` is used instead of `prefLabel`, to be consistent with the Person class. The terms `person_id` and `organization_id` are used instead of `heldBy` and `postIn` to conform to ODM conventions. The value of the `role` property is a string, instead of a `skos:Concept`.

<ul class="nav nav-tabs">
  <li><a href="#post-schema">JSON Schema</a></li>
  <li class="active"><a href="#post-json">JSON</a></li>
  <li><a href="#post-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="post-schema" data-url="/schemas/post.json"></div>
  <div class="tab-pane active" id="post-json" data-url="/examples/post.json"></div>
  <div class="tab-pane" id="post-rdf" data-url="/examples/post.ttl"></div>
</div>
