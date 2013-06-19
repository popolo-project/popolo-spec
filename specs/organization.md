---
layout: class
title: Organization | The Popolo Project
id: organization
---

<h1 id="use-cases-and-requirements">1. Use Cases &amp; Requirements</h1>

The Organization class should have properties for:

1. name

    >Acme Corporation

1. former names

    >In 2003, Philip Morris Companies Inc. changed its name to Altria Group, Inc.

1. alternate names

    >The Department of Natural Resources operates under the [FIP](http://en.wikipedia.org/wiki/Federal_Identity_Program) title Natural Resources Canada (NRCan).

1. identifiers

    >Chrinon Ltd has company number 07444723.

1. classification

    >The Standing Committee on Finance is a committee.

1. parent organization

    >The Standing Committee on Finance is part of the House of Commons.

1. date of founding [*[issue 9]*](https://github.com/opennorth/popolo-spec/issues/9)

    >To provide historical detail.

1. date of dissolution [*[issue 9]*](https://github.com/opennorth/popolo-spec/issues/9)

    >To determine whether an organization exists, e.g. in order to disable related functionality.

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
    <tr id="org:Organization">
      <td><strong>Organization</strong></td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:Organization" title="http://www.w3.org/ns/org#Organization">org:Organization</a></code></td>
      <td>A group with a common purpose or reason for existence that goes beyond the set of people belonging to it, e.g. a social, commercial or political structure</td>
    </tr>
    <tr id="skos:prefLabel1">
      <td>name</td>
      <td><code><a href="http://www.w3.org/TR/skos-reference/#labels" title="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></code></td>
      <td>A primary name, e.g. a legally recognized name</td>
    </tr>
    <tr id="skos:altLabel">
      <td>alternate name</td>
      <td><code><a href="http://www.w3.org/TR/skos-reference/#labels" title="http://www.w3.org/2004/02/skos/core#altLabel">skos:altLabel</a></code></td>
      <td>An alternate name, e.g. a trading or colloquial name</td>
    </tr>
    <tr>
      <td>former name</td>
      <td></td>
      <td>A former name, e.g. a pre-merger name</td>
    </tr>
    <tr id="org:identifier">
      <td>identifier</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:identifier" title="http://www.w3.org/ns/org#identifier">org:identifier</a></code></td>
      <td>An issued identifier, e.g. a <abbr title="Data Universal Numbering System">DUNS</abbr> number, <abbr title="Global Location Number">GLN</abbr>, <abbr title="Taxpayer Identification Number">TIN</abbr>, etc.</td>
    </tr>
    <tr id="org:classification">
      <td>classification</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:classification" title="http://www.w3.org/ns/org#classification">org:classification</a></code></td>
      <td>An organizational category, e.g. charity, committee, etc.</td>
    </tr>
    <tr id="org:subOrganizationOf">
      <td>parent organization</td>
      <td><code><a href="http://www.w3.org/TR/vocab-org/#org:subOrganizationOf" title="http://www.w3.org/ns/org#subOrganizationOf">org:subOrganizationOf</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>An organization that contains this organization</td>
    </tr>
    <tr id="schema:foundingDate">
      <td>date of founding</td>
      <td><code><a href="http://schema.org/Organization" title="http://schema.org/foundingDate">schema:foundingDate</a></code></td>
      <td>A date of founding</td>
    </tr>
    <tr>
      <td>date of dissolution</td>
      <td><a href="#note2"><sup>2</sup></a></td>
      <td>A date of dissolution, termination, withdrawal, expiry, etc.</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. ORG defines the inverse properties <code>org:hasSubOrganization</code>, <code>org:holds</code>, <code>org:hasPost</code> and <code>org:hasMembership</code>.</p>
<p class="note" id="note2">2. <code>vcard:deathDate</code> could have been used for date of dissolution, but <code>deathDate</code> is an unusual term for an organization.</p>

<h1 id="serialization">4. Serialization</h1>

**Differences from RDF:** The terms `name` and `other_names` are used instead of `prefLabel` and `altLabel`, to be consistent with the Person class. A new `scheme`[<sup>3</sup>](#note3) property indicates an identifier's scheme, because JSON values do not have [user-defined datatypes](http://www.w3.org/TR/swbp-xsch-datatypes/) like RDF. The term `parent_id`[<sup>4</sup>](#note4) is used instead of `subOrganizationOf`.

<p class="note" id="note3">3. With respect to reuse, ORG, SKOS and XBRL use the word <code>scheme</code> to refer to this value.</p>
<p class="note" id="note4">4. With respect to reuse, <a href="https://github.com/benedikt/mongoid-tree">mongoid-tree</a>, <a href="https://github.com/collectiveidea/awesome_nested_set/tree/master/lib/awesome_nested_set">awesome_nested_set</a> and <a href="https://github.com/amerine/acts_as_tree">acts_as_tree</a> use <code>parent_id</code>.</p>

<ul class="nav nav-tabs">
  <li><a href="#organization-schema">JSON Schema</a></li>
  <li class="active"><a href="#organization-json">JSON</a></li>
  <li><a href="#organization-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="organization-schema" data-url="/schemas/organization.json"></div>
  <div class="tab-pane active" id="organization-json" data-url="/examples/organization.json"></div>
  <div class="tab-pane" id="organization-rdf" data-url="/examples/organization.ttl"></div>
</div>
