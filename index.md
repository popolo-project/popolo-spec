---
layout: default
title: The Popolo Project
---
<div class="page-header">
  <h1>The Popolo Project</h1>
</div>

This project's goal is to author, through community consensus, **international open government data specifications** relating to the legislative branch of government, so that civil society can spend less time transforming data and more time applying it to the problems they face. A related goal is to make it easier for civic developers to create government transparency, monitoring and engagement websites, by developing reusable open source components that implement the specifications. Although the data specification is designed primarily for open government use cases, many other use cases are supported.

<h2 id="principles">Principles</h2>

1. This project rigorously researches and studies existing specifications and reuses suitable existing work wherever possible. It looks for existing specifications that balance breadth of adoption with quality of modeling. It **prioritizes reuse over novelty**.

1. This specification satisfies a broad range of use cases, without requiring an exhaustive vocabulary of terms. It **focuses on flexibility** to do more with fewer terms.

1. A fact that many specifications overlook is that our knowledge of the world is imprecise and uncertain. This specification attempts, as much as possible, to make it easy to represent **real world data** while preserving clarity and meaning.

<div class="well well-white">
  <ul class="nav nav-tabs no-js">
    <li class="disabled"><a>Examples of imprecision and uncertainty:</a>
    <li class="active"><a href="#example-date">Imprecise date</a></li>
    <li><a href="#example-contact">Missing contact details</a></li>
    <li><a href="#example-sponsor">Ambiguous bill sponsor</a></li>
  </ul>

  <div class="tab-content">
    <div class="tab-pane active" id="example-date">
      A civil society organization doesn't know the precise date on which a legislator assumed office. Its legislative information service should nonetheless be able to publish an approximate date in that legislator's profile.
    </div>
    <div class="tab-pane" id="example-sponsor">
      When extracting the sponsors of a bill from a legislature's website, it isn't immediately possible to disambiguate a sponsor's name and link to the appropriate legislator or committee profile. A legislative information service should be able to publish the incomplete sponsor information, without having to first determine whether that information belongs to a legislator or a committee.
    </div>
    <div class="tab-pane" id="example-contact">
      A civil society organization has the phone number of a legislator; however, it doesn't know whether it is the capitol office number, the constituency office number or a mobile number. A data specification should be able to handle data at varying levels of detail.
    </div>
  </div>
</div>

## Process

The high-level specification development process is as follows:

1. Identify use cases and requirements for a specific [activity system](http://www.thoughtworks-studios.com/blog/stop-designing-users).
2. Research existing specifications that fulfill the use cases and requirements.
3. Author a specification and related documentation that respect the [principles](#principles).
4. Iteratively improve the specification.

Specification development works by an open process and by rough consensus. [Participation](#participation) is open and free to all.

## Specification

Jump to a section below or start at the [beginning](/specs/).

1. [Scope](/specs/#scope)
1. [Conformance](/specs/#conformance)
1. [Use cases & requirements](/specs/#use-cases-and-requirements)
1. [Standard reuse](/specs/#standard-reuse)
1. [Classes and properties](/specs/#classes-and-properties)
    1. People and organizations
        1. [Person](/specs/person.html): [Name Component](/specs/person/name-component.html)
        1. [Organization](/specs/organization.html)
        1. [Membership](/specs/membership.html)
        1. [Post](/specs/post.html)
        1. [Contact Detail](/specs/contact-detail.html)
    1. Geography
        1. [Area](/specs/area.html)
    1. Motions and voting
        1. [Motion](/specs/motion.html)
        1. [Vote Event](/specs/vote-event.html)
        1. [Count](/specs/count.html)
        1. [Vote](/specs/vote.html)
1. [Serialization](/specs/#serialization)
    1. [JSON schema and examples](/specs/#schema-and-examples)
    1. [Metadata serialization](/specs/#metadata-properties)
    1. [Embedded JSON documents](/specs/#embedded-json-documents)
    1. [JSON subschema](/specs/#subschema)
1. [Change history](/specs/#history)

**Appendices**

1. [Example Popolo JSON documents](/appendices/examples.html)
1. [Multilingualization](/appendices/multilingualization.html)
1. [Adding metadata](/appendices/adding-metadata.html)
1. [Handling duplicates](/appendices/handling-duplicates.html)
1. [Survey of existing specifications](/appendices/survey.html)
1. [Inventory of terms from the survey](/appendices/terms.html)
1. [Data model patterns](/appendices/data-patterns.html) (semantics, succinctness, edge cases)
1. [JSON serialization patterns](/appendices/json-patterns.html) (embedding, simplicity)
1. [Best practices for software components](/appendices/components.html) (document identifiers, database isolation)

<h2 id="participation">Participation</h2>

Participation is free and open to anyone. These documents are **Working Drafts**. Their governance roughly follows the [W3C process](http://www.w3.org/community/about/agreements/).

* Join the [W3C Open Government Community Group](http://www.w3.org/community/opengov/) and [subscribe to its mailing list](http://lists.w3.org/Archives/Public/public-opengov/) to discuss the project's development
* Visit the [GitHub repository](https://github.com/opennorth/popolo-spec/tree/gh-pages), discuss [open issues](https://github.com/opennorth/popolo-spec/issues), and create pull requests
* [Read Open North's blog post announcing the project](http://blog.opennorth.ca/2013/02/21/update-on-opengovernment/) for more context

Questions? Contact [james@opennorth.ca](mailto:james@opennorth.ca).

## Implementation

* [Pupa by Open Civic Data](https://github.com/opencivicdata/pupa): A Python package to create and validate civic data objects, underpinning the [Sunlight Foundation](http://sunlightfoundation.com/)'s work on government transparency at the local level.
* [PopIt by mySociety](https://npmjs.org/package/popit-api): A Node.js package to make it simple "to start and maintain a public database of people, organisations and positions," part of mySociety's work on reusable software components.
* [django-popolo by Openpolis](https://github.com/openpolis/django-popolo): A Django app that provides basic models and views for all classes in Popolo for use within a Django project or Openpolis' [REST API](https://github.com/openpolis/popolorest).
* [Pupa.rb by Open North](https://github.com/opennorth/pupa-ruby): A Ruby fork of Pupa that implements an Extract, Transform and Load (ETL) process to scrape data from online sources, transform it, and write it to a database.
* [Popolo Engine by Open North](https://github.com/opennorth/popolo-engine): A Ruby on Rails engine that provides basic models, controllers and views for all classes in Popolo.
