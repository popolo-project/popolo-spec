---
layout: class
title: Membership | The Popolo Project
id: membership
---

[No one size fits all](http://www.w3.org/TR/vocab-org/#reporting_structure) in representing the relationship between people and organizations.

In some cases, a simple binary relation is enough, e.g. a `memberOf` property linking an organization and a person. In other cases, a complex [n-ary relation](http://www.w3.org/TR/swbp-n-aryRelations/) is required, e.g. to describe the duration of the person's membership; in such cases, we create a new class to represent the relation, e.g. a `Membership` class, and attach properties to it, like duration, to describe the relationship between the person and the organization.

According to this data specification, a [person](/specs/person.html) is a member of an [organization](/specs/organization.html), and may optionally hold a [post](/specs/post.html) in that organization through their membership, as illustrated by the class diagram below.

<img src="/img/diagram.png" width="687" height="84" alt="UML diagram">
{% comment %}http://yuml.me/edit/730bfbbb{% endcomment %}

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Membership class should have properties for:

1. the role that the person fulfills in the organization

    >Member

1. the [person](/specs/person.html) who is a party to the relationship

    >John Doe

1. the [organization](/specs/organization.html) that is a party to the relationship

    >XYZ Party

1. The [post](/specs/post.html) held by the person in the organization

    >Chairman of the XYZ Party

1. the time interval over which the relationship exists

    >since 2000

1. the means of contacting the person who is a party to the relationship

    >1 Main Street  
    Anytown, USA  
    555-555-0100  
    john@example.com

1. external links

    >A URL to a document about the membership.

<h1 id="standard-reuse">2. Standard reuse</h1>

Briefly, the [survey of existing specifications](/appendices/survey.html) concludes that only the [Organization ontology](http://www.w3.org/TR/vocab-org/) offers a rich membership model for describing the relation between people and organizations.

## 2.1. Range restrictions

According to the [Organization ontology](http://www.w3.org/TR/vocab-org/), either a person or an organization can be a member of an organization; in this data specification, only a person can be a member of an organization.

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
    <tr id="org:Membership">
      <td><strong>Membership</strong></td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:Membership" title="http://www.w3.org/ns/org#Membership">org:Membership</a></code></td>
      <td>A relationship between a person and an organization</td>
    </tr>
    <tr id="org:role-Membership">
      <td>role</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:role" title="http://www.w3.org/ns/org#role">org:role</a></code></td>
      <td>The role that the person fulfills in the organization</td>
    </tr>
    <tr id="org:member">
      <td>person</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:member" title="http://www.w3.org/ns/org#member">org:member</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>The person who is a party to the relationship</td>
    </tr>
    <tr id="org:organization">
      <td>organization</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:organization" title="http://www.w3.org/ns/org#organization">org:organization</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>The organization that is a party to the relationship</td>
    </tr>
    <tr>
      <td>post</td>
      <td><em>none yet</em></td>
      <td>The post held by the person in the organization</td>
    </tr>
    <tr id="org:memberDuring">
      <td>time interval</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:memberDuring" title="http://www.w3.org/ns/org#memberDuring">org:memberDuring</a></code></td>
      <td>the time interval over which the relationship exists</td>
    </tr>
    <tr>
      <td>contact detail</td>
      <td><em>none yet</em></td>
      <td>A means of contacting the person in the relationship</td>
    </tr>
    <tr id="rdfs:seeAlso">
      <td>external links</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_seealso" title="http://www.w3.org/2000/01/rdf-schema#seeAlso">rdfs:seeAlso</a></code></td>
      <td>A URL to a document about the membership</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. The Organization ontology defines the inverse property <code>org:hasMembership</code>.</p>

<h1 id="serialization">4. Serialization</h1>

A membership relation cannot exist without both a person and an organization. All memberships <em class="rfc2119">must</em> therefore assign values to either `person_id` or `person` and to either `organization_id` or `organization`.

**Differences from RDF:**

* The value of the `role` property is a string, instead of a `skos:Concept`.
* The term `person_id` is used instead of `member` to conform to <abbr title="object-relational mapper">ORM</abbr> conventions.
* The term `organization_id` is used instead of `organization` to conform to <abbr title="object-relational mapper">ORM</abbr> conventions.
* Given the [complex encoding](http://www.w3.org/TR/owl-time/) of time intervals in RDF, a simple `start_date` and `end_date`[<sup>2</sup>](#note2) pair is used instead of `memberDuring`, as [proposed](http://www.epimorphics.com/web/wiki/organization-ontology-second-draft) by the original developers of the Organization ontology.
* The term `links` is used instead of `seeAlso` and is serialized as an array of [link objects](/specs/#link).

<p class="note" id="note2">2. With respect to reuse, the terms <code>start_date</code> and <code>end_date</code> are used in the <a href="http://vocab.org/participation/schema">Participation ontology</a> and others.</p>

<ul class="nav nav-tabs no-js">
  <li><a href="#membership-schema">JSON Schema</a></li>
  <li class="active"><a href="#membership-json">JSON</a></li>
  <li><a href="#membership-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="membership-schema" data-url="/schemas/membership.json"></div>
  <div class="tab-pane active" id="membership-json" data-url="/examples/membership.json"></div>
  <div class="tab-pane" id="membership-rdf" data-url="/examples/membership.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

None.
