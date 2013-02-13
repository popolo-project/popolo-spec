---
layout: default
title: Terms
id: data
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/data.html">Data Standard</a> <span class="divider">/</span></li>
  <li class="active">Terms</li>
</ul>

# Namespaces

<table>
  <thead>
    <th>Prefix</th>
    <th>Namespace</th>
  </thead>
  <tr>
    <td><code>dcterms</code></td>
    <td><a href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</a></td>
  </tr>
  <tr>
    <td><code>foaf</code></td>
    <td><a href="http://xmlns.com/foaf/0.1/">http://xmlns.com/foaf/0.1/</a></td>
  </tr>
  <tr>
    <td><code>schema</code></td>
    <td><a href="http://schema.org/">http://schema.org/</a></td>
  </tr>
  <tr>
    <td><code>org</code></td>
    <td><a href="http://www.w3.org/ns/org#">http://www.w3.org/ns/org#</a></td>
  </tr>
  <tr>
    <td><code>skos</code></td>
    <td><a href="http://www.w3.org/2004/02/skos/core#">http://www.w3.org/2004/02/skos/core#</a></td>
  </tr>
  <tr>
    <td><code>vcard</code></td>
    <td><a href="http://www.w3.org/2006/vcard/ns#">http://www.w3.org/2006/vcard/ns#</a></td>
  </tr>
  <tr>
    <td><code>person</code></td>
    <td><a href="http://www.w3.org/ns/person#">http://www.w3.org/ns/person#</a></td>
  </tr>
  <tr>
    <td><code>locn</code></td>
    <td><a href="http://www.w3.org/ns/locn#">http://www.w3.org/ns/locn#</a></td>
  </tr>
</table>

LDAP, CIQ, OpenSocial and Facebook do not have namespaces, but are given prefixes nonetheless.

# Person

* vCard's terms are from the [RDF encoding](http://www.w3.org/TR/vcard-rdf/) of vCard 3.0, except for `individual` and `GENDER` and which are from [RFC 6350](http://tools.ietf.org/html/rfc6350) and `DEATHDATE` which is from [RFC 6474](http://tools.ietf.org/html/rfc6474).

