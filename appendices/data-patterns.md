---
layout: default
title: Data Model Patterns | The Popolo Project
id: data-patterns
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a> <span class="divider">/</span></li>
  <li>Appendices <span class="divider">/</span></li>
  <li class="active">Data model patterns</li>
</ul>

This document collects some emerging patterns for data modeling. If you are developing your own data model, you may benefit from reading the different solutions to the use cases and requirements discussed below.

* [Be semantic](#semantic)
* [Be concise](#concise)
* [Plan for failure modes](#failure-modes)
* [Allow the use of dummy values](#dummy-values)
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

<h1 id="unknown-or-null">A property with an unknown value or no value</h1>

It is sometimes useful to distinguish between the following cases for a given resource and property. In the context of the resource:

1. The value of the property is unknown, e.g. [Herodotus](http://en.wikipedia.org/wiki/Herodotus)' birth date.

1. The property is known to be inapplicable and to have no value, e.g. a living person's death date.

In both cases, the value is absent, but for different reasons. In the first case, the property is applicable, but its value is unknown; in the second case, the property is inapplicable, and no value is appropriate. Two approaches exist to disambiguate the two. One uses [sentinel values](http://en.wikipedia.org/wiki/Sentinel_value) (or markers), like `NULL`. Another addresses the problem at the level of the schema.

In most use cases, however, it is not important to distinguish between the two cases.

## Marker strategy

<abbr title="Structured Query Language">SQL</abbr> implements a three-valued logic, in which the truth values are *true*, *false* or *unknown*. In SQL, [`NULL`](https://en.wikipedia.org/wiki/Null_\(SQL\)) means "unknown"; it is not a value, but rather a marker indicating the absence of value. `NULL` does not indicate the reason for this absence of value, however; as such, `NULL` cannot disambiguate between the two cases above. In an attempt to address this problem, [E. F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd), the creator of the relational database model, proposed two new markers to stand for "applicable but unknown" and "inapplicable", effectively requiring a four-valued logic.

Like SQL, most programming languages and data models implement at most three-valued logic. Instead of relying on a native implementation of four-valued logic, strings can be used as markers in practice. For example, <abbr title="National Aeronautics and Space Administration">NASA</abbr>'s [Planetary Data System (PDS)](http://pds.jpl.nasa.gov/tools/standards-reference.shtml) uses the strings ["N/A", "UNK" and "NULL"](http://pds.jpl.nasa.gov/documents/sr/Chapter17.pdf) to stand for "not applicable", "permanently unknown" and "temporarily unknown". You may choose your own strings to indicate as many reasons as you need for an absence of value.

Unfortunately, using strings as markers is problematic. Markers must receive special handling to ensure the expected behavior. In SQL, for example, `NULL` is not equal to `NULL`; one unknown is not equal to another unknown. If you have a record for a book by an unknown author, querying for other books by the same author will return zero results, thanks to this special handing:

    SELECT * FROM books WHERE author = NULL

If you want to find all books by unknown authors, which is a different question, the query would be:

    SELECT * FROM books WHERE author IS NULL

On the other hand, in SQL, the string marker "UNK" is equal to itself, unlike `NULL`. Performing the same query as above against a database that uses a custom "UNK" marker instead of `NULL` will return all books by unknown authors, instead of returning zero results:

    SELECT * FROM books WHERE author = "UNK"

This result is not desirable, and it is only one example of the many cases in which markers like `NULL` must receive special handling. To handle custom markers appropriately, you would have to add considerable additional logic to your implementation.

## Schema strategy

Instead of introducing a new truth value every time there is a new reason for an absence of value, you should avoid `NULL` and markers altogether. You should not make a statement like "Herodotus was born on \<unknown\>" when the value of a property is unknown, or "John Doe died on \<not applicable\>" when a property is inapplicable, as you would if using `NULL` in your data model.

Instead, state the reason for which the property is inapplicable. For example, if John is alive, and a `death_date` property is therefore inapplicable, you may first, for example, either state that John belongs to the class `Alive`:

```
ex:john rdf:type ex:Alive .
```

```json
{
  "@id": "ex:john",
  "@type": "ex:Alive"
}
```

Or state that the property `alive` has the value `true` for John:

```
ex:john ex:alive true .
```

```json
{
  "@id": "ex:john",
  "ex:alive": true
}
```

Second, using [<abbr title="Web Ontology Language">OWL</abbr>](http://www.w3.org/TR/owl2-primer/) for example, you may state that instances of the class `Alive` cannot have a value for the property `death_date` (i.e. live people cannot have a death date):

    # Live people are the class of people whose "alive" property is set to true.
    :Alive rdfs:subClassOf foaf:Person ;
      a owl:Restriction ;
      owl:onProperty :alive ;
      owl:hasValue true .

    # Dead people are the class of people whose "alive" property is set to false.
    :Dead rdfs:subClassOf foaf:Person ;
      a owl:Restriction ;
      owl:onProperty :alive ;
      owl:hasValue false .

    # A person cannot be both alive and dead.
    :Alive owl:disjointWith :Dead .

    # The death_date property can only be set for a dead person.
    :death_date rdfs:domain :Dead .

If, for a given resource, a property is applicable but its value is unknown, simply do not make any statements about its value. This approach is consistent with the <a href="https://en.wikipedia.org/wiki/Open_world_assumption">open world assumption</a> used by RDF, in which the absence of a particular statement implies nothing about the world; its absence implies only that the truth value of the statement is unknown, which is the desired interpretation.
