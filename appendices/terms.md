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

<table>
  <thead>
    <tr>
      <th>Prefix</th>
      <th>Namespace</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>foaf</code>
      </td>
      <td>
        <a href='http://xmlns.com/foaf/0.1/'>http://xmlns.com/foaf/0.1/</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>schema</code>
      </td>
      <td>
        <a href='http://schema.org/'>http://schema.org/</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>org</code>
      </td>
      <td>
        <a href='http://www.w3.org/ns/org#'>http://www.w3.org/ns/org#</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>skos</code>
      </td>
      <td>
        <a href='http://www.w3.org/2004/02/skos/core#'>http://www.w3.org/2004/02/skos/core#</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>vcard</code>
      </td>
      <td>
        <a href='http://www.w3.org/2006/vcard/ns#'>http://www.w3.org/2006/vcard/ns#</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>person</code>
      </td>
      <td>
        <a href='http://www.w3.org/ns/person#'>http://www.w3.org/ns/person#</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>locn</code>
      </td>
      <td>
        <a href='http://www.w3.org/ns/locn#'>http://www.w3.org/ns/locn#</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>nco</code>
      </td>
      <td>
        <a href='http://www.semanticdesktop.org/ontologies/nco/#'>http://www.semanticdesktop.org/ontologies/nco/#</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>nie</code>
      </td>
      <td>
        <a href='http://www.semanticdesktop.org/ontologies/nie/#'>http://www.semanticdesktop.org/ontologies/nie/#</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>ad</code>
      </td>
      <td>
        <a href='http://schemas.talis.com/2005/address/schema#'>http://schemas.talis.com/2005/address/schema#</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>poder</code>
      </td>
      <td>
        <a href='http://dev.poderopedia.com/vocab/'>http://dev.poderopedia.com/vocab/</a>
      </td>
    </tr>
    <tr>
      <td>
        <code>oparl</code>
      </td>
      <td>
        <a href='http://oparl.org/schema/1.0/'>http://oparl.org/schema/1.0/</a>
      </td>
    </tr>
  </tbody>
</table>


# Person

* vCard's terms are from the [RDF encoding](http://www.w3.org/TR/vcard-rdf/) of vCard 4.0, except for `DEATHDATE` which is from [RFC 6474](http://tools.ietf.org/html/rfc6474).

