import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => 
<Layout>
    <section className="error-page">
        <div className="page-center">
            <span>404</span>
        <h3>This is not the page you are looking for</h3>
        <Link to="/" className="btn">
            Go back home
            </Link>
        </div>

    </section>

</Layout>

export default NotFoundPage
