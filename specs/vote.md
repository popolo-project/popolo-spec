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

A vote is one person's vote in a vote event.

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

1. [vote event](/specs/vote-event.html)

    >Vote No. 42

1. the [person](/specs/person.html) who is voting

    >Alice uses voting records to identify voting blocs.
    >Bob subscribes to receive an email alert when John Q. Public votes.
    >Carol tracks which members of the government vote with the opposition.
    >Dave checks how political parties voted on an important bill.

1. the [organization](/specs/organization.html) that is voting

    >In the House of Representatives of New Zealand, the parties cast the votes, not the members.

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

Few specifications exist for individual votes, and few legislatures publish vote data in a machine-readable format. The [inventory of terms](/appendices/terms.html) shows little agreement between specifications.

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
      <td>a voter's vote in a vote event</td>
    </tr>
    <tr id="opengov:person">
      <td>person</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#person">opengov:person</a></code></td>
      <td>the person who is voting</td>
    </tr>
    <tr id="opengov:organization">
      <td>organization</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#organization">opengov:organization</a></code></td>
      <td>the organization that is voting</td>
    </tr>
    <tr id="opengov:option">
      <td>option</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#option">opengov:option</a></code></td>
      <td>the option chosen by the voter, whether actively or passively<a href="#note1"><sup>1</sup></a></td>
    </tr>
    <tr id="opengov:role">
      <td>role</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#role">opengov:role</a></code></td>
      <td>the voter's role in the event</td>
    </tr>
    <tr id="opengov:weight">
      <td>weight</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#weight">opengov:weight</a></code></td>
      <td>the weight of the voter's vote<a href="#note2"><sup>2</sup></a></td>
    </tr>
    <tr id="opengov:pair">
      <td>pair</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#pair">opengov:pair</a></code></td>
      <td>a person with whom the voter is paired</td>
    </tr>
  </tbody>
</table>

* The `person` property <em class="rfc2119">must not</em> be used if an organization is voting.
* The `organization` property <em class="rfc2119">must not</em> be used if a person is voting.
* "Pairing" refers to a reciprocal agreement between two voters by which a voter abstains if the other is unable to vote. However, a voter may not honor the agreement. The agreement is not in effect if both voters are able to vote. The `pair` property <em class="rfc2119">must not</em> be used unless the agreement is honored and in effect.

<p class="note" id="note1">1. For example, `"absent"` and `"not voting"` are valid values of the `option` property.</p>
<p class="note" id="note2">2. The default value for a vote's weight is `1`.</p>

<h1 id="serialization">4. Serialization</h1>

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
