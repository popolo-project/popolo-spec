---
layout: class
title: Membership | The Popolo Project
id: membership
---

<h1 id="use-cases-and-requirements">1. Use Cases &amp; Requirements</h1>

The Membership class should have properties for:

1. the role that the person fulfills in the organization

    > Member

1. the person who is a party to the relationship

    > John Doe

1. the organization that is a party to the relationship

    > XYZ Party

1. the time interval over which the relationship exists

    > since 2000

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
    <tr id="org:memberDuring">
      <td>time interval</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:memberDuring" title="http://www.w3.org/ns/org#memberDuring">org:memberDuring</a></code></td>
      <td>the time interval over which the relationship exists</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. ORG defines the inverse properties <code>org:hasSubOrganization</code>, <code>org:holds</code>, <code>org:hasPost</code> and <code>org:hasMembership</code>.</p>

<h1 id="serialization">4. Serialization</h1>

**Differences from RDF:** Given the [complex encoding](http://www.w3.org/TR/owl-time/) of time intervals in RDF, a simple `start_date` and `end_date`[<sup>2</sup>](#note2) pair is used, as [proposed](http://www.epimorphics.com/web/wiki/organization-ontology-second-draft) by the original developers of the Organization ontology. The terms `person_id` and `organization_id` are used instead of `member` and `organization` to conform to ODM conventions. The value of the `role` property is a string, instead of a `skos:Concept`.

<p class="note" id="note2">2. With respect to reuse, the terms <code>start_date</code> and <code>end_date</code> are used in the <a href="http://vocab.org/participation/schema">Participation ontology</a> and others.</p>

<ul class="nav nav-tabs">
  <li><a href="#membership-schema">JSON Schema</a></li>
  <li class="active"><a href="#membership-json">JSON</a></li>
  <li><a href="#membership-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="membership-schema" data-url="/schemas/membership.json"></div>
  <div class="tab-pane active" id="membership-json" data-url="/examples/membership.json"></div>
  <div class="tab-pane" id="membership-rdf" data-url="/examples/membership.ttl"></div>
</div>
