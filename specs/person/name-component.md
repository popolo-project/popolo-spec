---
layout: class
title: Person Name Components | The Popolo Project
id: name-component
---

<h1 id="use-cases-and-requirements">1. Use Cases &amp; Requirements</h1>

The Person class should have properties for:

1. each component of the name

    >To display an abbreviated name on a mobile device.

1. sort key

    >To sort a list of names.

<h1 id="standard-reuse">2. Standard Reuse</h1>

* The [<abbr title="World Wide Web Consortium">W3C</abbr>](http://www.w3.org/International/questions/qa-personal-names.en) and [<abbr title="Dublin Core Metadata Initiative">DCMI</abbr>](http://dublincore.org/documents/name-representation/) provide guidance on representing people's names.
* The [<abbr title="Organization for the Advancement of Structured Information Standards">OASIS</abbr>](https://www.oasis-open.org/) [<abbr title="Customer Information Quality">CIQ</abbr> specifications](http://docs.oasis-open.org/ciq/v3.0/prd03/specs/ciq-specs-v3-prd3.html) allow [user-defined name components](http://docs.oasis-open.org/ciq/v3.0/prd03/specs/ciq-specs-v3-prd3.html#_Toc193533217) to satisfy requirements.

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
    <tr id="foaf:familyName">
      <td>family name</td>
      <td><code><a href="http://xmlns.com/foaf/spec/#term_familyName" title="http://xmlns.com/foaf/0.1/familyName">foaf:familyName</a></code></td>
      <td>One or more family names</td>
    </tr>
    <tr id="foaf:givenName">
      <td>given name</td>
      <td><code><a href="http://xmlns.com/foaf/spec/#term_givenName" title="http://xmlns.com/foaf/0.1/givenName">foaf:givenName</a></code></td>
      <td>One or more primary given names</td>
    </tr>
    <tr id="schema:additionalName">
      <td>additional name</td>
      <td><code><a href="http://schema.org/Person" title="http://schema.org/additionalName">schema:additionalName</a></code></td>
      <td>One or more secondary given names</td>
    </tr>
    <tr id="schema:honorificPrefix">
      <td>honorific prefix</td>
      <td><code><a href="http://schema.org/Person" title="http://schema.org/honorificPrefix">schema:honorificPrefix</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>One or more honorifics preceding a person's name</td>
    </tr>
    <tr id="schema:honorificSuffix">
      <td>honorific suffix</td>
      <td><code><a href="http://schema.org/Person" title="http://schema.org/honorificSuffix">schema:honorificSuffix</a></code></td>
      <td>One or more honorifics following a person's name</td>
    </tr>
    <tr id="person:patronymicName">
      <td>patronymic name</td>
      <td><code><a href="http://philarcher.org/isa/person-v1.00.html#person:patronymicName" title="http://www.w3.org/ns/person#patronymicName">person:patronymicName</a></code></td>
      <td>One or more patronymic names</td>
    </tr>
    <tr id="con:sortName">
      <td>sort name</td>
      <td><code><a href="http://www.w3.org/2000/10/swap/pim/contact#sortName" title="http://www.w3.org/2000/10/swap/pim/contact#sortName">con:sortName</a></code><a href="#note2"><sup>2</sup></a></td>
      <td>A name to use in an lexicographically ordered list</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. <code>schema:honorificPrefix</code> is used instead of <code>foaf:title</code>, because <code>foaf:title</code> is a <a href="http://xmlns.com/foaf/spec/#term_title">candidate for deprecation</a>.</p>
<p class="note" id="note2">2. FOAF <a href="http://wiki.foaf-project.org/z/index.php?title=NamesInFoaf">proposes</a> <code>foaf:sortName</code>. vCard <a href="http://tools.ietf.org/html/rfc6350#section-5.9">uses</a> <code>SORT-AS</code>. <code>con:sortName</code> seems to be the only existing RDF property.</p>

<h1 id="serialization">4. Serialization</h1>

<ul class="nav nav-tabs">
  <li><a href="#person-schema">JSON Schema</a></li>
  <li class="active"><a href="#person-json">JSON</a></li>
  <li><a href="#person-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="person-schema" data-url="/schemas/person.json"></div>
  <div class="tab-pane active" id="person-json" data-url="/examples/person.json"></div>
  <div class="tab-pane" id="person-rdf" data-url="/examples/person.ttl"></div>
</div>
