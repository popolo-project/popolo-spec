---
layout: default
title: Examples | The Popolo Project
id: appendix
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li>Appendices</li>
  <li class="active">Example JSON documents</li>
</ul>

This document provides more complex examples than [the samples given in the specification](/specs/#schema-and-examples).

1. [Contact details](#contact-details)
  1. [Multiple email addresses](#multiple-email-addresses)
  1. [Email contact form](#email-contact-form)
1. [Relations between people and organizations](#relations-people-organizations)
  1. [A historical post](#historical-post)
  1. [Promotion from member to post within a committee](#committee-promotion)
  1. [Change in party affiliation](#party-affiliation)
  1. [A previously held post](#previous-post)
  1. [A post held by more than one person simultaneously](#simultaneous-post)

<h1 id="contact-details">1. Contact details</h1>

<h2 id="multiple-email-addresses">1.1. Multiple email addresses</h2>

**Scenario:** John Q. Public has a primary email address of `john@example.com`. He also has secondary email addresses related to his functions.

```json
{
  "name": "Mr. John Q. Public, Esq.",
  "email": "john@example.com",
  "contact_details": [
    {
      "label": "Email address of the Member of Parliament for Avalon",
      "type": "email",
      "value": "avalon@example.com"
    },
    {
      "label": "Email address of the Chair of the Environment Committee",
      "type": "email",
      "value": "environment@example.com"
    }
  ]
}
```

<h2 id="email-contact-form">1.2. Email contact form</h2>

**Scenario:** John Q. Public has no public email address and requires all communications from the public to be made through a contact form.

```json
{
  "name": "Mr. John Q. Public, Esq.",
  "contact_details": [
    {
      "label": "Contact form",
      "type": "url",
      "value": "http://example.com/john-q-public/contact"
    }
  ]
}
```

<h1 id="relations-people-organizations">2. Relations between people and organizations</h1>

<h2 id="historical-post">2.1. A historical post</h2>

**Scenario:** The Canadian electoral district of Annapolis is abolished in 1914, thereby eliminating the post of Member of Parliament for Annapolis.

The House of Commons, an organization, and its posts:

```json
{
  "id": "house-of-commons",
  "name": "House of Commons",
  "posts": [
    {
      "id": "mp-annapolis",
      "label": "Member of Parliament for Annapolis",
      "end_date": "1914"
    }
  ]
}
```

<h2 id="committee-promotion">2.2. Promotion from member to post within a committee</h2>

**Scenario:** Jane Q. Citizen is promoted to chair of the Standing Committee on Finance on January 1, 2013, after four years as a member.

**Important details:**

* There is no `post_id` for her mere membership on the committee.
* There is no `role` of "Member" for her mere membership on the committee: the fact that the membership exists already implies that she fulfills a role of member on the committee.
* In your own implementation, you do not need to create a post for the position of Chair if you don't want to; do it if it's important for your use case to determine when that position is vacant, for example.

The Standing Committee on Finance, an organization, and its posts:

```json
{
  "id": "standing-committee-on-finance",
  "name": "Standing Committee on Finance",
  "posts": [
    {
      "id": "standing-committee-on-finance-chair",
      "label": "Chair of the Standing Committee on Finance"
    }
  ]
}
```

Jane Q. Citizen, a person, and her memberships:

```json
{
  "name": "Jane Q. Citizen",
  "memberships": [
    {
      "organization_id": "standing-committee-on-finance",
      "start_date": "2009-01-01",
      "end_date": "2012-12-31"
    },
    {
      "role": "Chair",
      "organization_id": "standing-committee-on-finance",
      "post_id": "standing-committee-on-finance-chair",
      "start_date": "2013-01-01"
    }
  ]
}
```

<h2 id="party-affiliation">2.3. Change in party affiliation</h2>

John Q. Public changes party affiliation while holding the post of Member of Parliament for Avalon.

The House of Commons, an organization, and its posts:

```json
{
  "id": "house-of-commons",
  "name": "House of Commons",
  "posts": [
    {
      "id": "mp-avalon",
      "label": "Member of Parliament for Avalon",
    }
  ]
}
```

The XYZ Party:

```json
{
  "id": "xyz-party",
  "name": "XYZ Party"
}
```

The ABC Party:

```json
{
  "id": "abc-party",
  "name": "ABC Party"
}
```

John Q. Public, a person, and his memberships:

```json
{
  "name": "Mr. John Q. Public, Esq.",
  "memberships": [
    {
      "organization_id": "house-of-commons",
      "post_id": "mp-avalon",
      "start_date": "2000",
      "end_date": "2004"
    },
    {
      "organization_id": "xyz-party",
      "start_date": "1990-03-01",
      "end_date": "2000-12-31"
    },
    {
      "organization_id": "abc-party",
      "start_date": "2001-01-01"
    }
  ]
}
```

<h2 id="previous-post">2.4. A previously held post</h2>

**Scenario:** John Q. Public was previously Member of Parliament for Avalon from 2000 to 2004, and is now again as of 2011.

The House of Commons, an organization, and its posts:

```json
{
  "id": "house-of-commons",
  "name": "House of Commons",
  "posts": [
    {
      "id": "mp-avalon",
      "label": "Member of Parliament for Avalon",
    }
  ]
}
```

John Q. Public, a person, and his memberships:

```json
{
  "name": "Mr. John Q. Public, Esq.",
  "memberships": [
    {
      "organization_id": "house-of-commons",
      "post_id": "mp-avalon",
      "start_date": "2000",
      "end_date": "2004"
    },
    {
      "organization_id": "house-of-commons",
      "post_id": "mp-avalon",
      "start_date": "2011"
    }
  ]
}
```

<h2 id="simultaneous-post">2.5. A post held by more than one person simultaneously</h2>

**Scenario:** Same as 2.4 above, except Jane Q. Citizen timeshares as Member of Parliament for Avalon, also as of 2011.

Jane Q. Citizen, a person, and her memberships:

```json
{
  "name": "Jane Q. Citizen",
  "memberships": [
    {
      "organization_id": "house-of-commons",
      "post_id": "mp-avalon",
      "start_date": "2011-01-01"
    }
  ]
}
```
