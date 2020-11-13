import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

const getData = graphql`
{
  site {
    datakilde:siteMetadata {
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

const Header = () => {
  const {site:{datakilde:{title,description,person:{name}}}} = useStaticQuery(getData)
  

  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>By: {name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Header