import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

const query = graphql`
  {
   person: file(relativePath: {eq: "banner-about.jpeg"}) {
      childImageSharp {
        fixed (width: 100, height:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


const About = () => {
  const data = useStaticQuery(query)
  return <Wrapper>
    <Title title="Om mig" />
    <Image fixed={data.person.childImageSharp.fixed}  className="img"/>
    <p>Pommy ipsum up North easy peasy it's me peepers The Doctor, flabbergasted see a man about a dog off t'pub old girl bit of alright,</p>
    <SocialLinks styleClass="banner-icons" />
  </Wrapper>
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
