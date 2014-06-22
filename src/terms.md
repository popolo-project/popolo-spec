---
layout: default
title: Terms
id: data
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/specs/">Data Specification</a></li>
  <li>Appendices</li>
  <li class="active">Inventory of terms from survey</li>
</ul>

* The [PML Schema](http://www.liparm.ac.uk/?page_id=103) reuses the properties `sources`, `externalLinks`, `startDate` and `endDate` across classes.

# Namespaces

&namespaces

<h1 id="Person">Person</h1>

* vCard's terms are from the [RDF encoding](http://www.w3.org/TR/vcard-rdf/) of vCard 4.0, except for `DEATHDATE` which is from [RFC 6474](http://tools.ietf.org/html/rfc6474).

&person

<h1 id="Organization">Organization</h1>

* Schema.org adds a new property for each identifier scheme, e.g. `duns`, `globalLocationNumber`, `taxID` and `vatID`, and each classification scheme, e.g. `isicV4` and `naics`.
* In PML Schema, organizational hierarchies can have a maximum depth of five.

&organization

<h1 id="Membership">Membership</h1>

* In PML Schema, memberships are embedded on `person` objects.

&membership

<h1 id="Post">Post</h1>

* PML Schema has the properties `startDate` and `endDate` for the dates of creation and elimination.

&post

<h1 id="Address">Address</h1>

* To disambiguate between different telephone types, Schema.org adds [faxNumber](http://schema.org/PostalAddress), LDAP adds [mobile](http://tools.ietf.org/html/rfc4524#section-2.18), [pager](http://tools.ietf.org/html/rfc4524#section-2.20) and [facsimileTelephoneNumber](http://tools.ietf.org/html/rfc4519#section-2.10) and NIEM adds `ContactFaxNumber`, `ContactMobileTelephoneNumber` and `ContactPagerNumber`.
* LDAP adds properties like [homePostalAddress](http://tools.ietf.org/html/rfc4524#section-2.13) to disambiguate between different address types.

&address

<h1 id="Area">Area</h1>

* Schema.org adds a new property for each identifier scheme, e.g. `globalLocationNumber`, and each classification scheme, e.g. `isicV4`.
* FAO adds a new property for each identifier scheme, e.g. `codeDBPediaID`.

&area

<h1 id="Motion">Motion</h1>

* Canada has two ways of expressing motions: from the [votes list page](http://www.parl.gc.ca/housechamberbusiness/Chambervotelist.aspx?Language=E) and from the vote detail page.
* [Czech Republic](http://www.psp.cz/sqw/hp.sqw?k=1300) publishes data on motions declared confusing.
* [Sweden](http://data.riksdagen.se/Data/Voteringar/) classifies motions as `sakfrågan` or `motivfrågan`. "rm" is an abbreviation of "Riksmöte".
* Switzerland offers an [API](http://ws.parlament.ch/) and [bulk downloads](http://www.parlament.ch/f/wahlen-abstimmungen/abstimmungen-im-parlament/Pages/abstimmung-nr-xml.aspx).
* Canada, [Germany](http://www.bundestag.de/bundestag/plenum/abstimmung/2014), the [US House](http://clerk.house.gov/legislative/legvotes.html) and the [US Senate](http://www.senate.gov/legislative/LIS/roll_call_lists/vote_menu_113_2.htm) have terms for the session's legislature: `parliament`, `Wahlperiode`, `congress` and `congress`, respectively.
* Canada and [Toronto](http://app.toronto.ca/tmmis/getAdminReport.do?function=prepareMemberVoteReport) have terms for meetings: `sitting` and `meeting`, respectively.

&motion

<h1 id="VoteEvent">Vote event</h1>

* Canada has three ways of expressing votes: in the [Hansard](http://www.parl.gc.ca/HouseChamberBusiness/ChamberSittings.aspx?View=H&Language=E), from the [votes list page](http://www.parl.gc.ca/housechamberbusiness/Chambervotelist.aspx?Language=E) and from the vote detail page.
* Czech Republic records repeat votes, along with the person requesting the repeat.
* Toronto publishes reports for each voter.
* Switzerland has the properties `meaningYes` and `meaningNo` for the meaning of voting "Yes" or "No".

&voteevent

<h1 id="Count">Count</h1>

* The [Cornell Legal Information Institute Legislative Metadata Project](http://blog.law.cornell.edu/metasausage/downloads-and-related-information/) has explicit properties for counts: `hasYeaTally`, `hasNayTally` and `hasNoVoteTally`.
* [Bulgaria](http://www.parliament.bg/bg/plenaryst) has explicit properties for counts: `За`, `Против`, `Въздържали` and `се Гласували`.
* Canada has explicit properties for counts on its votes list page: `TotalYeas`, `TotalNays` and `TotalPaired`.
* Czech Republic has explicit properties for counts: `pro`, `proti`, `zdrzel` and `nehlasoval`.
* [Hong Kong](http://www.legco.gov.hk/general/english/open-legco/open-data.html) has explicit properties for counts (`present-count`, `yes-count`, `no-count`, and `abstain-count`) and for groups (`functional-constituency` and `geographical-constituency`).
* [Spain](http://www.congreso.es/portal/page/portal/Congreso/Congreso/Actualidad/Votaciones) has explicit properties for counts: `Presentes`, `AFavor`, `EnContra`, `Abstenciones` and `NoVotan`.
* The US House has explicit properties for counts: `yea-total`, `nay-total`, `present-total` and `not-voting-total`.
* The US Senate has explicit properties for counts: `yeas`, `nays`, `present` and `absent`.

&count

<h1 id="Vote">Vote</h1>

* Canada has explicit properties for options on its vote detail page: `Yea`, `Nay` and `Paired`.
* Germany has explicit properties for options: `ja`, `nein`, `Enthaltung`, `ungültig` and `nichtabgegeben`.
* Brazil has both [DBF files](http://www.camara.leg.br/internet/votacao/listavotacao5404.asp) and [fixed-width text files without headers](http://www.camara.leg.br/internet/plenario/result/votacao/downlvnv54.htm) that follow [a schema](http://www.camara.leg.br/internet/plenario/result/votacao/Layout_ArquivosTXT_presencas_vota%C3%A7%C3%A3o_exportados.pdf).

&vote
