---
layout: default
title: Popolo
---
<h1>Popolo <small>International open government data specifications</small></h1>

<div class="row" id="contents">
  <div class="col-sm-6">
    <h2>People and organizations</h2>

    <ul>
      <li><a href="/specs/person.html">Person</a></li>
      <li><a href="/specs/organization.html">Organization</a></li>
      <li><a href="/specs/membership.html">Membership</a></li>
      <li><a href="/specs/post.html">Post</a></li>
      <li><a href="/specs/contact-detail.html">Contact detail</a></li>
    </ul>

    <h2>Motions and voting</h2>
    <ul>
      <li><a href="/specs/motion.html">Motion</a></li>
      <li><a href="/specs/vote-event.html">Vote event</a></li>
      <li><a href="/specs/count.html">Count</a></li>
      <li><a href="/specs/vote.html">Vote</a></li>
    </ul>

    <h2>Other classes</h2>
    <ul>
      <li><a href="/specs/area.html">Area</a></li>
      <li><a href="/specs/event.html">Event</a></li>
      <li><a href="/specs/speech.html">Speech</a></li>
    </ul>
  </div>
  <div class="col-sm-6">
    <h2><a href="/specs/">Specification</a></h2>

    <ol>
      <li><a href="/specs/#scope">Scope</a></li>
      <li><a href="/specs/#conformance">Conformance</a></li>
      <li><a href="/specs/#use-cases-and-requirements">Use cases &amp; requirements</a></li>
      <li><a href="/specs/#standard-reuse">Standard reuse</a></li>
      <li><a href="/specs/#classes-and-properties">Classes and properties</a></li>
      <li><a href="/specs/#serialization">Serialization</a></li>
      <li><a href="/specs/#history">Change history</a></li>
    </ol>

    <h2>Appendices</h2>

    <ul>
      <li><a href="/appendices/examples.html">Example Popolo JSON</a></li>
      <li><a href="/appendices/multilingualization.html">Multilingualization</a></li>
      <li><a href="/appendices/terms.html">Inventory of terms from prior work</a></li>
      <li><a href="/appendices/survey.html">Survey of existing specifications</a></li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-sm-6">
    <h2>Goal</h2>

    <p>Define data interchange formats and data models so that organizations can spend less time transforming and modeling data and more time applying it to the problems they face.</p>
    <p>Popolo supports the development of reusable open source components that implement the specifications, making it easier for civic developers to create civic software.</p>
  </div>
  <div class="col-sm-6">
    <h2>Process</h2>

    <ol>
      <li>Identify use cases and requirements for an <a href="http://www.thoughtworks.com/insights/blog/stop-designing-users">activity system</a></li>
      <li>Research prior work relating to the use cases and requirements</li>
      <li>Draft a specification and improve it through <a href="https://tools.ietf.org/html/rfc7282">rough consensus</a></li>
    </ol>

    <p>We otherwise roughly follow the <a href="http://www.w3.org/community/about/agreements/">W3C process</a>.</p>
  </div>
</div>

<div class="row">
  <div class="col-sm-6">
    <h2>Contribute</h2>

    <ul>
      <li>Discuss <a href="https://github.com/popolo-project/popolo-spec/issues">open issues</a> on <a href="https://github.com/popolo-project/popolo-spec">GitHub</a></li>
      <li><a href="http://lists.w3.org/Archives/Public/public-opengov/">Join the W3C Open Government mailing list</a></li>
      <li><a href="https://groups.google.com/forum/#!forum/poplus">Join the Poplus mailing list</a></li>
    </ul>

    <div class="hidden-xs">
      <p>Popolo is used by, among others:</p>

      <p id="adoption">
        <a class="hidden-sm" href="http://g0v.tw/" data-toggle="tooltip" title="g0v"><img src="/img/adoption/g0v.png" height="33" alt="g0v"></a>
        <a href="http://www.granicus.com/" data-toggle="tooltip" title="Granicus"><img src="/img/adoption/granicus.png" height="25" alt="Granicus"></a>
        <a class="hidden-sm hidden-md" href="http://kohovolit.eu/" data-toggle="tooltip" title="KohoVolit.eu"><img src="/img/adoption/kohovolit.png" height="25" alt="KohoVolit.eu"></a>
        <a href="http://mysociety.org/" data-toggle="tooltip" title="mySociety"><img src="/img/adoption/mysociety.png" height="25" alt="mySociety"></a>
        <a href="http://opencivicdata.org/" data-toggle="tooltip" title="Open Civic Data"><img src="/img/adoption/opencivicdata.png" height="50" alt="Open Civic Data"></a>
        <a href="http://www.opennorth.ca/" data-toggle="tooltip" title="Open North"><img src="/img/adoption/opennorth.png" height="50" alt="Open North"></a>
        <a class="hidden-sm hidden-md" href="http://www.openpolis.it/" data-toggle="tooltip" title="Associazione Openpolis"><img src="/img/adoption/openpolis.png" height="25" alt="Associazione Openpolis"></a>
        <a href="http://poplus.org/" data-toggle="tooltip" title="Poplus"><img src="/img/adoption/poplus.png" height="50" alt="Poplus"></a>
        <a class="hidden-sm hidden-md" href="http://sinarproject.org/" data-toggle="tooltip" title="Sinar Project"><img src="/img/adoption/sinar.png" height="50" alt="Sinar Project"></a>
        <a href="http://sunlightfoundation.com/" data-toggle="tooltip" title="Sunlight Foundation"><img src="/img/adoption/sunlightfoundation.png" height="33" alt="Sunlight Foundation"></a>
        <a class="hidden-sm" href="https://www.texastribune.org/" data-toggle="tooltip" title="The Texas Tribune"><img src="/img/adoption/texastribune.png" height="50" alt="The Texas Tribune"></a>
      </p>
    </div>
  </div>
  <div class="col-sm-6">
    <h2>Principles</h2>

    <ul>
      <li>Reuse prior work unless it sacrifices consistency or clarity</li>
      <li>Keep the specification small by making the models flexible</li>
      <li>Plan for imprecise and uncertain data</li>
    </ul>

    <div class="hidden-xs">
      <p>Popolo reuses specifications from:</p>

      <p id="reuse">
        <a href="http://www.w3.org/" data-toggle="tooltip" title="World Wide Web Consortium"><img src="/img/reuse/w3c.png" height="50" alt="World Wide Web Consortium"></a>
        <a href="http://www.ietf.org/" data-toggle="tooltip" title="Internet Engineering Task Force"><img src="/img/reuse/ietf.png" height="50" alt="Internet Engineering Task Force"></a>
        <a href="http://dublincore.org/" data-toggle="tooltip" title="Dublin Core Metadata Initiative"><img src="/img/reuse/dcmi.png" height="50" alt="Dublin Core Metadata Initiative"></a>
        <a href="http://www.geonames.org/" data-toggle="tooltip" title="GeoNames"><img src="/img/reuse/geonames.png" height="25" alt="GeoNames"></a>
      </p>
    </div>
  </div>
</div>
