---
layout: class
title: Address | The Popolo Project
id: address
---

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Address class should have properties for:

1. address type

    >e.g. "Hill address" or "Constituency office".

1. postal address [*[issue 10]*](https://github.com/opennorth/popolo-spec/issues/10)

    >1 Main Street  
    Anytown, USA

1. telephone numbers by type [*[issue 8]*](https://github.com/opennorth/popolo-spec/issues/8)

    >e.g. a mobile, toll-free or facsimile telephone number.

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
    <tr id="vcard:VCard">
      <td><strong>Address</strong></td>
      <td><code><a href="http://www.w3.org/TR/vcard-rdf/#vcard:VCard" title="http://www.w3.org/2006/vcard/ns#VCard">vcard:VCard</a></code></td>
      <td>A physical location or a mail delivery point</td>
    </tr>
    <tr id="rdf:type">
      <td>address type</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_type" title="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">rdf:type</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>A type of address, e.g. "Constituency office"</td>
    </tr>
    <tr id="vcard:label">
      <td>postal address</td>
      <td><code><a href="http://www.w3.org/TR/vcard-rdf/#vcard:label2" title="http://www.w3.org/2006/vcard/ns#label">vcard:label</a></code></td>
      <td>A postal address</td>
    </tr>
    <tr id="vcard:tel">
      <td>telephone number</td>
      <td><code><a href="http://www.w3.org/TR/vcard-rdf/#vcard:tel2" title="http://www.w3.org/2006/vcard/ns#tel">vcard:tel</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>A telephone number</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. vCard <a href="http://www.w3.org/TR/vcard-rdf/#Param">uses</a> <code>rdf:type</code> to indicate the type of address or telephone number.</p>

<h1 id="serialization">4. Serialization</h1>

**Differences from RDF:** All RDF properties are flattened; `address` and `type` are top-level properties matching `vcard:label` and `rdf:type`. Properties whose names match [telephone type codes](#telephone-types) are used instead of the `vcard:tel` property. Telephone number values <em class="rfc2119">should</em> be in [RFC 3966](http://tools.ietf.org/html/rfc3966) format, without the `tel:` prefix.

<ul class="nav nav-tabs no-js">
  <li><a href="#address-schema">JSON Schema</a></li>
  <li class="active"><a href="#address-json">JSON</a></li>
  <li><a href="#address-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="address-schema" data-url="/schemas/address.json"></div>
  <div class="tab-pane active" id="address-json" data-url="/examples/address.json"></div>
  <div class="tab-pane" id="address-rdf" data-url="/examples/address.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

## Telephone

The following adds `tollfree` and removes `text` from [vCard 4.0](http://tools.ietf.org/html/rfc6350#section-6.4.1)'s code list:

<table id="telephone-types">
  <caption>Telephone types code list</caption>
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
