import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return <Layout>
        <section className="newsletter-page">
      <div className="page-center">
    <h3>din tilmelding er modtaget</h3>
    <Link to="/" className="btn">Tilbage til forsiden </Link>
    </div>
    </section>
  </Layout>
}

export default Success
