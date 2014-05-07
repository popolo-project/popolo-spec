---
layout: class
title: Motion | The Popolo Project
id: motion
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Motion</li>
</ul>

A motion is "a formal step to introduce a matter for consideration by a group."<a href="#note1"><sup>1</sup></a>

<p class="note" id="note1">1. <a href="http://en.wikipedia.org/wiki/Motion_%28democracy%29">http://en.wikipedia.org/wiki/Motion_%28democracy%29</a></p>

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Motion class should have properties for:

1. the [organization](/specs/organization.html) in which the motion is proposed

    >House of Commons

1. the legislative context in which the motion is proposed

    >Sitting No. 36 of the 2nd Session of the 41st Parliament

1. the [person](/specs/person.html) who proposed the motion

    >John Doe

1. the transcript or text of the motion

    >That the House do now proceed to the Orders of the Day.

1. the subject of the motion

    >e.g. a bill, an amendment, a motion, etc.

    >Alice subscribes to receive an email alert when a vote about a bill passes.

1. the date on which the motion was proposed

    >January 1, 2013

1. the requirements for the motion to be agreed to

    >two-thirds majority

1. the result of the motion

    >The motion was agreed to.

<h1 id="standard-reuse">2. Standard reuse</h1>

Few specifications exist for motions, and few legislatures publish motions in a machine-readable format. In many, the only specified or recorded motions are those with a single [vote event](specs/vote-event.html). However, a single motion may have multiple vote events; for example, a voice vote followed by a recorded vote. The [inventory of terms](/appendices/terms.html) shows little agreement between specifications.

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
    <tr id="opengov:Motion">
      <td>Motion</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#Motion">opengov:Motion</a></code></td>
      <td>a formal step to introduce a matter for consideration by a group</td>
    </tr>
    <tr id="opengov:organization">
      <td>organization</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#organization">opengov:organization</a></code></td>
      <td>the organization in which the motion is proposed</td>
    </tr>
    <tr id="opengov:context">
      <td>context</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#context">opengov:context</a></code></td>
      <td>the legislative context in which the motion is proposed</td>
    </tr>
    <tr id="dcterms:creator">
      <td>creator</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-creator" title="http://purl.org/dc/terms/creator">dcterms:creator</a></code></td>
      <td>the person who proposed the motion</td>
    </tr>
    <tr id="schema:text">
      <td>text</td>
      <td><code><a href="http://schema.org/text" title="http://schema.org/text">schema:text</a></code></td>
      <td>the transcript or text of the motion</td>
    </tr>
    <tr id="dcterms:subject">
      <td>subject</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-subject" title="http://purl.org/dc/terms/subject">dcterms:subject</a></code></td>
      <td>the subject of the motion</td>
    </tr>
    <tr id="dcterms:date">
      <td>proposal date</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-date" title="http://purl.org/dc/terms/date">dcterms:date</a></code></td>
      <td>the date on which the motion was proposed</td>
    </tr>
    <tr id="opengov:requirements">
      <td>requirements</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#requirements">opengov:requirements</a></code></td>
      <td>the requirements for the motion to be adopted</td>
    </tr>
    <tr id="opengov:result">
      <td>result</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#result">opengov:result</a></code></td>
      <td>the result of the motion</td>
    </tr>
    <tr id="opengov:voteEvent">
      <td>vote event</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#voteEvent">opengov:voteEvent</a></code></td>
      <td>an event at which people vote on the motion</td>
    </tr>
  </tbody>
</table>

The ranges of the `context` and `subject` properties are not specified, as they vary greatly across jurisdictions.

<h1 id="serialization">4. Serialization</h1>

<ul class="nav nav-tabs no-js">
  <li><a href="#motion-schema">JSON Schema</a></li>
  <li><a href="#motion-context">JSON-LD Context</a></li>
  <li class="active"><a href="#motion-json">JSON</a></li>
  <li><a href="#motion-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="motion-schema" data-url="/schemas/motion.json"></div>
  <div class="tab-pane" id="motion-context" data-url="/contexts/motion.jsonld"></div>
  <div class="tab-pane active" id="motion-json" data-url="/examples/motion.json"></div>
  <div class="tab-pane" id="motion-rdf" data-url="/examples/motion.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

## Result

Implementations <em class="rfc2119">may</em> use values from outside this list to reflect the diversity of results.

* `pass`
* `fail`
