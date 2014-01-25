---
layout: class
title: Person Name Components | The Popolo Project
id: person
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li><a href="/specs/person.html">Person</a></li>
  <li class="active">Name component</li>
</ul>

This document adds additional properties to the [Person](/specs/person.html) class.

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Person class should have properties for:

1. each component of the name

    >To display an abbreviated name on a mobile device.

1. sort key

    >To sort a list of names.

<h1 id="standard-reuse">2. Standard Reuse</h1>

Many specifications use the same terms for name components, including [<abbr title="Friend of a Friend">FOAF</abbr>](http://xmlns.com/foaf/spec/), [Schema.org](http://schema.org/Person), [RFC 6350 (vCard 4.0)](http://tools.ietf.org/html/rfc6350#section-6.2.2) and [OpenSocial](http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#rfc.section.3.11). FOAF and Schema.org terms are reused, given their breadth of adoption.

The [survey of existing specifications](/appendices/survey.html) found few terms for sort keys; `sortName` was chosen, which is under consideration for FOAF. The [Person Core Vocabulary](http://philarcher.org/isa/person-v1.00.html) adds a [`patronymicName`](http://philarcher.org/isa/person-v1.00.html#person:patronymicName) component:

>Patronymic names are important in some countries. Iceland does not have a concept of family name in the way that many other European countries do. In Bulgaria and Russia, patronymic names are in every day usage.

Additional resources:

* The [<abbr title="World Wide Web Consortium">W3C</abbr>](http://www.w3.org/International/questions/qa-personal-names.en) and [<abbr title="Dublin Core Metadata Initiative">DCMI</abbr>](http://dublincore.org/documents/name-representation/) provide guidance on representing people's names.
* The [<abbr title="Organization for the Advancement of Structured Information Standards">OASIS</abbr>](https://www.oasis-open.org/) [<abbr title="Customer Information Quality">CIQ</abbr> specifications](http://docs.oasis-open.org/ciq/v3.0/prd03/specs/ciq-specs-v3-prd3.html) allow [user-defined name components](http://docs.oasis-open.org/ciq/v3.0/prd03/specs/ciq-specs-v3-prd3.html#_Toc193533217) to maximize flexibility.

## 2.1. Cardinality restrictions

In [RFC 6350 (vCard 4.0)](http://tools.ietf.org/html/rfc6350), each component of a name – family name, given name, additional name, honorific prefix and honorific suffix – can include multiple text values. Other vocabularies, including [<abbr title="Friend of a Friend">FOAF</abbr>](http://xmlns.com/foaf/spec/), do not restrict the cardinality of these properties either. Some, like [OpenSocial](http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#rfc.section.3.11), do. This data specification requires that each component of a name can include one text value only, which itself may contain multiple names.

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
      <td><code><a href="http://schema.org/additionalName" title="http://schema.org/additionalName">schema:additionalName</a></code></td>
      <td>One or more secondary given names</td>
    </tr>
    <tr id="schema:honorificPrefix">
      <td>honorific prefix</td>
      <td><code><a href="http://schema.org/honorificPrefix" title="http://schema.org/honorificPrefix">schema:honorificPrefix</a></code><a href="#note1"><sup>1</sup></a></td>
      <td>One or more honorifics preceding a person's name</td>
    </tr>
    <tr id="schema:honorificSuffix">
      <td>honorific suffix</td>
      <td><code><a href="http://schema.org/honorificSuffix" title="http://schema.org/honorificSuffix">schema:honorificSuffix</a></code></td>
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

<ul class="nav nav-tabs no-js">
  <li><a href="#person-schema">JSON Schema</a></li>
  <li class="active"><a href="#name-component-json">JSON</a></li>
  <li><a href="#name-component-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="person-schema" data-url="/schemas/person.json"></div>
  <div class="tab-pane active" id="name-component-json" data-url="/examples/name-component.json"></div>
  <div class="tab-pane" id="name-component-rdf" data-url="/examples/name-component.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

None.
