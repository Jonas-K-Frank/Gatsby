import React from 'react'
import Layout from "../components/layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import {graphql} from 'gatsby'

export const examples = ({data}) => {
    const {site:{datakilde:{author}}} = data
    return (
        <Layout>
        
            <h1>Hello!!! This is the example page</h1>
       
        <Header />
        <HeaderStatic />
    <h5>{author}</h5>
        </Layout>
    )
}
export const data = graphql`
{
    site {
     datakilde: siteMetadata {
        person {
          age,
          name
        }
        author,
        data,
        description,
        title
      }
    }
  }
`
export default examples 
