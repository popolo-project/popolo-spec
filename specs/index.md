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
    <p class="note">e.g. William Shakespeare</p>
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
1. It <em class="rfc2119">must not</em> use terms from outside this specification's terms where this specification's terms would suffice[<sup>1</sup>](#note1).
1. It <em class="rfc2119">may</em> use terms from outside this specification's terms where this specification's terms are insufficient.
1. Its usage of this specification's terms <em class="rfc2119">must</em> be consistent with the semantics of those terms.
1. If an implementation serializes to <abbr title="JavaScript Object Notation">JSON</abbr>, its serializations <em class="rfc2119">must</em> validate against [this specification's JSON Schema](#json-schema).

<p class="note" id="note1">1. For example, it <em class="rfc2119">must not</em> use vCard's <code>fn</code> where this specification's <code>name</code> would suffice.</p>

<h1 id="use-cases-and-requirements">3. Use cases &amp; requirements</h1>

The data specification should:

1. Allow the use of imprecise dates [*[issue 7]*](https://github.com/opennorth/popolo-spec/issues/7).

    >Shakespeare was born in April 1564.

1. Have a permanent, unique identifier for each instance of the class.

    >e.g. a URL, an integer or a hex string.

Each resource should have metadata properties for:

1. time of creation

    >The electronic resource for Shakespeare was created on May 1, 2000.

1. time of modification

    >The electronic resource for Shakespeare was modified on June 15, 2005.

1. references to sources of information from which the resource is derived

    >e.g. a book, a website or other reference material.

The subdocuments in a [later section](#classes-and-properties) add more requirements.

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

The subdocuments in the [next section](#classes-and-properties) describe specific standard reuse. Some impose cardinality and range restrictions on the properties of the above specifications, in order to allow for a simpler JSON serialization.

<h1 id="classes-and-properties">5. Classes and properties</h1>

Each of the following subdocuments describes a class and its properties:

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

## 5.1. Metadata properties

The following table defines the metadata properties and maps each term to an <abbr title="Resource Description Framework">RDF</abbr> <abbr title="uniform resource identifier">URI</abbr>[<sup>2</sup>](#note2):

<table>
  <thead>
    <tr>
      <th width="130">Term</th>
      <th>Mapping</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr id="dcterms:created">
      <td>time of creation</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-created" title="http://purl.org/dc/terms/created">dcterms:created</a></code></td>
      <td>The time at which a resource was created</td>
    </tr>
    <tr id="dcterms:modified">
      <td>time of modification</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-modified" title="http://purl.org/dc/terms/modified">dcterms:modified</a></code></td>
      <td>The time at which a resource was modified</td>
    </tr>
    <tr id="dcterms:source">
      <td>source document</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-source" title="http://purl.org/dc/terms/source">dcterms:source</a></code></td>
      <td>A URL to, or a citation of, a document from which the resource is derived</td>
    </tr>
  </tbody>
</table>

<p class="note" id="note2">2. If you do not use RDF, you may ignore the mapping.</p>

<h1 id="serialization">6. Serialization</h1>

The data specification defines two serializations: <abbr title="Resource Description Framework">RDF</abbr> and <abbr title="JavaScript Object Notation">JSON</abbr>. RDF is a technology for data modeling, with a variety of syntax notations and serialization formats, including [<abbr title="Extensible Markup Language">XML</abbr>](http://www.w3.org/TR/rdf-syntax-grammar/), JSON (via [JSON-LD]((http://json-ld.org/spec/latest/json-ld/)), <abbr title="HyperText Markup Language">HTML</abbr> (via [<abbr title="Resource Description Framework in Attributes">RDFa</abbr>](http://www.w3.org/TR/rdfa-primer/) or [RDFa Lite](http://www.w3.org/TR/rdfa-lite/)), and [<abbr title="Notation 3">N3</abbr>](http://en.wikipedia.org/wiki/Notation_3) (a superset of the simpler [Turtle](http://www.w3.org/TR/turtle/) and [N-Triples](http://www.w3.org/TR/n-triples/) formats). JSON is a text-based, language-independent interchange format for structured data, derived from the JavaScript scripting language.

Given that the same RDF resource can be serialized in many different ways using [JSON-LD](http://json-ld.org/), [JSON Schema](http://json-schema.org/) (see the following subsections) are provided to ensure all JSON serializations look alike, to maximize interoperability.

Dates <em class="rfc2119">must</em> be stored in <abbr title="Coordinated Universal Time">UTC</abbr>. To allow for imprecise dates, the use of [ISO 8601:2004](http://www.iso.org/iso/catalogue_detail?csnumber=40874) reduced dates[<sup>3</sup>](#note3) is <em class="rfc2119">recommended</em>.

Additional serialization details are given in the subdocuments in the [previous section](#classes-and-properties).

<p class="note" id="note3">3. Consult the list of <a href="https://github.com/opennorth/popolo-spec/wiki/ISO-8601%3A2004-formats">reduced date formats</a>. <a href="http://www.w3.org/XML/Schema.html">XML Schema</a> supports <a href="http://www.w3.org/TR/xmlschema-2/#truncatedformats">reduced dates</a> such as <a href="http://www.w3.org/TR/xmlschema-2/#gYear"><code>YYYY</code></a> and <a href="http://www.w3.org/TR/xmlschema-2/#gYearMonth"><code>YYYY-MM</code></a>.</p>

<h2 id="schema-and-examples">6.1. Schema and examples</h2>

As described in the [conformance](#conformance) section, JSON serializations <em class="rfc2119">must</em> validate against the JSON Schema (draft [v3](http://tools.ietf.org/html/draft-zyp-json-schema-03)) below. The terms use [snake case](http://en.wikipedia.org/wiki/Snake_case) (`birth_date`) instead of [camel case](http://en.wikipedia.org/wiki/CamelCase) (`birthDate`), due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s.

<table id="json-schema">
  <thead>
    <tr>
      <th>JSON Schema</th>
      <th>JSON-LD Context</th>
      <th>Sample JSON document</th>
      <th>Sample RDF document</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/schemas/person.json">Person</a></td>
      <td><a href="/contexts/person.jsonld">person.jsonld</a></td>
      <td><a href="/examples/person.json">person.json</a></td>
      <td><a href="/examples/person.ttl">person.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/organization.json">Organization</a></td>
      <td><a href="/contexts/organization.jsonld">organization.jsonld</a></td>
      <td><a href="/examples/organization.json">organization.json</a></td>
      <td><a href="/examples/organization.ttl">organization.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/membership.json">Membership</a></td>
      <td><a href="/contexts/membership.jsonld">membership.jsonld</a></td>
      <td><a href="/examples/membership.json">membership.json</a></td>
      <td><a href="/examples/membership.ttl">membership.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/post.json">Post</a></td>
      <td><a href="/contexts/post.jsonld">post.jsonld</a></td>
      <td><a href="/examples/post.json">post.json</a></td>
      <td><a href="/examples/post.ttl">post.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/contact_detail.json">Contact Detail</a></td>
      <td><a href="/contexts/contact_detail.jsonld">contact_detail.jsonld</a></td>
      <td><a href="/examples/contact_detail.json">contact_detail.json</a></td>
      <td><a href="/examples/contact_detail.ttl">contact_detail.ttl</a></td>
    </tr>
  </tbody>
</table>

A JSON-LD serialization differs from a plain JSON serialization in a few ways:

* A JSON-LD serialization <em class="rfc2119">should</em> use the [`@context`](http://json-ld.org/spec/latest/json-ld/#the-context), [`@type`](http://json-ld.org/spec/latest/json-ld/#dfn-node-type) and [`@id`](http://json-ld.org/spec/latest/json-ld/#node-identifiers) [keywords](http://json-ld.org/spec/latest/json-ld/#dfn-keyword).
* The value of the `email` property of a `Person` <em class="rfc2119">should</em> be a ['mailto' URI](http://tools.ietf.org/html/rfc6068).
* The value of the `role` property of a `Membership` or `Post` <em class="rfc2119">should</em> be either a URI or a blank node for a `org:Role`.
* The value of the `classification` property of an `Organization` <em class="rfc2119">should</em> be a URI or a blank node for a `skos:Concept`.
* The value of the `scheme` property of an `Identifier` <em class="rfc2119">should</em> be a [value type](http://json-ld.org/spec/latest/json-ld/#dfn-value-type), i.e. an <abbr title="Internationalized Resource Identifiers">IRI</abbr>.
* The value of the `type` property of a `ContactDetail` <em class="rfc2119">should</em> be a [node type](http://json-ld.org/spec/latest/json-ld/#dfn-node-type), i.e. an <abbr title="Internationalized Resource Identifiers">IRI</abbr>.
* The value of the `links` and `sources` properties <em class="rfc2119">should</em> be an array of URIs, not an array of [link objects](/specs/#link).
* A JSON-LD serialization <em class="rfc2119">should</em> use the `@id`, `organization`, `parent`, `person` and `post` properties instead of the `id`, `organization_id`, `parent_id`, `person_id` and `post_id` properties.

<h2 id="metadata-properties">6.2. Metadata properties</h2>

**JSON differences from other RDF serializations:**

* Whereas other RDF serializations may have multiple modification times and may cite a variety of materials as sources, the JSON serialization <em class="rfc2119">must</em> serialize only the last modification time and cite only URIs.
* The term `created_at` is used instead of `created`, due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s.
* The term `updated_at` is used instead of `modified`, due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s.
* The term `sources` is used instead of `source` and is serialized as an array of [link objects](#link).

The following examples use a Person document to demonstrate the metadata properties.

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#metadata-json">JSON</a></li>
  <li><a href="#metadata-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane active" id="metadata-json" data-url="/examples/metadata.json"></div>
  <div class="tab-pane" id="metadata-rdf" data-url="/examples/metadata.ttl"></div>
</div>

<h2 id="embedded-json-documents">6.3. Embedded JSON documents</h2>

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

At the risk of stating the obvious, you <em class="rfc2119">must not</em> embed an entity in another unless the two are related. You <em class="rfc2119">may</em> embed to any depth, but you <em class="rfc2119">must not</em> embed recursively, e.g. embed an organization in a post in an organization.

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

<h2 id="subschema">6.4. Subschema</h2>

The JSON Schema above reuse the following subschema for specific properties.

<h3 id="identifier">6.4.1. Identifier</h3>

With respect to standard reuse, the term `scheme` is used in the [Organization ontology](http://www.w3.org/TR/vocab-org/), [<abbr title="Simple Knowledge Organization System">SKOS</abbr>](http://www.w3.org/TR/skos-reference/) and [<abbr title="eXtensible Business Reporting Language">XBRL</abbr>](http://en.wikipedia.org/wiki/XBRL).

**JSON differences from other RDF serializations:**

* Unlike RDF values, JSON values do not have [user-defined datatypes](http://www.w3.org/TR/swbp-xsch-datatypes/) to indicate an identifier's scheme.

<div class="tab-content no-js">
  <div class="tab-pane active" data-url="/schemas/identifier.json"></div>
</div>

<h3 id="link">6.4.2. Link</h3>

With respect to standard reuse, `note` comes from [`skos:note`](http://www.w3.org/TR/skos-reference/#notes).

**JSON differences from other RDF serializations:**

* A new `note` property adds a note (e.g. "Wikipedia page") to the external link.

<div class="tab-content no-js">
  <div class="tab-pane active" data-url="/schemas/link.json"></div>
</div>

<h3 id="other-name">6.4.3 Other name</h3>

If a name object sets an `end_date` property, it represents a former name. With respect to standard reuse, the terms `start_date` and `end_date` are used in the [Participation ontology](http://vocab.org/participation/schema) and others, and `note` comes from [`skos:note`](http://www.w3.org/TR/skos-reference/#notes).

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#other-name-schema">JSON Schema</a></li>
  <li><a href="#other-name-context">JSON-LD Context</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane active" id="other-name-schema" data-url="/schemas/other_name.json"></div>
  <div class="tab-pane" id="other-name-context" data-url="/contexts/other_name.jsonld"></div>
</div>

<h1 id="history">7. Change history</h1>

* 2014-01-23: Add `national_identity` property to the Person class.
* 2013-10-14: Add `onBehalfOf` property to the Membership class.
* 2013-09-08: Add `image` property to the Organization class.
* 2013-08-28: Add JSON-LD contexts.
* 2013-08-28: Use `schema:validFrom` and `schema:validThrough` instead of `org:memberDuring`.
* 2013-07-08: Add a label property to the Membership class.
* 2013-07-08: Add time of creation, time of modification, and source document metadata properties.
* 2013-06-20: Reorganize specification and implement feedback.
* 2013-02-28: Add requirement for dates to be stored in UTC.
* 2013-02-25: Add conformance requirements. Relax requirements with respect to MongoDB collection names.
* 2013-02-16: Add a label property to the Post class. Change the cardinality of the classification property of the Organization class.
* 2013-02-01: First public working draft.

[Browse all Git commits on GitHub](https://github.com/opennorth/popolo-spec/commits/gh-pages)
