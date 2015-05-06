---
layout: class
title: Speech | Popolo
id: speech
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Speech</li>
</ul>

A speech, a scene (e.g. applause), a narrative (e.g. "The House rose at 3:20pm"), or another part of a transcript (e.g. a list of bills).

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

The Speech class should have properties for:

1. speaker

    >Alice checks what her representative said in favor of Bill No. 1.

1. the speaker's role while speaking

    >e.g. [Speaker](http://www.parl.gc.ca/about/house/speaker/role-e.html).

1. the attribution text identifying the speaker

    >e.g. to reproduce an exact copy of a transcript.

1. audience

    >Carol answers Bob's question from yesterday.

1. text

    >Order, please. We will now begin the daily routine.

1. audio

    >e.g. to capture the tone of the speech.

1. video

    >e.g. to capture the context of the speech.

1. the time at which the speech is spoken

    >January 1, 2013 at 12:30pm

1. title

    >Gettysburg Address

1. type

    >e.g. a speech, scene or narrative.

1. position

    >A representative interrupts another's speech with an interjection.

1. event

    >The last sitting of the 1st Session of the 41st Parliament.

<h1 id="standard-reuse">2. Standard reuse</h1>

Dublin Core, Schema.org, and BIBFRAME Vocabulary terms are retained from the [inventory of terms](/appendices/terms.html#Speech).

## 2.1. Range restrictions

Either a person or an organization can create a [CreativeWork](http://schema.org/CreativeWork). A Speech is a subclass of CreativeWork, and only a person can create a Speech.

In Dublin Core, an audience is an [AgentClass](http://dublincore.org/documents/dcmi-terms/#terms-AgentClass), that is, a group of people or organizations; in this data specification, an audience is a single person.

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
    <tr>
      <td>Speech</td>
      <td>No <code>rdf:type</code></td>
      <td>A speech, a scene, a narrative, or another part of a transcript</td>
    </tr>
    <tr id="schema:creator">
      <td>speaker</td>
      <td><code><a href="http://schema.org/creator" title="http://schema.org/creator">schema:creator</a></code></td>
      <td>The person who is speaking</td>
    </tr>
    <tr id="opengov:role">
      <td>role</td>
      <td><code title="http://www.w3.org/ns/opengov#role">opengov:role</code></td>
      <td>The speaker's role while speaking</td>
    </tr>
    <tr id="odrs:attributionText">
      <td>attribution text</td>
      <td><code><a href="http://schema.theodi.org/odrs/#prop_attributionText" title="http://schema.theodi.org/odrs#attributionText">odrs:attributionText</a></code></td>
      <td>The text identifying the speaker</td>
    </tr>
    <tr id="dcterms:audience">
      <td>audience</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-audience" title="http://purl.org/dc/terms/audience">dcterms:audience</a></code></td>
      <td>The person to whom the speaker is speaking</td>
    </tr>
    <tr id="schema:text">
      <td>text</td>
      <td><code><a href="http://schema.org/text" title="http://schema.org/text">schema:text</a></code></td>
      <td>The transcript or text of the speech</td>
    </tr>
    <tr id="schema:audio">
      <td>audio</td>
      <td><code><a href="http://schema.org/audio" title="http://schema.org/audio">schema:audio</a></code></td>
      <td>The audio recording of the speech</td>
    </tr>
    <tr id="schema:video">
      <td>video</td>
      <td><code><a href="http://schema.org/video" title="http://schema.org/video">schema:video</a></code></td>
      <td>The video recording of the speech</td>
    </tr>
    <tr id="dcterms:date">
      <td>date</td>
      <td><code><a href="http://dublincore.org/documents/dcmi-terms/#terms-date" title="http://purl.org/dc/terms/date">dcterms:date</a></code></td>
      <td>The time at which the speech is spoken</td>
    </tr>
    <tr id="schema:title">
      <td>title</td>
      <td><code><a href="http://schema.org/title" title="http://schema.org/title">schema:title</a></code></td>
      <td>A name given to the speech</td>
    </tr>
    <tr id="rdf:type">
      <td>type</td>
      <td><code><a href="http://www.w3.org/TR/rdf-schema/#ch_type" title="http://www.w3.org/1999/02/22-rdf-syntax-ns#type">rdf:type</a></code></td>
      <td>The type of the part of the transcript</td>
    </tr>
    <tr id="schema:position">
      <td>position</td>
      <td><code><a href="http://schema.org/position" title="http://schema.org/position">schema:position</a></code></td>
      <td>The position of the speech within a transcript</td>
    </tr>
    <tr id="bf:event">
      <td>event</td>
      <td><code><a href="http://bibframe.org/vocab/event" title="http://bibframe.org/vocab/event.html">bf:event</a></code></td>
      <td>The event at which the speech is spoken</td>
    </tr>
  </tbody>
</table>

<h1 id="serialization">4. Serialization</h1>

* The term `creator` is used instead of `speaker` (which would be clearer), to be consistent with the [Motion](/specs/motion.html) class.
* The value of the `role` property is a string, instead of an `org:Role`.
* The value of the `audio` property is a URI, instead of a `schema:AudioObject`.
* The value of the `video` property is a URI, instead of a `schema:VideoObject`.

<ul class="nav nav-tabs no-js">
  <li><a href="#speech-schema">JSON Schema</a></li>
  <li><a href="#speech-context">JSON-LD Context</a></li>
  <li class="active"><a href="#speech-json">JSON</a></li>
  <li><a href="#speech-rdf">RDF</a></li>
</ul>

<div class="tab-content no-js">
  <div class="tab-pane" id="speech-schema" data-url="/schemas/speech.json"></div>
  <div class="tab-pane" id="speech-context" data-url="/contexts/speech.jsonld"></div>
  <div class="tab-pane active" id="speech-json" data-url="/examples/speech.json"></div>
  <div class="tab-pane" id="speech-rdf" data-url="/examples/speech.ttl"></div>
</div>

<h1 id="code-lists">5. Code lists</h1>

Implementations <em class="rfc2119">may</em> use values from outside the following lists.

## Role

* `chair`
* `speaker`

## Classification

The following is a copy of [Akoma Ntoso](http://examples.akomantoso.org/categorical.html#ANcontainersEG) containers.

* `speech`
* `question`
* `answer`
* `scene`: a scene description of events, e.g. applause.
* `narrative`: a third-person description of events, e.g. "The Speaker leaves the Chair."
* `summary`: a summary of speeches that are individually not interesting, e.g. "Question put and agreed to."
* `other`
