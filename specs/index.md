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
  <dt>Post</dt>
  <dd>
    <div>A position in an organization that exists independently of the person holding it</div>
    <p class="note">e.g. Member of Parliament for Avalon</p>
  </dd>
  <dt>Membership</dt>
  <dd>
    <div>A relationship between a person and an organization</div>
    <p class="note">e.g. member of the XYZ Party</p>
  </dd>
  <dt>Address</dt>
  <dd>
    <div>A physical location or a mail delivery point</div>
    <p class="note">e.g. <a href="https://en.wikipedia.org/wiki/White_House">The White House</a></p>
  </dd>
</dl>

<h1 id="conformance">2. Conformance</h1>

1. A conforming implementation <em class="rfc2119">may</em> use only a subset of this specification's terms.
1. It <em class="rfc2119">must not</em> use terms from outside this specification's terms where this specification's terms would suffice[<sup>2</sup>](#note2).
1. It <em class="rfc2119">may</em> use terms from outside this specification's terms where this specification's terms are insufficient.
1. Its usage of this specification's terms <em class="rfc2119">must</em> be consistent with the semantics of those terms.
1. If an implementation serializes to JSON, its serializations <em class="rfc2119">must</em> validate against this specification's JSON Schema.

<p class="note" id="note2">2. For example, it <em class="rfc2119">must not</em> use vCard's <code>fn</code> where this specification's <code>name</code> would suffice.</p>

<h1 id="use-cases-and-requirements">3. Use cases &amp; requirements</h1>

The data specification should:

1. Allow the use of imprecise dates [*[issue 7]*](https://github.com/opennorth/popolo-spec/issues/7).

    >Shakespeare was born in April 1564.

1. Have a permanent, unique identifier for each instance of the class.

    >e.g. a URL, an integer or a hex string.

The [subdocuments](#classes-and-properties) in a later section add more requirements.

<h1 id="standard-reuse">4. Standard reuse</h1>

The data specification imposes cardinality and range restrictions on some properties of other specifications, in order to allow for a simpler JSON serialization.

The [subdocuments](#classes-and-properties) in the next section describe specific standard reuse.

<h1 id="classes-and-properties">5. Classes and properties</h1>

The following subdocuments list use cases and requirements, report standard reuse, define classes and properties, describe serialization in-depth, and provide code lists:

1. [Person](/specs/person.html): [Name Component](/specs/person/name-component.html)
1. [Organization](/specs/organization.html)
1. [Post](/specs/post.html)
1. [Membership](/specs/membership.html)
1. [Contact Detail](/specs/contact-detail.html)

<h1 id="serialization">6. Serialization</h1>

Dates <em class="rfc2119">must</em> be stored in <abbr title="Coordinated Universal Time">UTC</abbr>. To allow for imprecise dates, the use of [ISO 8601:2004](http://www.iso.org/iso/catalogue_detail?csnumber=40874) reduced dates[<sup>1</sup>](#note1) is <em class="rfc2119">recommended</em>.

<abbr title="Resource Description Framework">RDF</abbr> serializations <em class="rfc2119">must</em> respect the classes and properties defined in the [subdocuments](#classes-and-properties) in the previous section. Example RDF documents are given in [Turtle notation](http://www.w3.org/TeamSubmission/turtle/).

<abbr title="JavaScript Object Notation">JSON</abbr> serializations <em class="rfc2119">must</em> respect the schemas below, which are given in [JSON Schema](http://json-schema.org/) (draft [v3](http://tools.ietf.org/html/draft-zyp-json-schema-03)). The schemas use [snake case](http://en.wikipedia.org/wiki/Snake_case) instead of [camel case](http://en.wikipedia.org/wiki/CamelCase), due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s.

<table>
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
      <td><a href="/schemas/post.json">Post</a></td>
      <td><a href="/examples/post.json">post.json</a></td>
      <td><a href="/examples/post.ttl">post.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/membership.json">Membership</a></td>
      <td><a href="/examples/membership.json">membership.json</a></td>
      <td><a href="/examples/membership.ttl">membership.ttl</a></td>
    </tr>
    <tr>
      <td><a href="/schemas/contact_detail.json">Contact Detail</a></td>
      <td><a href="/examples/contact_detail.json">contact_detail.json</a></td>
      <td><a href="/examples/contact_detail.ttl">contact_detail.ttl</a></td>
    </tr>
  </tbody>
</table>

<p class="note" id="note1">1. Consult the list of <a href="https://github.com/opennorth/popolo-spec/wiki/ISO-8601%3A2004-formats">reduced date formats</a>. <a href="http://www.w3.org/XML/Schema.html">XML Schema</a> supports <a href="http://www.w3.org/TR/xmlschema-2/#truncatedformats">reduced dates</a> such as <a href="http://www.w3.org/TR/xmlschema-2/#gYear"><code>YYYY</code></a> and <a href="http://www.w3.org/TR/xmlschema-2/#gYearMonth"><code>YYYY-MM</code></a>.</p>
<p class="note">Note: <a href="http://schema.org/">Schema.org</a> can be used for HTML serialization, but HTML serialization is out of scope.</p>

<h1 id="history">7. Change history</h1>

* 2013-06-20: Reorganize specification and implement feedback.
* 2013-02-28: Add requirement for dates to be stored in UTC.
* 2013-02-25: Add the conformance section, relax requirements with respect to MongoDB collection names.
* 2013-02-16: Add a label property to the Post class, change the cardinality of the classification property on the Organization class, add NIEM and ORG to the survey, add an inventory of the terms in the survey.
* 2013-02-01: First public working draft.
