---
layout: default
title: API Design Patterns | The Popolo Project
id: api-patterns
---
{% include navigation.html %}

# API Design Patterns

This document collects emerging design patterns for APIs for accessing legislative information.

## Merge duplicates

Many systems support merging documents to remove duplicates. [Billy](https://github.com/sunlightlabs/billy/) has [Merge-o-Matic (MoM)](https://github.com/sunlightlabs/billy/wiki/Merge-o-matic) which adds an `all_ids` field on all documents. The "winner" of a merge adds the loser's ID to its `all_ids`. Billy can therefore support lookups using old IDs.
