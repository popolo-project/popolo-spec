---
layout: class
title: Vote | The Popolo Project
id: vote
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Vote</li>
</ul>

A vote is one voter's vote in a vote event.

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

1. [vote event](/specs/vote-event.html)

    >Vote No. 42

1. voter

    >Alice uses voting records to identify voting blocs.

    >Bob subscribes to receive an email alert when John Q. Public votes.

    >Carol tracks which members of the government vote with the opposition.

    >Dave checks how political parties voted on an important bill.

    >In the [House of Representatives of New Zealand](http://www.parliament.nz/en-nz/features/00NZPHomeNews20121019a1/conscience-votes), the parties regularly cast the votes, not the members.

1. the option chosen by the voter

    >e.g. yes, no, or abstain.

1. the voter's role in the event

    >In the House of Commons of the United Kingdom, the tellers are the members who count the votes.

    >Eve analyzes the chair's behavior on tie votes.

1. the weight of the voter's vote

    >In the House of Representatives of New Zealand, the weight of a party's vote is equal to the number of members of the party.

1. the [person](/specs/person.html) with whom the voter is paired

    >[In some legislatures](http://en.wikipedia.org/wiki/Pair_%28parliamentary_convention%29), two members from opposing parties may agree to abstain when one member is unable to vote.

<h1 id="standard-reuse">2. Standard reuse</h1>

Few specifications exist for individual votes, and few legislatures publish vote data in a machine-readable format. Schema.org and Parliamentary Metadata Language terms are retained from the [inventory of terms](/appendices/terms.html#Vote).

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
    <tr id="opengov:Vote">
      <td>Vote</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#Vote">opengov:Vote</a></code></td>
      <td>A voter's vote in a vote event</td>
    </tr>
    <tr id="opengov:voteEvent">
      <td>vote event</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#voteEvent">opengov:voteEvent</a></code></td>
      <td>The vote event</td>
    </tr>
    <tr id="schema:agent">
      <td>voter</td>
      <td><code><a href="http://schema.org/agent" title="http://schema.org/agent">schema:agent</a></code></td>
      <td>The [person](/specs/person.html) or [organization](/specs/organization.html) that is voting</td>
    </tr>
    <tr id="schema:option">
      <td>option</td>
      <td><code><a href="http://schema.org/option" title="http://schema.org/option">schema:option</a></code></td>
      <td>The option chosen by the voter, whether actively or passively<a href="#note1"><sup>1</sup></a></td>
    </tr>
    <tr id="opengov:role">
      <td>role</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#role">opengov:role</a></code></td>
      <td>The voter's role in the event</td>
    </tr>
    <tr id="opengov:weight">
      <td>weight</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#weight">opengov:weight</a></code></td>
      <td>The weight of the voter's vote<a href="#note2"><sup>2</sup></a></td>
    </tr>
    <tr id="opengov:pair">
      <td>pair</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#pair">opengov:pair</a></code></td>
      <td>A person with whom the voter is paired</td>
    </tr>
  </tbody>
</table>

"Pairing" generally refers to a reciprocal agreement between two voters by which a voter abstains if the other is unable to vote. The pairing agreement is not always in force and respected; for example, if both voters are voting or if a voter breaks the agreement. The `pair` property <em class="rfc2119">must not</em> be used unless a pairing agreement is, in fact, respected.

<p class="note" id="note1">1. For example, `"absent"` and `"not voting"` are valid values of the `option` property.</p>
<p class="note" id="note2">2. The default value for a vote's weight is `1`.</p>

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The term `voter` is used instead of `agent`, to avoid jargon.
* The value of the `voter_id` property refers to a [person](/specs/person.html).

<ul class="nav nav-tabs no-js">
  <li><a href="#vote-schema">JSON Schema</a></li>
  <li><a href="#vote-context">JSON-LD Context</a></li>
  <li class="active"><a href="#vote-json">JSON</a></li>
  <li><a href="#vote-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="vote-schema" data-url="/schemas/vote.json"></div>
  <div class="tab-pane" id="vote-context" data-url="/contexts/vote.jsonld"></div>
  <div class="tab-pane active" id="vote-json" data-url="/examples/vote.json"></div>
  <div class="tab-pane" id="vote-rdf" data-url="/examples/vote.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

## Option

Implementations <em class="rfc2119">may</em> use values from outside this list to reflect the diversity of voting options.

* `yes`
* `no`
* `abstain`
