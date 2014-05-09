---
layout: class
title: Organization | The Popolo Project
id: organization
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Organization</li>
</ul>

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Organization class should have properties for:

1. name

    >Acme Corporation

1. alternate names

    >The Department of Natural Resources operates under the [FIP](http://en.wikipedia.org/wiki/Federal_Identity_Program) title Natural Resources Canada (NRCan).

1. former names

    >In 2003, Philip Morris Companies Inc. changed its name to Altria Group, Inc.

1. identifiers

    >Chrinon Ltd has company number 07444723.

1. classification

    >The Standing Committee on Finance is a committee.

1. parent organization

    >The Standing Committee on Finance is part of the House of Commons.

1. the [geographic area](/specs/area.html) to which the organization is related

    >Parliament of the United Kingdom

1. date of founding

    >To provide historical detail.

1. date of dissolution

    >To determine whether an organization exists, e.g. in order to disable related functionality.

1. image

    >To identify the organization visually.

1. the means of contacting the organization

    >1 Main Street  
    Anytown, USA  
    555-555-0100  
    info@example.com

1. external links

    >http://house.gov/

<h1 id="standard-reuse">2. Standard reuse</h1>

Briefly, the [survey of existing specifications](/appendices/survey.html) concludes that:

* No vocabulary has a property for former names.
* `schema:foundingDate` and `OrganizationEstablishmentDate` are the only properties for founding dates.
* `vcard:deathDate` and `OrganizationTerminationDate` are the only properties for dissolution dates.
* The [Organization ontology](http://www.w3.org/TR/vocab-org/) is the only vocabulary to meet all other [requirements](#use-cases-and-requirements).

This data specification is a [profile of the W3C organization ontology](http://www.w3.org/TR/vocab-org/#conformance).

## 2.1. Cardinality restrictions

Unlike the [Organization ontology](http://www.w3.org/TR/vocab-org/), an organization may have only one classification in this data specification; implementations must choose a unique classification scheme.

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
    <tr id="org:Organization">
      <td><strong>Organization</strong></td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:Organization" title="http://www.w3.org/ns/org#Organization">org:Organization</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>A group with a common purpose or reason for existence that goes beyond the set of people belonging to it, e.g. a social, commercial or political structure</td>
    </tr>
    <tr id="skos:prefLabel">
      <td>name</td>
      <td><code><a href="http://www.w3.org/TR/skos-reference/#labels" title="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></code></td>
      <td>A primary name, e.g. a legally recognized name</td>
    </tr>
    <tr id="skos:altLabel">
      <td>alternate name</td>
      <td><code><a href="http://www.w3.org/TR/skos-reference/#labels" title="http://www.w3.org/2004/02/skos/core#altLabel">skos:altLabel</a></code></td>
      <td>An alternate name, e.g. a trading or colloquial name</td>
    </tr>
    <tr id="opengov:otherName">
      <td>former name</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#otherName">opengov:otherName</a></code></td>
      <td>A former name, e.g. a pre-merger name</td>
    </tr>
    <tr id="org:identifier">
      <td>identifier</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:identifier" title="http://www.w3.org/ns/org#identifier">org:identifier</a></code></td>
      <td>An issued identifier, e.g. a <abbr title="Data Universal Numbering System">DUNS</abbr> number, <abbr title="Global Location Number">GLN</abbr>, etc.</td>
    </tr>
    <tr id="org:classification">
      <td>classification</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:classification" title="http://www.w3.org/ns/org#classification">org:classification</a></code></td>
      <td>An organizational category, e.g. charity, committee, etc.</td>
    </tr>
    <tr id="org:subOrganizationOf">
      <td>parent organization</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:subOrganizationOf" title="http://www.w3.org/ns/org#subOrganizationOf">org:subOrganizationOf</a></code><a href="#note2"><sup>2</sup></a></td>
      <td>The organization that contains this organization</td>
    </tr>
    <tr id="opengov:area">
      <td>geographic area</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#area">opengov:area</a></code></td>
      <td>The geographic area to which the organization is related</td>
    </tr>
    <tr id="schema:foundingDate">
      <td>date of founding</td>
      <td><code><a href="http://schema.org/foundingDate" title="http://schema.org/foundingDate">schema:foundingDate</a></code></td>
      <td>A date of founding</td>
    </tr>
    <tr id="opengov:dissolutionDate">
      <td>date of dissolution</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#dissolutionDate">opengov:dissolutionDate</a></code><a href="#note3"><sup>3</sup></a></td>
      <td>A date of dissolution, termination, expiry, etc.</td>
    </tr>
    <tr id="schema:image">
      <td>image</td>
      <td><code><a href="http://schema.org/image" title="http://schema.org/image">schema:image</a></code></td>
      <td>A URL of an image</td>
    </tr>
    <tr id="opengov:contactDetail">
      <td>contact detail</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#contactDetail">opengov:contactDetail</a></code></td>
      <td>A means of contacting the organization</td>
    </tr>
    <tr id="rdfs:seeAlso">
      <td>external links</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_seealso" title="http://www.w3.org/2000/01/rdf-schema#seeAlso">rdfs:seeAlso</a></code></td>
      <td>A URL to a document about the organization</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. According to <a href="http://www.epimorphics.com/web/wiki/organization-ontology-first-draft">a developer blog</a>, the United Kingdom <a href="http://www.w3.org/TR/vocab-org/#acknowledgements">chose</a> the spelling "organization", despite the common usage of the "s" spelling in British English, because it is the spelling that is acceptable to all versions of English. American English uses a "z", whereas both "z" and "s" spellings are correct in British English. The "z" spelling is preferred by the <abbr title="Oxford English Dictionary">OED</abbr>.</p>
<p class="note" id="note2">2. The Organization ontology defines the inverse property <code>org:hasSubOrganization</code>.</p>
<p class="note" id="note3">3. <code>vcard:deathDate</code> could have been used for date of dissolution, but <code>deathDate</code> is an unusual term for an organization.</p>

<h2 id="classification">3.1. Classification</h2>

The Organization ontology has a section on [organizational classification](organizational-classification). It proposes two strategies for classification: either create subclasses of [Organization](http://www.w3.org/TR/vocab-org/#org:Organization), or use the [`classification`](http://www.w3.org/TR/vocab-org/#org:classification) property. It provides guidance on when to use one or the other strategy:

>If the classification is not intrinsic to the organization but simply some way to group organizations, for example as part of a directory, then `org:classification` should be used. If the classification is a reflection of the intrinsic nature of the organization and affects other properties then the sub-class approach should be used. For example, only charities have charity numbers so it would be better to represent a charity as a sub-class of `org:FormalOrganization` rather than via a taxonomic labelling.

In general, subclasses should only be used if the benefits outweigh the complexity. It is of no use to create the classes `Partnership`, `LimitedCompany`, `UnlimitedCompany`, etc. if all these classes behave the same way in your use case. It is simpler to use the `classification` property in that case.

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The term `name` is used instead of `prefLabel`, to be consistent with the [Person](/specs/person.html) class.
* The former name and alternate name properties are serialized as a single `other_names` property, whose value is an array of [name objects](/specs/#other-name).
* The term `identifiers` is used instead of `identifier` and is serialized as an array of [identifier objects](/specs/#identifier).
* The value of the `classification` property is a string, instead of a `skos:Concept`.
* The term `parent_id`[<sup>4</sup>](#note4) is used instead of `subOrganizationOf`, due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s.
* A new `dissolution_date` term is used for the date of dissolution, for which there is no RDF term.
* The term `links` is used instead of `seeAlso` and is serialized as an array of [link objects](/specs/#link).

<p class="note" id="note4">4. With respect to reuse, <a href="https://github.com/benedikt/mongoid-tree">mongoid-tree</a>, <a href="https://github.com/collectiveidea/awesome_nested_set/tree/master/lib/awesome_nested_set">awesome_nested_set</a> and <a href="https://github.com/amerine/acts_as_tree">acts_as_tree</a> use <code>parent_id</code>.</p>

<ul class="nav nav-tabs no-js">
  <li><a href="#organization-schema">JSON Schema</a></li>
  <li><a href="#organization-context">JSON-LD Context</a></li>
  <li class="active"><a href="#organization-json">JSON</a></li>
  <li><a href="#organization-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="organization-schema" data-url="/schemas/organization.json"></div>
  <div class="tab-pane" id="organization-context" data-url="/contexts/organization.jsonld"></div>
  <div class="tab-pane active" id="organization-json" data-url="/examples/organization.json"></div>
  <div class="tab-pane" id="organization-rdf" data-url="/examples/organization.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

None.
