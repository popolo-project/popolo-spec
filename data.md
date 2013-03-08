---
layout: standard
title: Data Specification
id: data
---
**<abbr title="too long, didn't read">tl;dr</abbr> Read [this part of the requirements](#relations) then skip to the [serialization](#serialization) and [conformance](#conformance) sections**

The key words <em class="rfc2119">must</em>, <em class="rfc2119">must not</em>, <em class="rfc2119">required</em>, <em class="rfc2119">should</em>, <em class="rfc2119">should not</em>, <em class="rfc2119">recommended</em>, <em class="rfc2119">may</em>, and <em class="rfc2119">optional</em> are to be interpreted as described in [RFC 2119](http://tools.ietf.org/html/rfc2119).

<h1 id="scope">1. Scope</h1>

The data specification's initial scope is to describe the entities below and the relations between them:

<dl>
  <dt>Person</dt>
  <dd>A real <a href="http://en.wikipedia.org/wiki/Person">person</a>, alive or dead</dd>
  <dt>Organization</dt>
  <dd>A group with a common purpose or reason for existence that goes beyond the set of people belonging to it, e.g. a social, commercial or political structure</dd>
  <dt>Address</dt>
  <dd>A physical location or a mail delivery point</dd>
  <dt>Post</dt>
  <dd>A position in an organization that exists independently of the person holding it</dd>
  <dt>Membership</dt>
  <dd>A relationship between a person and an organization</dd>
</dl>

The data specification will initially define <abbr title="JavaScript Object Notation">JSON</abbr>, <abbr title="Resource Description Framework">RDF</abbr> and MongoDB serializations.

<h1 id="use-cases-and-requirements">2. Use Cases &amp; Requirements</h1>

The data specification is designed primarily for open government use cases, though other use cases are supported. The data specification defines classes and properties to fulfill the requirements below.

1. Allow the use of imprecise dates [*[issue 7]*](https://github.com/opennorth/popolo-standard/issues/7).

    >Shakespeare was born in April 1564.

1. Have a permanent, unique identifier for each instance of each class.

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

1. email address [*[issue 5]*](https://github.com/opennorth/popolo-standard/issues/5)

    >To contact representatives via email.

1. gender [*[issue 3]*](https://github.com/opennorth/popolo-standard/issues/3)

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

1. date of founding [*[issue 9]*](https://github.com/opennorth/popolo-standard/issues/9)

    >To provide historical detail.

1. date of dissolution [*[issue 9]*](https://github.com/opennorth/popolo-standard/issues/9)

    >To determine whether an organization exists, e.g. in order to disable related functionality.

<h2 id="Address">2.3. Address</h2>

The Address class should have properties for:

1. address type

    >e.g. "Hill address" or "Constituency office".

1. postal address [*[issue 10]*](https://github.com/opennorth/popolo-standard/issues/10)

    >1 Main Street  
    Anytown, USA

1. telephone numbers by type [*[issue 8]*](https://github.com/opennorth/popolo-standard/issues/8)

    >e.g. a mobile, toll-free or facsimile telephone number.

<h2 id="relations">2.4. Relations</h2>

[No one size fits all](http://www.w3.org/TR/vocab-org/#reporting_structure) in representing the relationship between people and organizations. In some cases, a simple binary relation is enough, e.g. a `memberOf` property that links a person to an organization. In other cases, a complex [n-ary relation](http://www.w3.org/TR/swbp-n-aryRelations/) is required, e.g. to describe the duration of the person's membership; in such cases, we create a new class to represent the relation, e.g. a Membership class, and attach properties like duration to it to describe the relationship between the person and the organization.

In some cases, it is relevant to represent the organizational structure independently of the people within that structure; for example, it is relevant to represent the position of the Member of Parliament for Avalon even when no one holds that position. A *Post* is such a position that exists independently of the person holding it.

A Post should not be confused with a *Role*, which describes a function that a person can fulfill. For example, people in different organizations can all fulfill the Role of CEO, but only one person can hold the Post of CEO at Apple Inc. Indeed, the Post of the MP for Avalon could be described as having the Role of MP.

The Membership and Post classes can't be merged. John Doe is an MP in the House of Commons. If using the Membership class to represent this relationship, then when John Doe leaves office, we would destroy the Membership instance connecting John Doe to the House of Commons – or set an `endDate` property to flag the Membership as historical. If using the Post class, then when John Doe leaves office, we would unset a `heldBy` property on the Post instance, which was previously set to John Doe[<sup>1</sup>](#note1). The Post would remain.

Now let John Doe be a member of the XYZ Party. It only makes sense to use the Membership class. If John Doe leaves the party, the instance used to describe his relationship to the party should not remain; the instance should either be destroyed or archived.

Given that a Membership and a Post behave differently in the same situation, like a person leaving office, and given that only one or the other behavior is appropriate in some cases, like party membership, a single class cannot express both Membership- and Post-style behaviors.

Some use cases may therefore require both Post and Membership classes to satisfy their requirements.

The Post class should have properties for:

1. label

    > Member of Parliament for Avalon

1. the role that the holder of the post fulfills

    > Member of Parliament

1. the person who holds the post

    > John Doe

1. the organization in which the post is held

    > House of Commons

1. the address at which the post is based

    > 1 Main Street  
    Anytown, USA

The Membership class should have properties for:

1. the role that the person fulfills in the organization

    > Member

1. the person who is a party to the relationship

    > John Doe

1. the organization that is a party to the relationship

    > XYZ Party

1. the time interval over which the relationship exists

    > since 2000

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
      <td><abbr title="Dublic Core Metadata Initiative">DCMI</abbr></td>
      <td><a href="http://dublincore.org/documents/dcmi-terms/">Metadata Terms</a></td>
      <td><code>dcterms</code></td>
    </tr>
    <tr>
      <td></td>
      <td><a href="http://vocab.org/bio/0.1/.html">Friend of a Friend (FOAF)</a></td>
      <td><code>foaf</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://schema.org/">Schema.org</a></td>
      <td><code>schema</code></td>
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
      <td><abbr title="Internet Engineering Task Force">IETF</abbr></td>
      <td><a href="http://tools.ietf.org/html/rfc6350">vCard 4.0</a></td>
      <td><code>vcard</code></td>
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
* Only `person:Person` fits [the data specification's definition of a person](#scope).

For the Organization class:

* No vocabulary has a property for former dates.
* No vocabulary has a property for dissolution dates, except for `vcard:deathDate`.
* The Organization ontology is the only vocabulary to meet all other [requirements](#Organization).

For the Address class, vCard is the only vocabulary to meet all [requirements](#Address). In terms of relations, only the Organization ontology offers multiple ways to describe the relation between people and organizations. An [inventory of the terms in the survey](data/terms.html) is available.

<p class="note">Note: <a href="http://schema.org/">Schema.org</a> can nonetheless be used for HTML serialization, but HTML serialization is out of scope.</p>

<h2 id="restrictions">3.1 Restrictions</h2>

The data specification imposes cardinality and range restrictions on some properties of other standards, in order to allow for simpler JSON and MongoDB serializations.

In vCard, each component of a name – family name, given name, additional name, honorific prefix and honorific suffix – can include multiple text values. Other vocabularies, including FOAF, do not restrict the cardinality of these properties either. Some, like OpenSocial, do. This data specification requires that each component of a name can include one text value only.

According to the Organization ontology, multiple people can hold a post, and either a person or an organization can hold a post; in this data specification, only a single *person* can hold a post. According to the Organization ontology, either a person or an organization can be a member of an organization; in this data specification, only a person can be a member of an organization. Unlike the Organization ontology, an organization may have only one classification in this data specification; implementations must choose a unique classification scheme.

The data specification is a [profile of the W3C organization ontology](http://www.w3.org/TR/vocab-org/#conformance).

**TODO: OWL file describing the restrictions**

<h1 id="classes-and-properties">4. Classes and properties</h1>

Given that the [standards reused](#standard-reuse) are defined in RDF, the data specification's classes and properties will map to RDF terms. Serialization is not limited to RDF; JSON and MongoDB schema are defined in [the next section](#serialization).

Although [`foaf:nick`](http://xmlns.com/foaf/spec/#term_nick) can represent alternate names, it usually represents abbreviations, including <abbr title="Internet Relay Chat">IRC</abbr> nicknames. vCard 4.0 can set a [`PREF`](http://tools.ietf.org/html/rfc6350#section-5.3) parameter on names, to make one name preferred. The Person Core Vocabulary uses `dcterms:alternative`. No standard has a property for former names, however. This data specification may therefore propose a new term for both alternate and former names. The RDF definition is not yet available, however.

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
    <tr id="dcterms:alternative">
      <td>alternate name</td>
      <td><code><a href="http://purl.org/dc/terms/alternative">dcterms:alternative</a></code></td>
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
    <tr id="skos:prefLabel1">
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
    <tr id="vcard:VCard">
      <td><strong>Address</strong></td>
      <td><code><a href="http://www.w3.org/2006/vcard/ns#VCard">vcard:VCard</a></code></td>
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
    <tr id="skos:prefLabel2">
      <td>label</td>
      <td><code><a href="http://www.w3.org/2004/02/skos/core#prefLabel">skos:prefLabel</a></code></td>
      <td>A label describing the post</td>
    </tr>
    <tr id="org:role-Post">
      <td>role</td>
      <td><code><a href="http://www.w3.org/ns/org#role">org:role</a></code></td>
      <td>The role that the holder of the post fulfills</td>
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
    <tr>
      <td>address</td>
      <td></td>
      <td>The address at which the post is based</td>
    </tr>
    <tr id="org:Membership">
      <td><strong>Membership</strong></td>
      <td><code><a href="http://www.w3.org/ns/org#Membership">org:Membership</a></code></td>
      <td>A relationship between a person and an organization</td>
    </tr>
    <tr id="org:role-Membership">
      <td>role</td>
      <td><code><a href="http://www.w3.org/ns/org#role">org:role</a></code></td>
      <td>The role that the person fulfills in the organization</td>
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
    <tr id="org:memberDuring">
      <td>time interval</td>
      <td><code><a href="http://www.w3.org/ns/org#memberDuring">org:memberDuring</a></code></td>
      <td>the time interval over which the relationship exists</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note2">2. <code>vcard:deathDate</code> could have been used for date of dissolution, but <code>deathDate</code> is an unusual term for an organization.</p>
<p class="note" id="note3">3. <code>schema:honorificPrefix</code> is used instead of <code>foaf:title</code>, because <code>foaf:title</code> is a <a href="http://xmlns.com/foaf/spec/#term_title">candidate for deprecation</a>.</p>
<p class="note" id="note4">4. <code>schema:email</code> is used instead of <code>foaf:mbox</code>, because <code>email</code> is a more familiar term than <code>mbox</code>.</p>
<p class="note" id="note5">5. <code>schema:birthDate</code> is used instead of <code>foaf:birthday</code> to match <code>schema:deathDate</code>, for which FOAF has no property.</p>
<p class="note" id="note6">6. <code>schema:image</code> is used instead of <code>foaf:img</code>, because abbreviations like <code>img</code> are avoided.</p>
<p class="note" id="note7">7. ORG defines the inverse properties <code>org:hasSubOrganization</code>, <code>org:holds</code>, <code>org:hasPost</code> and <code>org:hasMembership</code>.</p>
<p class="note" id="note8">8. vCard <a href="http://www.w3.org/TR/vcard-rdf/#Param">uses</a> <code>rdf:type</code> to indicate the type of address or telephone number.</p>

<h1 id="serialization">5. Serialization</h1>

Schemas are given in [JSON Schema](http://json-schema.org/) (draft [v3](http://tools.ietf.org/html/draft-zyp-json-schema-03)) and apply to the JSON and MongoDB serializations. The schemas use [snake case](http://en.wikipedia.org/wiki/Snake_case) instead of [camel case](http://en.wikipedia.org/wiki/CamelCase), due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s and <abbr title="object-document mapper">ODM</abbr>s. The RDF serialization follows the [classes and properties](#classes-and-properties) section above; example RDF documents are given in [Turtle notation](http://www.w3.org/TeamSubmission/turtle/).

Reusable software components implementing the data specification should isolate themselves from their host applications. For the MongoDB serialization, such components <em class="rfc2119">may</em> therefore namespace the collections by prepending a `popolo_` prefix to the names of the collections.

Many MongoDB ODMs, including [Mongoid](http://mongoid.org/), use a `_type` field on a document to indicate that the document represents an instance of a subclass of the base class that is otherwise associated with the MongoDB collection. MongoDB serializations <em class="rfc2119">should</em> leave the management of the `_type` field to the ODM and <em class="rfc2119">should</em> place subclasses and base classes in the same collection.

In order to satisfy the [requirement](#use-cases-and-requirements) to allow the use of imprecise dates, the use of [ISO 8601:2004](http://www.iso.org/iso/catalogue_detail?csnumber=40874) reduced dates is <em class="rfc2119">recommended</em>. [XML Schema](http://www.w3.org/XML/Schema.html) supports [reduced dates](http://www.w3.org/TR/xmlschema-2/#truncatedformats) such as [`YYYY`](http://www.w3.org/TR/xmlschema-2/#gYear) and [`YYYY-MM`](http://www.w3.org/TR/xmlschema-2/#gYearMonth). MongoDB does not; it stores a [date](http://docs.mongodb.org/manual/core/document/#date) as a 64-bit integer that represents the number of milliseconds since the [Unix epoch](http://en.wikipedia.org/wiki/Unix_time). Unless a use case emerges requiring fast date operations, dates <em class="rfc2119">should</em> be serialized as strings in MongoDB. Dates <em class="rfc2119">must</em> be stored in <abbr title="Coordinated Universal Time">UTC</abbr>.

**General differences from RDF:** For all MongoDB collections, MongoDB's `_id` field is added. This field is `id` in the JSON serialiation.

## 5.1. Person

The MongoDB collection <em class="rfc2119">should</em> be named `people` or `popolo_people`.

The former name and alternate name properties are serialized as a single `other_names` property, whose value is an array of name objects. If a name object sets an `end_date`[<sup>9</sup>](#note9) property, it represents a former name.

**Differences from RDF:** The term `summary`[<sup>10</sup>](#note10) is used instead of `olb`, because abbreviations are avoided. The term `links` is used instead of `seeAlso`. A new `note`[<sup>11</sup>](#11) property adds a note to an external link.

<p class="note" id="note9">9. With respect to reuse, the terms <code>start_date</code> and <code>end_date</code> are used in the <a href="http://vocab.org/participation/schema">Participation ontology</a> and others.</p>
<p class="note" id="note10">10. With respect to reuse, <a href="http://drupal.org/">Drupal</a> uses the term <code>summary</code> to describe a brief version of a long text.</p>
<p class="note" id="note11">11. <code>note</code> comes from <a href="http://www.w3.org/TR/skos-reference/#notes"><code>skos:note</code></a>. Any additional documentation properties <em class="rfc2119">should</em> re-use SKOS terms.</p>

<ul class="nav nav-tabs">
  <li><a href="#person-schema">JSON Schema</a></li>
  <li class="active"><a href="#person-json">JSON and MongoDB</a></li>
  <li><a href="#person-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="person-schema" data-url="/schemas/person.json"></div>
  <div class="tab-pane active" id="person-json" data-url="/examples/person.json"></div>
  <div class="tab-pane" id="person-rdf" data-url="/examples/person.ttl"></div>
</div>

## 5.2. Organization

The MongoDB collection <em class="rfc2119">should</em> be named `organizations` or `popolo_organizations`.

**Differences from RDF:** The terms `name` and `other_names` are used instead of `prefLabel` and `altLabel`, to be consistent with the Person class. A new `scheme`[<sup>12</sup>](#12) property indicates an identifier's scheme, because JSON and MongoDB values do not have [user-defined datatypes](http://www.w3.org/TR/swbp-xsch-datatypes/) like RDF. The term `parent_id`[<sup>13</sup>](#13) is used instead of `subOrganizationOf`.

<p class="note" id="note12">12. With respect to reuse, both ORG and SKOS use the word <code>scheme</code> to refer to this value.</p>
<p class="note" id="note13">13. With respect to reuse, <a href="https://github.com/benedikt/mongoid-tree">mongoid-tree</a>, <a href="https://github.com/collectiveidea/awesome_nested_set/tree/master/lib/awesome_nested_set">awesome_nested_set</a> and <a href="https://github.com/amerine/acts_as_tree">acts_as_tree</a> use <code>parent_id</code>.</p>

<ul class="nav nav-tabs">
  <li><a href="#organization-schema">JSON Schema</a></li>
  <li class="active"><a href="#organization-json">JSON and MongoDB</a></li>
  <li><a href="#organization-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="organization-schema" data-url="/schemas/organization.json"></div>
  <div class="tab-pane active" id="organization-json" data-url="/examples/organization.json"></div>
  <div class="tab-pane" id="organization-rdf" data-url="/examples/organization.ttl"></div>
</div>

## 5.3. Address

In MongoDB, addresses <em class="rfc2119">must</em> be embedded documents.

**Differences from RDF:** All RDF properties are flattened; `address` and `type` are top-level properties matching `vcard:label` and `rdf:type`. Properties whose names match [telephone type codes](#telephone-types) are used instead of the `vcard:tel` property. Telephone number values <em class="rfc2119">should</em> be in [RFC 3966](http://tools.ietf.org/html/rfc3966) format, without the `tel:` prefix.

<ul class="nav nav-tabs">
  <li><a href="#address-schema">JSON Schema</a></li>
  <li class="active"><a href="#address-json">JSON and MongoDB</a></li>
  <li><a href="#address-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="address-schema" data-url="/schemas/address.json"></div>
  <div class="tab-pane active" id="address-json" data-url="/examples/address.json"></div>
  <div class="tab-pane" id="address-rdf" data-url="/examples/address.ttl"></div>
</div>

## 5.4. Post

The MongoDB collection <em class="rfc2119">should</em> be named `posts` or `popolo_posts`.

**Differences from RDF:** The term `name` is used instead of `prefLabel`, to be consistent with the Person class. The terms `person_id` and `organization_id` are used instead of `heldBy` and `postIn` to conform to ODM conventions. The value of the `role` property is a string, instead of a `skos:Concept`.

<ul class="nav nav-tabs">
  <li><a href="#post-schema">JSON Schema</a></li>
  <li class="active"><a href="#post-json">JSON and MongoDB</a></li>
  <li><a href="#post-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="post-schema" data-url="/schemas/post.json"></div>
  <div class="tab-pane active" id="post-json" data-url="/examples/post.json"></div>
  <div class="tab-pane" id="post-rdf" data-url="/examples/post.ttl"></div>
</div>

## 5.5. Membership

The MongoDB collection <em class="rfc2119">should</em> be named `memberships` or `popolo_memberships`.

**Differences from RDF:** Given the [complex encoding](http://www.w3.org/TR/owl-time/) of time intervals in RDF, a simple `start_date` and `end_date`[<sup>9</sup>](#note9) pair is used, as [proposed](http://www.epimorphics.com/web/wiki/organization-ontology-second-draft) by the original developers of the Organization ontology. The terms `person_id` and `organization_id` are used instead of `member` and `organization` to conform to ODM conventions. The value of the `role` property is a string, instead of a `skos:Concept`.

<ul class="nav nav-tabs">
  <li><a href="#membership-schema">JSON Schema</a></li>
  <li class="active"><a href="#membership-json">JSON and MongoDB</a></li>
  <li><a href="#membership-rdf">RDF</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane" id="membership-schema" data-url="/schemas/membership.json"></div>
  <div class="tab-pane active" id="membership-json" data-url="/examples/membership.json"></div>
  <div class="tab-pane" id="membership-rdf" data-url="/examples/membership.ttl"></div>
</div>

<h1 id="code-lists">6. Code lists</h1>

## Gender

The following is a subset of [vCard 4.0](http://tools.ietf.org/html/rfc6350#section-6.2.7)'s code list:

* `male`
* `female`

Values other than `male` and `female` may be used to reflect the diversity of gender identities.

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

<h1 id="conformance">7. Conformance</h1>

1. An implementation's usage of [this specification's terms](#classes-and-properties) <em class="rfc2119">must</em> be consistent with the semantics of those terms.
1. A conforming implementation <em class="rfc2119">must not</em> use other terms where this specification's terms would suffice[<sup>14</sup>](#note14).
1. A conforming implementation <em class="rfc2119">may</em> use terms from outside this specification's terms where this specification's terms are insufficient.
1. If an implementation serializes to JSON or MongoDB, its serializations <em class="rfc2119">must</em> validate against this specification's [JSON Schema](#serialization).
1. If an implementation serializes to MongoDB, it <em class="rfc2119">may</em> denormalize its data [*[issue 14]*](https://github.com/opennorth/popolo-standard/issues/14).</h2>
1. A conforming implementation <em class="rfc2119">may</em> use only a subset of this specification's terms.

<p class="note" id="note14">14. For example, it <em class="rfc2119">must not</em> use vCard's <code>fn</code> where this specification's <code>name</code> would suffice.</p>

<h1 id="history">8. Change history</h1>

* 2013-02-28: Add requirement for dates to be stored in UTC.
* 2013-02-25: Add the conformance section, relax requirements with respect to MongoDB collection names.
* 2013-02-16: Add a label property to the Post class, change the cardinality of the classification property on the Organization class, add NIEM and ORG to the survey, add an inventory of the terms in the survey
* 2013-02-01: First public working draft
