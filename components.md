---
layout: default
title: Software Components | The Popolo Project
id: components
---
{% include navigation.html %}

## General caveats

Reusable software components implementing the data specification may want to isolate themselves from their host applications. A software component may therefore namespace its SQL tables or MongoDB collections by prepending `popolo_` to the names of its tables or collections.

## MongoDB caveats

Many MongoDB ODMs, including [Mongoid](http://mongoid.org/), use a `_type` field on a document to indicate that the document represents an instance of a subclass of the base class that is otherwise associated with the MongoDB collection. The management of the `_type` field should therefore be left to the ODM.

MongoDB does not support reduced dates as in XML Schema; it stores a [date](http://docs.mongodb.org/manual/core/document/#date) as a 64-bit integer that represents the number of milliseconds since the [Unix epoch](http://en.wikipedia.org/wiki/Unix_time). Unless a use case emerges requiring fast date operations, dates should be serialized as strings in MongoDB.
