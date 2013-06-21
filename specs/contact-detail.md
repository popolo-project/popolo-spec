---
layout: class
title: Contact Detail | The Popolo Project
id: contact-detail
---

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

It is impossible to predict the means by which people will be contacted: from mail and telephones to email and <abbr title="Voice over Internet Protocol">VoIP</abbr>. Some contact details are related to physical locations, like an office's postal address and fax number, while others are not, like a person's mobile number and email address. To support the widest variety of mediums in the widest range of contexts, the ContactDetail class should allow user-defined contact details.

<div class="well well-example">
  <p>A civil society organization has the phone number of a legislator; however, it doesn't know whether it is the capitol office number, the constituency office number or a mobile number. A suitable specification should be able to handle data at varying levels of precision.</p>
</div>

The ContactDetail class should have properties for:

1. label

    >e.g. "Hill address" or "Mobile number".

1. type of medium

    >e.g. "email" or "fax".

1. value

    >e.g. a telephone number, email address, postal address, Twitter account, etc.

1. note

    >e.g. for grouping contact details by physical location.

<h1 id="standard-reuse">2. Standard reuse</h1>

The [survey of existing specifications](/appendices/survey.html) found that [RFC 6350 (vCard 4.0)](http://tools.ietf.org/html/rfc6350), with its RDF mappings, is the only vocabulary to meet all [requirements](#use-cases-and-requirements). Few specification allow for the ad hoc definition of contact details. Ultimately, only the data model – consisting of RDF, RDF Schema, and <abbr title="Simple Knowledge Organization System">SKOS</abbr> terms – was reused.

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
    <tr>
      <td><strong>ContactDetail</strong></td>
      <td>N/A</td>
      <td>A means of contacting an entity</td>
    </tr>
    <tr id="rdfs:label">
      <td>label</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_label" title="http://www.w3.org/2000/01/rdf-schema#label">rdfs:label</a></code></td>
      <td>A human-readable label for the contact detail</td>
    </tr>
    <tr id="rdf:type">
      <td>type of medium</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_type" title="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">rdf:type</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>A type of medium, e.g. "fax" or "email"</td>
    </tr>
    <tr id="rdf:value">
      <td>value</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_value" title="http://www.w3.org/1999/02/22-rdf-syntax-ns#value">rdf:value</a></code></td>
      <td>A value, e.g. a phone number or email address</td>
    </tr>
    <tr id="skos:note">
      <td>note</td>
      <td><code><a href="http://www.w3.org/TR/skos-reference/#notes" title="http://www.w3.org/1999/02/22-rdf-syntax-ns#value">skos:note</a></code></td>
      <td>A note, e.g. for grouping contact details by physical location</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. The <a href="http://www.w3.org/Submission/vcard-rdf/#Param">W3C Member Submission on Representing vCard Objects in RDF</a> and the <a href="http://www.w3.org/TR/vcard-rdf/#Code_Sets">vCard Ontology</a> use <code>rdf:type</code> to indicate the type of address or telephone number.</p>

<h1 id="serialization">4. Serialization</h1>

**Differences from RDF:** Telephone number values <em class="rfc2119">should</em> be in [RFC 3966](http://tools.ietf.org/html/rfc3966) format, without the `tel:` prefix.

<ul class="nav nav-tabs no-js">
  <li><a href="#contact-detail-schema">JSON Schema</a></li>
  <li class="active"><a href="#contact-detail-json">JSON</a></li>
  <li><a href="#contact-detail-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="contact-detail-schema" data-url="/schemas/contact_detail.json"></div>
  <div class="tab-pane active" id="contact-detail-json" data-url="/examples/contact_detail.json"></div>
  <div class="tab-pane" id="contact-detail-rdf" data-url="/examples/contact_detail.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

## Type of medium

The following adds `tollfree` and removes `text` from [RFC 6350 (vCard 4.0)](http://tools.ietf.org/html/rfc6350#section-6.4.1)'s code list. Implementations <em class="rfc2119">may</em> use values from outside this list.

<table id="medium-types">
  <caption>Type of medium code list</caption>
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>voice</code></td>
      <td>A voice telephone number</td>
    </tr>
    <tr>
      <td><code>fax</code></td>
      <td>A facsimile telephone number</td>
    </tr>
    <tr>
      <td><code>cell</code></td>
      <td>A mobile telephone number</td>
    </tr>
    <tr>
      <td><code>tollfree</code></td>
      <td>A toll-free telephone number</td>
    </tr>
    <tr>
      <td><code>video</code></td>
      <td>A video conferencing telephone number</td>
    </tr>
    <tr>
      <td><code>pager</code></td>
      <td>A paging device telephone number</td>
    </tr>
    <tr>
      <td><code>textphone</code></td>
      <td>A telecommunication device for people with hearing or speech difficulties</td>
    </tr>
  </tbody>
</table>
