import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from 'react-markdown'
import SEO from "../components/SEO"

const ComponentName = ({data}) => {
  console.log(data);
  const {content,title,desc} = data.blog;
  return <Layout>
    <SEO title={title} description={desc} />
    <section className="blog-template">
      <div className="section-center">
      <ReactMarkdown source={title} className="overskrift"/>
      <article >
            <ReactMarkdown source={content} />
          </article>
        <Link className="btn center-btn" to="/blog">Tilbage</Link>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      title
      content
      desc

    }
  }
`

export default ComponentName
