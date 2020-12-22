import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projekter"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  return <Layout>
    <SEO title="Projekter" />
    <section className="project-page">
      <Projects projects={projects} title="Alle projekter"/>
    </section>
  </Layout>
}
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        GitHub
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export default ProjectsPage