<div class='table-responsive'>
  <table class='table table-striped table-hover table-condensed'>
    <thead>
      <tr>
        <th scope='row'>Term</th>
        <td>Person</td>
        <td>identifier</td>
        <td>email address</td>
        <td>gender</td>
        <td>date of birth</td>
        <td>date of death</td>
        <td>head shot</td>
        <td>one-line biography</td>
        <td>biography</td>
        <td>external links</td>
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
        <th scope='row'>
          <code>foaf</code>
        </th>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_Person'>
            Person
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_nick'>
            nick
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_mbox'>
            mbox
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_gender'>
            gender
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_birthday'>
            birthday
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_img'>
            img
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_page'>
            page
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_name'>
            name
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_nick'>
            nick
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_familyName'>
            familyName
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_givenName'>
            givenName
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_title'>
            title
          </a>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>schema</code>
        </th>
        <td>
          <a href='http://schema.org/Person'>
            Person
          </a>
        </td>
        <td>
          <a href='http://schema.org/duns'>
            duns
          </a>
        </td>
        <td>
          <a href='http://schema.org/email'>
            email
          </a>
        </td>
        <td>
          <a href='http://schema.org/gender'>
            gender
          </a>
        </td>
        <td>
          <a href='http://schema.org/birthDate'>
            birthDate
          </a>
        </td>
        <td>
          <a href='http://schema.org/deathDate'>
            deathDate
          </a>
        </td>
        <td>
          <a href='http://schema.org/image'>
            image
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://schema.org/'>
            name
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://schema.org/familyName'>
            familyName
          </a>
        </td>
        <td>
          <a href='http://schema.org/givenName'>
            givenName
          </a>
        </td>
        <td>
          <a href='http://schema.org/additionalName'>
            additionalName
          </a>
        </td>
        <td>
          <a href='http://schema.org/honorificPrefix'>
            honorificPrefix
          </a>
        </td>
        <td>
          <a href='http://schema.org/honorificSuffix'>
            honorificSuffix
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>vcard</code>
        </th>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e1539'>
            Individual
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e516'>
            hasUID
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e164'>
            hasEmail
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e200'>
            hasGender
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e695'>
            bday
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc6474#section-2.3'>
            DEATHDATE
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e396'>
            hasPhoto
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e527'>
            hasUrl
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e777'>
            fn
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e912'>
            nickname
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e764'>
            family-name
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e790'>
            given-name
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e668'>
            additional-name
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e804'>
            <abbr title='honorific-prefix'>honorific-prefi…</abbr>
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e817'>
            <abbr title='honorific-suffix'>honorific-suffi…</abbr>
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>person</code>
        </th>
        <td>
          <a href='http://www.w3.org/ns/person#Person'>
            Person
          </a>
        </td>
        <td>
        </td>
        <td>
          see <code>schema</code>
        </td>
        <td>
          see <code>schema</code>
        </td>
        <td>
          see <code>schema</code>
        </td>
        <td>
          see <code>schema</code>
        </td>
        <td>
          see <code>schema</code>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          see <code>foaf</code>
        </td>
        <td>
          see <code>foaf</code>
        </td>
        <td>
          <a href='http://dublincore.org/documents/dcmi-terms/#terms-alternative'>
            alternative
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/ns/person#birthName'>
            birthName
          </a>
        </td>
        <td>
          see <code>foaf</code>
        </td>
        <td>
          see <code>foaf</code>
        </td>
        <td>
          see <code>schema</code>
        </td>
        <td>
          see <code>schema</code>
        </td>
        <td>
          see <code>schema</code>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>nco</code>
        </th>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#PersonContact'>
            PersonContact
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#contactUID'>
            contactUID
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#hasEmailAddress'>
            hasEmailAddress
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#gender'>
            gender
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#birthDate'>
            birthDate
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#photo'>
            photo
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#url'>
            url
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#fullname'>
            fullname
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#nickname'>
            nickname
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#nameFamily'>
            nameFamily
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#nameGiven'>
            nameGiven
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#nameAdditional'>
            nameAdditional
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#nameHonorificPrefix'>
            <abbr title='nameHonorificPrefix'>nameHonorificPr…</abbr>
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#nameHonorificSuffix'>
            <abbr title='nameHonorificSuffix'>nameHonorificSu…</abbr>
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>poder</code>
        </th>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#foaf:Person'>
            foaf:Person
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_mbox'>
            foaf:mbox
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:hasGender'>
            hasGender
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#bio:birth'>
            bio:birth
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#bio:death'>
            bio:death
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_img'>
            foaf:img
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:hasShortBiography'>
            <abbr title='hasShortBiography'>hasShortBiograp…</abbr>
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:hasLongBiography'>
            <abbr title='hasLongBiography'>hasLongBiograph…</abbr>
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:hasUrl'>
            hasUrl
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_name'>
            foaf:name
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:alias'>
            alias
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_familyName'>
            foaf:familyName
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#foaf:givenName'>
            foaf:givenName
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>oparl</code>
        </th>
        <td>
          <a href='http://oparl.org/schema/1.0/OParlPerson'>
            OParlPerson
          </a>
        </td>
        <td>
          id
        </td>
        <td>
          email
        </td>
        <td>
          sex
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          last_name
        </td>
        <td>
          first_name
        </td>
        <td>
        </td>
        <td>
          academic_title
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          LDAP
        </th>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-3.12'>
            person
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4524#section-2.24'>
            <abbr title='uniqueIdentifier'>uniqueIdentifie…</abbr>
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4524#section-2.16'>
            mail
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc2798#section-2.6'>
            jpegPhoto
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.3'>
            cn
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.32'>
            sn
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.12'>
            givenName
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.14'>
            initials
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.21'>
            personalTitle
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.11'>
            <abbr title='generationQuantifier'>generationQuant…</abbr>
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          CIQ
        </th>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/xPRL/specs/ciq-xprl-specs.html#_Toc213421948'>
            Party
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd'>
            Identifier
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533305'>
            <abbr title='ElectronicAddressIdentifier'>ElectronicAddre…</abbr>
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd'>
            Gender
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533303'>
            BirthDateTime
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd'>
            Date
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd'>
            FreeTextLines
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716020'>
            PartyName
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          NIEM
        </th>
        <td>
          PersonType
        </td>
        <td>
          <abbr title='PersonOtherIdentification'>PersonOtherIden…</abbr>
        </td>
        <td>
          ContactEmailID
        </td>
        <td>
          <abbr title='PersonSex'>Sex</abbr>
        </td>
        <td>
          <abbr title='PersonBirthDate'>BirthDate</abbr>
        </td>
        <td>
          <abbr title='PersonDeathDate'>DeathDate</abbr>
        </td>
        <td>
          <abbr title='PersonDigitalImage'>DigitalImage</abbr>
        </td>
        <td>
        </td>
        <td>
          <abbr title='PersonDescriptionText'>DescriptionText</abbr>
        </td>
        <td>
        </td>
        <td>
          <abbr title='PersonFullName'>FullName</abbr>
        </td>
        <td>
          <abbr title='PersonAlternateName'>AlternateName</abbr>
        </td>
        <td>
          <abbr title='PersonMaidenName'>MaidenName</abbr>
        </td>
        <td>
          <abbr title='PersonSurName'>SurName</abbr>
        </td>
        <td>
          <abbr title='PersonGivenName'>GivenName</abbr>
        </td>
        <td>
          <abbr title='PersonMiddleName'>MiddleName</abbr>
        </td>
        <td>
          <abbr title='PersonNamePrefixText'>NamePrefixText</abbr>
        </td>
        <td>
          <abbr title='PersonNameSuffixText'>NameSuffixText</abbr>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          OpenSocial
        </th>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            Person
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            orgIdentifier
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            emails
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            gender
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            birthday
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            photos
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            urls
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            displayName
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            nickname
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Person'>
            alternateNames
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name'>
            familyName
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name'>
            givenName
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name'>
            middleName
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name'>
            honorificPrefix
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Name'>
            honorificSuffix
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          Facebook
        </th>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            User
          </a>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            third_party_id
          </a>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            email
          </a>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            gender
          </a>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            birthday
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            picture
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            bio
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            name
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            last_name
          </a>
        </td>
        <td>
          <a href='https://developers.facebook.com/docs/reference/api/user/'>
            first_name
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          Cornell
        </th>
        <td>
          Person
        </td>
        <td>
          hasIdentifier
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          hasDateOfBirth
        </td>
        <td>
          hasDateOfDeath
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          hasHomepage
        </td>
        <td>
          hasName
        </td>
        <td>
          hasNickname
        </td>
        <td>
        </td>
        <td>
          hasLastName
        </td>
        <td>
          hasFirstName
        </td>
        <td>
        </td>
        <td>
          <abbr title='hasTitleOfAddress'>hasTitleOfAddre…</abbr>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          PML
        </th>
        <td>
          person
        </td>
        <td>
          identifier
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          externalLinks
        </td>
        <td>
          label
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</div>