<table class="table table-striped table-condensed table-terms">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td><strong>Person</strong></td>
      <td>name</td>
      <td>alternate name</td>
      <td>former name</td>
      <td>family name</td>
      <td>given name</td>
      <td>additional name</td>
      <td>honorific prefix</td>
      <td>honorific suffix</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>foaf</code></th>
      <td><a href="http://xmlns.com/foaf/spec/#term_Person">Person</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_name">name</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_nick">nick</a></td>
      <td></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_familyName">familyName</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_givenName">givenName</a></td>
      <td></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_title">title</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>schema</code></th>
      <td><a href="http://schema.org/Person">Person</a></td>
      <td><a href="http://schema.org/Person">name</a></td>
      <td></td>
      <td></td>
      <td><a href="http://schema.org/Person">familyName</a></td>
      <td><a href="http://schema.org/Person">givenName</a></td>
      <td><a href="http://schema.org/Person">additionalName</a></td>
      <td><a href="http://schema.org/Person">honorificPrefix</a></td>
      <td><a href="http://schema.org/Person">honorificSuffix</a></td>
    </tr>
    <tr>
      <th scope="row"><code>vcard</code></th>
      <td><a href="http://tools.ietf.org/html/rfc6350#section-6.1.4">individual</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:fn">fn</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:nickname">nickname</a></td>
      <td></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:family-name">family-name</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:given-name">given-name</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:additional-name">additional-name</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:honorific-prefix">honorific-prefix</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:honorific-suffix">honorific-suffix</a></td>
    </tr>
    <tr>
      <th scope="row"><code>ldap</code></th>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-3.12">person</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.3">cn</a></td>
      <td></td>
      <td></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.32">sn</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.12">givenName</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.14">initials</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4524#section-2.21">personalTitle</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.11">generationQualifier</a></td>
    </tr>
    <tr>
      <th scope="row"><code>person</code></th>
      <td><a href="http://www.w3.org/ns/person#Person">Person</a></td>
      <td>see <code>foaf</code></td>
      <td><a href="http://dublincore.org/documents/dcmi-terms/#terms-alternative">alternative</a></td>
      <td><a href="http://www.w3.org/ns/person#birthName">birthName</a></td>
      <td>see <code>foaf</code></td>
      <td>see <code>foaf</code></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
    </tr>
    <tr>
      <th scope="row"><code>ciq</code></th>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/xPRL/specs/ciq-xprl-specs.html#_Toc213421948">Party</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716020">PartyName</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>opensocial</code></th>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">Person</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">displayName</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">nickname</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">alternateNames</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name">familyName</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name">givenName</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name">middleName</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name">honorificPrefix</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name">honorificSuffix</a></td>
    </tr>
    <tr>
      <th scope="row"><code>facebook</code></th>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">User</a></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">name</a></td>
      <td></td>
      <td></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">last_name</a></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">first_name</a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="table table-striped table-condensed table-terms">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td>email address</td>
      <td>gender</td>
      <td>date of birth</td>
      <td>date of death</td>
      <td>head shot</td>
      <td>one-line bio</td>
      <td>biography</td>
      <td>external links</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>foaf</code></th>
      <td><a href="http://xmlns.com/foaf/spec/#term_mbox">mbox</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_gender">gender</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_birthday">birthday</a></td>
      <td></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_img">img</a></td>
      <td></td>
      <td></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_page">page</a></td>
    </tr>
    <tr>
      <th scope="row"><code>schema</code></th>
      <td><a href="http://schema.org/Person">email</a></td>
      <td><a href="http://schema.org/Person">gender</a></td>
      <td><a href="http://schema.org/Person">birthDate</a></td>
      <td><a href="http://schema.org/Person">deathDate</a></td>
      <td><a href="http://schema.org/Person">image</a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>vcard</code></th>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:email2">email</a></td>
      <td><a href="http://tools.ietf.org/html/rfc6350#section-6.2.7">GENDER</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:bday">bday</a></td>
      <td><a href="http://tools.ietf.org/html/rfc6474#section-2.3">DEATHDATE</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:photo">photo</a></td>
      <td></td>
      <td></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:url">url</a></td>
    </tr>
    <tr>
      <th scope="row"><code>ldap</code></th>
      <td><a href="http://tools.ietf.org/html/rfc4524#section-2.16">mail</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="http://tools.ietf.org/html/rfc2798#section-2.6">jpegPhoto</a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>person</code></th>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td></td>
      <td></td>
      <td>see <code>foaf</code></td>
    </tr>
    <tr>
      <th scope="row"><code>ciq</code></th>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533305" title="ElectronicAddressIdentifier">Electronic&hellip;</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Gender</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533303">BirthDateTime</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Event/Date</a></td>
      <td></td>
      <td></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">FreeTextLines</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>opensocial</code></th>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">emails</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">gender</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">birthday</a></td>
      <td></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">photos</a></td>
      <td></td>
      <td></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">urls</a></td>
    </tr>
    <tr>
      <th scope="row"><code>facebook</code></th>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">email</a></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">gender</a></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">birthday</a></td>
      <td></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">picture</a></td>
      <td></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">bio</a></td>
      <td></td>
    </tr>
  </tbody>
</table>

# Organization

* Schema.org adds a new property for each identifier scheme, e.g. `duns`, `globalLocationNumber`, `taxID` and `vatID`.
* Schema.org adds a new property for each classification scheme, e.g. `isicV4` and `naics`.
* vCard's terms are from the [RDF encoding](http://www.w3.org/TR/vcard-rdf/) of vCard 3.0, except for `org` which is from [RFC 6350](http://tools.ietf.org/html/rfc6350) and `DEATHDATE` which is from [RFC 6474](http://tools.ietf.org/html/rfc6474).

<table class="table table-striped table-condensed table-terms">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td><strong>Organization</strong></td>
      <td>name</td>
      <td>alternate name</td>
      <td>former name</td>
      <td>identifier</td>
      <td>classification</td>
      <td>parent org.</td>
      <td>founding date</td>
      <td>dissolution date</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>foaf</code></th>
      <td><a href="http://xmlns.com/foaf/spec/#term_Organization">Organization</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_name">name</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_nick">nick</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_member">member</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_birthday">birthday</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>schema</code></th>
      <td><a href="http://schema.org/Organization">Organization</a></td>
      <td><a href="http://schema.org/Organization">name</a></td>
      <td><a href="http://schema.org/Organization">legalName</a></td>
      <td></td>
      <td><a href="http://schema.org/Organization">duns</a>, etc.</td>
      <td><a href="http://schema.org/Organization">isicV4</a>, etc.</td>
      <td><a href="http://schema.org/Organization">member</a></td>
      <td><a href="http://schema.org/Organization">foundingDate</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>org</code></th>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:Organization">Organization</a></td>
      <td><a href="http://www.w3.org/TR/skos-reference/#labels">prefLabel</a></td>
      <td><a href="http://www.w3.org/TR/skos-reference/#labels">altLabel</a></td>
      <td></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:identifier">identifier</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:classification">classification</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:subOrganizationOf">subOrganizationOf</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_birthday">birthday</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>vcard</code></th>
      <td><a href="http://tools.ietf.org/html/rfc6350#section-6.1.4">org</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:fn">fn</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:nickname">nickname</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:bday">bday</a></td>
      <td><a href="http://tools.ietf.org/html/rfc6474#section-2.3">DEATHDATE</a></td>
    </tr>
    <tr>
      <th scope="row"><code>ldap</code></th>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-3.8">organization</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.19">o</a></td>
      <td></td>
      <td></td>
      <td><a href="http://tools.ietf.org/html/rfc4524#section-2.24">uniqueIdentifier</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.1">businessCategory</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.17">member</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>ciq</code></th>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/xPRL/specs/ciq-xprl-specs.html#_Toc213421948">Party</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716020">PartyName</a></td>
      <td></td>
      <td></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Identifier</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Type</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533310">Relationship</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Event/Date</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Event/Date</a></td>
    </tr>
  </tbody>
