import "../../App.css"

function ArtefactQuest() {
  return (
    <main className="artefact-page">

      {/* BACK TO PORTFOLIO */}
      <a href="/" className="artefact-back">
        ← BACK
      </a>


      {/* =========================
          PROJECT COVER
      ========================= */}

      <section className="artefact-intro">

        <img
          src="/AQCover.png"
          alt="Artefact Quest project"
          className="artefact-cover"
        />

      </section>


      {/* =========================
    CONTEXT
========================= */}

<section className="artefact-overview">

<div className="artefact-content">

  <h2>
    DESIGNED FOR THE MUSEUM, NOT JUST THE SCREEN
  </h2>

  <p>
    Artefact Quest is a collaborative mobile experience designed for
    school groups visiting the University of Nottingham Museum of
    Archaeology. The challenge was to support learning without pulling
    attention away from the physical exhibits.
  </p>

  <p>
    Because students move through the museum in groups and have limited
    time at each collection, interactions were designed to be short,
    mobile and easy to understand. AR scanning connects digital content
    directly to physical artefacts, turning learning into discovery
    rather than passive reading.
  </p>

</div>

</section>


{/* =========================
  COLLABORATIVE UX
========================= */}

<section className="artefact-overview">

<div className="artefact-content">

  <h2>
    INDEPENDENT ACTIONS, SHARED PROGRESS
  </h2>

  <p>
    Students can explore independently, but their discoveries contribute
    to a shared group collection. This creates common ground, allowing
    everyone to understand what the group has discovered even when
    students move through the museum at different speeds.
  </p>

  <p>
    The interaction follows a WYSIWIS-inspired model: scanning artefacts
    and answering questions remain individual actions, while collections,
    quiz results and leaderboard progress become shared outcomes. This
    balances personal control with group awareness.
  </p>

</div>

</section>


{/* =========================
  INTERACTION DESIGN
========================= */}

<section className="artefact-overview">

<div className="artefact-content">

  <h2>
    KEEPING ATTENTION IN THE PHYSICAL WORLD
  </h2>

  <p>
    Digital interaction was designed to reinforce exploration rather than
    compete with it. Artefacts can only be collected through physical
    discovery and scanning, creating a strong mapping between the object
    and its digital information.
  </p>

  <p>
    Immediate collection feedback provides feedthrough, while animated
    reveals create brief performer-spectator moments that other students
    can follow. Short quizzes and visible progress provide feedback
    without requiring continuous interaction with the device.
  </p>

</div>

</section>


{/* =========================
  AWARENESS & INCLUSION
========================= */}

<section className="artefact-overview">

<div className="artefact-content">

  <h2>
    COLLABORATING WITHOUT BEING SIDE BY SIDE
  </h2>

  <p>
    Museum groups naturally separate and regroup, so shared progress
    remains visible without requiring students to stay physically
    together. Teachers have an asymmetrical view of group activity,
    allowing them to monitor progress without interrupting exploration.
  </p>

  <p>
    Remote shadowing extends this awareness to students who cannot attend
    in person, while proximity-based interactions support context without
    exposing users' exact locations. The experience balances awareness,
    coordination, privacy and individual control.
  </p>

</div>

</section>

      {/* =========================
          VIDEO
      ========================= */}

      <section className="artefact-prototype">

        <h2 className="artefact-prototype-title">
          SEE IT IN ACTION
        </h2>

        <video
          controls
          playsInline
          className="artefact-video"
        >
          <source
            src="/ArtefactQuestVideoCompressed.mp4"
            type="video/mp4"
          />
        </video>

      </section>

    </main>
  )
}

export default ArtefactQuest