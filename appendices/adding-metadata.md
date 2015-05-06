---
layout: default
title: Adding Metadata | Popolo
id: appendix
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li>Appendices</li>
  <li class="active">Adding metadata</li>
</ul>

You will likely need to add more metadata than Popolo specifies.

It is recommended to reuse terms defined by the [Dublin Core Metadata Initiative (DCMI)](http://dublincore.org/), which publishes the most referenced linked open vocabularies, endorsed in IETF, ISO and ANSI/NISO standards. By reusing these terms, your terms are more likely to agree with those of others. If Popolo adds new metadata properties, it will reuse these terms.

[DCMI Metadata Terms](http://dublincore.org/documents/dcmi-terms/) provides a complete list. DCMI also offers guides about [creating](http://wiki.dublincore.org/index.php/User_Guide/Creating_Metadata) and [publishing](http://wiki.dublincore.org/index.php/User_Guide/Publishing_Metadata) metadata. Here are some sample terms and use cases:

* [title](http://dublincore.org/documents/dcmi-terms/#terms-title)
  * The title or header of a web page about the resource
  * The link text for the resource in a list of resources
* [description](http://dublincore.org/documents/dcmi-terms/#terms-description)
  * A human-readable description of the resource that eliminates jargon and adds context
* [abstract](http://dublincore.org/documents/dcmi-terms/#terms-abstract)
  * A summary of the resource
  * A description brief enough to include in a tweet
* [issued](http://dublincore.org/documents/dcmi-terms/#terms-issued)
  * The date of formal issuance or publication of the resource
* [identifier](http://dublincore.org/documents/dcmi-terms/#terms-identifier)
  * Any time you have a formal identifier for a resource

The W3C [Simple Knowledge Organization System](http://www.w3.org/TR/skos-reference/) also provides generic metadata terms, including:

* [prefLabel and altLabel](http://www.w3.org/TR/skos-reference/#labels), renamed to `label` and `alternative_label` in the JSON serialization of Popolo classes
* [note](http://www.w3.org/TR/skos-reference/#notes), which is one of many [documentation properties](http://www.w3.org/TR/skos-reference/#notes)
* [notation](http://www.w3.org/TR/skos-reference/#notations), although Dublin Core's `identifier` is generally preferred
