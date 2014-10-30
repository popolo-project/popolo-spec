---
layout: class
title: Person | The Popolo Project
id: person
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Person</li>
</ul>

Name components (e.g. family name and given name) have been split into [another document](/specs/person/name-component.html).

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Person class should have properties for:

1. name

    >Mr. John Q. Public, Esq.

1. alternate names

    >To find a person by a pseudonym or nickname, e.g. "Mark Twain" for Samuel Clemens.

1. former names

    >If a councillor changes name, earlier council transcripts should continue to use the former name.

1. identifiers

    >Eric Cantor has the THOMAS identifier 01674.

1. preferred email address

    >To contact a representative via email.

1. gender

    >To determine personal pronouns, e.g. "John Doe will be at <u>his</u> constituency office next week."

1. date of birth

    >To provide biographical detail, or to report a person's age.

1. date of death

    >To determine whether a person is alive or dead, e.g. in order to disable the deceased's contact form.

1. [head shot](http://en.wikipedia.org/wiki/Head_shot)

    >To identify the person visually.

1. one-line biography

    >To provide a brief biography.

1. biography

    >To provide a long form biography.

1. national identity

    >Nine members of the [House of Peoples](http://en.wikipedia.org/wiki/House_of_Peoples_of_Bosnia_and_Herzegovina) shall comprise a quorum, provided that at least three Bosniak, three Croat, and three Serb delegates are present.

1. the means of contacting the person

    >1 Main Street  
    Anytown, USA  
    555-555-0100  
    john@example.com

1. external links

    >A representative's Wikipedia page or official website.

<h1 id="standard-reuse">2. Standard reuse</h1>

Briefly, the [survey of existing specifications](/appendices/survey.html) concludes that:

* Only `person:Person` fits the data specification's [definition of a person](/specs/#scope).
* `person:birthName` and `PersonMaidenName` are the only properties for former names.
* Only `facebook:bio` describes biographies without importing the BIO vocabulary.

With respect to the choice of terms:

* Many specifications use the same terms, including [<abbr title="Friend of a Friend">FOAF</abbr>](http://xmlns.com/foaf/spec/), [Schema.org](http://schema.org/Person) and [RFC 6350 (vCard 4.0)](http://tools.ietf.org/html/rfc6350#section-6.2.2). FOAF and Schema.org terms are reused, given their breadth of adoption.
* `dcterms:alternative` can be used for alternate names; vCard 4.0 instead can set a [`PREF`](http://tools.ietf.org/html/rfc6350#section-5.3) parameter on names, to make one name preferred.
* `foaf:nick` is frequently used for abbreviations, including <abbr title="Internet Relay Chat">IRC</abbr> nicknames, and is therefore used for issued identifiers.

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
    <tr id="person:Person">
      <td><strong>Person</strong></td>
      <td><code><a href="http://www.w3.org/ns/person#Person" title="http://www.w3.org/ns/person#Person">person:Person</a></code></td>
      <td>A real person, alive or dead</td>
    </tr>
    <tr id="foaf:name">
      <td>name</td>
      <td><code><a href="http://xmlns.com/foaf/spec/#term_name" title="http://xmlns.com/foaf/0.1/name">foaf:name</a></code></td>
      <td>A person's preferred full name</td>
    </tr>
    <tr id="dcterms:alternative">
      <td>alternate name</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-alternative" title="http://purl.org/dc/terms/alternative">dcterms:alternative</a></code></td>
      <td>An alternate name, such as a pseudonym</td>
    </tr>
    <tr id="opengov:otherName">
      <td>former name</td>
      <td><code><a href="#" title="http://www.w3.org/ns/opengov#otherName">opengov:otherName</a></code></td>
      <td>A former name, such as a maiden name</td>
    </tr>
    <tr id="foaf:nick">
      <td>identifier</td>
      <td><code><a href="http://xmlns.com/foaf/spec/#term_nick" title="http://xmlns.com/foaf/0.1/nick">foaf:nick</a></code></td>
      <td>An issued identifier, e.g. a Library of Congress Name Authority File number</td>
    </tr>
    <tr id="schema:email">
      <td>email address<a href="#note1"><sup>1</sup></a></td>
      <td><code><a href="http://schema.org/email" title="http://schema.org/email">schema:email</a></code><a href="#note2"><sup>2</sup></a></td>
      <td>A preferred email address</td>
    </tr>
    <tr id="foaf:gender">
      <td>gender</td>
      <td><code><a href="http://xmlns.com/foaf/spec/#term_gender" title="http://xmlns.com/foaf/0.1/gender">foaf:gender</a></code></td>
      <td>A gender</td>
    </tr>
    <tr id="schema:birthDate">
      <td>date of birth</td>
      <td><code><a href="http://schema.org/birthDate" title="http://schema.org/birthDate">schema:birthDate</a></code><a href="#note3"><sup>3</sup></a></td>
      <td>A date of birth</td>
    </tr>
    <tr id="schema:deathDate">
      <td>date of death</td>
      <td><code><a href="http://schema.org/deathDate" title="http://schema.org/deathDate">schema:deathDate</a></code></td>
      <td>A date of death</td>
    </tr>
    <tr id="schema:image">
      <td>head shot</td>
      <td><code><a href="http://schema.org/image" title="http://schema.org/image">schema:image</a></code><a href="#note4"><sup>4</sup></a></td>
      <td>A URL of a head shot</td>
    </tr>
    <tr id="bio:olb">
      <td>one-line biography</td>
      <td><code><a href="http://vocab.org/bio/0.1/olb.html" title="http://purl.org/vocab/bio/0.1/olb">bio:olb</a></code></td>
      <td>A one-line account of a person's life</td>
    </tr>
    <tr id="bio:biography">
      <td>biography</td>
      <td><code><a href="http://vocab.org/bio/0.1/biography.html" title="http://purl.org/vocab/bio/0.1/biography">bio:biography</a></code></td>
      <td>An extended account of a person's life</td>
    </tr>
    <tr id="opengov:nationalIdentity">
      <td>national identity</td>
      <td><code><a href="http://www.w3.org/ns/opengov#nationalIdentity" title="http://www.w3.org/ns/opengov#nationalIdentity">opengov:nationalIdentity</a></code></td>
      <td>A national identity</td>
    </tr>
    <tr id="opengov:contactDetail">
      <td>contact detail</td>
      <td><code><a href="http://www.w3.org/ns/opengov#contactDetail" title="http://www.w3.org/ns/opengov#contactDetail">opengov:contactDetail</a></code></td>
      <td>A means of contacting the person</td>
    </tr>
    <tr id="rdfs:seeAlso">
      <td>external links</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_seealso" title="http://www.w3.org/2000/01/rdf-schema#seeAlso">rdfs:seeAlso</a></code></td>
      <td>A URL to a document about the person</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. Add additional email addresses as contact details, using the <a href="/specs/contact-detail.html">ContactDetail</a> class.</p>
<p class="note" id="note2">2. <code>schema:email</code> is used instead of <code>foaf:mbox</code>, because <code>email</code> is a more familiar term than <code>mbox</code>.</p>
<p class="note" id="note3">3. <code>schema:birthDate</code> is used instead of <code>foaf:birthday</code> to match <code>schema:deathDate</code>, for which FOAF has no property.</p>
<p class="note" id="note4">4. <code>schema:image</code> is used instead of <code>foaf:img</code>, because abbreviations like <code>img</code> are avoided.</p>

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The former name and alternate name properties are serialized as a single `other_names` property, whose value is an array of [name objects](/specs/#other-name).
* The term `identifiers` is used instead of `nick` and is serialized as an array of [identifier objects](/specs/#identifier).
* The term `summary`[<sup>5</sup>](#note5) is used instead of `olb`, because abbreviations are avoided.
* The term `links` is used instead of `seeAlso` and is serialized as an array of [link objects](/specs/#link).

<p class="note" id="note5">5. With respect to reuse, <a href="http://drupal.org/">Drupal</a> uses the term <code>summary</code> to describe a brief version of a long text.</p>

<ul class="nav nav-tabs no-js">
  <li><a href="#person-schema">JSON Schema</a></li>
  <li><a href="#person-context">JSON-LD Context</a></li>
  <li class="active"><a href="#person-json">JSON</a></li>
  <li><a href="#person-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="person-schema" data-url="/schemas/person.json"></div>
  <div class="tab-pane" id="person-context" data-url="/contexts/person.jsonld"></div>
  <div class="tab-pane active" id="person-json" data-url="/examples/person.json"></div>
  <div class="tab-pane" id="person-rdf" data-url="/examples/person.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

## Gender

The following is a subset of [vCard 4.0](http://tools.ietf.org/html/rfc6350#section-6.2.7)'s code list. Implementations <em class="rfc2119">may</em> use values from outside this list to reflect the diversity of gender identities.

* `male`
* `female`
