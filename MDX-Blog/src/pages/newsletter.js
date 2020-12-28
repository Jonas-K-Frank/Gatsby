import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return <Layout>
    <section className="newsletter-page">
      <div className="page-center">
        <h2>Skriv dig op til nyheder</h2>
        <h4>Jeg skriver kun til dig engang i mellem</h4>
        <form 
        className="contact-form"
        name="Nyhedsbrev"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="Nyhedsbrev" />
          <input type="text" name="navn" placeholder="Skriv dit navn" className="form-control" />
          <input type="email" name="email" placeholder="Skriv din email adresse" className="form-control" />
          <button type="submit" className="btn submit-button form-control">send</button>

          
        </form>
      </div>
    </section>
    </Layout>
}

export default NewsLetter
