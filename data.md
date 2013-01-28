---
layout: data
title: Data Standard
id: data
---
**<abbrev title="too long, didn't read">tl;dr</abbrev> Read [this part of the requirements](#relations) then skip to the [serialization](#serialization) and [conformance](#conformance) sections**

<h1 id="scope">Scope</h1>

The data standard's initial scope is to describe the entities below and the relations between them:

<dl>
  <dt>Person</dt>
  <dd>A real <a href="http://en.wikipedia.org/wiki/Person">person</a>, alive or dead</a></dd>
  <dt>Organization</dt>
  <dd>Use the W3C Organization ontology's <a href="http://www.w3.org/TR/vocab-org/#org:Organization">definition</a></dd>
  <dt>Address</dt>
  <dd>A physical location or a mail delivery point</dd>
  <dt>Post</dt>
  <dd>Use the W3C Organization ontology's <a href="http://www.w3.org/TR/vocab-org/#org:Post">definition</a></dd>
  <!--dt>Area</dt>
  <dd>A bounded area, like an administrative boundary</dd-->
</dl>

The data standard will initially define two serializations: a <abbr title="JavaScript Object Notation">JSON</abbr> and a MongoDB schema.

<h1 id="use-cases-and-requirements">Use Cases &amp; Requirements</h1>

The data standard is designed primarily for open government use cases, though other use cases are supported. The data standard defines classes and properties to fulfill the requirements below.

1. Allow the use of imprecise dates [*[7]*](https://github.com/opennorth/popolo-standard/issues/7).

    >Shakespeare was born in April 1564.

1. Have a permanent, unique identifier for each instance of each class [*[6]*](https://github.com/opennorth/popolo-standard/issues/6).

    >e.g. a URL, an integer or a hex string.

## Person

The Person class should have properties for:

1. name

    >Mr. John Q. Public, Esq.

1. each component of the name (given names, family names, additional names, prefixes and suffixes)

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

1. extended description

    >To provide a long form biography.

1. external links

    >A representative's Twitter account, Wikipedia page, or another source of information.

## Organization

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

## Address

The Address class should have properties for:

1. label

    >e.g. "Hill address" or "Constituency office".

1. postal address [*[10]*](https://github.com/opennorth/popolo-standard/issues/10)

    >1 Main Street<br>
    Anytown, USA

1. telephone numbers by type [*[8]*](https://github.com/opennorth/popolo-standard/issues/8)

    >e.g. a mobile, toll-free or facsimile telephone number.

<!--
## Area

The Area class should have properties for:

1. name

    >Canada

1. parent area

    >Ontario is part of Canada.
-->

<h2 id="relations">Relations</h2>

[No one size fits all](http://www.w3.org/TR/vocab-org/#reporting_structure) in representing the relationship between people and organizations. In some cases, a simple binary relation is enough, e.g. a `memberOf` property that links a person to an organization. In other cases, a complex [n-ary relation](http://www.w3.org/TR/swbp-n-aryRelations/) is required, e.g. to describe the duration of the person's membership; in such cases, we create a new class to represent the relation, e.g. a Membership class, and attach properties like duration to it to describe the relationship between the person and the organization.

In some cases, it is relevant to represent the organizational structure independently of the people within that structure; for example, it is relevant to represent the position of the Member of Parliament for Avalon even when no one holds that position. A *Post* is such a position that exists independently of the person holding it.

A Post should not be confused with a *Role*, which describes a function that a person can fulfill in an organization. For example, people in different organizations can all fulfill the Role of CEO, but only one person can hold the Post of CEO at Apple Inc. Indeed, the Post of the MP for Avalon could be described as having the role of MP.

The Membership and Post classes cannot be united. Let John Doe be an MP in the House of Commons. If using the Membership class to represent this relationship, then when John Doe leaves office, we would destroy the Membership instance connecting John Doe to the House of Commons – or set an `endDate` property to flag the Membership as historical. If using the Post class, then when John Doe leaves office, we would unset a `heldBy` property on the Post instance, which was previously set to John Doe[<sup>1</sup>](#note1). The Post would remain.

Now let John Doe be a member of the XYZ Party. It only makes sense to use the Membership class. If John Doe leaves the party, the instance used to describe his relationship to the party should not remain; the instance should either be destroyed or archived.

Some use cases may therefore require both Post and Membership classes to satisfy their requirements. It may be a best practice in implementations to use a Membership class until a strong use case emerges for a Post class.

The Post class should have properties for:

* the person who holds the post
* the organization in which the post is held
* the role that the holder of the post fulfills

The Membership class should have properties for:

* the person who is a party to the relationship
* the organization that is a party to the relationship
* the role that the person fulfills in the organization
* the time interval over which the relationship exists

<p class="note" id="note1">1. A Post instance cannot represent historical holders of the position, given that a Post survives all its holders. To represent such historical information, a Membership instance can be used. If a Post ceases to exist, a Post instance can of course be used to represent that historical position.</p>

<h1 id="standard-reuse">Standard Reuse</h1>

This project should adopt suitable existing standards wherever possible. Following [a survey](data/survey.html), these are:

<table>
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
      <td><a href="http://www.w3.org/TR/vocab-org/">Organization ontology</a></td>
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
      <td></td>
      <td><a href="http://vocab.org/bio/0.1/.html">BIO vocabulary</a></td>
      <td><code>bio</code></td>
    </tr>
  </tbody>
</table>

Briefly, the survey concludes that, with respect to the Person class:

* No vocabulary has a property for former names, except for `person:birthName`.
* No vocabulary describes biographies without importing the BIO vocabulary, except for `facebook:bio`.
* vCard is the only vocabulary to meet all other requirements.

For the Organization class:

* No vocabulary has a property for former dates.
* No vocabulary has a property for dissolution dates, except for `vcard:deathDate`.
* The Organization ontology is the only vocabulary to meet all other requirements.

For the Address class, vCard is the only vocabulary to meet all requirements. In terms of relations, only the Organization ontology offers multiple ways to describe the relation between people and organizations.

<p class="note">Note: <a href="http://schema.org/">Schema.org</a> can nonetheless be used for HTML serialization, but HTML serialization is out of scope.</p>

<h1 id="classes-and-properties">Classes and properties</h1>

**TODO: RDF reference. See Serialization for now.**

<h1 id="serialization">Serialization</h1>

**TODO: JSON schema.**

<!-- todo json schema is used - express both json and mongodb at once -->
<!-- todo: document differences as we go -->

Complete examples of each class are given. The [Conformance](#conformance) section describes which properties are required, recommended and optional.

## Person

```js

```

## Organization

```js

```

## Address

```js

```

<!-- todo http://tools.ietf.org/html/rfc3966 -->

## Post

```js

```

## Membership

```js

```

<h1 id="code-lists">Code lists</h1>

## Gender

The following is a subset of [vCard 4.0](http://tools.ietf.org/html/rfc6350#section-6.2.7)'s code list:

* `male`
* `female`

Values other than `male` and `female` may be used to reflect the diversity of gender identities.

## Telephone

The following is a superset of [vCard 4.0](http://tools.ietf.org/html/rfc6350#section-6.4.1)'s code list:

<table>
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

<h1 id="conformance">Conformance</h1>

The key words <em class="rfc2119">must</em>, <em class="rfc2119">must not</em>, <em class="rfc2119">required</em>, <em class="rfc2119">should</em>, <em class="rfc2119">should not</em>, <em class="rfc2119">recommended</em>, <em class="rfc2119">may</em>, and <em class="rfc2119">optional</em> are to be interpreted as described in [RFC 2119](http://tools.ietf.org/html/rfc2119).

**TODO: Similar section to the [Organization ontology](http://www.w3.org/TR/vocab-org/#conformance)**

<!--
wording like the conformance section of ORG

<em class="rfc2119">may</em> subclass [Organizational unit](http://www.w3.org/TR/vocab-org/#org:OrganizationalUnit) [describe subclass mechanism wrt ORMs]
-->

<h1 id="history">Change history</h1>

* 2013-02-01: First public working draft
