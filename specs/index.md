---
layout: specification
title: Data Specification | The Popolo Project
id: specification
---
The key words <em class="rfc2119">must</em>, <em class="rfc2119">must not</em>, <em class="rfc2119">should</em>, <em class="rfc2119">should not</em> and <em class="rfc2119">may</em> are to be interpreted as described in [RFC 2119](http://tools.ietf.org/html/rfc2119).

<h1 id="scope">1. Scope</h1>

The data specification will define terms (classes and properties) to describe and relate the entities below:

<dl>
  <dt>Person</dt>
  <dd>
    <div>A real <a href="http://en.wikipedia.org/wiki/Person">person</a>, alive or dead</div>
    <p class="note">e.g. <a href="http://en.wikipedia.org/wiki/William_Shakespeare">William Shakespeare</a></p>
  </dd>
  <dt>Organization</dt>
  <dd>
    <div>A collection of people with a common purpose or reason for existence that goes beyond the set of people belonging to it</div>
    <p class="note">e.g. a social, commercial or political structure</p>
  </dd>
  <dt>Membership</dt>
  <dd>
    <div>A relationship between a person and an organization</div>
    <p class="note">e.g. member of the XYZ Party</p>
  </dd>
  <dt>Post</dt>
  <dd>
    <div>A position in an organization that exists independently of the person holding it</div>
    <p class="note">e.g. Member of Parliament for Avalon</p>
  </dd>
  <dt>Contact Detail</dt>
  <dd>
    <div>A means of contacting a person, organization or post</div>
    <p class="note">e.g. a telephone number, email address, postal address, Twitter account, etc.</p>
  </dd>
</dl>

<h1 id="conformance">2. Conformance</h1>

1. A conforming implementation <em class="rfc2119">may</em> use only a subset of this specification's terms.
1. It <em class="rfc2119">must not</em> use terms from outside this specification's terms where this specification's terms would suffice[<sup>2</sup>](#note2).
1. It <em class="rfc2119">may</em> use terms from outside this specification's terms where this specification's terms are insufficient.
1. Its usage of this specification's terms <em class="rfc2119">must</em> be consistent with the semantics of those terms.
1. If an implementation serializes to <abbr title="JavaScript Object Notation">JSON</abbr>, its serializations <em class="rfc2119">must</em> validate against [this specification's JSON Schema](#json-schema).

<p class="note" id="note2">2. For example, it <em class="rfc2119">must not</em> use vCard's <code>fn</code> where this specification's <code>name</code> would suffice.</p>

<h1 id="use-cases-and-requirements">3. Use cases &amp; requirements</h1>

The data specification should:

1. Allow the use of imprecise dates [*[issue 7]*](https://github.com/opennorth/popolo-spec/issues/7).

    >Shakespeare was born in April 1564.

1. Have a permanent, unique identifier for each instance of the class.

    >e.g. a URL, an integer or a hex string.

The [subdocuments](#classes-and-properties) in a later section add more requirements.

<h1 id="standard-reuse">4. Standard reuse</h1>

Following a [survey of existing specifications](/appendices/survey.html), the data specification reuses terms from:

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
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/TR/vocab-org/">Organization ontology (ORG)</a></td>
      <td><code>org</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/TR/rdf-schema/">RDF Schema (RDFS)</a></td>
      <td><code>rdfs</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://schema.org/">Schema.org</a></td>
      <td><code>schema</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/TR/skos-reference/">Simple Knowledge Organization System (SKOS)</a></td>
      <td><code>skos</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/2000/10/swap/pim/contact">Contact: Utility concepts for everyday life</a></td>
      <td><code>con</code></td>
    </tr>
    <tr>
      <td></td>
      <td><a href="http://vocab.org/bio/0.1/.html">BIO vocabulary</a></td>
      <td><code>bio</code></td>
    </tr>
    <tr>
      <td></td>
      <td><a href="http://vocab.org/bio/0.1/.html">Friend of a Friend (FOAF)</a></td>
      <td><code>foaf</code></td>
    </tr>
  </tbody>
</table>

The inventory of terms from the surveyed specifications is captured in an [appendix](/appendices/terms.html).

The [subdocuments](#classes-and-properties) in the next section describe specific standard reuse. Some impose cardinality and range restrictions on the properties of the above specifications, in order to allow for a simpler JSON serialization.

<h1 id="classes-and-properties">5. Classes and properties</h1>

The data specification describes each class in a subdocument:

1. [Person](/specs/person.html): [Name Component](/specs/person/name-component.html)
1. [Organization](/specs/organization.html)
1. [Membership](/specs/membership.html)
1. [Post](/specs/post.html)
1. [Contact Detail](/specs/contact-detail.html)

The structure of each subdocument is:

<dl>
  <dt>1. Use cases &amp; requirements</dt>
  <dd>Provide a motivation for the class and its properties</dd>
  <dt>2. Standard reuse</dt>
  <dd>Evaluates and selects existing specifications for reuse</dd>
  <dt>3. Classes and properties</dt>
  <dd>Defines the semantics of the class and its properties</dd>
  <dt>4. Serialization</dt>
  <dd>Defines the <abbr title="Resource Description Framework">RDF</abbr> and <abbr title="JavaScript Object Notation">JSON</abbr> serializations</dd>
  <dt>5. Code lists</dt>
  <dd>Lists any standardized nomenclatures used as property values</dd>
</dl>

The following diagram succinctly describes the relationships among the classes. All arrows are one-to-many relationships.

<img src="/img/diagram.png" width="687" height="84" alt="UML diagram">
{% comment %}http://yuml.me/edit/730bfbbb{% endcomment %}

<h1 id="serialization">6. Serialization</h1>

The data specification defines two serializations: <abbr title="Resource Description Framework">RDF</abbr> and <abbr title="JavaScript Object Notation">JSON</abbr>. RDF is a technology for data modeling, with a variety of syntax notations and serialization formats, including [<abbr title="Extensible Markup Language">XML</abbr>](http://www.w3.org/TR/rdf-syntax-grammar/), JSON (via [JSON-LD]((http://json-ld.org/spec/latest/json-ld/)), <abbr title="HyperText Markup Language">HTML</abbr> (via [<abbr title="Resource Description Framework in Attributes">RDFa</abbr>](http://www.w3.org/TR/rdfa-primer/) or [RDFa Lite](http://www.w3.org/TR/rdfa-lite/)), and [<abbr title="Notation 3">N3</abbr>](http://en.wikipedia.org/wiki/Notation_3) (a superset of the simpler [Turtle](http://www.w3.org/TR/turtle/) and [N-Triples](http://www.w3.org/TR/n-triples/) formats). JSON is a text-based, language-independent interchange format for structured data, derived from the JavaScript scripting language.

Given that the same RDF resource can be serialized in many different ways using [JSON-LD](http://json-ld.org/), [JSON Schema](http://json-schema.org/) (see next subsection) are used to ensure all JSON serializations look alike, to maximize interoperability.

Dates <em class="rfc2119">must</em> be stored in <abbr title="Coordinated Universal Time">UTC</abbr>. To allow for imprecise dates, the use of [ISO 8601:2004](http://www.iso.org/iso/catalogue_detail?csnumber=40874) reduced dates[<sup>1</sup>](#note1) is <em class="rfc2119">recommended</em>.

Additional serializations details are given in the [subdocuments](#classes-and-properties) in the previous section.

<p class="note" id="note1">1. Consult the list of <a href="https://github.com/opennorth/popolo-spec/wiki/ISO-8601%3A2004-formats">reduced date formats</a>. <a href="http://www.w3.org/XML/Schema.html">XML Schema</a> supports <a href="http://www.w3.org/TR/xmlschema-2/#truncatedformats">reduced dates</a> such as <a href="http://www.w3.org/TR/xmlschema-2/#gYear"><code>YYYY</code></a> and <a href="http://www.w3.org/TR/xmlschema-2/#gYearMonth"><code>YYYY-MM</code></a>.</p>

<h2 id="schema-and-examples">6.1. Schema and examples</h2>

As described in the [conformance](#conformance) section, JSON serializations <em class="rfc2119">must</em> validate against the JSON Schema (draft [v3](http://tools.ietf.org/html/draft-zyp-json-schema-03)) below. The terms use [snake case](http://en.wikipedia.org/wiki/Snake_case) instead of [camel case](http://en.wikipedia.org/wiki/CamelCase), due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s.

<table id="json-schema">
  <thead>
    <tr>
      <th>JSON Schema</th>
      <th>Sample JSON document</th>
      <th>Sample RDF document</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/schemas/person.json">Person</a></td>
      <td><a href="/examples/person.json">person.json</a></td>
      <td><a href="/examples/person.ttl">person.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/organization.json">Organization</a></td>
      <td><a href="/examples/organization.json">organization.json</a></td>
      <td><a href="/examples/organization.ttl">organization.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/membership.json">Membership</a></td>
      <td><a href="/examples/membership.json">membership.json</a></td>
      <td><a href="/examples/membership.ttl">membership.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/post.json">Post</a></td>
      <td><a href="/examples/post.json">post.json</a></td>
      <td><a href="/examples/post.ttl">post.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/contact_detail.json">Contact Detail</a></td>
      <td><a href="/examples/contact_detail.json">contact_detail.json</a></td>
      <td><a href="/examples/contact_detail.ttl">contact_detail.ttl</a></td>
    </tr>
  </tbody>
</table>

## 6.2. Embedded JSON documents

When serializing to JSON, you have two options when relating entities, which you may use simultaneously:

1. Link organizations, people, posts and memberships with the properties:
    * `organization_id`
    * `person_id`
    * `post_id`
    * `parent_id`

2. Embed an entity's relations on the entity's document with the properties:
    * `memberships`
    * `organization`
    * `person`
    * `post`
    * `posts`
    * `parent`

The first option is straight-forward and is used in the examples in the subdocuments above.

To embed an organization's posts on its Organization document, add a plural `posts` property to that document, whose value is an array of Post documents. Since the `organization_id` property on each Post subdocument is redundant with the `id` property on the Organization document, you <em class="rfc2119">may</em> remove the `organization_id` property from each subdocument.

For the inverse relation, i.e. to embed a post's organization on its Post document, add a singular `organization` property to that document, whose value is the Organization document. You <em class="rfc2119">may</em> remove the `organization_id` property from the Post document, since it is redundant with the `id` property on the Organization document.

In either case, you <em class="rfc2119">must not</em> embed an entity in another unless the two are related. You <em class="rfc2119">may</em> embed to any depth, but you <em class="rfc2119">must not</em> embed recursively, e.g. embed an organization in a post in an organization.

<ul class="nav nav-tabs no-js">
  <li class="disabled"><a>Embedding examples:</a></li>
  <li class="active"><a href="#embedding-person">Person</a></li>
  <li><a href="#embedding-organization">Organization</a></li>
  <li><a href="#embedding-membership">Membership</a></li>
  <li><a href="#embedding-post">Post</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane active" id="embedding-person" data-url="/examples/embedding-person.json"></div>
  <div class="tab-pane" id="embedding-organization" data-url="/examples/embedding-organization.json"></div>
  <div class="tab-pane" id="embedding-membership" data-url="/examples/embedding-membership.json"></div>
  <div class="tab-pane" id="embedding-post" data-url="/examples/embedding-post.json"></div>
</div>

## 6.3. Subschema

The JSON Schema above reuse the following subschema for specific properties.

<h3 id="identifier">6.3.1. Identifier</h3>

With respect to standard reuse, the [Organization ontology](http://www.w3.org/TR/vocab-org/), [<abbr title="Simple Knowledge Organization System">SKOS</abbr>](http://www.w3.org/TR/skos-reference/) and [<abbr title="eXtensible Business Reporting Language">XBRL</abbr>](http://en.wikipedia.org/wiki/XBRL) use the word `scheme` to refer to an identifier's scheme. The Identifier class is necessary for JSON serialization, because, unlike RDF values, JSON values do not have [user-defined datatypes](http://www.w3.org/TR/swbp-xsch-datatypes/) to indicate an identifier's scheme.

<div class="tab-content no-js">
  <div class="tab-pane active" data-url="/schemas/identifier.json"></div>
</div>

<h3 id="link">6.3.2. Link</h3>

With respect to standard reuse, `note` comes from [`skos:note`](http://www.w3.org/TR/skos-reference/#notes).

**Differences from RDF:**

* A new `note` property adds a note (e.g. "Wikipedia page") to the external link.

<div class="tab-content no-js">
  <div class="tab-pane active" data-url="/schemas/link.json"></div>
</div>

<h3 id="other-name">6.3.3 Other name</h3>

If a name object sets an `end_date` property, it represents a former name. With respect to standard reuse, the terms `start_date` and `end_date` are used in the [Participation ontology](http://vocab.org/participation/schema) and others, and `note` comes from [`skos:note`](http://www.w3.org/TR/skos-reference/#notes).

<div class="tab-content no-js">
  <div class="tab-pane active" data-url="/schemas/other_name.json"></div>
</div>

<h1 id="history">7. Change history</h1>

* 2013-06-20: Reorganize specification and implement feedback.
* 2013-02-28: Add requirement for dates to be stored in UTC.
* 2013-02-25: Add the conformance section, relax requirements with respect to MongoDB collection names.
* 2013-02-16: Add a label property to the Post class, change the cardinality of the classification property on the Organization class, add NIEM and ORG to the survey, add an inventory of the terms in the survey.
* 2013-02-01: First public working draft.

[Browse all Git commits on GitHub](https://github.com/opennorth/popolo-spec/commits/gh-pages)
