---
layout: default
title: Terms
id: data
---
{% include navigation.html %}

<ul class="breadcrumb">
  <li><a href="/data.html">Data Specification</a> <span class="divider">/</span></li>
  <li class="active">Terms</li>
</ul>

# Namespaces

<table>
  <thead>
    <th>Prefix</th>
    <th>Namespace</th>
  </thead>
  <tbody>
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
    <tr>
      <td><code>nco</code></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#">http://www.semanticdesktop.org/ontologies/nco/#</a></td>
    </tr>
    <tr>
      <td><code>nie</code></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nie/#">http://www.semanticdesktop.org/ontologies/nie/#</a></td>
    </tr>
  </tbody>
</table>

# Person

* vCard's terms are from the [RDF encoding](http://www.w3.org/TR/vcard-rdf/) of vCard 3.0, except for `individual` and `GENDER` and which are from [RFC 6350](http://tools.ietf.org/html/rfc6350) and `DEATHDATE` which is from [RFC 6474](http://tools.ietf.org/html/rfc6474).
* NIEM terms have been abbreviated, removing the repetitive `Person` prefix, e.g. `PersonFullName` becomes `FullName` below.

<table class="table table-striped table-condensed table-terms">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td>Person</td>
      <td>email address</td>
      <td>gender</td>
      <td>date of birth</td>
      <td>date of death</td>
      <td>head shot</td>
      <td>biography</td>
      <td>external links</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>foaf</code></th>
      <td><a href="http://xmlns.com/foaf/spec/#term_Person">Person</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_mbox">mbox</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_gender">gender</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_birthday">birthday</a></td>
      <td></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_img">img</a></td>
      <td></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_page">page</a></td>
    </tr>
    <tr>
      <th scope="row"><code>schema</code></th>
      <td><a href="http://schema.org/Person">Person</a></td>
      <td><a href="http://schema.org/Person">email</a></td>
      <td><a href="http://schema.org/Person">gender</a></td>
      <td><a href="http://schema.org/Person">birthDate</a></td>
      <td><a href="http://schema.org/Person">deathDate</a></td>
      <td><a href="http://schema.org/Person">image</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>vcard</code></th>
      <td><a href="http://tools.ietf.org/html/rfc6350#section-6.1.4">individual</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:email2">email</a></td>
      <td><a href="http://tools.ietf.org/html/rfc6350#section-6.2.7">GENDER</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:bday">bday</a></td>
      <td><a href="http://tools.ietf.org/html/rfc6474#section-2.3">DEATHDATE</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:photo">photo</a></td>
      <td></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:url">url</a></td>
    </tr>
    <tr>
      <th scope="row"><code>person</code></th>
      <td><a href="http://www.w3.org/ns/person#Person">Person</a></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td>see <code>schema</code></td>
      <td></td>
      <td>see <code>foaf</code></td>
    </tr>
    <tr>
      <th scope="row"><code>nco</code></th>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#PersonContact">PersonContact</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#hasEmailAddress">hasEmailAddress</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#gender">gender</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#birthDate">birthDate</a></td>
      <td></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#photo">photo</a></td>
      <td></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#url">url</a></td>
    </tr>
    <tr>
      <th scope="row">LDAP</th>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-3.12">person</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4524#section-2.16">mail</a></td>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="http://tools.ietf.org/html/rfc2798#section-2.6">jpegPhoto</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">CIQ</th>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/xPRL/specs/ciq-xprl-specs.html#_Toc213421948">Party</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533305"><abbr title="ElectronicAddressIdentifier">Electronic&hellip;</abbr></a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Gender</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533303">BirthDateTime</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Date</a></td>
      <td></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">FreeTextLines</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">NIEM</th>
      <td>PersonType</td>
      <td>ContactEmailID</td>
      <td><abbr title="PersonSex">Sex</abbr></td>
      <td><abbr title="PersonBirthDate">BirthDate</abbr></td>
      <td><abbr title="PersonDeathDate">DeathDate</abbr></td>
      <td><abbr title="PersonDigitalImage">DigitalImage</abbr></td>
      <td><abbr title="PersonDescriptionText">DescriptionText</abbr></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">OpenSocial</th>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">Person</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">emails</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">gender</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">birthday</a></td>
      <td></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">photos</a></td>
      <td></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person">urls</a></td>
    </tr>
    <tr>
      <th scope="row">Facebook</th>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">User</a></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">email</a></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">gender</a></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">birthday</a></td>
      <td></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">picture</a></td>
      <td><a href="https://developers.facebook.com/docs/reference/api/user/">bio</a></td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="table table-striped table-condensed table-terms">
  <thead>
    <tr>
      <th scope="row">Term</th>
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
      <th scope="row"><code>person</code></th>
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
      <th scope="row"><code>nco</code></th>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#fullname">fullname</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#nickname">nickname</a></td>
      <td></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#nameFamily">nameFamily</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#nameGiven">nameGiven</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#nameAdditional">nameAdditional</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#nameHonorificPrefix">nameHonorificPrefix</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#nameHonorificSuffix">nameHonorificSuffix</a></td>
    </tr>
    <tr>
      <th scope="row">LDAP</th>
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
      <th scope="row">CIQ</th>
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
      <th scope="row">NIEM</th>
      <td><abbr title="PersonFullName">FullName</abbr></td>
      <td><abbr title="PersonAlternateName">AlternateName</abbr></td>
      <td><abbr title="PersonMaidenName">MaidenName</abbr></td>
      <td><abbr title="PersonSurName">SurName</abbr></td>
      <td><abbr title="PersonGivenName">GivenName</abbr></td>
      <td><abbr title="PersonMiddleName">MiddleName</abbr></td>
      <td><abbr title="PersonNamePrefixText">NamePrefixText</abbr></td>
      <td><abbr title="PersonNameSuffixText">NameSuffixText</abbr></td>
    </tr>
    <tr>
      <th scope="row">OpenSocial</th>
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
      <th scope="row">Facebook</th>
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

