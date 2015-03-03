---
layout: class
title: Event | The Popolo Project
id: event
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Event</li>
</ul>

An event is an occurrence that people may attend.

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Event class should have properties for:

1. name

    >1st Session of the 41st Parliament

1. description

    >Parliament convened on June 2, 2011, with the election of Andrew Scheer as Speaker, followed the next day with the Speech from the Throne.

1. start date and time

    >June 2nd, 2011

1. end date and time

    >September 13, 2013

1. location

    >House of Commons

1. status

    >Confirmed

1. identifier

    >1

1. classification

    >[legislative session](http://en.wikipedia.org/wiki/Legislative_session)

1. the organization responsible for the event

    >Parliament of Canada

1. attendees

    >Members of Parliament

1. parent event

    >41st Parliament

<h1 id="standard-reuse">2. Standard reuse</h1>

Dublin Core, Schema.org and NEPOMUK Calendar Ontology terms are retained from the [inventory of terms](/appendices/terms.html#Speech).

<h2>2.1. Range restrictions</h2>

<p>According to Schema.org, an event can be organized and attended by either people or organizations; in this data specification, only organizations can organize events, and only people can attend events.</p>

<h1 id="classes-and-properties">3. Classes and properties</h1>

<table>
  <thead>
    <tr>
      <th width="130">Term</th>
      <th>Mapping</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr id="schema:Event">
      <td>Event</td>
      <td><code><a href="http://schema.org/Event" title="http://schema.org/Event">schema:Event</a></code></td>
      <td>An occurrence that people may attend</td>
    </tr>
    <tr id="schema:name">
      <td>name</td>
      <td><code><a href="http://schema.org/name" title="http://schema.org/name">schema:name</a></code></td>
      <td>The event's name</td>
    </tr>
    <tr id="schema:description">
      <td>description</td>
      <td><code><a href="http://schema.org/description" title="http://schema.org/description">schema:description</a></code></td>
      <td>The event's description</td>
    </tr>
    <tr id="schema:startDate">
      <td>start time</td>
      <td><code><a href="http://schema.org/startDate" title="http://schema.org/startDate">schema:startDate</a></code></td>
      <td>The time at which the event starts</td>
    </tr>
    <tr id="schema:endDate">
      <td>end time</td>
      <td><code><a href="http://schema.org/endDate" title="http://schema.org/endDate">schema:endDate</a></code></td>
      <td>The time at which the event ends</td>
    </tr>
    <tr id="schema:location">
      <td>location</td>
      <td><code><a href="http://schema.org/location" title="http://schema.org/location">schema:location</a></code></td>
      <td>The event's location</td>
    </tr>
    <tr id="schema:eventStatus">
      <td>status</td>
      <td><code><a href="http://schema.org/eventStatus" title="http://schema.org/eventStatus">schema:eventStatus</a></code></td>
      <td>The event's status</td>
    </tr>
    <tr id="dcterms:identifier">
      <td>identifier</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-identifier" title="http://purl.org/dc/terms/identifier">dcterms:identifier</a></code></td>
      <td>An issued identifier, e.g. an <a href="https://github.com/opencivicdata/ocd-division-ids/#readme">Open Civic Data Division Identifier</a></td>
    </tr>
    <tr id="ncal:categories">
      <td>classification</td>
      <td><code><a href="http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#categories" title="http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#categories">ncal:categories</a></code></td>
      <td>The event's category</td>
    </tr>
    <tr id="schema:organizer">
      <td>organization</td>
      <td><code><a href="http://schema.org/organizer" title="http://schema.org/organizer">schema:organizer</a></code></td>
      <td>The organization organizing the event</td>
    </tr>
    <tr id="schema:attendee">
      <td>attendee</td>
      <td><code><a href="http://schema.org/attendee" title="http://schema.org/attendee">schema:attendee</a></code></td>
      <td>A person attending the event</td>
    </tr>
    <tr id="schema:superEvent">
      <td>parent event</td>
      <td><code><a href="http://schema.org/superEvent" title="http://schema.org/superEvent">schema:superEvent</a></code></td>
      <td>An event that this event is a part of</td>
    </tr>
  </tbody>
</table>

<h1 id="serialization">4. Serialization</h1>

**JSON differences from other RDF serializations:**

* The value of the `location` property is a string, instead of a `schema:Place` or `schema:PostalAddress`.
* The term `status` is used instead of `eventStatus`, as the class name prefix is unnecessary and inconsistent with all other properties.
* The value of the `status` property is a string, instead of a `schema:EventStatusType`.
* The term `identifiers` is used instead of `identifier` and is serialized as an array of [identifier objects](/specs/#identifier).
* The term `classification` is used instead of `categories`, to be consistent with the [Organization](/specs/organization.html) class.
* The term `organization` is used instead of `organizer`, to be consistent with the [Membership](/specs/membership.html) class.
* The term `attendees` is used instead of `attendee`, to agree with the grammatical number of other properties.
* The term `parent` is used instead of `superEvent`, due to its popularity among <abbr title="object-relational mapper">ORM</abbr>s.

<ul class="nav nav-tabs no-js">
  <li><a href="#event-schema">JSON Schema</a></li>
  <li><a href="#event-context">JSON-LD Context</a></li>
  <li class="active"><a href="#event-json">JSON</a></li>
  <li><a href="#event-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="event-schema" data-url="/schemas/event.json"></div>
  <div class="tab-pane" id="event-context" data-url="/contexts/event.jsonld"></div>
  <div class="tab-pane active" id="event-json" data-url="/examples/event.json"></div>
  <div class="tab-pane" id="event-rdf" data-url="/examples/event.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

## Status

Implementations <em class="rfc2119">may</em> use values from outside the following lists.

The following is a copy of [RFC 5545 (iCalendar)](http://tools.ietf.org/html/rfc5545#section-3.8.1.11)'s code list.

* `cancelled`
* `confirmed`
* `tentative`

The following is a copy of Schema.org's [EventStatusType](http://schema.org/EventStatusType) enumeration.

* `cancelled`
* `postponed`
* `rescheduled`
