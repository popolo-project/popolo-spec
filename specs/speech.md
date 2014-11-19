---
layout: class
title: Speech | The Popolo Project
id: speech
---

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
  <li class="active">Speech</li>
</ul>

A speech by a person, a scene (e.g. applause), a narrative (e.g. "The House rose at 3:20pm"), or another non-speech part of a discussion (e.g. a list of bills).

<h1 id="use-cases-and-requirements">1. Use cases &amp; requirements</h1>

1. speaker

    >Alice reads what her representative said about Bill No. 1.

1. speaker label

    >The representation of the speaker may change according to the speaker's role.

1. addressee

    >One representative answers another's question.

1. text

    >Order, please. We will now begin the daily routine.

1. audio

    >An audio recording of the speech captures the nuances of the speech.

1. start time

    >January 1, 2013 at 12:30pm

1. end time

    >January 1, 2013 at 12:45pm

1. the speaker's role

    >A representative speaks as chair of the committee.

1. classification

    >e.g. a question, answer or narrative.

1. position

    >A representative interrupts another's speech with an interjection.

1. title

    >Speaker's Ruling

1. collection

    >Public Bills for Third Reading

<h1 id="standard-reuse">2. Standard reuse</h1>

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
    <tr id="gn:Feature">
      <td>Speech</td>
      <td><code><a href="" title=""></a></code></td>
      <td></td>
    </tr>
  </tbody>
</table>

<h1 id="serialization">4. Serialization</h1>

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