# Organization

* Schema.org adds a new property for each identifier scheme, e.g. `duns`, `globalLocationNumber`, `taxID` and `vatID`, and each classification scheme, e.g. `isicV4` and `naics`.
* In PML Schema, organizational hierarchies can have a maximum depth of five.

<div class='table-responsive'>
  <table class='table table-striped table-hover table-condensed'>
    <thead>
      <tr>
        <th scope='row'>Term</th>
        <td>Organization</td>
        <td>name</td>
        <td>alternate name</td>
        <td>identifier</td>
        <td>classification</td>
        <td>child organization</td>
        <td>founding date</td>
        <td>dissolution date</td>
        <td>image</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>
          <code>foaf</code>
        </th>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_Organization'>
            Organization
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_name'>
            name
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_nick'>
            nick
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_member'>
            member
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_'>
            birthday
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>schema</code>
        </th>
        <td>
          <a href='http://schema.org/Organization'>
            Organization
          </a>
        </td>
        <td>
          <a href='http://schema.org/name'>
            name
          </a>
        </td>
        <td>
          <a href='http://schema.org/legalName'>
            legalName
          </a>
        </td>
        <td>
          <a href='http://schema.org/duns'>
            duns
          </a>
        </td>
        <td>
          <a href='http://schema.org/naics'>
            naics
          </a>
        </td>
        <td>
          <a href='http://schema.org/member'>
            member
          </a>
        </td>
        <td>
          <a href='http://schema.org/foundingDate'>
            foundingDate
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://schema.org/image'>
            image
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>org</code>
        </th>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:Organization'>
            Organization
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/skos-reference/#labels'>
            skos:prefLabel
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/skos-reference/#labels'>
            skos:altLabel
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:identifier'>
            identifier
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:classification'>
            classification
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:hasSubOrganization'>
            <abbr title='hasSubOrganization'>hasSubOrganizat…</abbr>
          </a>
        </td>
        <td>
          see <code>foaf</code>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>vcard</code>
        </th>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e1877'>
            Organization
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e939'>
            <abbr title='organization-name'>organization-na…</abbr>
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e912'>
            nickname
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e516'>
            hasUID
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e695'>
            bday
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc6474#section-2.3'>
            DEATHDATE
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e396'>
            hasPhoto
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>nco</code>
        </th>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#OrganizationContact'>
            <abbr title='OrganizationContact'>OrganizationCon…</abbr>
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#fullname'>
            fullname
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#nickname'>
            nickname
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/nie/#identifier'>
            nie:identifier
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#birthDate'>
            birthDate
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#photo'>
            photo
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>poder</code>
        </th>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#foaf:Organization'>
            <abbr title='foaf:Organization'>foaf:Organizati…</abbr>
          </a>
        </td>
        <td>
          <a href='http://xmlns.com/foaf/spec/#term_name'>
            foaf:name
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:alias'>
            alias
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:hasTaxId'>
            hasTaxId
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:hasMainSector'>
            hasMainSector
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:subsidiaryCompanyOf'>
            <abbr title='subsidiaryCompanyOf'>subsidiaryCompa…</abbr>
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#bio:birth'>
            bio:birth
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#bio:death'>
            bio:death
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:hasLogo'>
            hasLogo
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>oparl</code>
        </th>
        <td>
          <a href='http://oparl.org/schema/1.0/OParlBody'>
            OParlBody
          </a>
        </td>
        <td>
          name
        </td>
        <td>
        </td>
        <td>
          id
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          LDAP
        </th>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-3.8'>
            organization
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.19'>
            o
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4524#section-2.24'>
            <abbr title='uniqueIdentifier'>uniqueIdentifie…</abbr>
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4524#section-2.1'>
            <abbr title='businessCategory'>businessCategor…</abbr>
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4524#section-2.17'>
            member
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          CIQ
        </th>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/xPRL/specs/ciq-xprl-specs.html#_Toc213421948'>
            Party
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716020'>
            PartyName
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd'>
            Identifier
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd'>
            Type
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533310'>
            Relationship
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd'>
            Date
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/emergency/edxl-have/cs01/xPIL.xsd'>
            Date
          </a>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          NIEM
        </th>
        <td>
          <abbr title='OrganizationType'>OrganizationTyp…</abbr>
        </td>
        <td>
          <abbr title='OrganizationName'>Name</abbr>
        </td>
        <td>
          <abbr title='OrganizationDoingBusinessAsName'>OrganizationDoi…</abbr>
        </td>
        <td>
          <abbr title='OrganizationIdentification'>Identification</abbr>
        </td>
        <td>
          <abbr title='OrganizationCategory'>Category</abbr>
        </td>
        <td>
          <abbr title='OrganizationParent'>Parent</abbr>
        </td>
        <td>
          <abbr title='OrganizationEstablishedDate'>EstablishedDate</abbr>
        </td>
        <td>
          <abbr title='OrganizationTerminationDate'>TerminationDate</abbr>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          Cornell
        </th>
        <td>
          Group
        </td>
        <td>
          hasName
        </td>
        <td>
          hasAltName
        </td>
        <td>
          hasAcronym
        </td>
        <td>
          hasGroupTopic
        </td>
        <td>
        </td>
        <td>
          <abbr title='hasGroupStartDate'>hasGroupStartDa…</abbr>
        </td>
        <td>
          hasGroupEndDate
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          PML
        </th>
        <td>
          unit
        </td>
        <td>
          label
        </td>
        <td>
        </td>
        <td>
          identifier
        </td>
        <td>
          type
        </td>
        <td>
        </td>
        <td>
          startDate
        </td>
        <td>
          endDate
        </td>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</div>


