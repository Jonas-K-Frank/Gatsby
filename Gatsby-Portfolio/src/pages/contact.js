import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return <Layout>
    <SEO title="Kontakt mig" description="Du er velkommen til at kontakte mig "/>
    <section className="contact-page">
      <article className="contact-form">
        <h3>Kom i kontakt med mig</h3>
        <form action="https://formspree.io/f/xzbkkedv" method="POST">
          <div className="form-group">
            <input type="text" className="form-control" name="Navn" placeholder="Navn" />
            <input type="email" className="form-control" email="Email" placeholder="email" />
            <textarea className="form-control" name="Besked" rows="5" placeholder="Skriv din besked her"></textarea>
          </div>
          <button className="submit-btn btn" type="submit">Send</button>
        </form>
      </article>
    </section>

  </Layout>
}

export default contact
