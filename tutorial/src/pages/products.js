import React from 'react'
import Layout from "../components/layout"
import Styles from "../components/products.module.css"

const products = () => {
    return ( 
    <Layout>
        <div className={Styles.page}>
        <h1 > Here you find our awsome products </h1>
        <p className={Styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eos sit voluptate assumenda, placeat, cum in recusandae voluptas impedit velit totam harum necessitatibus debitis iure.</p>
        </div>
    </Layout>

    )
}

export default products