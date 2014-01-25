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

# Namespaces

&namespaces

# Person

* vCard's terms are from the [RDF encoding](http://www.w3.org/TR/vcard-rdf/) of vCard 4.0, except for `DEATHDATE` which is from [RFC 6474](http://tools.ietf.org/html/rfc6474).

&person

# Organization

* Schema.org adds a new property for each identifier scheme, e.g. `duns`, `globalLocationNumber`, `taxID` and `vatID`, and each classification scheme, e.g. `isicV4` and `naics`.
* vCard's terms are from the [RDF encoding](http://www.w3.org/TR/vcard-rdf/) of vCard 4.0, except for `DEATHDATE` which is from [RFC 6474](http://tools.ietf.org/html/rfc6474).

&organization

# Membership

&membership

# Post

&post

# Address

* Schema.org adds [faxNumber](http://schema.org/PostalAddress), LDAP adds [mobile](http://tools.ietf.org/html/rfc4524#section-2.18), [pager](http://tools.ietf.org/html/rfc4524#section-2.20),
and [facsimileTelephoneNumber](http://tools.ietf.org/html/rfc4519#section-2.10) and NIEM adds `ContactFaxNumber`, `ContactMobileTelephoneNumber` and `ContactPagerNumber` to disambiguate between different telephone types. LDAP adds properties like [homePostalAddress](http://tools.ietf.org/html/rfc4524#section-2.13) to disambiguate between different address types.

&address
