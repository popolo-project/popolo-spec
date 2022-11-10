---
layout: specification
title: Data Specification | Popolo
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
    <div>A relationship between a member and an organization</div>
    <p class="note">e.g. member of the XYZ Party</p>
  </dd>
  <dt>Post</dt>
  <dd>
    <div>A position in an organization that exists independently of the person holding it</div>
    <p class="note">e.g. Member of Parliament for Avalon</p>
  </dd>
  <dt>Contact detail</dt>
  <dd>
    <div>A means of contacting a person, organization or post</div>
    <p class="note">e.g. a telephone number, email address, postal address, contact form, etc.</p>
  </dd>
  <dt>Motion</dt>
  <dd>
    <div>A formal step to introduce a matter for consideration by an organization</div>
    <p class="note">e.g. "That the House do now proceed to the Orders of the Day."</p>
  </dd>
  <dt>Vote event</dt>
  <dd>
    <div>An event at which people's votes are recorded</div>
    <p class="note">e.g. a vote to pass a bill</p>
  </dd>
  <dt>Count</dt>
  <dd>
    <div>The number of votes for an option in a vote event</div>
    <p class="note">e.g. 128 votes in favor of passage</p>
  </dd>
  <dt>Vote</dt>
  <dd>
    <div>A voter's vote in a vote event</div>
    <p class="note">e.g. John Q. Public voted in favor of passage</p>
  </dd>
  <dt>Area</dt>
  <dd>
    <div>A geographic area whose geometry may change over time</div>
    <p class="note">e.g. a country, city, ward, etc.</p>
  </dd>
  <dt>Event</dt>
  <dd>
    <div>An occurrence that people may attend</div>
    <p class="note">e.g. a legislative session, a meeting, a hearing, etc.</p>
  </dd>
  <dt>Speech</dt>
  <dd>
    <div>A speech by a person, a scene (e.g. applause), a narrative (e.g. "The House rose at 3:20pm"), or another non-speech part of a discussion (e.g. a list of bills).</div>
    <p class="note">e.g. a representative addressing the legislature</p>
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