# Organization

* Schema.org adds a new property for each identifier scheme, e.g. `duns`, `globalLocationNumber`, `taxID` and `vatID`.
* Schema.org adds a new property for each classification scheme, e.g. `isicV4` and `naics`.
* vCard's terms are from the [RDF encoding](http://www.w3.org/TR/vcard-rdf/) of vCard 3.0, except for `org` which is from [RFC 6350](http://tools.ietf.org/html/rfc6350) and `DEATHDATE` which is from [RFC 6474](http://tools.ietf.org/html/rfc6474).
* NIEM terms have been abbreviated, removing the repetitive `Organization` prefix, e.g. `OrganizationName` becomes `Name` below.

<table class="table table-striped table-condensed table-terms">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td>Organization</td>
      <td>name</td>
      <td>alternate name</td>
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
      <td><a href="http://xmlns.com/foaf/spec/#term_member">member</a></td>
      <td><a href="http://xmlns.com/foaf/spec/#term_birthday">birthday</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>schema</code></th>
      <td><a href="http://schema.org/Organization">Organization</a></td>
      <td><a href="http://schema.org/Organization">name</a></td>
      <td><a href="http://schema.org/Organization">legalName</a></td>
      <td><a href="http://schema.org/Organization">duns</a>, etc.</td>
      <td><a href="http://schema.org/Organization">isicV4</a>, etc.</td>
      <td><a href="http://schema.org/Organization">member</a></td>
      <td><a href="http://schema.org/Organization">foundingDate</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>org</code></th>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:Organization">Organization</a></td>
      <td><a href="http://www.w3.org/TR/skos-reference/#labels">skos:prefLabel</a></td>
      <td><a href="http://www.w3.org/TR/skos-reference/#labels">skos:altLabel</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:identifier">identifier</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:classification">classification</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:subOrganizationOf">subOrganizationOf</a></td>
      <td>see <code>foaf</code></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>vcard</code></th>
      <td><a href="http://tools.ietf.org/html/rfc6350#section-6.1.4">org</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:fn">fn</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:nickname">nickname</a></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:uid">uid</a></td>
      <td></td>
      <td></td>
      <td><a href="http://www.w3.org/Submission/vcard-rdf/#vcard:bday">bday</a></td>
      <td><a href="http://tools.ietf.org/html/rfc6474#section-2.3">DEATHDATE</a></td>
    </tr>
    <tr>
      <th scope="row"><code>nco</code></th>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#OrganizationContact">OrganizationContact</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#fullname">fullname</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#nickname">nickname</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nie/#identifier">nie:identifier</a></td>
      <td></td>
      <td></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#birthDate">birthDate</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LDAP</th>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-3.8">organization</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.19">o</a></td>
      <td></td>
      <td><a href="http://tools.ietf.org/html/rfc4524#section-2.24">uniqueIdentifier</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.1">businessCategory</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.17">member</a></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">CIQ</th>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/xPRL/specs/ciq-xprl-specs.html#_Toc213421948">Party</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716020">PartyName</a></td>
      <td></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Identifier</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Type</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533310">Relationship</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Date</a></td>
      <td><a href="http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd">Date</a></td>
    </tr>
    <tr>
      <th scope="row">NIEM</th>
      <td>OrganizationType</td>
      <td><abbr title="OrganizationName">Name</abbr></td>
      <td><abbr title="OrganizationDoingBusinessAsName">DoingBusiness&hellip;</abbr></td>
      <td><abbr title="OrganizationIdentification">Identification</abbr></td>
      <td><abbr title="OrganizationCategory">Category</abbr></td>
      <td><abbr title="OrganizationParent">Parent</abbr></td>
      <td><abbr title="OrganizationEstablishedDate">EstablishedDate</abbr></td>
      <td><abbr title="OrganizationTerminationDate">TerminationDate</abbr></td>
    </tr>
  </tbody>
