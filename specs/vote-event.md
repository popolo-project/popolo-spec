---
layout: class
title: Vote Event | The Popolo Project
id: vote-event
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Vote event</li>
</ul>

A vote event is an event at which people's votes are recorded.

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

1. identifiers

    >Vote No. 42

1. the [motion](/specs/motion.html) on which people are voting

    >That the House do now proceed to the Orders of the Day.

1. the time at which the event begins

    >January 1, 2013 at 12:30pm

1. the time at which the event ends

    >January 1, 2013 at 12:45pm

1. the [vote totals](/specs/count.html)

    >Yeas: 128, Nays: 145

1. the [individual votes](/specs/vote.html)

    >John Doe cast a vote in favor of the motion.

<h1 id="standard-reuse">2. Standard reuse</h1>

Few specifications exist for vote events, and few legislatures publish vote data in a machine-readable format. The [inventory or terms](/appendices/terms.html) shows little agreement between specifications.

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
    <tr id="opengov:VoteEvent">
      <td>Vote event</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#VoteEvent">opengov:VoteEvent</a></code></td>
      <td>An event at which people's votes are recorded</td>
    </tr>
    <tr id="opengov:identifier">
      <td>identifier</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#identifier">opengov:identifier</a></code></td>
      <td>An issued identifier, e.g. a sequential number</td>
    </tr>
    <tr id="opengov:motion">
      <td>motion</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#motion">opengov:motion</a></code></td>
      <td>The motion being decided by the vote</td>
    </tr>
    <tr id="schema:startDate">
      <td>start time</td>
      <td><code><a href="http://schema.org/startDate" title="http://schema.org/startDate">schema:startDate</a></code></td>
      <td>the time at which the event begins</td>
    </tr>
    <tr id="schema:endDate">
      <td>end time</td>
      <td><code><a href="http://schema.org/endDate" title="http://schema.org/endDate">schema:endDate</a></code></td>
      <td>the time at which the event ends</td>
    </tr>
    <tr id="opengov:count">
      <td>count</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#count">opengov:count</a></code></td>
      <td>the number of votes for one option</td>
    </tr>
    <tr id="opengov:vote">
      <td>vote</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#vote">opengov:vote</a></code></td>
      <td>one person's vote</td>
    </tr>
  </tbody>
</table>

* The vote totals <em class="rfc2119">may</em> exclude the options that have no effect on the result, such as abstentions.
* The individual votes <em class="rfc2119">may</em> not include all present voters.
* The vote totals <em class="rfc2119">may</em> disagree with the individual votes.

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The term `identifiers` is serialized as an array of [identifier objects](/specs/#identifier).

<ul class="nav nav-tabs no-js">
  <li><a href="#vote-event-schema">JSON Schema</a></li>
  <li><a href="#vote-event-context">JSON-LD Context</a></li>
  <li class="active"><a href="#vote-event-json">JSON</a></li>
  <li><a href="#vote-event-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="vote-event-schema" data-url="/schemas/vote_event.json"></div>
  <div class="tab-pane" id="vote-event-context" data-url="/contexts/vote_event.jsonld"></div>
  <div class="tab-pane active" id="vote-event-json" data-url="/examples/vote_event.json"></div>
  <div class="tab-pane" id="vote-event-rdf" data-url="/examples/vote_event.ttl"></div>
</div>
