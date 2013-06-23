---
layout: class
title: Post | The Popolo Project
id: post
---

[No one size fits all](http://www.w3.org/TR/vocab-org/#reporting_structure) in representing the relationship between people and organizations.

In some cases, it is relevant to represent the organizational structure independently of the people within that structure; for example, it is relevant to represent the position of the Member of Parliament for Avalon even when no one holds that position. A *post* is such a position that exists independently of the person holding it.

A post should not be confused with a *role*, which describes a function that a person can fulfill. For example, people in different organizations can all fulfill the role of CEO, but only one person can hold the post of CEO at Apple Inc. Indeed, the post of the MP for Avalon could be described as having the role of MP.

According to this data specification, a [person](/specs/person.html) holds a post in an [organization](/specs/organization.html) through their [membership](/specs/membership.html) in that organization, as illustrated by the class diagram below.

<img src="/img/diagram.png" width="687" height="84" alt="UML diagram">
{% comment %}http://yuml.me/edit/730bfbbb{% endcomment %}

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Post class should have properties for:

1. label

    >Member of Parliament for Avalon

1. the function that the holder of the post fulfills

    >Member of Parliament

1. the [organization](/specs/organization.html) in which the post is held

    >House of Commons

1. date of creation

    >The Canadian federal electoral district of Westmount—Ville Marie was established in 1996, thereby creating the post of Member of Parliament for Westmount—Ville Marie.

1. date of elimination

    >The Canadian federal electoral district of Annapolis was abolished in 1914, thereby eliminating the post of Member of Parliament for Annapolis.

1. the means of contacting the holder of the post

    >1 Main Street  
    Anytown, USA  
    555-555-0100  
    treasurer@example.com

1. external links

    >http://pm.gc.ca/

<h1 id="standard-reuse">2. Standard reuse</h1>

Briefly, the [survey of existing specifications](/appendices/survey.html) concludes that:

* Only the [Organization ontology](http://www.w3.org/TR/vocab-org/) offers a sufficiently rich model for describing organizational structure.
* No vocabulary has properties for dates of creation and dates of elimination.

## 2.1. Changes to data model

The [Organization ontology](http://www.w3.org/TR/vocab-org/)'s data model is unsuitable for representing:

* a previously held post

    >Michael Ignatieff was Member of Parliament for Etobicoke—Lakeshore until 2011.

* the date on which the person currently holding a post started holding it

Within the Organization ontology, there is also significant overlap in responsibility between the Membership and Post classes, leading to confusion as to when one, the other, or both is required or recommended for a particular use case.

According to the Organization ontology, people hold posts directly; in order to resolve the above issues, in this data specification, people hold posts indirectly through memberships. Therefore, the properties `org:heldBy` and `org:holds` <em class="rfc2119">should not</em> be used.

## 2.2. Range restrictions

According to the Organization ontology, either a person or an organization can hold a post in an organization; in this data specification, only a person can hold a post in an organization.

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
      <td>role<a href="#note1"><sup>1</sup></a></td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:role" title="http://www.w3.org/ns/org#role">org:role</a></code></td>
      <td>The function that the holder of the post fulfills</td>
    </tr>
    <tr id="org:postIn">
      <td>organization</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:postIn" title="http://www.w3.org/ns/org#postIn">org:postIn</a></code><a href="#note2"><sup>2</sup></a></td>
      <td>The organization in which the post is held</td>
    </tr>
    <tr>
      <td>date of creation<a href="#note2"><sup>2</sup></a></td>
      <td><em>none yet</em></td>
      <td>A date of creation</td>
    </tr>
    <tr>
      <td>date of elimination</td>
      <td><em>none yet</em></td>
      <td>A date of elimination</td>
    </tr>
    <tr>
      <td>contact detail</td>
      <td><em>none yet</em></td>
      <td>A means of contacting the holder of the post</td>
    </tr>
    <tr id="rdfs:seeAlso">
      <td>external links</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_seealso" title="http://www.w3.org/2000/01/rdf-schema#seeAlso">rdfs:seeAlso</a></code></td>
      <td>A URL to a document about the post</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. The <code>role</code> property appears on both the Post and Membership classes, as there are uses cases where you will have no posts (e.g. describing club membership) and others where you will have no memberships (e.g. describing organizational structure). If your use case requires both classes, you may have the same information in two places, a minor redundancy.</p>
<p class="note" id="note2">2. The Organization ontology defines the inverse property <code>org:hasPost</code>.</p>

<h1 id="serialization">4. Serialization</h1>

A post cannot exist outside an organization. All posts <em class="rfc2119">must</em> therefore assign a value to either `organization_id` or `organization`.

**Differences from RDF:**

* The term `label` is used instead of `prefLabel`, to be consistent with the [ContactDetail](/specs/contact-detail.html) class.
* The value of the `role` property is a string, instead of a `skos:Concept`.
* The term `organization_id` is used instead of `postIn` to conform to <abbr title="object-relational mapper">ORM</abbr> conventions.
* The terms `start_date` and `end_date` pair are used, to be consistent with the [Membership](/specs/membership.html) class.
* The term `links` is used instead of `seeAlso` and is serialized as an array of [link objects](/specs/#link).

<ul class="nav nav-tabs no-js">
  <li><a href="#post-schema">JSON Schema</a></li>
  <li class="active"><a href="#post-json">JSON</a></li>
  <li><a href="#post-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="post-schema" data-url="/schemas/post.json"></div>
  <div class="tab-pane active" id="post-json" data-url="/examples/post.json"></div>
  <div class="tab-pane" id="post-rdf" data-url="/examples/post.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

None.
