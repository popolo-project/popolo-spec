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

1. vote event

    >Vote No. 42

1. option

    >e.g. yes, no, or abstain.

1. count

    >128

<h1 id="standard-reuse">2. Standard reuse</h1>

Few specifications exist for vote totals, and few legislatures publish vote data in a machine-readable format. The [inventory or terms](/appendices/terms.html) shows little agreement between specifications.

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
    <tr id="opengov:Count">
      <td>Count</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#Count">opengov:Count</a></code></td>
      <td>the number of votes for an option in a vote event</td>
    </tr>
    <tr id="opengov:option">
      <td>option</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#option">opengov:option</a></code></td>
      <td>an option in a vote event</td>
    </tr>
    <tr id="opengov:value">
      <td>value</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#value">opengov:value</a></code></td>
      <td>the number of votes for the option</td>
    </tr>
  </tbody>
</table>

Please see the [Vote event](/specs/vote-event.html) document.

<h1 id="serialization">4. Serialization</h1>

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