</table>

# Address

* LDAP adds properties like [homePostalAddress](http://tools.ietf.org/html/rfc4524#section-2.13) to disambiguate between different address types.
* Schema.org adds [faxNumber](http://schema.org/PostalAddress) and LDAP adds [mobile](http://tools.ietf.org/html/rfc4524#section-2.18), [pager](http://tools.ietf.org/html/rfc4524#section-2.20),
and [facsimileTelephoneNumber](http://tools.ietf.org/html/rfc4519#section-2.10) to disambiguate between different telephone types.

<table class="table table-striped table-condensed table-terms">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td><strong>Address</strong></td>
      <td>address type</td>
      <td>postal address</td>
      <td>telephone</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>schema</code></th>
      <td><a href="http://schema.org/PostalAddress">PostalAddress</a></td>
      <td><a href="http://schema.org/PostalAddress">contactType</a></td>
      <td></td>
      <td><a href="http://schema.org/PostalAddress">telephone</a></td>
    </tr>
    <tr>
      <th scope="row"><code>vcard</code></th>
      <td><a href="http://www.w3.org/TR/vcard-rdf/#vcard:Address">Address</a></td>
      <td><a href="http://www.w3.org/TR/rdf-schema/#ch_type">type</a></td>
      <td><a href="http://www.w3.org/TR/vcard-rdf/#vcard:label2">label</a></td>
      <td><a href="http://www.w3.org/TR/vcard-rdf/#vcard:tel2">tel</a></td>
    </tr>
    <tr>
      <th scope="row"><code>ldap</code></th>
      <td></td>
      <td></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.23">postalAddress</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.35">telephoneNumber</a></td>
    </tr>
    <tr>
      <th scope="row"><code>locn</code></th>
      <td><a href="http://philarcher.org/isa/locn-v1.00.html#locn:Address">Address</a></td>
      <td></td>
      <td><a href="http://philarcher.org/isa/locn-v1.00.html#locn:fullAddress">fullAddress</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>ciq</code></th>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716059">Address</a></td>
      <td></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716059">FreeTextAddress</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533305">ContactNumber</a></td>
    </tr>
    <tr>
      <th scope="row"><code>opensocial</code></th>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address">Address</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address">type</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address">formatted</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address">phoneNumbers</a></td>
    </tr>
  </tbody>
</table>

# Post

<table class="table table-striped table-condensed table-terms table-wide">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td><strong>Post</strong></td>
      <td>person</td>
      <td>organization</td>
      <td>role</td>
      <td>address</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>org</code></th>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:Post">Post</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:heldBy">heldBy</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:postIn">postIn</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:role">role</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>ldap</code></th>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-3.10">organizationalRole</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.28">roleOccupant</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.20">o</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.3">cn</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.23">postalAddress</a></td>
    </tr>
  </tbody>
</table>

# Membership

<table class="table table-striped table-condensed table-terms table-wide">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td><strong>Membership</strong></td>
      <td>person</td>
      <td>organization</td>
      <td>role</td>
      <td>time interval</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>org</code></th>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:Membership">Membership</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:person">person</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:organization">organization</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:role">role</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:memberDuring">memberDuring</a></td>
    </tr>
  </tbody>
</table>

<!-- TODO
<a href="http://tools.ietf.org/html/rfc4519#section-2.38">title</a>
<a href="http://tools.ietf.org/html/rfc4519#section-2.28">roleOccupant</a>
<a href="http://tools.ietf.org/html/rfc4524#section-2.19">organizationalStatus</a>

organizationalPerson
organizationalRole
-->