---
layout: class
title: Vote Count | The Popolo Project
id: count
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Vote count</li>
</ul>

A vote count is the number of votes for one option in a vote event.

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Count class should have properties for:

1. option

    >e.g. yes, no, or abstain.

1. count

    >128

1. a group of voters

    >The Bosniak, Croat, and Serb groups within the [House of Peoples](http://en.wikipedia.org/wiki/House_of_Peoples_of_Bosnia_and_Herzegovina) must each have a majority for a motion to pass.

    >The functional and geographical constituencies within the [Legislative Council of Hong Kong](http://en.wikipedia.org/wiki/Legislative_Council_of_Hong_Kong) must each have a majority.

    >A majority of Democratic Party members voted for a motion, and a majority of Republican Party members voted against the motion.

<h1 id="standard-reuse">2. Standard reuse</h1>

Few specifications exist for vote totals, and few legislatures publish vote data in a machine-readable format. Basic RDF terms are retained from the [inventory of terms](/appendices/terms.html#Count).

<h1 id="classes-and-properties">3. Classes and properties</h1>

<table>
  <thead>
    <tr>
      <th width="130">Term</th>
      <th>Mapping</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Count</td>
      <td>No <code>rdf:type</code></td>
      <td>The number of votes for an option in a vote event</td>
    </tr>
    <tr id="rdf:type">
      <td>option</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_type" title="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">rdf:type</a></code></td>
      <td>An option in a vote event</td>
    </tr>
    <tr id="rdf:value">
      <td>value</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_value" title="http://www.w3.org/1999/02/22-rdf-syntax-ns#value">rdf:value</a></code></td>
      <td>The number of votes for an option</td>
    </tr>
    <tr id="opengov:group">
      <td>group</td>
      <td><code title="http://www.w3.org/ns/opengov#group">opengov:group</code></td>
      <td>A group of voters</td>
    </tr>
  </tbody>
</table>

For political groups, the range of the `group` property will be an [organization](/specs/organization.html). For ethnic groups, as in the [House of Peoples](http://en.wikipedia.org/wiki/House_of_Peoples_of_Bosnia_and_Herzegovina), it will be a <a href="http://xmlns.com/foaf/spec/#term_Group" title="http://xmlns.com/foaf/0.1/Group">foaf:Group</a> with a <a href="http://xmlns.com/foaf/spec/#term_name" title="http://xmlns.com/foaf/0.1/name">foaf:name</a>.

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The term `option` is used instead of `type`, to be consistent with the [Vote](/specs/vote.html) class.

<ul class="nav nav-tabs no-js">
  <li><a href="#count-schema">JSON Schema</a></li>
  <li><a href="#count-context">JSON-LD Context</a></li>
  <li class="active"><a href="#count-json">JSON</a></li>
  <li><a href="#count-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="count-schema" data-url="/schemas/count.json"></div>
  <div class="tab-pane" id="count-context" data-url="/contexts/count.jsonld"></div>
  <div class="tab-pane active" id="count-json" data-url="/examples/count.json"></div>
  <div class="tab-pane" id="count-rdf" data-url="/examples/count.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

## Option

Implementations <em class="rfc2119">may</em> use values from outside this list.

* `yes`
* `no`
* `abstain`
* `absent`
* `not voting`
* `paired`
