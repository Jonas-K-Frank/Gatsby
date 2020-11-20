import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

const ComponentName = ({ data:{product:{title,price,image:{fixed},productInfo:{productInfo}}} }) => {
    return <Layout>
        <div style={{textAlign:"center"}}>
            <Link to="/products">Back to products</Link>
<h1>Product: {title}</h1>
        </div>
        <section className="single-product">
            <article>
                <Image className="billede" fixed={fixed} alt={title}/>
                </article>
            <article>
                <h1>{title}</h1>
                <h3>{price} kr</h3>
                <p>{productInfo}</p>
                <button>Add to cart</button>
            </article>
        </section>
    </Layout>
}

export const query = graphql`
query GetSingleProduct($slug:String){
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed (width: 400){
          ...GatsbyContentfulFixed
        }
      }
      productInfo {
        productInfo
      }
    }
  }
`

export default ComponentName