# Membership

* In PML Schema, memberships are embedded on `person` objects.

<div class='table-responsive'>
  <table class='table table-striped table-hover table-condensed'>
    <thead>
      <tr>
        <th scope='row'>Term</th>
        <td>Membership</td>
        <td>role</td>
        <td>person</td>
        <td>organization</td>
        <td>post</td>
        <td>start date</td>
        <td>end date</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>
          <code>org</code>
        </th>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:Membership'>
            Membership
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:role'>
            role
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:person'>
            person
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:organization'>
            organization
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:memberDuring'>
            memberDuring
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:memberDuring'>
            memberDuring
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>poder</code>
        </th>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:Connection'>
            Connection
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:hasWorkRole'>
            hasWorkRole
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:personParticipant'>
            <abbr title='personParticipant'>personParticipa…</abbr>
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:organizationParticipant'>
            <abbr title='organizationParticipant'>organizationPar…</abbr>
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:connectionStartDate'>
            <abbr title='connectionStartDate'>connectionStart…</abbr>
          </a>
        </td>
        <td>
          <a href='http://dev.poderopedia.com/documentation/index#poder:connectionEndDate'>
            <abbr title='connectionEndDate'>connectionEndDa…</abbr>
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          Cornell
        </th>
        <td>
          Membership
        </td>
        <td>
          hasMemberRole
        </td>
        <td>
          hasMember
        </td>
        <td>
          <abbr title='hasMembershipGroup'>hasMembershipGr…</abbr>
        </td>
        <td>
        </td>
        <td>
          <abbr title='hasMembershipStartDate'>hasMembershipSt…</abbr>
        </td>
        <td>
          <abbr title='hasMembershipEndDate'>hasMembershipEn…</abbr>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          PML
        </th>
        <td>
          function
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          categoryIDs
        </td>
        <td>
          functionID
        </td>
        <td>
          startDate
        </td>
        <td>
          endDate
        </td>
      </tr>
    </tbody>
  </table>