1. Allow the use of imprecise dates [*[issue 7]*](https://github.com/popolo-project/popolo-spec/issues/7).

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

<table class="table table-condensed">
  <thead>
    <tr>
      <th>Publisher</th>
      <th>Name</th>
      <th>Prefix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bibliographic Framework Initiative</td>
      <td><a href="http://bibframe.org/vocab/">BIBFRAME Vocabulary</a></td>
      <td><code>bf</code></td>
    </tr>
    <tr>
      <td></td>
      <td><a href="http://vocab.org/bio/0.1/.html">BIO: A vocabulary for biographical information</a></td>
      <td><code>bio</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/2000/10/swap/pim/contact">Contact: Utility concepts for everyday life</a></td>
      <td><code>con</code></td>
    </tr>
    <tr>
      <td><abbr title="Dublic Core Metadata Initiative">DCMI</abbr></td>
      <td><a href="http://dublincore.org/documents/dcmi-terms/">DCMI Metadata Terms</a></td>
      <td><code>dcterms</code></td>
    </tr>
    <tr>
      <td></td>
      <td><a href="http://xmlns.com/foaf/spec/">FOAF Vocabulary Specification</a></td>
      <td><code>foaf</code></td>
    </tr>
    <tr>
      <td>GeoNames</td>
      <td><a href="http://www.geonames.org/ontology/documentation.html">GeoNames Ontology</a></td>
      <td><code>gn</code></td>
    </tr>
    <tr>
      <td><abbr title="Interoperability Solutions for European Public Administrations">ISA</abbr></td>
      <td><a href="http://www.w3.org/ns/locn">ISA Programme Location Core Vocabulary</a></td>
      <td><code>locn</code></td>
    </tr>
    <tr>
      <td><abbr title="Open Semantic Collaboration Architecture">OSCA</abbr> Foundation</td>
      <td><a href="http://www.semanticdesktop.org/ontologies/2007/04/02/ncal">NEPOMUK Calendar Ontology</a></td>
      <td><code>ncal</code></td>
    </tr>
    <tr>
      <td>Open Data Institute</td>
      <td><a href="http://schema.theodi.org/odrs/">Open Data Rights Statement Vocabulary</a></td>
      <td><code>odrs</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/TR/vocab-org/">The Organization Ontology</a></td>
      <td><code>org</code></td>
    </tr>
    <tr>
      <td><abbr title="Interoperability Solutions for European Public Administrations">ISA</abbr></td>
      <td><a href="http://www.w3.org/ns/person">ISA Programme Person Core Vocabulary</a></td>
      <td><code>person</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/TR/rdf-schema/">RDF Schema</a></td>
      <td><code>rdfs</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://schema.org/">Schema.org</a></td>
      <td><code>schema</code></td>
    </tr>
    <tr>
      <td><abbr title="World Wide Web Consortium">W3C</abbr></td>
      <td><a href="http://www.w3.org/TR/skos-reference/">SKOS Simple Knowledge Organization System</a></td>
      <td><code>skos</code></td>
    </tr>
    <tr>
      <td><abbr title="Internet Engineering Task Force">IETF</abbr></td>
      <td><a href="http://tools.ietf.org/html/rfc6350">vCard Format Specification</a></td>
      <td><code>vcard</code></td>
    </tr>
  </tbody>
</table>

The inventory of terms from the surveyed specifications is captured in an [appendix](/appendices/terms.html).

The subdocuments in the [next section](#classes-and-properties) describe specific standard reuse. Some impose cardinality and range restrictions on the properties of the above specifications, in order to allow for a simpler JSON serialization.

<h1 id="classes-and-properties">5. Classes and properties</h1>

Each of the following subdocuments describes a class and its properties:

* People and organizations
  * [Person](/specs/person.html): [Name component](/specs/person/name-component.html)
  * [Organization](/specs/organization.html)
  * [Membership](/specs/membership.html)
  * [Post](/specs/post.html)
  * [Contact detail](/specs/contact-detail.html)
* Motions and voting
  * [Motion](/specs/motion.html)
  * [Vote event](/specs/vote-event.html)
  * [Count](/specs/count.html)
  * [Vote](/specs/vote.html)
* Other classes
  * [Area](/specs/area.html)
  * [Event](/specs/event.html)
  * [Speech](/specs/speech.html)

The structure of each subdocument is:

<dl>
  <dt>1. Use cases &amp; requirements</dt>
  <dd>Provides a motivation for the class and its properties</dd>
  <dt>2. Standard reuse</dt>
  <dd>Evaluates and selects existing specifications for reuse</dd>
  <dt>3. Classes and properties</dt>
  <dd>Defines the semantics of the class and its properties</dd>
  <dt>4. Serialization</dt>
  <dd>Defines the <abbr title="Resource Description Framework">RDF</abbr> and <abbr title="JavaScript Object Notation">JSON</abbr> serializations</dd>
  <dt>5. Code lists</dt>
  <dd>Lists any standardized nomenclatures used as property values</dd>
</dl>

The following diagram succinctly describes the relationships among the people and organizations classes. All arrows are one-to-many relationships.

<img src="/img/diagram.png" width="687" height="84" alt="UML diagram">
{% comment %}http://yuml.me/edit/730bfbbb{% endcomment %}
{% comment %}http://yuml.me/edit/0ab4e952{% endcomment %}

<h2 id="metadata-properties">5.1. Metadata properties</h2>

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

The data specification defines two serializations: <abbr title="Resource Description Framework">RDF</abbr> and <abbr title="JavaScript Object Notation">JSON</abbr>. RDF is a technology for data modeling, with a variety of syntax notations and serialization formats, including [<abbr title="Extensible Markup Language">XML</abbr>](http://www.w3.org/TR/rdf-syntax-grammar/), JSON (via [JSON-LD](http://json-ld.org/spec/latest/json-ld/)), <abbr title="HyperText Markup Language">HTML</abbr> (via [<abbr title="Resource Description Framework in Attributes">RDFa</abbr>](http://www.w3.org/TR/rdfa-primer/) or [RDFa Lite](http://www.w3.org/TR/rdfa-lite/)), and [<abbr title="Notation 3">N3</abbr>](http://en.wikipedia.org/wiki/Notation_3) (a superset of the simpler [Turtle](http://www.w3.org/TR/turtle/) and [N-Triples](http://www.w3.org/TR/n-triples/) formats). JSON is a text-based, language-independent interchange format for structured data, derived from the JavaScript scripting language.

Given that the same RDF resource can be serialized in many different ways using [JSON-LD](http://json-ld.org/), [JSON Schema](http://json-schema.org/) are provided [below](#schema-and-examples) to ensure all JSON serializations look alike, to maximize interoperability. A JSON-LD serialization will nonetheless differ from a plain JSON serialization in a few ways:

* A JSON-LD serialization <em class="rfc2119">should</em> use the [`@context`](http://json-ld.org/spec/latest/json-ld/#the-context), [`@type`](http://json-ld.org/spec/latest/json-ld/#dfn-node-type) and [`@id`](http://json-ld.org/spec/latest/json-ld/#node-identifiers) [keywords](http://json-ld.org/spec/latest/json-ld/#dfn-keyword).
* The value of the `email` property of a `Person` <em class="rfc2119">must</em> be a ['mailto' URI](http://tools.ietf.org/html/rfc6068).
* The value of the `role` property of a `Membership`, `Post`, `Vote` or `Speech` <em class="rfc2119">must</em> be a URI or blank node for a `org:Role`.
* The value of the `classification` property of an `Organization` or `Motion` <em class="rfc2119">must</em> be a URI or blank node for a `skos:Concept`.
* The value of the `classification` property of an `Area` <em class="rfc2119">must</em> be a URI or blank node for a `gn:Code`, which is a subclass of `skos:Concept`.
* The value of the `type` property of a `ContactDetail` <em class="rfc2119">must</em> be a [node type](http://json-ld.org/spec/latest/json-ld/#dfn-node-type), i.e. an <abbr title="Internationalized Resource Identifiers">IRI</abbr>.
* The value of the `scheme` property of an `Identifier` <em class="rfc2119">must</em> be a [value type](http://json-ld.org/spec/latest/json-ld/#dfn-value-type), i.e. an <abbr title="Internationalized Resource Identifiers">IRI</abbr>.
* The value of the `requirement` property of a `Motion` <em class="rfc2119">must</em> be a URI or blank node for a `opengov:Requirement`.
* The value of the `result` property of a `Motion`, `VoteEvent` or `GroupResult` <em class="rfc2119">must</em> be a URI or blank node for a `opengov:Result`.
* The value of the `location` property of an `Event` <em class="rfc2119">must</em> be a URI or blank node for a [`schema:Place`](http://schema.org/Place) or [`schema:PostalAddress`](http://schema.org/PostalAddress).
* The value of the `status` property of an `Event` <em class="rfc2119">must</em> be a URI or blank node for a [`schema:EventStatusType`](http://schema.org/EventStatusType).
* The value of the `audio` property of a `Speech` <em class="rfc2119">must</em> be a URI or blank node for a [`schema:AudioObject`](http://schema.org/AudioObject).
* The value of the `video` property of a `Speech` <em class="rfc2119">must</em> be a URI or blank node for a [`schema:VideoObject`](http://schema.org/VideoObject).
* The value of the `links` and `sources` properties <em class="rfc2119">must</em> be an array of URIs, not an array of [link objects](/specs/#link).
* A JSON-LD serialization <em class="rfc2119">should not</em> use the `*_id` properties:

<table>
  <thead>
    <tr>
      <th>JSON-LD</th>
      <th>JSON</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@id</code></td>
      <td><code>id</code></td>
    </tr>
    <tr>
      <td><code>area</code></td>
      <td><code>area_id</code></td>
    </tr>
    <tr>
      <td><code>audience</code></td>
      <td><code>audience_id</code></td>
    </tr>
    <tr>
      <td><code>creator</code></td>
      <td><code>creator_id</code></td>
    </tr>
    <tr>
      <td><code>event</code></td>
      <td><code>event_id</code></td>
    </tr>
    <tr>
      <td><code>group</code></td>
      <td><code>group_id</code></td>
    </tr>
    <tr>
      <td><code>legislative_session</code></td>
      <td><code>legislative_session_id</code></td>
    </tr>
    <tr>
      <td><code>on_behalf_of</code></td>
      <td><code>on_behalf_of_id</code></td>
    </tr>
    <tr>
      <td><code>organization</code></td>
      <td><code>organization_id</code></td>
    </tr>
    <tr>
      <td><code>pair</code></td>
      <td><code>pair_id</code></td>
    </tr>
    <tr>
      <td><code>parent</code></td>
      <td><code>parent_id</code></td>
    </tr>
    <tr>
      <td><code>person</code></td>
      <td><code>person_id</code></td>
    </tr>
    <tr>
      <td><code>post</code></td>
      <td><code>post_id</code></td>
    </tr>
    <tr>
      <td><code>vote_event</code></td>
      <td><code>vote_event_id</code></td>
    </tr>
    <tr>
      <td><code>voter</code></td>
      <td><code>voter_id</code></td>
    </tr>
  </tbody>
</table>

Dates <em class="rfc2119">must</em> be stored in <abbr title="Coordinated Universal Time">UTC</abbr>. To allow for imprecise dates, the use of [ISO 8601:2004](http://www.iso.org/iso/catalogue_detail?csnumber=40874) reduced dates[<sup>3</sup>](#note3) is <em class="rfc2119">recommended</em>. In RDF, the [`dcterms:W3CDTF`](http://www.w3.org/TR/NOTE-datetime) datatype is <em class="rfc2119">recommended</em>.

Additional serialization details are given in the subdocuments in the [previous section](#classes-and-properties).

<p class="note" id="note3">3. Consult the list of <a href="https://github.com/popolo-project/popolo-spec/wiki/ISO-8601%3A2004-formats">reduced date formats</a>. <a href="http://www.w3.org/XML/Schema.html">XML Schema</a> supports <a href="http://www.w3.org/TR/xmlschema-2/#truncatedformats">reduced dates</a> such as <a href="http://www.w3.org/TR/xmlschema-2/#gYear"><code>YYYY</code></a> and <a href="http://www.w3.org/TR/xmlschema-2/#gYearMonth"><code>YYYY-MM</code></a>.</p>

<h2 id="schema-and-examples">6.1. JSON schema and examples</h2>

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
      <td><a href="/schemas/contact_detail.json">Contact detail</a></td>
      <td><a href="/contexts/contact_detail.jsonld">contact_detail.jsonld</a></td>
      <td><a href="/examples/contact_detail.json">contact_detail.json</a></td>
      <td><a href="/examples/contact_detail.ttl">contact_detail.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/motion.json">Motion</a></td>
      <td><a href="/contexts/motion.jsonld">motion.jsonld</a></td>
      <td><a href="/examples/motion.json">motion.json</a></td>
      <td><a href="/examples/motion.ttl">motion.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/vote_event.json">Vote event</a></td>
      <td><a href="/contexts/vote_event.jsonld">vote_event.jsonld</a></td>
      <td><a href="/examples/vote_event.json">vote_event.json</a></td>
      <td><a href="/examples/vote_event.ttl">vote_event.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/count.json">Count</a></td>
      <td><a href="/contexts/count.jsonld">count.jsonld</a></td>
      <td><a href="/examples/count.json">count.json</a></td>
      <td><a href="/examples/count.ttl">count.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/vote.json">Vote</a></td>
      <td><a href="/contexts/vote.jsonld">vote.jsonld</a></td>
      <td><a href="/examples/vote.json">vote.json</a></td>
      <td><a href="/examples/vote.ttl">vote.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/area.json">Area</a></td>
      <td><a href="/contexts/area.jsonld">area.jsonld</a></td>
      <td><a href="/examples/area.json">area.json</a></td>
      <td><a href="/examples/area.ttl">area.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/event.json">Event</a></td>
      <td><a href="/contexts/event.jsonld">event.jsonld</a></td>
      <td><a href="/examples/event.json">event.json</a></td>
      <td><a href="/examples/event.ttl">event.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/speech.json">Speech</a></td>
      <td><a href="/contexts/speech.jsonld">speech.jsonld</a></td>
      <td><a href="/examples/speech.json">speech.json</a></td>
      <td><a href="/examples/speech.ttl">speech.ttl</a></td>
    </tr>
  </tbody>
</table>

<h2 id="metadata-properties">6.2. Metadata serialization</h2>

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

When serializing to JSON, you may relate entities by linking and/or embedding relations.

<table>
  <thead>
    <tr>
      <th>Linking</th>
      <th>Embedding</th>
      <th>Inverse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>area_id</code></td>
      <td><code>area</code></td>
      <td><code>memberships</code>, <code>organizations</code>, <code>posts</code></td>
    </tr>
    <tr>
      <td><code>audience_id</code></td>
      <td><code>audience</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>creator_id</code></td>
      <td><code>creator</code></td>
      <td><code>motions</code>, <code>speeches</code></td>
    </tr>
    <tr>
      <td><code>event_id</code></td>
      <td><code>event</code></td>
      <td><code>speeches</code></td>
    </tr>
    <tr>
      <td><code>group_id</code></td>
      <td><code>group</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>legislative_session_id</code></td>
      <td><code>legislative_session</code></td>
      <td><code>motions</code>, <code>vote_events</code></td>
    </tr>
    <tr>
      <td></td>
      <td><code>member</code></td>
      <td><code>memberships</code></td>
    </tr>
    <tr>
      <td><code>motion_id</code></td>
      <td><code>motion</code></td>
      <td><code>vote_events</code></td>
    </tr>
    <tr>
      <td><code>on_behalf_of_id</code></td>
      <td><code>on_behalf_of</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>organization_id</code></td>
      <td><code>organization</code></td>
      <td><code>memberships</code>, <code>motions</code>, <code>posts</code>, <code>vote_events</code></td>
    </tr>
    <tr>
      <td><code>pair_id</code></td>
      <td><code>pair</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>parent_id</code></td>
      <td><code>parent</code></td>
      <td><code>children</code></td>
    </tr>
    <tr>
      <td><code>person_id</code></td>
      <td><code>person</code></td>
      <td><code>memberships</code></td>
    </tr>
    <tr>
      <td><code>post_id</code></td>
      <td><code>post</code></td>
      <td><code>memberships</code></td>
    </tr>
    <tr>
      <td><code>vote_event_id</code></td>
      <td><code>vote_event</code></td>
      <td><code>votes</code></td>
    </tr>
    <tr>
      <td><code>voter_id</code></td>
      <td><code>voter</code></td>
      <td><code>votes</code></td>
    </tr>
  </tbody>
</table>

`contact_details`, `counts`, `group_results`, `identifiers`, `links`, `other_names` and `sources` are embedded only.

The first option is straight-forward and is used in the examples in the subdocuments above.

To embed an organization's posts on its Organization document, add a plural `posts` property to that document, whose value is an array of Post documents. Since the `organization_id` property on each Post subdocument is redundant with the `id` property on the Organization document, you <em class="rfc2119">may</em> omit the `organization_id` property from each subdocument.

For the inverse relation, i.e. to embed a post's organization on its Post document, add a singular `organization` property to that document, whose value is the Organization document. You <em class="rfc2119">may</em> omit the `organization_id` property from the Post document, since it is redundant with the `id` property on the Organization document.

In the case of an organization's memberships, an organization may both have members and be a member of other organizations. As such, the `organization_id` property <em class="rfc2119">should</em> be present on each subdocument, to avoid ambiguity.

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

<h2 id="subschema">6.4. JSON subschema</h2>

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

<h3 id="group-result">6.4.4 Group result</h3>

For political groups, the range of the `group` property will be an [organization](/specs/organization.html). For ethnic groups, as in the [House of Peoples](http://en.wikipedia.org/wiki/House_of_Peoples_of_Bosnia_and_Herzegovina), it will be an object (a <a href="http://xmlns.com/foaf/spec/#term_Group" title="http://xmlns.com/foaf/0.1/Group">foaf:Group</a>) with a `name` (a <a href="http://xmlns.com/foaf/spec/#term_name" title="http://xmlns.com/foaf/0.1/name">foaf:name</a>).

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#group-result-schema">JSON Schema</a></li>
  <li><a href="#group-result-context">JSON-LD Context</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane active" id="group-result-schema" data-url="/schemas/group_result.json"></div>
  <div class="tab-pane" id="group-result-context" data-url="/contexts/group_result.jsonld"></div>
</div>

<h1 id="history">7. Change history</h1>

* 2022-11-10: Add a pronouns property to the Person class.
* 2017-05-27: Allow time zones in time values.
* 2017-02-20: Inherit `classification` from Event to VoteEvent.
* 2015-05-05: Add time components to the date properties of the Membership class.
* 2015-03-03: Use `schema:dissolutionDate` instead of `opengov:dissolutionDate`.
* 2015-03-02: Add an Event class.
* 2015-02-26: `name` is no longer a required property in `other_name.json`.
* 2014-12-21: Add one-line description and extended description properties to the Organization class.
* 2014-12-18: A Vote must have a VoteEvent.
* 2014-12-18: Add missing inverse embedding properties.
* 2014-12-15: Add an identifier property to the Motion class.
* 2014-12-14: Add a video property to the Speech class.
* 2014-11-23: Add a Speech class.
* 2014-10-28: A Membership need not have an organization if it has a post.
* 2014-06-22: Remove the object property from the Motion class.
* 2014-06-22: Add a group result property to the VoteEvent class.
* 2014-06-22: Add a group property to the Count class.
* 2014-06-22: Replace the context property with a legislative session property in the VoteEvent class.
* 2014-06-16: Remove the `object_id` property from the Motion class' JSON Schema.
* 2014-06-14: Add a classification property to the Motion class.
* 2014-06-14: Add organization and context properties to the VoteEvent class.
* 2014-06-14: Add a result property to the VoteEvent class.
* 2014-06-06: Rename the property `party` to `group` in the Vote class.
* 2014-05-09: Add a member property to the Membership class, to relate organizations to organizations.
* 2014-05-08: Add an Area class and a geographic area property to the Membership, Organization, and Post classes.
* 2014-05-08: Use `schema:validUntil` instead of `schema:validThrough`, for a meaning common to UK and US English.
* 2014-05-07: Add valid from and valid until properties to the ContactDetail class.
* 2014-05-07: Add an alternate label property to the Post class.
* 2014-05-06: Add Motion, VoteEvent, Count and Vote classes.
* 2014-03-28: Add name component properties to `opengov:OtherName`.
* 2014-02-10: `name` and `label` are no longer required properties in the JSON Schema.
* 2014-01-23: Add a national identity property to the Person class.
* 2013-10-14: Add a property to the Membership class for the organization on whose behalf the person is a party to the relationship.
* 2013-09-08: Add an image property to the Organization class.
* 2013-08-28: Add JSON-LD contexts.
* 2013-08-28: Use `schema:validFrom` and `schema:validThrough` instead of `org:memberDuring`.
* 2013-07-08: Add a label property to the Membership class.
* 2013-07-08: Add time of creation, time of modification, and source document metadata properties.
* 2013-06-20: Reorganize specification and implement feedback.
* 2013-02-28: Add requirement for dates to be stored in UTC.
* 2013-02-25: Add conformance requirements. Relax requirements with respect to MongoDB collection names.
* 2013-02-16: Add a label property to the Post class. Change the cardinality of the classification property of the Organization class.
* 2013-02-01: First public working draft.

[Browse all Git commits on GitHub](https://github.com/popolo-project/popolo-spec/commits/gh-pages)
