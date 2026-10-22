import "./App.css"
import { Routes, Route } from "react-router-dom"
import LibraryOfThings from "./pages/projects/LibraryofThings"
import ArtefactQuest from "./pages/projects/ArtefactQuest"
function Home() {
  return (
    <main className="home">

      {/* Background stays fixed while page scrolls */}
      <div className="background">
        <img
          src="/southgate.png"
          alt=""
          className="background-image"
        />
      </div>


      {/* White header scrolls away normally */}
      <header className="header">

        <h1 className="logo">
          FREDDIE HOGG PORTFOLIO
        </h1>

        <nav className="nav">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#cv">CV</a>
          <a href="#contact">CONTACT</a>
        </nav>

      </header>


      {/* ABOUT */}
      <section id="about" className="page-section about">

  <div className="about-layout">

    <p className="about-label">
      01 / ABOUT
    </p>

    <h2 className="about-heading">
      A BIT ABOUT ME
    </h2>

    <div className="about-photo">
      <img
        src="/freddie.jpg"
        alt="Freddie Hogg"
      />
    </div>

    <div className="about-copy">
    <p>
  I'm a Computer Science and Artificial Intelligence graduate with a strong
  interest in UX/UI and digital product design. I enjoy understanding what
  people need from a product and turning those needs into experiences that
  feel clear, intuitive and considered.
</p>

<p>
  What interests me most about UX is the psychology behind how people interact
  with technology and how even small design
  decisions can influence behaviour and make complex tasks feel simple. I like
  questioning why an interface works, where friction comes from, and how a
  design can be adapted around the people actually using it.
</p>

<p>
  My Computer Science and AI background also shapes how I approach design. I
  enjoy thinking beyond the interface itself, considering how a product works,
  the technical constraints behind it, and how emerging technology can improve
  an experience without adding unnecessary complexity.
</p>

<p>
  Visual design is also a big part of what I enjoy. Growing up in Southgate,
  North London, surrounded by different cultures and visual identities has
  influenced my eye for design, alongside inspiration from fashion,
  architecture, photography and the digital products I use every day. For me,
  the strongest products bring both sides together: understanding people first,
  then creating something that works well and feels equally considered.
</p>
    </div>

  </div>

</section>


<section id="work" className="work">

  <div className="work-label">
    <p>02 / WORK</p>
  </div>

  <h2 className="selected-work">
    SELECTED WORK
  </h2>


  {/* PROJECT 01 — LIBRARY OF THINGS */}
  <div className="project-screen">

    <div className="project-text">

      <p className="project-number"></p>

      <h3>LIBRARY OF THINGS</h3>

      <p className="project-description">
        Library of Things is a mobile experience designed to make
        borrowing useful everyday items simple and accessible.
        The project focused on creating a clear user journey from
        discovering and filtering items through to understanding
        suitability, availability and completing a booking.
        The experience was designed and prototyped in Figma, with
        usability testing used to identify problems and refine the
        interface, navigation and accessibility of the final design.
      </p>

      <a href="/library-of-things" className="view-project">
        VIEW PROJECT ↗
      </a>

    </div>

    <a href="/library-of-things" className="project-cover">
      <img
        src="/LibraryofThingswithLogopt3.png"
        alt="Library of Things project"
      />
    </a>

  </div>


  {/* PROJECT 02 — ARTEFACT QUEST */}
  <div className="project-screen">

    <div className="project-text">

      <p className="project-number"></p>

      <h3>ARTEFACT QUEST</h3>

      <p className="project-description">
        Artefact Quest is a collaborative mobile experience designed
        to make museum visits more interactive for school groups.
        Students discover and scan artefacts, build shared collections
        and complete quizzes together, combining exploration, learning
        and competition. The experience was designed and prototyped in
        Figma, applying UX research around shared awareness, common
        ground, user control and collocated interaction. The final
        concept was presented through an interactive prototype and
        video walkthrough, demonstrating the student and teacher
        journeys within the museum.
      </p>

      <a href="/artefact-quest" className="view-project">
        VIEW PROJECT ↗
      </a>

    </div>

    <a href="/artefact-quest" className="project-cover">
      <img
        src="/ArtefactQuest-Cover.png"
        alt="Artefact Quest project"
      />
    </a>

  </div>

</section>


<section id="cv" className="page-section cv">

<p className="cv-section-label">03 / CV</p>

<div className="cv-content">

  <h2>My CV</h2>

  <a
    href="/FreddieCVFinal2026- UX copy.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="cv-preview"
  >
    <img
      src="/CV-Preview.png"
      alt="Preview of Freddie Hogg's CV"
    />

    <div className="cv-overlay">
      <span>VIEW FULL CV ↗</span>
    </div>
  </a>

</div>

</section>





 {/* CONTACT FOOTER */}
<footer id="contact" className="contact">

<p className="contact-title">
CONTACT
</p>

<div className="contact-links">

  <a href="mailto:freddiejhogg@gmail.com">
    EMAIL: freddiejhogg@gmail.com ↗
  </a>

  <a
    href="www.linkedin.com/in/freddie-hogg-829146234"
    target="_blank"
    rel="noopener noreferrer"
  >
    LINKEDIN ↗
  </a>

  <a href="tel:+44 7445 694 945">
   NUMBER: +44 7445 694 945
  </a>

</div>

</footer>

    </main>
  )
}

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/library-of-things"
        element={<LibraryOfThings />}
      />

      <Route
        path="/artefact-quest"
        element={<ArtefactQuest />}
      />



    </Routes>
  )
}

export default App