</div>


# Post

* PML Schema has the properties `startDate` and `endDate` for the dates of creation and elimination.

<div class='table-responsive table-auto'>
  <table class='table table-striped table-hover table-condensed'>
    <thead>
      <tr>
        <th scope='row'>Term</th>
        <td>Post</td>
        <td>label</td>
        <td>role</td>
        <td>organization</td>
        <td>person</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>
          <code>org</code>
        </th>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:Post'>
            Post
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/skos-reference/#labels'>
            skos:prefLabel
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:role'>
            role
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:postIn'>
            postIn
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vocab-org/#org:heldBy'>
            heldBy
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>nco</code>
        </th>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#Affiliation'>
            Affiliation
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#title'>
            title
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#role'>
            role
          </a>
        </td>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#org'>
            org
          </a>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          LDAP
        </th>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-3.10'>
            <abbr title='organizationalRole'>organizationalR…</abbr>
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.3'>
            cn
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.38'>
            title
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.20'>
            o
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.28'>
            roleOccupant
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          NIEM
        </th>
        <td>
          <abbr title='PersonEmploymentAssociationType'>PersonEmploymen…</abbr>
        </td>
        <td>
        </td>
        <td>
          <abbr title='EmployeePositionName'>PositionName</abbr>
        </td>
        <td>
          Employer
        </td>
        <td>
          <abbr title='EmployeeReference'>EmployeeReferen…</abbr>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          PMF
        </th>
        <td>
          Role
        </td>
        <td>
        </td>
        <td>
          role_name
        </td>
        <td>
          primary_object
        </td>
        <td>
          related_object
        </td>
      </tr>
      <tr>
        <th scope='row'>
          PML
        </th>
        <td>
          function
        </td>
        <td>
          label
        </td>
        <td>
        </td>
        <td>
          category
        </td>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</div>


