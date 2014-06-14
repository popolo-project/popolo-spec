---
layout: class
title: Area | The Popolo Project
id: area
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Area</li>
</ul>

An area is a geographic area whose geometry may change over time.

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

1. name

    >Boston Ward 1

1. identifier

    >`ocd-division/country:us/state:ma/place:boston/ward:1`

1. classification

    >ward

1. parent area

    >Boston

1. geometry

    >e.g. [GeoJSON](http://geojson.org/), [KML](https://developers.google.com/kml/documentation/), [GML](http://en.wikipedia.org/wiki/Geography_Markup_Language)

<h1 id="standard-reuse">2. Standard reuse</h1>

Schema.org, GeoNames, and ISA Programme Location Core Vocabulary terms are retained from the [inventory of terms](/appendices/terms.html#Area).

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
    <tr id="gn:Feature">
      <td>Area</td>
      <td><code><a href="http://www.geonames.org/ontology/documentation.html" title="http://www.geonames.org/ontology#Feature">gn:Feature</a></code></td>
      <td>A geographic area whose geometry may change over time</td>
    </tr>
    <tr id="schema:name">
      <td>name</td>
      <td><code><a href="http://schema.org/name" title="http://schema.org/name">schema:name</a></code></td>
      <td>A primary name</td>
    </tr>
    <tr id="dcterms:identifier">
      <td>identifier</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-identifier" title="http://purl.org/dc/terms/identifier">dcterms:identifier</a></code></td>
      <td>An issued identifier, e.g. an <a href="https://github.com/opencivicdata/ocd-division-ids/#readme">Open Civic Data Division Identifier</a></td>
    </tr>
    <tr id="gn:featureCode">
      <td>classification</td>
      <td><code><a href="http://www.geonames.org/ontology/documentation.html" title="http://www.geonames.org/ontology#featureCode">gn:featureCode</a></code></td>
      <td>An area category, e.g. city</td>
    </tr>
    <tr id="schema:containedIn">
      <td>parent area</td>
      <td><code><a href="http://schema.org/containedIn" title="http://schema.org/containedIn">schema:containedIn</a></code></td>
      <td>The area that contains this area</td>
    </tr>
    <tr id="locn:geometry">
      <td>geometry</td>
      <td><code><a href="http://www.w3.org/ns/locn#locn:geometry" title="http://www.w3.org/ns/locn#geometry">locn:geometry</a></code></td>
      <td>A geometry</td>
    </tr>
  </tbody>
</table>

The use of <a href="https://github.com/opencivicdata/ocd-division-ids/#readme">Open Civic Data Division Identifiers</a> is <em class="rfc2119">recommended</em>. The value of the `geometry` property <em class="rfc2119">may</em> be any geometry encoding.

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The term `identifier` is used instead of `notation`, to be consistent with [identifier objects](/specs/#identifier).
* The term `classification` is used instead of `featureCode`, to be consistent with the [Organization](/specs/organization.html) class.
* The value of the `classification` property is a string, instead of a `gn:Code`.
* The term `parent_id` is used instead of `containedIn`, to be consistent with the [Organization](/specs/organization.html) class.

<ul class="nav nav-tabs no-js">
  <li><a href="#area-schema">JSON Schema</a></li>
  <li><a href="#area-context">JSON-LD Context</a></li>
  <li class="active"><a href="#area-json">JSON</a></li>
  <li><a href="#area-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="area-schema" data-url="/schemas/area.json"></div>
  <div class="tab-pane" id="area-context" data-url="/contexts/area.jsonld"></div>
  <div class="tab-pane active" id="area-json" data-url="/examples/area.json"></div>
  <div class="tab-pane" id="area-rdf" data-url="/examples/area.ttl"></div>
</div>
