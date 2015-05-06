---
layout: default
title: Multilingualization | Popolo
id: appendix
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li>Appendices</li>
  <li class="active">Multilingualization</li>
</ul>

## 1. Negotiate the client's preferred language

Most APIs with multilingual support allow clients to specify which natural languages are preferred using the [Accept-Language](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4) HTTP header. For example, `Accept-Language: fr, en` means the client prefers French but will accept English. If no Accept-Language header is present, the API assumes that all languages are equally acceptable.

## 2. Respond with content in a preferred language

As demonstrated in the following subsection, in all except <abbr title="JavaScript Object Notation">JSON</abbr> formats, it is easy for an API to respond with content in all available languages and for clients to parse the content consistently, because there is a unique, standard approach to language tagging in those formats.

Until a unique, standard approach to language tagging emerges for JSON, to simplify the JSON response, if no Accept-Language header is present, the API should respond with content in the single, default language. If an Accept-Language header is present, it should respond with content in a preferred language where possible, and use the default language otherwise.

## 3. Indicate the language of a string

* <abbr title="Extensible Markup Language">XML</abbr> uses the [`xml:lang`](http://www.w3.org/TR/REC-rdf-syntax/#section-Syntax-languages) attribute, for example:

    ```
    <rdfs:label xml:lang="en">cat</rdfs:label>
    <rdfs:label xml:lang="fr">chat</rdfs:label>
    ```

* <abbr title="HyperText Markup Language">HTML</abbr> uses the [`lang`](http://www.w3.org/TR/rdfa-in-html/#specifying-the-language-for-a-literal) or `xml:lang` attributes, for example:

    ```
    <span lang="en">cat</span>
    <span lang="fr">chat</span>
    ```

* [<abbr title="Notation 3">N3</abbr>](http://en.wikipedia.org/wiki/Notation_3), [Turtle](http://www.w3.org/TR/turtle/) and [N-Triples](http://www.w3.org/TR/n-triples/) use [language tags](http://tools.ietf.org/html/rfc3066), for example:

    ```
    "cat"@en
    "chat"@fr
    ```

* [JSON-LD](http://json-ld.org/spec/latest/json-ld/) offers [several ways](http://json-ld.org/spec/latest/json-ld/#string-internationalization) to indicate the language of a string, whether by:

    * using a value object:

        ```json
        {
          "rdfs:label": [
            {
              "@value": "cat",
              "@language": "en"
            },
            {
              "@value": "chat",
              "@language": "fr"
            }
          ]
        }
        ```

    * using a language map:

        ```json
        {
          "@context": {
            "rdfs:label": { "@container": "@language" }
          },
          "rdfs:label": {
            "en": "cat",
            "fr": "chat"
          }
        }
        ```

    * associating a language with a term

        ```json
        {
          "@context": {
            "label_en": { "@id": "rdfs:label", "@language": "en" },
            "label_fr": { "@id": "rdfs:label", "@language": "fr" }
          },
          "label_en": "cat",
          "label_fr": "chat"
        }
        ```