# Address

* To disambiguate between different telephone types, Schema.org adds [faxNumber](http://schema.org/PostalAddress), LDAP adds [mobile](http://tools.ietf.org/html/rfc4524#section-2.18), [pager](http://tools.ietf.org/html/rfc4524#section-2.20) and [facsimileTelephoneNumber](http://tools.ietf.org/html/rfc4519#section-2.10) and NIEM adds `ContactFaxNumber`, `ContactMobileTelephoneNumber` and `ContactPagerNumber`.
* LDAP adds properties like [homePostalAddress](http://tools.ietf.org/html/rfc4524#section-2.13) to disambiguate between different address types.

<div class='table-responsive table-auto'>
  <table class='table table-striped table-hover table-condensed'>
    <thead>
      <tr>
        <th scope='row'>Term</th>
        <td>Address</td>
        <td>address type</td>
        <td>postal address</td>
        <td>telephone</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>
          <code>schema</code>
        </th>
        <td>
          <a href='http://schema.org/PostalAddress'>
            PostalAddress
          </a>
        </td>
        <td>
          <a href='http://schema.org/contactType'>
            contactType
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://schema.org/telephone'>
            telephone
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>vcard</code>
        </th>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e1126'>
            Address
          </a>
        </td>
        <td>
          <a href='http://www.w3.org/TR/rdf-schema/#ch_type'>
            rdf:type
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://www.w3.org/TR/vcard-rdf/#d4e491'>
            hasTelephone
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>locn</code>
        </th>
        <td>
          <a href='http://philarcher.org/isa/locn-v1.00.html#locn:Address'>
            Address
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://philarcher.org/isa/locn-v1.00.html#locn:fullAddress'>
            fullAddress
          </a>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>nco</code>
        </th>
        <td>
          <a href='http://www.semanticdesktop.org/ontologies/2007/03/22/nco/#PostalAddress'>
            PostalAddress
          </a>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          <code>ad</code>
        </th>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://schemas.talis.com/2005/address/schema#tel'>
            tel
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          LDAP
        </th>
        <td>
        </td>
        <td>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.23'>
            postalAddress
          </a>
        </td>
        <td>
          <a href='http://tools.ietf.org/html/rfc4519#section-2.35'>
            telephoneNumber
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          CIQ
        </th>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716059'>
            Address
          </a>
        </td>
        <td>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc207716059'>
            FreeTextAddress
          </a>
        </td>
        <td>
          <a href='http://docs.oasis-open.org/ciq/v3.0/specs/ciq-specs-v3.html#_Toc193533305'>
            ContactNumber
          </a>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          NIEM
        </th>
        <td>
          AddressType
        </td>
        <td>
          <abbr title='LocationCategory'>LocationCategor…</abbr>
        </td>
        <td>
          <abbr title='AddressRepresentation'>AddressRepresen…</abbr>
        </td>
        <td>
          <abbr title='ContactTelephoneNumber'>TelephoneNumber</abbr>
        </td>
      </tr>
      <tr>
        <th scope='row'>
          OpenSocial
        </th>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address'>
            Address
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address'>
            type
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address'>
            formatted
          </a>
        </td>
        <td>
          <a href='http://opensocial-resources.googlecode.com/svn/spec/trunk/Social-Data.xml#Address'>
            phoneNumbers
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

