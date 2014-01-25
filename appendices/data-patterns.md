---
layout: default
title: Data Model Patterns | The Popolo Project
id: appendix
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li>Appendices</li>
  <li class="active">Data model patterns</li>
</ul>

This document collects some emerging patterns for data modeling. If you are developing your own data model, you may benefit from reading the different solutions to the use cases and requirements discussed below.

* [Be semantic](#semantic)
* [Be concise](#concise)
* [Limit the number of classes](#limit-classes)
* [Represent a property with an unknown value or no value](#unknown-or-null)

<h1 id="semantic">Be semantic</h1>

**A term should communicate its meaning**; its usage should be clear from its name alone. For example, as in the case of a [membership](/specs/membership.html), using the generic `start_date` and `end_date` terms makes sense, because a membership starts and ends. However, in most cases, generic terms are not recommended, because they are either inappropriate or ambiguous.

For example, people and organizations do not start and end, so the generic terms are *inappropriate*; the terms `birth_date`, `death_date`, `founding_date` and `dissolution_date` are preferred.

For a political division, the term `start_date` may refer to either the date on which the division was created or the date on which the division came into force, and is therefore *ambiguous*; the terms `creation_date` and `coming_into_force_date` are unambiguous.

After choosing the properties of a class, you may realize that the term for the class is inappropriate. For example, legislative texts are available in multiple formats, like HTML and PDF. If you only need a `url` property for each formatted document, the term `links` may seem appropriate to describe the relation between the text and its formatted documents, e.g.:

```json
{
  "title": "A bill to amend the Income Tax Act",
  "text": "Lorum ipsum dolor sit amet ...",
  "links": [
    {
      "url": "http://example.com/legislation/123.html"
    },
    {
      "url": "http://example.com/legislation/123.pdf"
    }
  ]
}
```

In response to new use cases, you add a `content_type` property for each formatted document, whose value is `text/html` or `application/pdf`. However, a link does not have a content type; only the linked resource has a content type. Therefore, a term like `distributions` would be more appropriate than the term `links` to describe the relation, e.g.:

```json
{
  "title": "A bill to amend the Income Tax Act",
  "text": "Lorum ipsum dolor sit amet ...",
  "distributions": [
    {
      "url": "http://example.com/legislation/123.html",
      "content_type": "text/html"
    },
    {
      "url": "http://example.com/legislation/123.pdf",
      "content_type": "application/pdf"
    }
  ]
}
```

<h1 id="concise">Be concise</h1>

**Use fewer terms where possible.** For example, an event may have many possible states: tentative, confirmed and cancelled.[<sup>1</sup>](#note1)

If the states are disjoint – i.e. if it's impossible to be in two states at once – you only need a single `status` property whose possible values are `tentative`, `confirmed` or `cancelled`:

```json
{
  "summary": "Open Data Day",
  "start_date": "2013-02-23",
  "end_date": "2013-02-24",
  "status": "confirmed"
}
```

It would be verbose to instead have a boolean property for each state, i.e. to have three properties `tentative`, `confirmed` and `cancelled` whose possible values are `true` or `false`:

```json
{
  "summary": "Open Data Day",
  "start_date": "2013-02-23",
  "end_date": "2013-02-24",
  "tentative": false,
  "confirmed": true,
  "cancelled": false
}
```

Furthermore, if the states are disjoint, using a single `status` property ensures that an event is never both `tentative` and `confirmed`. Using multiple boolean properties, it is possible for an event to be invalid by having more than one property set to `true`.

<p class="note" id="note1">1. These event states are from the <a href="http://tools.ietf.org/html/rfc5545#section-3.8.1.11">iCalendar specification</a>.</p>

<h1 id="limit-classes">Limit the number of classes</h1>

When creating an ontology, **resist the urge to name all the things**. For example, the [MUNI Ontology](http://vocab.muni-ontology.org) used by [Citizen DAN](http://demo.citizen-dan.org/) has 2669 classes and 121 properties. It includes 23 classes for musical styles, including Chinese and Japanese music. It would be easy to add another 200-plus classes to represent the musical style of each country in the world, at the expense of significantly increasing the complexity of the ontology and the time it takes to learn and adopt it. An approach that favors classes, like this one, obliges an ontology to continously add new classes, in order to have a comprehensive list of musical styles, for example.

An alternative approach, which drastically simplifies an ontology, is to have a single property `musical_style` instead of 23 or more classes as above. The [Organization ontology](http://www.w3.org/TR/vocab-org/) discusses each approach with respect to classifying organizations. It proposes two strategies: either create subclasses of [Organization](http://www.w3.org/TR/vocab-org/#org:Organization), or use the `classification` property. Its guidance is:

>If the classification is not intrinsic to the organization but simply some way to group organizations, for example as part of a directory, then `org:classification` should be used. If the classification is a reflection of the intrinsic nature of the organization and affects other properties then the sub-class approach should be used. For example, only charities have charity numbers so it would be better to represent a charity as a sub-class of `org:FormalOrganization` rather than via a taxonomic labelling.

In other words, subclasses should only be used if the benefits – for example, being able to add class-specific properties – outweigh the complexity. In the organization classification example, it is of no use to create the classes `Partnership`, `LimitedCompany`, `UnlimitedCompany`, etc. if all these classes behave the same way in your use case. It is simpler to use the `classification` property in that case.

It is very important to identify a reasonable set of use cases and requirements before creating an ontology. Without use cases and requirements to guide its development, an ontology risks becoming a catalog of all things that exist: a list of nouns (classes) that occur within the field of interest. An ontology that focuses on use cases is more likely to have a small number of terms, which include only those necessary to fulfill its use cases.

<h1 id="unknown-or-null">A property with an unknown value or no value</h1>

It is sometimes useful to distinguish between the following cases for a given resource and property. In the context of the resource:

1. The property is known to be applicable, but its value is unknown, e.g. [Herodotus](http://en.wikipedia.org/wiki/Herodotus)' birth date.

1. The property is known to be inapplicable, and no value is appropriate, e.g. a living person's death date.

In each case, the value is absent, but for different reasons. Two approaches exist to disambiguate the two: one using [sentinel values](http://en.wikipedia.org/wiki/Sentinel_value) (or markers), like `NULL`, another addressing the problem at the schema level. In most use cases, however, it's not important to distinguish between the two.

In general, if, for a given resource, a property is applicable but its value is unknown, do not make any statements about its value. This approach is consistent with the <a href="https://en.wikipedia.org/wiki/Open_world_assumption">open world assumption</a> used by RDF, according to which the absence of a particular statement implies nothing about the world; its absence implies only that the truth value of that statement is unknown, which is the desired interpretation.

## Marker strategy

<abbr title="Structured Query Language">SQL</abbr> implements a three-valued logic, in which the truth values are *true*, *false* or *unknown*. In SQL, [`NULL`](https://en.wikipedia.org/wiki/Null_\(SQL\)) means "unknown"; it is not a value, but rather a marker indicating the absence of value. `NULL` does not indicate the reason for this absence of value, however; as such, `NULL` cannot disambiguate between the two cases above. In an attempt to address this problem, [E. F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd), the creator of the relational database model, proposed two new markers to stand for "applicable but unknown" and "inapplicable", effectively requiring a four-valued logic.

Like SQL, most programming languages and data models implement at most three-valued logic. Instead of relying on a native implementation of four-valued logic, strings, classes and [blank nodes](http://en.wikipedia.org/wiki/Blank_node) can be used as markers in practice.

<h3 id="markers-using-strings">Using strings</h3>

<abbr title="National Aeronautics and Space Administration">NASA</abbr>'s [Planetary Data System (PDS)](http://pds.jpl.nasa.gov/tools/standards-reference.shtml) uses the strings ["N/A", "UNK" and "NULL"](http://pds.jpl.nasa.gov/documents/sr/Chapter17.pdf) as markers to stand for "not applicable", "permanently unknown" and "temporarily unknown". You may choose your own strings to indicate as many reasons as you need for an absence of value.

Unfortunately, using strings as markers is problematic. Markers must receive special handling to ensure expected behavior. In SQL, for example, the marker `NULL` is not equal to `NULL`; one unknown is not equal to another unknown. Take for example <cite>Beowulf</cite>, a book by an unknown author, whose its author would be set to `NULL` in a SQL table. Querying for books by the same author would return zero results:

    SELECT * FROM books WHERE author = NULL

If you want to find all books by unknown author<u>s</u>, which is a different question, the query would be:

    SELECT * FROM books WHERE author IS NULL

Unlike `NULL`, the custom string marker "UNK" is equal to itself. Performing the first query above against a table that uses "UNK" instead of `NULL` would return all books by unknown authors, instead of returning zero results:

    SELECT * FROM books WHERE author = "UNK"

This result is incorrect; it isn't true that the author of <cite>Beowulf</cite> is the author of all books by unknown authors! This is only one of many cases in which markers like `NULL` receive special handling. To handle string markers appropriately, you would have to implement considerable additional logic.

<h3 id="markers-using-blank-nodes">Using blank nodes</h3>

In RDF, [blank nodes](http://www.w3.org/TR/rdf-mt/#unlabel) indicate the existence of a thing, without using, or saying anything about, the name of that thing. Therefore, you can write:

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#blank-rdf">RDF</a></li>
  <li><a href="#blank-json">JSON</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="blank-rdf">
    <pre><code>ex:beowulf ex:author [] .</code></pre>
  </div>
  <div class="tab-pane" id="blank-json">
    <pre><code class="highlight" data-lang="json">{
  "@id": "ex:beowulf",
  "ex:author": {}
}</code></pre>
  </div>
</div>

which states that <cite>Beowulf</cite> has an author, while saying nothing about the author. Unlike a string, a blank node is not equal to another blank node, preserving the logic of `NULL` described above, which is that one unknown is not equal to another unknown.

Note that when using a blank node, it's possible to say something about an author, without naming the author. For example, the author of <cite>Beowulf</cite> was, in all likelihood, a person. Therefore, you can write:

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#blank-data-rdf">RDF</a></li>
  <li><a href="#blank-data-json">JSON</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="blank-data-rdf">
    <pre><code>ex:beowulf ex:author [ a foaf:Person ] .</code></pre>
  </div>
  <div class="tab-pane" id="blank-data-json">
    <pre><code class="highlight" data-lang="json">{
  "@id": "ex:beowulf",
  "ex:author": { "@type": "foaf:Person" }
}</code></pre>
  </div>
</div>

<h3 id="markers-using-classes">Using classes</h3>

To describe the relationship between a politician and a political party, the [Organization ontology](http://www.w3.org/TR/vocab-org/) offers a [`memberOf`](http://www.w3.org/TR/vocab-org/#property-memberof) property, whose range is [`Organization`](http://www.w3.org/TR/vocab-org/#org:Organization). In other words, the property maps a person to an organization, for example:

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#member-rdf">RDF</a></li>
  <li><a href="#member-json">JSON</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="member-rdf">
    <pre><code>ex:john org:memberOf ex:xyz-party .</code></pre>
  </div>
  <div class="tab-pane" id="member-json">
    <pre><code class="highlight" data-lang="json">{
  "@id": "ex:john",
  "org:memberOf": "ex:xyz-party"
}</code></pre>
  </div>
</div>

In many democracies, it is common to elect a candidate who belongs to no political party. To disambiguate a candidate with no party affiliation from a candidate whose party affiliation is unknown, change the range of the `memberOf` property to be the union of the `Organization` class and a new marker class that stands for "no party", using [<abbr title="Web Ontology Language">OWL</abbr>](http://www.w3.org/TR/owl2-primer/):

```
org:memberOf rdfs:domain [ owl:unionOf (org:Organization ex:Independent) ]
```

You may then publish data on independent candidates, like:

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#member-marker-rdf">RDF</a></li>
  <li><a href="#member-marker-json">JSON</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="member-marker-rdf">
    <pre><code>ex:john org:memberOf ex:Independent .</code></pre>
  </div>
  <div class="tab-pane" id="member-marker-json">
    <pre><code class="highlight" data-lang="json">{
  "@id": "ex:john",
  "org:memberOf": "ex:Independent"
}</code></pre>
  </div>
</div>

As with string markers, querying for all candidates belonging to the same party (`ex:Independent`) as an independent member, using [SPARQL](http://en.wikipedia.org/wiki/SPARQL) for example, would returns all independent candidates, which is incorrect:

    SELECT ?person WHERE {
      ?person org:memberOf ex:Independent .
    }

To correct this problem, you may change the query template to limit the results to candidates belonging to an organization, which in this case will return zero results, because `ex:Independent` is not an organization, but a marker for "no party":

    SELECT ?person WHERE {
      ?person org:MemberOf ?organization .
      ?organization a org:Organization .
      FILTER (?organization = ex:Independent)
    }

This approach is effective but inefficient, as it requires creating a marker for most classes, and not always feasible, as it requires changing the range of properties which may be defined by third-party ontologies.

## Schema strategy

Instead of introducing a new truth value every time there is a new reason for an absence of value, you should avoid `NULL` and markers altogether. You should not make a statement like "Herodotus was born on \<unknown\>" when the value of a property is unknown, or "John Doe died on \<not applicable\>" when a property is inapplicable, as you would if using `NULL`. Instead, state the reason for which the property is absent. For example, if John is alive, and a `death_date` property is therefore inapplicable, you may first, for example, either state that John belongs to the class `Alive`:

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#class-rdf">RDF</a></li>
  <li><a href="#class-json">JSON</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="class-rdf">
    <pre><code>ex:john rdf:type ex:Alive .</code></pre>
  </div>
  <div class="tab-pane" id="class-json">
    <pre><code class="highlight" data-lang="json">{
  "@id": "ex:john",
  "@type": "ex:Alive"
}</code></pre>
  </div>
</div>

Or state that the property `alive` has the value `true` for John:

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#property-rdf">RDF</a></li>
  <li><a href="#property-json">JSON</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="property-rdf">
    <pre><code>ex:john ex:alive true .</code></pre>
  </div>
  <div class="tab-pane" id="property-json">
    <pre><code class="highlight" data-lang="json">{
  "@id": "ex:john",
  "ex:alive": true
}</code></pre>
  </div>
</div>

Second, using [<abbr title="Web Ontology Language">OWL</abbr>](http://www.w3.org/TR/owl2-primer/) for example, you may state that instances of the class `Alive` cannot have a value for the property `death_date` – in other words, that live people cannot have a death date:

    # Live people are the class of people whose "alive" property is set to true.
    :Alive owl:equivalentClass [
      a owl:Class ;
      owl:intersectionOf (
        foaf:Person
        [
          a owl:Restriction ;
          owl:onProperty :alive ;
          owl:hasValue true .
        ]
      )
    ] .

    # Dead people are the class of people whose "alive" property is set to false.
    :Dead owl:equivalentClass [
      a owl:Class ;
      owl:intersectionOf (
        foaf:Person
        [
          a owl:Restriction ;
          owl:onProperty :alive ;
          owl:hasValue false .
        ]
      )
    ] .

    # A person cannot be both alive and dead.
    :Alive owl:disjointWith :Dead .

    # The death_date property can only be set for a dead person.
    :death_date rdfs:domain :Dead .

In this way, it is possible to use a [semantic reasoner](http://en.wikipedia.org/wiki/Semantic_reasoner) to infer the reason for which a value is absent. For a live person, if the `death_date` property is absent, it is because live people cannot have a death date. For a dead person, if the `death_date` property is absent, it is because the death date is unknown. This approach is effective but inefficient, as it requires writing rules for each property.

### Revisiting the independent candidate example

We can use the schema strategy in the [independent candidate example](#markers-using-classes) above to disambiguate a candidate with no party affiliation from a candidate whose party affiliation is unknown. First, create a property `independent` whose possible values are `true` or `false`, which can be set on either the candidate or their candidacy. Then, using OWL, state that instances of the class `Nonpartisan` cannot have a value for the property `memberOf` that is a `Party` – in other words, that independent candidates cannot be members of parties:

    # Partisanship is belonging to a party.
    _:partisanship a owl:Restriction ;
      owl:onProperty org:memberOf ;
      owl:someValuesFrom :Party .

    # Nonpartisanship is not belonging to any party.
    _:nonpartisanship a owl:Class ;
      owl:complementOf _:partisanship .

    # Partisan people have a membership in a party, and have an "independent" property set to false.
    :Partisan
      owl:equivalentClass [
        a owl:Class ;
        owl:intersectionOf (
          foaf:Person
          _:partisanship
        ) .
      ] , [
        a owl:Class ;
        owl:intersectionOf (
          foaf:Person
          [
            a owl:Restriction ;
            owl:onProperty :independent ;
            owl:hasValue false .
          ]
        )
      ] .

    # Nonpartisan people have no memberships in any party, and have an "independent" property set to true.
    :Nonpartisan
      owl:equivalentClass [
        a owl:Class ;
        owl:intersectionOf (
          foaf:Person
          _:nonpartisanship
        ) .
      ] , [
        a owl:Class ;
        owl:intersectionOf (
          foaf:Person
          [
            a owl:Restriction ;
            owl:onProperty :independent ;
            owl:hasValue true .
          ]
        )
      ] .

    # A person cannot be both nonpartisan and partisan.
    :Nonpartisan owl:disjointWith :Partisan .

It is now possible, as before, to use a semantic reasoner to infer the reason for which a value is absent. For a partisan candidate, if no `memberOf` property maps the candidate to a party, it is because the party membership is unknown. For an independent candidate, if no `memberOf` property maps the candidate to a party, it is because independent candidates cannot be members of parties. In your data, you would state that a candidate belongs to the class `Nonpartisan`:

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#candidate-class-rdf">RDF</a></li>
  <li><a href="#candidate-class-json">JSON</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="candidate-class-rdf">
    <pre><code>ex:john rdf:type ex:Nonpartisan .</code></pre>
  </div>
  <div class="tab-pane" id="candidate-class-json">
    <pre><code class="highlight" data-lang="json">{
  "@id": "ex:john",
  "@type": "ex:Nonpartisan"
}</code></pre>
  </div>
</div>

Or state that the property `independent` has the value `true` for a candidate:

<ul class="nav nav-tabs no-js">
  <li class="active"><a href="#candidate-property-rdf">RDF</a></li>
  <li><a href="#candidate-property-json">JSON</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="candidate-property-rdf">
    <pre><code>ex:john ex:independent true .</code></pre>
  </div>
  <div class="tab-pane" id="candidate-property-json">
    <pre><code class="highlight" data-lang="json">{
  "@id": "ex:john",
  "ex:independent": true
}</code></pre>
  </div>
</div>