</table>

# Address

* Schema.org adds [faxNumber](http://schema.org/PostalAddress), LDAP adds [mobile](http://tools.ietf.org/html/rfc4524#section-2.18), [pager](http://tools.ietf.org/html/rfc4524#section-2.20),
and [facsimileTelephoneNumber](http://tools.ietf.org/html/rfc4519#section-2.10) and NIEM adds `ContactFaxNumber`, `ContactMobileTelephoneNumber` and `ContactPagerNumber` to disambiguate between different telephone types. LDAP adds properties like [homePostalAddress](http://tools.ietf.org/html/rfc4524#section-2.13) to disambiguate between different address types.
* NIEM terms have been abbreviated, removing the repetitive `Address` prefix, e.g. `AddressRepresentation` becomes `Representation` below.

<table class="table table-striped table-condensed table-terms table-widest">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td>Address</td>
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
      <th scope="row"><code>locn</code></th>
      <td><a href="http://philarcher.org/isa/locn-v1.00.html#locn:Address">Address</a></td>
      <td></td>
      <td><a href="http://philarcher.org/isa/locn-v1.00.html#locn:fullAddress">fullAddress</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>nco</code></th>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#PostalAddress">PostalAddress</a></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LDAP</th>
      <td></td>
      <td></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.23">postalAddress</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.35">telephoneNumber</a></td>
    </tr>
    <tr>
      <th scope="row">CIQ</th>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716059">Address</a></td>
      <td></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716059">FreeTextAddress</a></td>
      <td><a href="http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533305">ContactNumber</a></td>
    </tr>
    <tr>
      <th scope="row">NIEM</th>
      <td>AddressType</td>
      <td>LocationCategory</td>
      <td><abbr title="AddressRepresentation">Representation</abbr></td>
      <td><abbr title="ContactTelephoneNumber">ContactTel&hellip;</abbr></td>
    </tr>
    <tr>
      <th scope="row">OpenSocial</th>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address">Address</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address">type</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address">formatted</a></td>
      <td><a href="http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address">phoneNumbers</a></td>
    </tr>
  </tbody>
</table>

# Post

* NIEM terms have been abbreviated, removing the repetitive `Employee` prefix, e.g. `EmployeePositionName` becomes `PositionName` below.

<table class="table table-striped table-condensed table-terms table-widest">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td>Post</td>
      <td>person</td>
      <td>organization</td>
      <td>label</td>
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
      <td><a href="http://www.w3.org/TR/skos-reference/#labels">skos:prefLabel</a></td>
      <td><a href="http://www.w3.org/TR/vocab-org/#org:role">role</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"><code>nco</code></th>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#Affiliation">Affiliation</a></td>
      <td></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#org">org</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#title">title</a></td>
      <td><a href="http://www.semanticdesktop.org/ontologies/nco/#role">role</a></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LDAP</th>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-3.10">organizationalRole</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.28">roleOccupant</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.20">o</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.3">cn</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.38">title</a></td>
      <td><a href="http://tools.ietf.org/html/rfc4519#section-2.23">postalAddress</a></td>
    </tr>
    <tr>
      <th scope="row">NIEM</th>
      <td><abbr title="PersonEmploymentAssociationType">PersonEmploy&hellip;</abbr></td>
      <td><abbr title="EmployeeReference">Reference</abbr></td>
      <td>Employer</td>
      <td></td>
      <td><abbr title="EmployeePositionName">PositionName</abbr></td>
      <td><abbr title="EmploymentLocationReference">EmploymentLoc&hellip;</abbr></td>
    </tr>
    <tr>
      <th scope="row">PMF</th>
      <td>Role</td>
      <td>related_object</td>
      <td>primary_object</td>
      <td></td>
      <td>role_name</td>
      <td>contact_information</td>
    </tr>
  </tbody>
</table>

# Membership

<table class="table table-striped table-condensed table-terms table-widest">
  <thead>
    <tr>
      <th scope="row">Term</th>
      <td>Membership</td>
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
