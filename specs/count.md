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

1. option

    >e.g. yes, no, or abstain.

1. count

    >128

<h1 id="standard-reuse">2. Standard reuse</h1>

Few specifications exist for vote totals, and few legislatures publish vote data in a machine-readable format. Akoma Ntoso and basic RDF terms are retained from the [inventory of terms](/appendices/terms.html#Count).

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
  </tbody>
</table>

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

Implementations <em class="rfc2119">may</em> use values from outside this list to reflect the diversity of voting options.

* `yes`
* `no`
* `abstain`
* `absent`
* `not voting`
* `paired`
