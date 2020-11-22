import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {
    file:{
      childImageSharp: {fluid}
    },
      } = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>jonas Frank</h1>
          <h4>webudvikler og ecom specialist</h4>
          <Link to='/contact' className="btn">Kontakt mig</Link>
          <SocialLinks/>
        </div>
        <Image fluid={fluid} className="hero-img"/>
      </article>
    </div>
  </header>
}

export default Hero
