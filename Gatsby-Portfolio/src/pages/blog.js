import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"


const Blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {
  return <Layout>
    <section className="blog-page">
      <Blogs blogs={blogs} title="blogs" />
    </section>
  </Layout>
}
export const query = graphql`
  {
    allStrapiBlogs{
      nodes {
        title
        Author
        slug
        content
        desc
        date(formatString: "DD MMM YYYY")
        id
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
