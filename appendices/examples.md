---
layout: default
title: Examples | The Popolo Project
id: examples
---
{% include navigation.html %}

# 1. Relations between people and organizations

## 1.4. A historical post

**Scenario:** The Canadian federal electoral district of Annapolis is abolished in 1914, thereby eliminating the post of Member of Parliament for Annapolis.

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

## 1.2. Promotion from member to post within a committee

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
  "id": "jane-q-citizen",
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

## 1.3. A previously held post

**Scenario:** Mr. John Q. Public, Esq. was previously Member of Parliament for Avalon from 2000 to 2004, and is now again as of 2011.

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

Mr. John Q. Public, Esq., a person, and his memberships:

```json
{
  "id": "john-q-public",
  "name": "Mr. John Q. Public, Esq.",
  "memberships": [
    {
      "role": "Member of Parliament",
      "organization_id": "house-of-commons",
      "post_id": "mp-avalon",
      "start_date": "2000",
      "end_date": "2004"
    },
    {
      "role": "Member of Parliament",
      "organization_id": "house-of-commons",
      "post_id": "mp-avalon",
      "start_date": "2011"
    }
  ]
}
```

## 1.4. A post held by more than one person simultaneously

**Scenario:** Same as 1.3 above, except Jane Q. Citizen timeshares as Member of Parliament for Avalon, also as of 2011.

Jane Q. Citizen, a person, and her memberships:

```json
{
  "id": "jane-q-citizen",
  "name": "Jane Q. Citizen",
  "memberships": [
    {
      "role": "Member of Parliament",
      "organization_id": "house-of-commons",
      "post_id": "mp-avalon",
      "start_date": "2011-01-01"
    }
  ]
}
```
