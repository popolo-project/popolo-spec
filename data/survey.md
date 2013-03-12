---
layout: default
title: Existing Standards
id: data
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/data.html">Data Specification</a> <span class="divider">/</span></li>
  <li class="active">Existing Standards</li>
</ul>

<h1 id="dcterms">Dublin Core Metadata Initiative</h1>

[DCMI](http://dublincore.org/) defines general properties for describing resources, e.g. `dcterms:created` and `dcterms:modified`. The [Dublin Core Metadata Element Set](http://dublincore.org/documents/dces/) describes 15 properties that have been endorsed in [IETF](http://tools.ietf.org/html/rfc5013), ISO and ANSI/NISO standards. [DCMI Metadata Terms](http://dublincore.org/documents/dcmi-terms/) specifies all properties maintained by DCMI. Both are among the [most referenced](http://lov.okfn.org/dataset/lov/details/vocabulary_dce.html) linked open vocabularies. DCMI has a clear [governance and operation structure](http://dublincore.org/about/).

* [Creating Metadata wiki](http://wiki.dublincore.org/index.php/User_Guide/Creating_Metadata)
* [Publishing Metadata wiki](http://wiki.dublincore.org/index.php/User_Guide/Publishing_Metadata)
* [RDF representation](http://dublincore.org/schemas/rdfs/)

***

# The Friend of a Friend Project <span class="label">Person</span> <span class="label">Organization</span>

[FOAF](http://xmlns.com/foaf/spec/) is among the [most referenced](http://lov.okfn.org/dataset/lov/details/vocabulary_foaf.html) and oldest linked open vocabularies. It is [managed more in the style of an open source project](http://xmlns.com/foaf/spec/#sec-standards) than as a standard. It is unclear whether contributing to the project would be productive; Dan Brickley is the only editor, and his focus is on [Schema.org](http://schema.org/).

* [Mailing list](http://lists.foaf-project.org/mailman/listinfo/foaf-dev)
* [Issue tracker](http://wiki.foaf-project.org/w/IssueTracker)

## Review

* [`foaf:Person`](http://xmlns.com/foaf/spec/#term_Person) has no properties for additional names, honorific suffixes or death dates.
* [`foaf:Organization`](http://xmlns.com/foaf/spec/#term_Organization) has no properties for identifiers, classifications or dissolution dates.
* [`foaf:member`](http://xmlns.com/foaf/spec/#term_member) is the only way to describe the relation between `foaf:Person` and `foaf:Organization`.
* [`foaf:phone`](http://xmlns.com/foaf/spec/#term_phone) can't disambiguate between different types of telephone numbers, e.g. landline versus mobile.

## Links

* There is an [agreement](http://dublincore.org/documents/dcmi-foaf/) for DCMI to maintain the vocabulary if the FOAF Project is no longer able or willing to maintain it.

***

# Schema.org <span class="label">Person</span> <span class="label">Organization</span> <span class="label">Address</span>

[Schema.org](http://schema.org/) allows webmasters to provide structured data to search providers using HTML markup. Google, Yahoo! and Bing announced Schema.org in 2011. Contributions are made through the [W3C Web Schemas Task Force](http://www.w3.org/2001/sw/interest/webschema.html), part of the [W3C Semantic Web Interest Group](http://www.w3.org/2001/sw/interest/).

* [Mailing list](http://lists.w3.org/Archives/Public/public-vocabs/)
* [Wiki](http://www.w3.org/wiki/WebSchemas)

## Review

* [`schema:Person`](http://schema.org/Person) has no properties for alternate names or external links.
* [`schema:Organization`](http://schema.org/Organization) has no property for dissolution dates.
* `schema:legalName` is only one type of alternate name for a `schema:Organization`.
* `schema:duns`, `schema:globalLocationNumber`, `schema:taxID` and `schema:vatID` may be used to identify a `schema:Organization`.
* `schema:isicV4` and `schema:naics` may be used to classify a `schema:Organization`.
* `schema:member` (and its inverse `schema:memberOf`) is the only way to describe the relation between `schema:Person` and `schema:Organization`.
* [`schema:PostalAddress`](http://schema.org/PostalAddress) disambiguates between different types of telephone numbers by adding new properties.

## Links

* [BIBO](http://bibliontology.com/), [DBPedia](http://wiki.dbpedia.org/Ontology), [DCMI](http://dublincore.org/), [GoodRelations](http://purl.org/goodrelations/), [SIOC](http://sioc-project.org/) and [WordNet](http://wordnet.princeton.edu/) have [mappings](http://schema.rdfs.org/mappings.html) to Schema.org.
* Derivatives of IPTC's rNews properties are contained in `schema:Person`, `schema:Corporation`, `schema:GeoShape`, `schema:CreativeWork`, `schema:Article`, `schema:NewsArticle`, `schema:UserComments`, `schema:AudioObject` and `schema:VideoObject`.
* Derivatives of IPTC's rNews properties are contained but not credited in `schema:PostalAddress`.

***

<h1 id="w3c">World Wide Web Consortium <span class="label">Organization</span></h1>

[W3C](http://www.w3.org/) is the main international standards organization for the World Wide Web. It is not incorporated. Member organizations and invited experts from the public produce most of W3C's deliverables. Invited experts do not pay [fees](http://www.w3.org/Consortium/fees). It follows a [consensus-based process](http://www.w3.org/2005/10/Process-20051014/).

Among the deliverables of the [Goverment Linked Data (GLD) Working Group](http://www.w3.org/2011/gld/wiki/Main_Page), only its [Organization ontology](http://www.w3.org/TR/vocab-org/) is relevant to this project; the [Registered Organization Vocabulary](http://dvcs.w3.org/hg/gld/raw-file/default/legal/index.html) and [Asset Description Metadata Schema (ADMS)](https://dvcs.w3.org/hg/gld/raw-file/default/adms/index.html) are not. Anyone may send comments to the [public mailing list](http://lists.w3.org/Archives/Public/public-gld-comments/).

Deliverables of past working groups of interest are the [Simple Knowledge Organization System (SKOS)](http://www.w3.org/TR/2009/REC-skos-reference-20090818/), [RDF Schema](http://www.w3.org/TR/rdf-schema/), [Web Ontology Language (OWL)](http://www.w3.org/TR/2004/REC-owl-guide-20040210/) and [Representing Content in RDF](http://www.w3.org/TR/Content-in-RDF10/).

* [Goverment Linked Data (GLD) Working Group charter](http://www.w3.org/2011/gld/charter)
  * [Mailing list](http://lists.w3.org/Archives/Public/public-gld-wg/)
  * [Wiki](http://www.w3.org/2011/gld/wiki/Main_Page)

## Review

* [`org:Organization`](http://www.w3.org/TR/vocab-org/#org:Organization) has no properties for dissolution dates.
* `org:Organization` uses [`skos:altLabel`](http://www.w3.org/TR/2009/REC-skos-reference-20090818/#labels) for alternate names instead of [`foaf:nick`](http://xmlns.com/foaf/spec/#term_nick).
* `org:Organization` uses [`org:hasSubOrganization`](http://www.w3.org/TR/vocab-org/#org:hasSubOrganization), [`org:subOrganizationOf`](http://www.w3.org/TR/vocab-org/#org:subOrganizationOf) and [`org:transitiveSubOrganizationOf`](http://www.w3.org/TR/vocab-org/#org:transitiveSubOrganizationOf) instead of [`foaf:member`](http://xmlns.com/foaf/spec/#term_member).
* SKOS' [concept schemes](http://www.w3.org/TR/2009/REC-skos-reference-20090818/#schemes) and [semantic relations](http://www.w3.org/TR/2009/REC-skos-reference-20090818/#semantic-relations) can be used to define controlled vocabularies, like classification schemes.
* The [lexical labels](http://www.w3.org/TR/2009/REC-skos-reference-20090818/#labels) `skos:prefLabel`, `skos:altLabel` and `skos:hiddenLabel` are sub-properties of and are preferred to [`rdf:label`](http://www.w3.org/TR/rdf-schema/#ch_label).
* [`skos:notation`](http://www.w3.org/TR/2009/REC-skos-reference-20090818/#notations) and the [documentation properties](http://www.w3.org/TR/2009/REC-skos-reference-20090818/#labels) `skos:note` and `skos:definition` are available for general use.
* [`rdfs:seeAlso`](http://www.w3.org/TR/rdf-schema/#ch_seealso) can be used like the `href` attribute in HTML to form a generic link between resources.
* [`owl:sameAs`](http://www.w3.org/TR/2004/REC-owl-guide-20040210/#owl_sameAs) can be used to link to an RDF document describing the same resource.

## Links

* Besides the many W3C vocabularies, the Organization ontology reuses `dcterms`, `foaf` and `vcard` discussed here, and [Good Relations](http://www.heppnetz.de/projects/goodrelations/).
* The Organization ontology uses `foaf:Agent` and `foaf:Person` in the domains and ranges of properties. Also:
  * `org:Organization` is equivalent to `foaf:Organization`.
  * `org:hasMember` is equivalent to `foaf:member`.
  * `org:Organization` is a subclass of `foaf:Agent`, like `foaf:Person` and `foaf:Organization`.

***

# Internet Engineering Task Force <span class="label">Person</span> <span class="label">Organization</span> <span class="label">Address</span>

[IETF](http://www.ietf.org/) is a volunteer-run Internet standards organization. It cooperates closely with the W3C, ISO and IEC standards bodies. Its [RFC 6350](http://tools.ietf.org/html/rfc6350) (vCard 4.0), [RFC 4519](https://tools.ietf.org/html/rfc4519) and [RFC 4524](http://tools.ietf.org/html/rfc4524) (LDAP) are of interest. IANA maintains a [registry of vCard elements](http://www.iana.org/assignments/vcard-elements/vcard-elements.xml). An [RDF encoding](http://www.w3.org/Submission/vcard-rdf/) of [vCard 3.0](http://tools.ietf.org/html/rfc2426) exists. An RDF encoding of vCard 4.0 is [in progress](http://www.w3.org/wiki/RepresentingVCardinRDFOWL).

## Review

* RFC 4519 and RFC 4524 have no properties for alternate person names, genders, dates of birth, dates of death or external links.
* [RFC 2798](http://tools.ietf.org/html/rfc2798) adds `ldap:jpegPhoto` and [RFC 6474](http://tools.ietf.org/html/rfc6474) adds `vcard:birthPlace`, `vcard:deathPlace` and `vcard:deathDate`.
* `vcard:Organization` has no properties for identifiers, classifications or parent organizations.
* RFC 4519 and RFC 4524 have no properties for alternate organization names or founding dates.
* It has no property to link a `vcard:Person` to a `vcard:Organization`.
* LDAP disambiguates between different types of addresses and telephone numbers by adding new properties.

## Links

* RFC 4519 and RFC 6350 do not explicitly link to other standards, besides other RFCs.

***

# European Commission <span class="label">Person</span> <span class="label">Address</span>

The European Commission's [Interoperability Solutions for European Public Administrations (ISA)](http://ec.europa.eu/isa/) programme completed three vocabularies. Its Business Core Vocabulary evolved into the W3C [Registered Organization Vocabulary](https://dvcs.w3.org/hg/gld/raw-file/default/legal/index.html). The [Person Core Vocabulary](http://philarcher.org/isa/person-v1.00.html) and [Location Core Vocabulary](http://philarcher.org/isa/locn-v1.00.html) are moving into W3C namespaces.

## Review

* [`person:patronymicName`](http://philarcher.org/isa/person-v1.00.html#person:patronymicName) is unique to this vocabulary and solves an internationalization issue. [*[issue 2]*](https://github.com/opennorth/popolo-standard/issues/2)
* [`person:birthName`](http://philarcher.org/isa/person-v1.00.html#person:birthName) covers one type of former name.
* [`locn:Address`](http://philarcher.org/isa/locn-v1.00.html#locn:Address) has no property for address types or telephone numbers.
* `locn:Address` is INSPIRE conformant. [*[issue 1]*](https://github.com/opennorth/popolo-standard/issues/1)

## Links

* The Person Core Vocabulary reuses `adms`, `dcterms`, `foaf`, `schema` and `skos` mentioned here, including `foaf:Person`, `foaf:name`, `foaf:givenName`, `foaf:familyName`, `schema:Place`, `schema:Person`, `schema:gender`, `schema:birthDate` and `schema:deathDate`.
* The Person Core Vocabulary inherits other properties, notably `schema:additionalName`, `schema:honorificSuffix`, `foaf:nick`, `foaf:mbox`, `schema:image`, `foaf:img` and `foaf:page`.
* The Location Core Vocabulary reuses `dcterms`.

***

# Organization for the Advancement of Structured Information Standards <span class="label">Person</span> <span class="label">Organization</span> <span class="label">Address</span>

[OASIS](https://www.oasis-open.org/) is a not-for-profit consortium that develops open standards for information technology. It is a member-run organization. The public may participate by sending comments. Its [LegalXML Member Section](http://www.legalxml.org/) is very active, its [eGov Member Section](http://www.oasis-egov.org/) less so.

Its [OASIS Customer Information Quality (CIQ)](http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html) defines an [extensible Name Language (xNL)](http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716018), [extensible Address Language (xAL)](http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716057), [extensible Party Information Language (xPIL)](http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716084) and [extensible Party Relationships Language (xPRL)](http://docs.oasis-open.org/ciq/v3.0/xPRL/specs/ciq-xprl-specs.html) of interest to this project.

* [OASIS Customer Information Quality (CIQ) Technical Committee](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=ciq)
  * [Comparison of vCard, FOAF and CIQ (PDF)](http://www.cs.tlu.ee/instituut/opilaste_tood/magistri_tood/2009_kevad/zahhar_kirillov_magistritoo.pdf)
  * [How to submit a comment](https://www.oasis-open.org/committees/comments/index.php?wg_abbrev=ciq)

## Review

* CIQ has no properties for head shots or external links.
* xNL can [handle](http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533217) special [cases](http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Ref174170633) where `givenName` and `familyName` are insufficient.
* `xPIL.xsd` defines `ElectronicAddressIdentifier` for emails, `PersonInfo/Gender` for genders, `BirthInfo/BirthDateTime` for birth dates, `Events/Event` for death dates and `FreeTextLines` for biographies.
* `xPIL.xsd` defines `Identifier` for identifiers, `OrganisationInfo/Type`, `OrganisationInfo/CategoryType` and `OrganisationInfo/Nature` for classifications, `Relationship` for parent organizations, and `Events/Event` for founding dates and dissolution dates.
* xPIL defines `Memberships`, but no class for posts. xPRL defines `Relationship/RelationshipRole`.
* CIQ often uses code lists for maximum flexibility and extensibility, instead of defining a vocabulary.

## Links

* CIQ maintains a list of [other industry standards used](http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716017).

***

# National Information Exchange Model <span class="label">Person</span> <span class="label">Organization</span> <span class="label">Address</span>

[NIEM](https://www.niem.gov/) was initiated as a joint venture between the U.S. Department of Homeland Security and the U.S. Department of Justice with outreach to other departments and agencies. Its goal is to allow for national-level interoperable information sharing and data exchange. Several specializations of the NIEM Core schema exist.

* [Specification](http://release.niem.gov/)
* [Communities](https://www.niem.gov/communities/Pages/communities.aspx)

## Review

* NIEM has no property for external links.

## Links

* NIEM reuses GML, OASIS' xAL, xNL and xPIL, and other XML standards.

***

# Object Management Group

[OMG](http://www.omg.org/) is an international organization that establishes industry guidelines and specifications to ensure the reusability, portability, and interoperability of object-based software in different environments. Its [Party Management Facility (PMF)](http://www.omg.org/spec/PARTY/) specification is of interest.

## Review

* PMF primarily defines interfaces, not properties and classes. Unlike most standards, it models relationships as first-class objects.

## Links

* PMF does not explicitly link to other standards, besides other OMG standards.

***

# OpenSocial <span class="label">Person</span> <span class="label">Address</span>

[OpenSocial](http://opensocial.org/) <span class="label">non-RDF</span> defines an open social application platform. LinkedIn, MySpace, Ning, Orkut and hi5 were early adopters after its launch in 2007. It is now independent from Google, and is increasing adoption among domain-specific social networks and enterprise vendors.

* [Mailing list](https://groups.google.com/forum/?fromgroups=#!forum/opensocial-and-gadgets-spec)
* [Issue tracker](https://code.google.com/p/opensocial-resources/issues/list)

## Review

* [`opensocial:Person`](http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person) has no property for death dates.
* [`opensocial:Organization`](http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Organization) is more like `org:Membership` than `org:Organization`.

## Links

* Its [Social Data Specification](http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml) is aligned with [Portable Contacts](http://portablecontacts.net/).

***

<h1 id="nepomuk">NEPOMUK Social Semantic Desktop</h1>

An apparently abandoned project of the [Open Semantic Collaboration Architecture Foundation](http://www.oscaf.org/). Its [Personal Information Model (PIMO) Ontology](http://www.semanticdesktop.org/ontologies/pimo/) has no properties for names, emails, genders, birth dates, death dates or external links. Its [NEPOMUK Contact Ontology (NCO)](http://www.semanticdesktop.org/ontologies/nco/), on the other hand, is of interest.

## Review

* NCO has no properties for dates of death; classifications, parent organizations; and all address properties of interest.

## Links

* The NEPOMUK Contact Ontology declares some of its properties equivalent to vCard properties, declares others as subproperties of `dcterms` properties and reuses other NEPOMUK ontologies.

***

# Others

The [BIO vocabulary](http://vocab.org/bio/0.1/.html) adds properties for biographical information like [`bio:biography`](http://vocab.org/bio/0.1/.html#biography) and [`bio:olb`](http://vocab.org/bio/0.1/.html#olb) to `foaf:Agent` and `foaf:Person`.

The following vocabularies have inspired or been adopted by the above:

* The [IPTC](http://www.iptc.org/) [rNews](http://dev.iptc.org/rNews) standard is reviewed in the Schema.org section.
* [Portable Contacts](http://portablecontacts.net/) <span class="label">non-RDF</span> is reviewed in the OpenSocial section. Google [shut down](http://googledevelopers.blogspot.ca/2012/04/changes-to-deprecation-policies-and-api.html) its [Portable Contacts API](https://developers.google.com/google-apps/contacts/poco/).

The following vocabularies have not seen widepread adoption beyond their authors:

* [Freebase](http://schemas.freebaseapps.com/) <span class="label">non-RDF</span> and [DBPedia](http://wiki.dbpedia.org/Ontology) have large, wiki-based, potentially unstable ontologies.
* The [Facebook](https://developers.facebook.com/docs/reference/api/) <span class="label">non-RDF</span> [`User`](https://developers.facebook.com/docs/reference/api/user/) has no properties for honorific prefixes, honorific suffixes, alternate names, death dates or external links.
* [OpenCalais](http://www.opencalais.com/documentation/calais-web-service-api/api-metadata/entity-index-and-definitions) defines classes relevant to its extraction service, which are too narrow for this project. 
* The [Participation ontology](http://vocab.org/participation/schema) [`participation:Role`](http://vocab.org/participation/schema#term-Role) class is a cross between [`org:Membership`](http://www.w3.org/TR/vocab-org/#class--membership) and [`org:Role`](http://www.w3.org/TR/vocab-org/#class--role).
* [oeGOV](http://oegov.org/) uses a large set of classes instead of properties like [`org:classification`](http://www.w3.org/TR/vocab-org/#org:classification) or [`org:identifier`](http://www.w3.org/TR/vocab-org/#org:identifier).
* [XBRL](http://www.xbrl.org/SpecRecommendations) provides an [`Entity`](http://www.xbrl.org/Specification/XBRL-2.1/REC-2003-12-31/XBRL-2.1-REC-2003-12-31+corrected-errata-2013-02-20.html#_4.7.3) class and an [`identifier`](http://www.xbrl.org/Specification/XBRL-2.1/REC-2003-12-31/XBRL-2.1-REC-2003-12-31+corrected-errata-2013-02-20.html#_4.7.3.1) property for organizations.

The following are not appropriate to the scope of this project:

* [Akoma Ntoso](http://www.akomantoso.org/) <span class="label">non-RDF</span> has no person or organization vocabulary.

The following were not reviewed and are likely inappropriate:

* The [Open Applications Group](http://www.oagi.org/), [Accredited Standards Committee X12](http://www.x12.org/) charge hundreds of US dollars for access to their standards.
* [SWIFT Standards](http://www.swift.com/standards) are only available to financial institutions.
* [RosettaNet](http://www.rosettanet.org/) requires account activation by an administrator.

This project may consider publishing mappings to DBPedia and Freebase classes and properties.
