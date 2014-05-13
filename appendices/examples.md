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
  1. [A party within a coalition](#party-coalition)
1. [Vote events](#vote-events)
  1. [An amendment to a motion](#vote-amendment)
  1. [A vote by a political party](#party-vote)
  1. [A paired vote](#paired-vote)
  1. [A vote with tellers](#tellers)
  1. [A voter votes twice](#voting-twice)

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

<h2 id="party-coalition">2.6. A party in a coalition</h2>

**Scenario:** The XYZ Party, Rhinoceros Party and Political Party are members of a government coalition which lasted one term from January 1, 2011 to December 31, 2012. The Rhinoceros Party left the coalition on March 15, 2011, but was replaced by the Party-All-The-Time Party to avoid the coalition dissolving prematurely.

The government coalition, an organization, and its memberships:

```json
{
  "name": "Government",
  "founding_date": "2011-01-01",
  "dissolution_date": "2012-12-31",
  "memberships": [
    {
      "member": {
        "@type": "Organization",
        "id": "xyz-party",
        "start_date": "2011-01-01"
      }
    },
    {
      "member": {
        "@type": "Organization",
        "id": "rhinoceros-party",
        "start_date": "2011-01-01",
        "end_date": "2011-03-15"
      }
    },
    {
      "member": {
        "@type": "Organization",
        "id": "political-party",
        "start_date": "2011-01-01"
      }
    },
    {
      "member": {
        "@type": "Organization",
        "id": "party-all-the-time-party",
        "start_date": "2011-03-16"
      }
    }
  ]
}
```

Note that the memberships are assumed to have ended when the coalition dissolved.

<h1 id="vote-events">3. Vote events</h1>

<h2 id="vote-amendment">3.1. An amendment to a motion</h2>

**Scenario:** In the Scotting Parliament, on June 12, 2002, Brian Monteith proposes an amendment to a motion by Mike Watson. The amendment goes to a vote and fails, but the original motion passes without a vote.

Note that the `identifier` and `title` properties are not defined by Popolo for the Motion class. They are terms reused from the [DCMI Metadata Terms](http://dublincore.org/documents/dcmi-terms/). See the [adding metadata](/appendices/adding-metadata.html) appendix for guidance.

```json
{
  "organization": {
    "name": "Scottish Parliament"
  },
  "creator": {
    "name": "Brian Monteith"
  },
  "identifier": "S1M-3192.2",
  "text": "Insert at end: 'and believes that the Executive should aim to ensure that all Scottish schools have a full-time equivalent physical education teacher.'",
  "date": "2002-06-12",
  "result": "fail",
  "vote_events": [
    {
      "date": "2002-06-12",
      "counts": [
        {
          "option": "yes",
          "value": 17
        },
        {
          "option": "no",
          "value": 69
        },
        {
          "option": "abstain",
          "value": 27
        }
      ]
    }
  ],
  "sources": [
    {
      "url": "http://www.scottish.parliament.uk/parliamentarybusiness/28862.aspx?r=4383&mode=html"
    }
  ],
  "subject": {
    "@type": "Motion",
    "organization": {
      "name": "Scottish Parliament"
    },
    "creator": {
      "name": "Mike Watson"
    },
    "identifier": "S1M-3192",
    "title": "Value of Participation in Sport in Increasing the Quality of Life",
    "text": "That the Parliament recognises the value of sport to the quality of life in Scotland and the importance of the role it plays in developing the health and well-being of the nation; welcomes the commitment of the Executive and sportscotland to work with governing bodies, local authorities and all other partners to widen participation in sport at all levels, and encourages all those with an interest in sport to contribute to the current review of sport 21, the strategy for sport in Scotland.",
    "date": "2002-06-11",
    "result": "pass",
    "sources": [
      {
        "url": "http://archive.scottish.parliament.uk/business/businessBulletin/bb-02/bb-06-11f.htm"
      }
    ]
  }
}
```

<h2 id="party-vote">3.2. A vote by a political party</h2>

**Scenario:** In the [House of Representatives of New Zealand](http://www.parliament.nz/en-nz/features/00NZPHomeNews20121019a1/conscience-votes), the parties regularly cast the votes, not the members.

As such, the `voter` property must override the `@type`:

```json
{
  "vote_event_id": "vote-21",
  "voter": {
    "@type": "Organization",
    "id": "national-party"
  },
  "option": "yes",
  "weight": 59
}
```

<h2 id="paired-vote">3.3. A paired vote</h2>

**Scenario:** "Pairing" generally refers to a reciprocal agreement between two voters by which a voter abstains if the other is unable to vote. It may not be known which two members form a pair. The House of Commons of Canada describes:

>Pairing is a practice whereby the party Whips arrange for two Members from opposite sides of the House to agree that they will abstain from voting on a particular occasion to permit one or both to be absent from the House. In this way, their votes are effectively neutralized and the relative strength of their parties in the House maintains its balance.

>The Standing Orders are silent on the question of a broken pair, which occurs when a paired Member votes. Still, agreements to pair are private arrangements between Members and not matters in which the Speaker or the House can intervene.

For brevity, the following vote event example includes only the paired votes. In this case, the pairs are not known; if the pairs were known, a `pair_id` or `pair` property could indicate each voter's pair.

```json
{
  "identifier": "17",
  "motion": {
    "text": "That the House call on the government to take the appropriate measures to sell the 11,000 acres of arable land back to the families and farmers whose land was expropriated to build the Mirabel Airport."
  },
  "start_date": "2005-02-22",
  "counts": [
    {
      "option": "yes",
      "value": 157
    },
    {
      "option": "no",
      "value": 118
    }
  ],
  "votes": [
    {
      "voter": {
        "name": "Gérard Asselin"
      },
      "option": "paired"
    },
    {
      "voter": {
        "name": "Claudette Bradshaw"
      },
      "option": "paired"
    },
    {
      "voter": {
        "name": "Brenda Chamberlain"
      },
      "option": "paired"
    },
    {
      "voter": {
        "name": "Roger Gaudet"
      },
      "option": "paired"
    }
  ],
  "sources": [
    {
      "url": "http://www.parl.gc.ca/HouseChamberBusiness/ChamberVoteDetail.aspx?Parl=38&Ses=1&Vote=6"
    }
  ]
}
```

<h2 id="tellers">3.4. A vote with tellers</h2>

**Scenario:** In the House of Commons of the United Kingdom, and in other Westminster systems, [tellers](http://www.parliament.uk/site-information/glossary/tellers/) count the votes. There are typically two tellers for each voting option, with one teller a member of the government and the other a member of the opposition. Tellers either do not vote, vote according to the option they are counting, or vote to preserve unanimity. In any case, the options chosen by tellers may not recorded.

Since we do not know the option chosen by the teller in this scenario, the `option` property is omitted:

```json
{
  "vote_event_id": "vote-84",
  "voter_id": "john-q-public",
  "role": "yes teller"
}
```

<h2 id="voting-twice">3.5. A voter votes twice</h2>

**Scenario:** In the House of Commons of the United Kingdom, an MP may vote twice in the same vote event. For example, a House of Commons [factsheet](http://www.parliament.uk/documents/commons-information-office/p09.pdf) describes:

>A Member who has voted by error may, if he or she has time, cross over to the other lobby and vote again, hence nullifying the effect of his or her original vote, though of course this procedure does not allow him actually to register a vote in favour of the proposition on which he made the first mistake. 

[_Erskine May: Parliamentary Practice_](http://en.wikipedia.org/wiki/Erskine_May:_Parliamentary_Practice) adds:

>Members who have voted in both lobbies in the same division have been allowed on the following day to state as a matter of personal explanation in which lobby they intended to vote, and the numbers of the division have been directed to be corrected accordingly.

Erskine May also describes:

>The Speaker has deprecated as ‘unparliamentary’ the practice of voting in both lobbies as a demonstration of a ‘third’ position.

For brevity, the following vote event example includes only the votes of Peter Temple-Morris, who voted twice.

```json
{
  "identifier": "50",
  "motion": {
    "text": "That the Bill be now read the Third time."
  },
  "start_date": "1997-07-08T18:56+01:00",
  "counts": [
    {
      "option": "yes",
      "value": 350
    },
    {
      "option": "no",
      "value": 138
    }
  ],
  "votes": [
    {
      "voter": {
        "name": "Peter Temple-Morris"
      },
      "option": "yes"
    },
    {
      "voter": {
        "name": "Peter Temple-Morris"
      },
      "option": "no"
    }
  ],
  "sources": [
    {
      "url": "http://www.publications.parliament.uk/pa/cm199798/cmhansrd/vo970708/debtext/70708-19.htm"
    }
  ]
}
```