import "../../App.css"

function LibraryOfThings() {
  return (
    <main className="library-page">

      {/* Back to portfolio */}
      <a href="/" className="library-back">
        ← BACK
      </a>


      {/* TOP SECTION — logo on left, screens on right */}
      <section className="library-intro">

        <div className="library-brand">
          <img
            src="/LibraryofThingslogo.png"
            alt="Library of Things"
            className="library-logo"
          />
        </div>

        <div className="library-ui-overview">
          <img
            src="/BiggerPrototype.png"
            alt="Library of Things interface screens"
          />
        </div>

      </section>


      {/* PROJECT OVERVIEW */}
      <section className="library-overview">

        <p className="library-section-label">
    
        </p>

        <div className="overview-content">

          <h2>
            FROM PROBLEM TO PROTOTYPE
          </h2>

          <p>
          I approached the project using the divergent and convergent thinking of the Double Diamond, beginning with the wider problem of how users discover and borrow unfamiliar items before defining a clear end-to-end journey: discover, evaluate, select dates, book and manage.
         </p>
         <p>
         I mapped this journey before moving into interface design, using wireframes to explore navigation, information hierarchy and the information users would need at each decision point. These ideas were developed into an interactive Figma prototype and refined through user testing rather than treating the first solution as the final one.
         </p>

          

        </div>

      </section>


      {/* =========================

    03 / DESIGN DECISIONS

========================= */}

<section className="library-overview">



<div className="overview-content">

  <h2>

    DESIGNING AROUND USER BEHAVIOUR

  </h2>

  <p>

The interface was designed to reduce cognitive effort and make key

    actions immediately understandable. Prominent search and persistent

    navigation support Nielsen’s recognition rather than recall, while

    familiar icons and interaction patterns follow Jakob’s Law and

    Nielsen’s match between the system and the real world. Categories and

    progressive filtering apply Hick’s Law by reducing competing choices

    and guiding users towards relevant items.

  </p>

</div>

</section>

{/* =========================

  04 / INFORMATION DESIGN

========================= */}

<section className="library-overview">


<div className="overview-content">

  <h2>

    MANAGING COMPLEXITY

  </h2>

  <p>

    Product information is progressively disclosed and grouped into clear

    sections for specifications, suitability, training, support and safety.

    Miller’s Law, Gestalt principles of proximity and similarity, and

    Nielsen’s aesthetic and minimalist design informed this hierarchy,

    keeping detailed information accessible without overwhelming the user.

  </p>

</div>

</section>

{/* =========================

  05 / INTERACTION DESIGN

========================= */}

<section className="library-overview">



<div className="overview-content">

  <h2>

    FROM DISCOVERY TO BOOKING

  </h2>

  <p>

    The journey was designed to minimise friction from search through to

    booking. Immediate search input supports direct manipulation, visible

    booking states reinforce Nielsen’s visibility of system status, and

    prominent, reachable actions reflect Fitts’s Law. Familiar calendars

    and booking patterns build on existing mental models, helping users

    understand interactions without additional instruction.

  </p>

</div>

</section>


      {/* VIDEO */}
      <section className="library-prototype">

        <h2 className="prototype-title">
          SEE IT IN ACTION 
        </h2>

        

        <video
          controls
          playsInline
          className="library-video"
        >
          <source
            src="/LibraryOfThingsVideo.mp4"
            type="video/quicktime"
          />
        </video>

      </section>

    </main>
  )
}

export default LibraryOfThings