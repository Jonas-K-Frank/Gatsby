import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from 'react-markdown'

const ComponentName = ({data}) => {
  console.log(data);
  const {content,title} = data.blog;
  return <Layout>
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
      title,
      content

    }
  }
`

export default ComponentName
