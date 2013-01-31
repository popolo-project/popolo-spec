---
layout: data
title: Data Standard
id: data
---
**<abbr title="too long, didn't read">tl;dr</abbr> Read [this part of the requirements](#relations) then skip to the [serialization](#serialization) and [conformance](#conformance) sections**

<h1 id="scope">1. Scope</h1>

The data standard's initial scope is to describe the entities below and the relations between them:

<dl>
  <dt>Person</dt>
  <dd>A real <a href="http://en.wikipedia.org/wiki/Person">person</a>, alive or dead</a></dd>
  <dt>Organization</dt>
  <dd>A group with a common purpose or reason for existence that goes beyond the set of people belonging to it, e.g. a social, commercial or political structure.</a></dd>
  <dt>Address</dt>
  <dd>A physical location or a mail delivery point</dd>
  <dt>Post</dt>
  <dd>A position in an organization that exists independently of the person holding it</dd>
  <dt>Membership</dt>
  <dd>A relationship between a person and an organization</dd>
  <!--dt>Area</dt>
  <dd>A bounded area, like an administrative boundary</dd-->
</dl>

The data standard will initially define <abbr title="JavaScript Object Notation">JSON</abbr>, <abbr title="Resource Description Framework">RDF</abbr> and MongoDB serializations.

<h1 id="use-cases-and-requirements">2. Use Cases &amp; Requirements</h1>

The data standard is designed primarily for open government use cases, though other use cases are supported. The data standard defines classes and properties to fulfill the requirements below.

1. Allow the use of imprecise dates [*[7]*](https://github.com/opennorth/popolo-standard/issues/7).

    >Shakespeare was born in April 1564.

1. Have a permanent, unique identifier for each instance of each class [*[6]*](https://github.com/opennorth/popolo-standard/issues/6).

    >e.g. a URL, an integer or a hex string.

<h2 id="Person">2.1. Person</h2>

The Person class should have properties for:

1. name

    >Mr. John Q. Public, Esq.

1. each component of the name (family names, given names, additional names, prefixes and suffixes)

    >To sort a list of representatives by family name, or to display an abbreviated name on a mobile device.

1. former names

    >If a councillor changes name, earlier council transcripts should continue to use the former name.

1. alternate names

    >To find a person by a pseudonym or nickname, e.g. "Mark Twain" for Samuel Clemens.

1. email address [*[5]*](https://github.com/opennorth/popolo-standard/issues/5)

    >To contact representatives via email.

1. gender [*[3]*](https://github.com/opennorth/popolo-standard/issues/3)

    >To determine personal pronouns, e.g. "John Doe will be at <u>his</u> constituency office next week."

1. date of death

    >To determine whether a person is alive or dead, e.g. in order to disable the deceased's contact form.

1. date of birth

    >To provide biographical detail, or to report a person's age.

1. [head shot](http://en.wikipedia.org/wiki/Head_shot)

    >To identify the person visually.

1. one-line biography

    >To provide a brief biography.

1. biography

    >To provide a long form biography.

1. external links

    >A representative's Twitter account, Wikipedia page, or another source of information.

<h2 id="Organization">2.2. Organization</h2>

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

1. date of dissolution [*[9]*](https://github.com/opennorth/popolo-standard/issues/9)

    >To determine whether an organization exists, e.g. in order to disable related functionality.

1. date of founding [*[9]*](https://github.com/opennorth/popolo-standard/issues/9)

    >To provide historical detail.

<h2 id="address">2.3. Address</h2>

The Address class should have properties for:

1. address type

    >e.g. "Hill address" or "Constituency office".

1. postal address [*[10]*](https://github.com/opennorth/popolo-standard/issues/10)

    >1 Main Street<br>
    Anytown, USA

1. telephone numbers by type [*[8]*](https://github.com/opennorth/popolo-standard/issues/8)

    >e.g. a mobile, toll-free or facsimile telephone number.

<!--
<h2 id="Area">2.X. Area</h2>

The Area class should have properties for:

1. name

    >Canada

1. parent area

    >Ontario is part of Canada.
-->

<h2 id="relations">2.4. Relations</h2>

[No one size fits all](http://www.w3.org/TR/vocab-org/#reporting_structure) in representing the relationship between people and organizations. In some cases, a simple binary relation is enough, e.g. a `memberOf` property that links a person to an organization. In other cases, a complex [n-ary relation](http://www.w3.org/TR/swbp-n-aryRelations/) is required, e.g. to describe the duration of the person's membership; in such cases, we create a new class to represent the relation, e.g. a Membership class, and attach properties like duration to it to describe the relationship between the person and the organization.

In some cases, it is relevant to represent the organizational structure independently of the people within that structure; for example, it is relevant to represent the position of the Member of Parliament for Avalon even when no one holds that position. A *Post* is such a position that exists independently of the person holding it.

A Post should not be confused with a *Role*, which describes a function that a person can fulfill. For example, people in different organizations can all fulfill the Role of CEO, but only one person can hold the Post of CEO at Apple Inc. Indeed, the Post of the MP for Avalon could be described as having the Role of MP.

The Membership and Post classes can't be merged. John Doe is an MP in the House of Commons. If using the Membership class to represent this relationship, then when John Doe leaves office, we would destroy the Membership instance connecting John Doe to the House of Commons – or set an `endDate` property to flag the Membership as historical. If using the Post class, then when John Doe leaves office, we would unset a `heldBy` property on the Post instance, which was previously set to John Doe[<sup>1</sup>](#note1). The Post would remain.

Now let John Doe be a member of the XYZ Party. It only makes sense to use the Membership class. If John Doe leaves the party, the instance used to describe his relationship to the party should not remain; the instance should either be destroyed or archived.

Given that a Membership and a Post behave differently in the same situation, like a person leaving office, and given that only one or the other behavior is appropriate in some cases, like party membership, a single class cannot express both Membership- and Post-style behaviors.

Some use cases may therefore require both Post and Membership classes to satisfy their requirements.

The Post class should have properties for:

* the person who holds the post
* the organization in which the post is held
* the role that the holder of the post fulfills

The Membership class should have properties for:

* the person who is a party to the relationship
* the organization that is a party to the relationship
* the role that the person fulfills in the organization
* the time interval over which the relationship exists

In both cases, the `role` property serves as the title of the Post or Membership.

<p class="note" id="note1">1. A Post instance cannot represent historical holders of the position, given that a Post survives all its holders. To represent such historical information, a Membership instance can be used. If a Post ceases to exist, a Post instance can of course be used to represent that historical position; it just can't represent all historical holders of that position.</p>

<h1 id="standard-reuse">3. Standard Reuse</h1>

This project should adopt suitable existing standards wherever possible. Following [a survey](data/survey.html), these are:

<table>
  <caption>Suitable existing standards for people and organizations</caption>
  <thead>
    <tr>
      <th>Publisher</th>
      <th>Name</th>
      <th>Prefix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><abbr title="Internet Engineering Task Force">IETF</abbr></td>
      <td><a href="http://tools.ietf.org/html/rfc6350">vCard 4.0</a></td>
      <td><code>vcard</code></td>
    </tr>
    <tr>
      <td><abbr title="Dublic Core Metadata Initiative">DCMI</abbr></td>
      <td><a href="http://dublincore.org/documents/dcmi-terms/">Metadata Terms</a></td>
      <td><code>dcterms</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/TR/vocab-org/">Organization ontology (ORG)</a></td>
      <td><code>org</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/TR/skos-reference/">Simple Knowledge Organization System</a></td>
      <td><code>skos</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td> 
      <td><a href="http://www.w3.org/TR/rdf-schema/">RDF Schema</a></td>
      <td><code>rdfs</code></td>
    </tr>
    <tr>
      <td><abbr title="Interoperability Solutions for European Public Administrations">ISA</abbr></td>
      <td><a href="http://philarcher.org/isa/person-v1.00.html">Person Core Vocabulary</a></td>
      <td><code>person</code></td>
    </tr>
    <tr>
      <td></td>
      <td><a href="http://vocab.org/bio/0.1/.html">BIO vocabulary</a></td>
      <td><code>bio</code></td>
    </tr>
  </tbody>
</table>

Briefly, the survey concludes that, with respect to the Person class:

* No vocabulary has a property for former names, except for `person:birthName`.
* No vocabulary describes biographies without importing the BIO vocabulary, except for `facebook:bio`.
* Only `person:Person` fits [the data standard's definition of a person](#scope).

For the Organization class:

* No vocabulary has a property for former dates.
* No vocabulary has a property for dissolution dates, except for `vcard:deathDate`.
* The Organization ontology is the only vocabulary to meet all other [requirements](#Organization).

For the Address class, vCard is the only vocabulary to meet all [requirements](#Address). In terms of relations, only the Organization ontology offers multiple ways to describe the relation between people and organizations.

<p class="note">Note: <a href="http://schema.org/">Schema.org</a> can nonetheless be used for HTML serialization, but HTML serialization is out of scope.</p>

<h1 id="classes-and-properties">4. Classes and properties</h1>

Given that the [standards reused](#standard-reuse) are defined in RDF, the data standard's classes and properties will map to RDF terms. Serialization is not limited to RDF; JSON and MongoDB schema are defined in [the next section](#serialization).

Given that the vCard 4.0 RDF encoding is still [in progress](http://www.w3.org/wiki/RepresentingVCardinRDFOWL), the data standard will map to properties from [FOAF](http://xmlns.com/foaf/spec/) and [Schema.org](http://schema.org/) instead.

Although [`foaf:nick`](http://xmlns.com/foaf/spec/#term_nick) can represent alternate names, it usually represents abbreviations, including <abbr title="Internet Relay Chat">IRC</abbr> nicknames. vCard 4.0 can set a [`PREF`](http://tools.ietf.org/html/rfc6350#section-5.3) parameter on names, to make one name preferred. No standard has a property for former names, however. This data standard may therefore propose a new term for both alternate and former names. The RDF definition is not yet available, however.

In RDF, the permanent, unique identifier is the resource's URL.

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
    <tr id="person:Person">
      <td><strong>Person</strong></td>
      <td><code><a href="http://www.w3.org/ns/person#Person">person:Person</a></code></td>
      <td>A real person, alive or dead</td>
    </tr>
    <tr id="foaf:name">
      <td>name</td>
      <td><code><a href="http://xmlns.com/foaf/0.1/name">foaf:name</a></code></td>
      <td>A person's preferred full name</td>
    </tr>
    <tr>
      <td>alternate name</td>
      <td></td>
      <td>An alternate name, such as a pseudonym</td>
    </tr>
    <tr>
      <td>former name</td>
      <td></td>
      <td>A former name, such as a maiden name</td>
    </tr>
    <tr id="foaf:familyName">
      <td>family name</td>
      <td><code><a href="http://xmlns.com/foaf/0.1/familyName">foaf:familyName</a></code></td>
      <td>One or more family names</td>
    </tr>
    <tr id="foaf:givenName">
      <td>given name</td>
      <td><code><a href="http://xmlns.com/foaf/0.1/givenName">foaf:givenName</a></code></td>
      <td>One or more primary given names</td>
    </tr>
    <tr id="schema:additionalName">
      <td>additional name</td>
      <td><code><a href="http://schema.org/additionalName">schema:additionalName</a></code></td>
      <td>One or more secondary given names</td>
    </tr>
    <tr id="schema:honorificPrefix">
      <td>honorific prefix</td>
      <td><code><a href="http://schema.org/honorificPrefix">schema:honorificPrefix</a></code><a href="#note3"><sup>3</sup></a></td>
      <td>One or more honorifics preceding a person's name</td>
    </tr>
    <tr id="schema:honorificSuffix">
      <td>honorific suffix</td>
      <td><code><a href="http://schema.org/honorificSuffix">schema:honorificSuffix</a></code></td>
      <td>One or more honorifics following a person's name</td>
    </tr>
    <tr id="schema:email">
      <td>email address</td>
      <td><code><a href="http://schema.org/email">schema:email</a></code><a href="#note4"><sup>4</sup></a></td>
      <td>An email address</td>
    </tr>
    <tr id="foaf:gender">
      <td>gender</td>
      <td><code><a href="http://xmlns.com/foaf/0.1/gender">foaf:gender</a></code></td>
      <td>A gender</td>
    </tr>
    <tr id="schema:birthDate">
      <td>date of birth</td>
      <td><code><a href="http://schema.org/birthDate">schema:birthDate</a></code><a href="#note5"><sup>5</sup></a></td>
      <td>A date of birth</td>
    </tr>
    <tr id="schema:deathDate">
      <td>date of death</td>
      <td><code><a href="http://schema.org/deathDate">schema:deathDate</a></code></td>
      <td>A date of death</td>
    </tr>
    <tr id="schema:image">
      <td>head shot</td>
      <td><code><a href="http://schema.org/image">schema:image</a></code><a href="#note6"><sup>6</sup></a></td>
      <td>A URL of a head shot</td>
    </tr>
    <tr id="bio:olb">
      <td>one-line biography</td>
      <td><code><a href="http://purl.org/vocab/bio/0.1/olb">bio:olb</a></code></td>
      <td>A one-line account of a person's life</td>
    </tr>
    <tr id="bio:biography">
      <td>biography</td>
      <td><code><a href="http://purl.org/vocab/bio/0.1/biography">bio:biography</a></code></td>
      <td>An extended account of a person's life</td>
    </tr>
    <tr id="rdfs:seeAlso">
      <td>external links</td>
      <td><code><a href="http://www.w3.org/2000/01/rdf-schema#seeAlso">rdfs:seeAlso</a></code></td>
      <td>A URL for a document about the person</td>
    </tr>
    <tr id="org:Organization">
      <td><strong>Organization</strong></td>
      <td><code><a href="http://www.w3.org/ns/org#Organization">org:Organization</a></code></td>
      <td>A group with a common purpose or reason for existence that goes beyond the set of people belonging to it, e.g. a social, commercial or political structure</td>
    </tr>
    <tr id="skos:prefLabel">
      <td>name</td>
      <td><code><a href="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></code></td>
      <td>A primary name, e.g. a legally recognized name</td>
    </tr>
    <tr id="skos:altLabel">
      <td>alternate name</td>
      <td><code><a href="http://www.w3.org/2004/02/skos/core#altLabel">skos:altLabel</a></code></td>
      <td>An alternate name, e.g. a trading or colloquial name</td>
    </tr>
    <tr>
      <td>former name</td>
      <td></td>
      <td>A former name, e.g. a pre-merger name</td>
    </tr>
    <tr id="org:identifier">
      <td>identifier</td>
      <td><code><a href="http://www.w3.org/ns/org#identifier">org:identifier</a></code></td>
      <td>An issued identifier, e.g. a <abbr title="Data Universal Numbering System">DUNS</abbr> number, <abbr title="Global Location Number">GLN</abbr>, <abbr title="Taxpayer Identification Number">TIN</abbr>, etc.</td>
    </tr>
    <tr id="org:classification">
      <td>classification</td>
      <td><code><a href="http://www.w3.org/ns/org#classification">org:classification</a></code></td>
      <td>An organizational category, e.g. charity, committee, etc.</td>
    </tr>
    <tr id="org:subOrganizationOf">
      <td>parent organization</td>
      <td><code><a href="http://www.w3.org/ns/org#subOrganizationOf">org:subOrganizationOf</a></code><a href="#note7"><sup>7</sup></a></td>
      <td>An organization that contains this organization</td>
    </tr>
    <tr id="schema:foundingDate">
      <td>date of founding</td>
      <td><code><a href="http://schema.org/foundingDate">schema:foundingDate</a></code></td>
      <td>A date of founding</td>
    </tr>
    <tr>
      <td>date of dissolution</td>
      <td></td>
      <td>A date of dissolution, termination, withdrawal, expiry, etc.</td>
    </tr>
    <tr id="vcard:Address">
      <td><strong>Address</strong></td>
      <td><code><a href="http://www.w3.org/2006/vcard/ns#Address">vcard:Address</a></code></td>
      <td>A physical location or a mail delivery point</td>
    </tr>
    <tr id="rdf:type">
      <td>address type</td>
      <td><code><a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">rdf:type</a></code><a href="#note8"><sup>8</sup></a></td>
      <td>A type of address, e.g. "Constituency office"</td>
    </tr>
    <tr id="vcard:label">
      <td>postal address</td>
      <td><code><a href="http://www.w3.org/2006/vcard/ns#label">vcard:label</a></code></td>
      <td>A postal address</td>
    </tr>
    <tr id="vcard:tel">
      <td>telephone number</td>
      <td><code><a href="http://www.w3.org/2006/vcard/ns#tel">vcard:tel</a></code><a href="#note8"><sup>8</sup></a></td>
      <td>A telephone number</td>
    </tr>
    <tr id="org:Post">
      <td><strong>Post</strong></td>
      <td><code><a href="http://www.w3.org/ns/org#Post">org:Post</a></code></td>
      <td>A position that exists independent of the person holding it</td>
    </tr>
    <tr id="org:heldBy">
      <td>person</td>
      <td><code><a href="http://www.w3.org/ns/org#heldBy">org:heldBy</a></code><a href="#note7"><sup>7</sup></a></td>
      <td>The person who holds the post</td>
    </tr>
    <tr id="org:postIn">
      <td>organization</td>
      <td><code><a href="http://www.w3.org/ns/org#postIn">org:postIn</a></code><a href="#note7"><sup>7</sup></a></td>
      <td>The organization in which the post is held</td>
    </tr>
    <tr id="org:role-Post">
      <td>role</td>
      <td><code><a href="http://www.w3.org/ns/org#role">org:role</a></code></td>
      <td>The role that the holder of the post fulfills</td>
    </tr>
    <tr id="org:Membership">
      <td><strong>Membership</strong></td>
      <td><code><a href="http://www.w3.org/ns/org#Membership">org:Membership</a></code></td>
      <td>A relationship between a person and an organization</td>
    </tr>
    <tr id="org:member">
      <td>person</td>
      <td><code><a href="http://www.w3.org/ns/org#member">org:member</a></code><a href="#note7"><sup>7</sup></a></td>
      <td>The person who is a party to the relationship</td>
    </tr>
    <tr id="org:organization">
      <td>organization</td>
      <td><code><a href="org:organization">org:organization</a></code><a href="#note7"><sup>7</sup></a></td>
      <td>The organization that is a party to the relationship</td>
    </tr>
    <tr id="org:role-Membership">
      <td>role</td>
      <td><code><a href="http://www.w3.org/ns/org#role">org:role</a></code></td>
      <td>The role that the person fulfills in the organization</td>
    </tr>
    <tr id="org:memberDuring">
      <td>time interval</td>
      <td><code><a href="http://www.w3.org/ns/org#memberDuring">org:memberDuring</a></code></td>
      <td>the time interval over which the relationship exists</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note2">2. <code>vcard:deathDate</code> can be used for date of dissolution, but <code>deathDate</code> is an unusual term for an organization.</p>
<p class="note" id="note3">3. <code>schema:honorificPrefix</code> is used instead of <code>foaf:title</code>, because <code>foaf:title</code> is a <a href="http://xmlns.com/foaf/spec/#term_title">candidate for deprecation</a>.</p>
<p class="note" id="note4">4. <code>schema:email</code> is used instead of <code>foaf:mbox</code>, because <code>email</code> is a more familiar term than <code>mbox</code>.</p>
<p class="note" id="note5">5. <code>schema:birthDate</code> is used instead of <code>foaf:birthday</code>, to match <code>schema:deathDate</code>, for which FOAF has no property.</p>
<p class="note" id="note6">6. <code>schema:image</code> is used instead of <code>foaf:img</code>, because abbreviations are avoided.</p>
<p class="note" id="note7">7. ORG defines the inverse properties <code>org:hasSubOrganization</code>, <code>org:holds</code>, <code>org:hasPost</code> and <code>org:hasMembership</code>.</p>
<p class="note" id="note8">8. vCard <a href="http://www.w3.org/TR/vcard-rdf/#Param">uses</a> <code>rdf:type</code> to indicate the type of address or telephone number.</p>

<h1 id="serialization">5. Serialization</h1>

The schemas are given in [JSON Schema](http://json-schema.org/) (draft [v3](http://tools.ietf.org/html/draft-zyp-json-schema-03)) and apply to both the JSON and MongoDB serializations.

[Snake case](http://en.wikipedia.org/wiki/Snake_case) is used instead of [camel case](http://en.wikipedia.org/wiki/CamelCase), due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s and <abbr title="object-document mapper">ODM</abbr>s.

## 5.1. Person

[RDF example in Turtle](/examples/person.ttl)

[todo both former and alternate put into one; iso dates used; whereas RDF literals can have language tags, JSON/MongoDB require different approach]

```js
{
  "$schema": "http://json-schema.org/draft-03/schema#",
  "id": "http://popoloproject.com/schemas/person.json#",
  "title": "Person",
  "description": "A real person, alive or dead",
  "type": "object",
  "properties": {
    "id": {
      "description": "The person's unique identifier",
      "type": "string"
    }
  },
  "required": []
}
```

Example:

```js
{
  "id": "47cc67093475061e3d95369d",
  "name": "Mr. John Q. Public, Esq.",
  "family_name": "Public",
  "given_name": "John",
  "additional_name": "Quinlan",
  "honorific_prefix": "Mr.",
  "honorific_suffix": "Esq.",
  "other_names": [
    {
      name: "Mr. Ziggy Q. Public, Esq.",
      start_date: "1920-01",
      end_date: "19491231"
    },
    {
      name: "Dragonsbane"
    }
  ],
  "email": "john@example.com",
  "gender": "male",
  "birth_date": "1920-01",
  "death_date": "20100101",
  "photo_url": "http://example.com/john.jpg",

}
```

## 5.2. Organization

[RDF example in Turtle](/examples/organization.ttl)


```js
{
  "$schema": "http://json-schema.org/draft-03/schema#",
  "title": "",
  "description": "",
  "type": "object",
  "properties": {

  },
  "required": []
}
```

## 5.3. Address

[RDF example in Turtle](/examples/address.ttl)

```js

```

<!-- todo http://tools.ietf.org/html/rfc3966 -->

## 5.4. Post

[RDF example in Turtle](/examples/post.ttl)

```js

```

## 5.5. Membership

```js

```

<!-- todo: document differences from inspired vocabs as we go -->

<h1 id="code-lists">6. Code lists</h1>

## Gender

The following is a subset of [vCard 4.0](http://tools.ietf.org/html/rfc6350#section-6.2.7)'s code list:

* `male`
* `female`

Values other than `male` and `female` may be used to reflect the diversity of gender identities.

## Telephone

The following is a superset of [vCard 4.0](http://tools.ietf.org/html/rfc6350#section-6.4.1)'s code list:

<table>
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
    <tr>
      <td><code>text</code></td>
      <td>The telephone number supports text messages (SMS)</td>
    </tr>
  </tbody>
</table>

<h1 id="conformance">7. Conformance</h1>

The key words <em class="rfc2119">must</em>, <em class="rfc2119">must not</em>, <em class="rfc2119">required</em>, <em class="rfc2119">should</em>, <em class="rfc2119">should not</em>, <em class="rfc2119">recommended</em>, <em class="rfc2119">may</em>, and <em class="rfc2119">optional</em> are to be interpreted as described in [RFC 2119](http://tools.ietf.org/html/rfc2119).

**TODO: Similar section to the [Organization ontology](http://www.w3.org/TR/vocab-org/#conformance)**

<!--
wording like the conformance section of ORG
<em class="rfc2119">must</em> conform to the [schemas](#serialization) in the Serialization section.

<em class="rfc2119">may</em> subclass [Organizational unit](http://www.w3.org/TR/vocab-org/#org:OrganizationalUnit) [describe subclass mechanism wrt ORMs]
-->

<h1 id="history">8. Change history</h1>

* 2013-02-01: First public working draft
