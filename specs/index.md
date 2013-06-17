---
layout: specification
title: Data Specification | The Popolo Project
id: spec
---

<h1 id="scope">1. Scope</h1>

The data specification will describe the entities below and the relations between them:

<dl>
  <dt><a href="/specs/person.html">Person</a></dt>
  <dd>
    <div>A real <a href="http://en.wikipedia.org/wiki/Person">person</a>, alive or dead</div>
    <p class="note">e.g. <a href="http://en.wikipedia.org/wiki/William_Shakespeare">William Shakespeare</a></p>
  </dd>
  <dt><a href="/specs/organization.html">Organization</a></dt>
  <dd>
    <div>A collection of people with a common purpose or reason for existence that goes beyond the set of people belonging to it</div>
    <p class="note">e.g. a social, commercial or political structure</p>
  </dd>
  <dt><a href="/specs/post.html">Post</a></dt>
  <dd>
    <div>A position in an organization that exists independently of the person holding it</div>
    <p class="note">e.g. Member of Parliament for Avalon</p>
  </dd>
  <dt><a href="/specs/membership.html">Membership</a></dt>
  <dd>
    <div>A relationship between a person and an organization</div>
    <p class="note">e.g. member of the XYZ Party</p>
  </dd>
  <dt><a href="/specs/address.html">Address</a></dt>
  <dd>
    <div>A physical location or a mail delivery point</div>
    <p class="note">e.g. <a href="https://en.wikipedia.org/wiki/White_House">The White House</a></p>
  </dd>
</dl>

The data specification will define <abbr title="JavaScript Object Notation">JSON</abbr> and <abbr title="Resource Description Framework">RDF</abbr> serializations of the entities above.

<h1 id="conformance">2. Conformance</h1>

The key words <em class="rfc2119">must</em>, <em class="rfc2119">must not</em>, <em class="rfc2119">should</em>, <em class="rfc2119">should not</em> and <em class="rfc2119">may</em> are to be interpreted as described in [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. A conforming implementation <em class="rfc2119">may</em> use only a subset of this specification's terms.
1. It <em class="rfc2119">must not</em> use terms from outside this specification's terms where this specification's terms would suffice[<sup>1</sup>](#note1).
1. It <em class="rfc2119">may</em> use terms from outside this specification's terms where this specification's terms are insufficient.
1. Its usage of this specification's terms <em class="rfc2119">must</em> be consistent with the semantics of those terms.
1. If an implementation serializes to JSON, its serializations <em class="rfc2119">must</em> validate against this specification's JSON Schema.

<p class="note" id="note1">1. For example, it <em class="rfc2119">must not</em> use vCard's <code>fn</code> where this specification's <code>name</code> would suffice.</p>

<h1 id="history">3. Change history</h1>

* 2013-06-17: Reorganize specification and implement feedback.
* 2013-02-28: Add requirement for dates to be stored in UTC.
* 2013-02-25: Add the conformance section, relax requirements with respect to MongoDB collection names.
* 2013-02-16: Add a label property to the Post class, change the cardinality of the classification property on the Organization class, add NIEM and ORG to the survey, add an inventory of the terms in the survey.
* 2013-02-01: First public working draft.
