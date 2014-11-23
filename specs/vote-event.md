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

1. the [organization](/specs/organization.html) whose members are voting

    >House of Commons

1. the legislative session in which the vote event occurs

    >2nd Session of the 41st Parliament

1. identifiers

    >Vote No. 42

1. the [motion](/specs/motion.html) on which people are voting

    >That the House do now proceed to the Orders of the Day.

1. the time at which the event begins

    >January 1, 2013 at 12:30pm

1. the time at which the event ends

    >January 1, 2013 at 12:45pm

1. the result of the vote event

    >The ayes have it.

1. the [result of the vote event within groups of voters](/specs/#group-result)

    >Within the [Legislative Council of Hong Kong](http://en.wikipedia.org/wiki/Legislative_Council_of_Hong_Kong), the motion was passed by the functional constituencies but negatived by the geographical constituencies.

1. the [vote totals](/specs/count.html)

    >Yeas: 128, Nays: 145

1. the [individual votes](/specs/vote.html)

    >John Doe cast a vote in favor of the motion.

<h1 id="standard-reuse">2. Standard reuse</h1>

Few specifications exist for vote events, and few legislatures publish vote data in a machine-readable format. Dublin Core, Schema.org, and Parliamentary Metadata Language terms are retained from the [inventory of terms](/appendices/terms.html#VoteEvent).

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
      <td><code title="http://www.w3.org/ns/opengov#VoteEvent">opengov:VoteEvent</code></td>
      <td>An event at which people's votes are recorded</td>
    </tr>
    <tr id="schema:organizer">
      <td>organization</td>
      <td><code><a href="http://schema.org/organizer" title="http://schema.org/organizer">schema:organizer</a></code></td>
      <td>The organization whose members are voting<a href="#note1"><sup>1</sup></a></td>
    </tr>
    <tr id="schema:superEvent">
      <td>legislative session</td>
      <td><code><a href="http://schema.org/superEvent" title="http://schema.org/superEvent">schema:superEvent</a></code></td>
      <td>The legislative session in which the vote event occurs<a href="#note1"><sup>1</sup></a></td>
    </tr>
    <tr id="dcterms:identifier">
      <td>identifier</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-identifier" title="http://purl.org/dc/terms/identifier">dcterms:identifier</a></code></td>
      <td>An issued identifier, e.g. a sequential number</td>
    </tr>
    <tr id="opengov:motion">
      <td>motion</td>
      <td><code title="http://www.w3.org/ns/opengov#motion">opengov:motion</code></td>
      <td>The motion being decided</td>
    </tr>
    <tr id="schema:startDate">
      <td>start date</td>
      <td><code><a href="http://schema.org/startDate" title="http://schema.org/startDate">schema:startDate</a></code></td>
      <td>The time at which the event begins</td>
    </tr>
    <tr id="schema:endDate">
      <td>end date</td>
      <td><code><a href="http://schema.org/endDate" title="http://schema.org/endDate">schema:endDate</a></code></td>
      <td>The time at which the event ends</td>
    </tr>
    <tr id="opengov:result">
      <td>result</td>
      <td><code title="http://www.w3.org/ns/opengov#result">opengov:result</code></td>
      <td>The result of the vote event<a href="#note2"><sup>2</sup></a></td>
    </tr>
    <tr id="opengov:groupResult">
      <td>group result</td>
      <td><code title="http://www.w3.org/ns/opengov#groupResult">opengov:groupResult</code></td>
      <td>The result of the vote event within groups of voters</td>
    </tr>
    <tr id="opengov:count">
      <td>count</td>
      <td><code title="http://www.w3.org/ns/opengov#count">opengov:count</code></td>
      <td>The number of votes for an option</td>
    </tr>
    <tr id="opengov:vote">
      <td>vote</td>
      <td><code title="http://www.w3.org/ns/opengov#vote">opengov:vote</code></td>
      <td>A voter's vote</td>
    </tr>
  </tbody>
</table>

The vote totals <em class="rfc2119">should</em> agree with the individual votes. The [vote totals](/specs/count.html) <em class="rfc2119">may</em> not include all options from individual votes, and the [individual votes](/specs/vote.html) <em class="rfc2119">may</em> not include all present voters, in particular if the options chosen that have no effect on the result, e.g. abstentions.

<p class="note" id="note1">1. If an implementation uses the <a href="/specs/motion.html">Motion</a> class, it is not necessary to repeat the <code>organization</code> and <code>legislative_session</code> properties on the motion's vote events, unless they differ; for example, a committee may consider a legislature's motion, such as in the <a href="http://en.wikipedia.org/wiki/Riksdag">Riksdag</a>.</p>
<p class="note" id="note2">2. If a motion has multiple vote events, it is relevant to communicate the result of each event.</p>

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The term `organization` is used instead of `organizer`, to be consistent with the [Membership](/specs/membership.html) class.
* The term `legislative_session` is used instead of `superEvent`, for clarity.

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

<h1 id="code-lists">5. Code lists</h1>

## Result

Implementations <em class="rfc2119">may</em> use values from outside this list to reflect the diversity of results.

* `pass`
* `fail`
