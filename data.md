---
layout: standard
title: Data Specification
id: data
---

<h2 id="relations">2.4. Relations</h2>

[No one size fits all](http://www.w3.org/TR/vocab-org/#reporting_structure) in representing the relationship between people and organizations. In some cases, a simple binary relation is enough, e.g. a `memberOf` property that links a person to an organization. In other cases, a complex [n-ary relation](http://www.w3.org/TR/swbp-n-aryRelations/) is required, e.g. to describe the duration of the person's membership; in such cases, we create a new class to represent the relation, e.g. a Membership class, and attach properties like duration to it to describe the relationship between the person and the organization.

In some cases, it is relevant to represent the organizational structure independently of the people within that structure; for example, it is relevant to represent the position of the Member of Parliament for Avalon even when no one holds that position. A *Post* is such a position that exists independently of the person holding it.

A Post should not be confused with a *Role*, which describes a function that a person can fulfill. For example, people in different organizations can all fulfill the Role of CEO, but only one person can hold the Post of CEO at Apple Inc. Indeed, the Post of the MP for Avalon could be described as having the Role of MP.

The Membership and Post classes can't be merged. John Doe is an MP in the House of Commons. If using the Membership class to represent this relationship, then when John Doe leaves office, we would destroy the Membership instance connecting John Doe to the House of Commons – or set an `endDate` property to flag the Membership as historical. If using the Post class, then when John Doe leaves office, we would unset a `heldBy` property on the Post instance, which was previously set to John Doe[<sup>1</sup>](#note1). The Post would remain.

Now let John Doe be a member of the XYZ Party. It only makes sense to use the Membership class. If John Doe leaves the party, the instance used to describe his relationship to the party should not remain; the instance should either be destroyed or archived.

Given that a Membership and a Post behave differently in the same situation, like a person leaving office, and given that only one or the other behavior is appropriate in some cases, like party membership, a single class cannot express both Membership- and Post-style behaviors.

Some use cases may therefore require both Post and Membership classes to satisfy their requirements.

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
* The Organization ontology is the only vocabulary to meet all other [requirements](#use-cases-and-requirements).

For the Address class, vCard is the only vocabulary to meet all [requirements](#use-cases-and-requirements). In terms of relations, only the Organization ontology offers multiple ways to describe the relation between people and organizations. An [inventory of the terms in the survey](data/terms.html) is available.

<p class="note">Note: <a href="http://schema.org/">Schema.org</a> can nonetheless be used for HTML serialization, but HTML serialization is out of scope.</p>

<h2 id="restrictions">3.1 Restrictions</h2>

The data specification imposes cardinality and range restrictions on some properties of other standards, in order to allow for a simpler JSON serialization.

In vCard, each component of a name – family name, given name, additional name, honorific prefix and honorific suffix – can include multiple text values. Other vocabularies, including FOAF, do not restrict the cardinality of these properties either. Some, like OpenSocial, do. This data specification requires that each component of a name can include one text value only.

According to the Organization ontology, multiple people can hold a post, and either a person or an organization can hold a post; in this data specification, only a single *person* can hold a post. According to the Organization ontology, either a person or an organization can be a member of an organization; in this data specification, only a person can be a member of an organization. Unlike the Organization ontology, an organization may have only one classification in this data specification; implementations must choose a unique classification scheme.

The data specification is a [profile of the W3C organization ontology](http://www.w3.org/TR/vocab-org/#conformance).

**TODO: OWL file describing the restrictions**
