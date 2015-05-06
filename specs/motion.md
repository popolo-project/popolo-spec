---
layout: class
title: Motion | Popolo
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

1. the legislative session in which the motion is proposed

    >2nd Session of the 41st Parliament

1. the [person](/specs/person.html) who proposed the motion

    >John Doe

1. the transcript or text of the motion

    >That the House do now proceed to the Orders of the Day.

1. identifier

    >2014/556

1. classification

    >e.g. [adjournment](http://www.parliament.uk/site-information/glossary/adjournment-motion/), [allocation of time](http://www.parliament.uk/site-information/glossary/allocation-of-time-motion/), [business](http://www.parliament.uk/site-information/glossary/business-motion/), [carry-over](http://www.parliament.uk/site-information/glossary/carry-over-motions-bills/),  [closure](http://www.parliament.uk/site-information/glossary/closure-motion/), [dilatory](http://www.parliament.uk/site-information/glossary/dilatory-motion/), [programme](http://www.parliament.uk/site-information/glossary/programme-motion/), etc.

    >Bob distinguishes routine from non-routine motions.

1. the date on which the motion was proposed

    >January 1, 2013

1. the requirement for the motion to be agreed to

    >two-thirds majority

1. the result of the motion

    >The motion was agreed to.

<h1 id="standard-reuse">2. Standard reuse</h1>

Few specifications exist for motions, and few legislatures publish motions in a machine-readable format. In many, the only specified or recorded motions are those with a single [vote event](/specs/vote-event.html). However, a single motion may have multiple vote events; for example, a voice vote followed by a recorded vote. Dublin Core, Schema.org, and Parliamentary Metadata Language terms are retained from the [inventory of terms](/appendices/terms.html#Motion).

## 2.1. Range restrictions

Either a person or an organization can create a [CreativeWork](http://schema.org/CreativeWork). A Motion is a subclass of CreativeWork, and only a person can create a Motion.

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
      <td><code title="http://www.w3.org/ns/opengov#Motion">opengov:Motion</code></td>
      <td>A formal step to introduce a matter for consideration by an organization</td>
    </tr>
    <tr id="schema:publisher">
      <td>organization</td>
      <td><code><a href="http://schema.org/publisher" title="http://schema.org/publisher">schema:publisher</a></code></td>
      <td>The organization in which the motion is proposed</td>
    </tr>
    <tr id="opengov:legislativeSession">
      <td>legislative session</td>
      <td><code title="http://www.w3.org/ns/opengov#legislativeSession">opengov:legislativeSession</code></td>
      <td>The legislative session in which the motion is proposed</td>
    </tr>
    <tr id="schema:creator">
      <td>creator</td>
      <td><code><a href="http://schema.org/creator" title="http://schema.org/creator">schema:creator</a></code></td>
      <td>The person who proposed the motion</td>
    </tr>
    <tr id="schema:text">
      <td>text</td>
      <td><code><a href="http://schema.org/text" title="http://schema.org/text">schema:text</a></code></td>
      <td>The transcript or text of the motion</td>
    </tr>
    <tr id="dcterms:identifier">
      <td>identifier</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-identifier" title="http://purl.org/dc/terms/identifier">dcterms:identifier</a></code></td>
      <td>An issued identifier</td>
    </tr>
    <tr id="schema:additionalType">
      <td>classification</td>
      <td><code><a href="http://schema.org/additionalType" title="http://schema.org/additionalType">schema:additionalType</a></code></td>
      <td>A motion category, e.g. adjournment</td>
    </tr>
    <tr id="dcterms:dateSubmitted">
      <td>proposal date</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-dateSubmitted" title="http://purl.org/dc/terms/dateSubmitted">dcterms:dateSubmitted</a></code></td>
      <td>The date on which the motion was proposed</td>
    </tr>
    <tr id="opengov:requirement">
      <td>requirement</td>
      <td><code title="http://www.w3.org/ns/opengov#requirement">opengov:requirement</code></td>
      <td>The requirement for the motion to be adopted</td>
    </tr>
    <tr id="opengov:result">
      <td>result</td>
      <td><code title="http://www.w3.org/ns/opengov#result">opengov:result</code></td>
      <td>The result of the motion</td>
    </tr>
    <tr id="opengov:voteEvent">
      <td>vote event</td>
      <td><code title="http://www.w3.org/ns/opengov#voteEvent">opengov:voteEvent</code></td>
      <td>An event at which people vote on the motion</td>
    </tr>
  </tbody>
</table>

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The term `organization` is used instead of `publisher`, to be consistent with the [Membership](/specs/membership.html) class.
* The term `classification` is used instead of `additionalType`, to be consistent with the [Organization](/specs/organization.html) class.
* The value of the `classification` property is a string, instead of a `skos:Concept`.
* The term `date` is used instead of `dateSubmitted`, for clarity.

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

Implementations <em class="rfc2119">may</em> use values from outside this list.

* `pass`
* `fail`
