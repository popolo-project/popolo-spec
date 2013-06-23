---
layout: default
title: API Design Patterns | The Popolo Project
id: api-patterns
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a> <span class="divider">/</span></li>
  <li>Appendices <span class="divider">/</span></li>
  <li class="active">API design patterns</li>
</ul>

This document collects emerging design patterns for APIs for accessing legislative information.

## Merge duplicates

Many systems support merging documents to remove duplicates. [Billy](https://github.com/sunlightlabs/billy/) has [Merge-o-Matic (MoM)](https://github.com/sunlightlabs/billy/wiki/Merge-o-matic) which adds an `all_ids` field on all documents. The "winner" of a merge adds the loser's ID to its `all_ids`. Billy can therefore support lookups using old IDs.

<div class="well well-example">
  A legislative information system creates a record (ID 1) for the legislator William Doe, by scraping information from the legislature's website. Users of the system's API learn to associate the unique identifier 1 with William Doe. The following month, William Doe asks the legislature's IT department to change his name on the website to "Bill Doe", his preferred name. The legislative information system creates a record (ID 101) for the legislator Bill Doe, not realizing it is the same person as William Doe. API users learn to associate the unique identifier 101 with Bill Doe. A week later, administrators notice the duplication and remove one of the two records, using the method described above, such that lookups using the deleted identifier still resolve to an appropriate record, requiring no change on the part of API users.
</div>