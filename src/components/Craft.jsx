function Craft() {
  return (
    <section className="craft" aria-labelledby="craft-heading">
      <div className="craft__media">
        <img
          src="/assets/barber-tools.png"
          alt=""
          loading="lazy"
          className="craft__image"
        />
        <div className="craft__overlay" aria-hidden="true" />
      </div>

      <div className="container">
        <div className="craft__content">
          <p className="section-label">THE CRAFT</p>
          <h2 id="craft-heading" className="section-heading">
            Precision in every detail.
          </h2>
          <p className="section-copy">
            Professional tools, experienced hands and attention to the finishing touches — from
            the first clipper pass to the final line-up.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Craft
