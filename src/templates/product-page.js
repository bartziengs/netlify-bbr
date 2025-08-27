import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const ProductPageTemplate = ({
  image,
  title,
  payot,
  fullImage,
  other,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: 'center center',
      }}
    >
      <h2
        className="is-size-1 is-size-3-mobile is-size-3-tablet page-title header-home"
        style={{
          color: 'white',
          padding: '1rem',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        {/* Payot */}
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">
                {payot.heading}
              </h3>
              <p>{payot.description}</p>
              <Features gridItems={payot.products} />
            </div>
          </div>
        </div>

        {/* baackground img */}
        <div
          className="full-width-image-container"
          style={{
            backgroundImage: `url(${fullImage.childImageSharp
              ? fullImage.childImageSharp.fluid.src
              : fullImage
              })`,
            backgroundPositionY: '65%',
          }}
        />

        {/* Other */}
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">
                {other.heading}
              </h3>
              <p>{other.description}</p>
              <Features gridItems={other.products} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  // heading: PropTypes.string,
  // description: PropTypes.string,
  payot: PropTypes.shape({
    products: PropTypes.array,
  }),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  other: PropTypes.shape({
    products: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        payot={frontmatter.payot}
        fullImage={frontmatter.full_image}
        other={frontmatter.other}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        payot {
          products {
            product_title
            image {
              childImageSharp {
                    gatsbyImageData(
                        width: 240
                        quality: 64
                        layout: CONSTRAINED
                      )
              }
            }
            text
          }
          heading
          description
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        other {
          products {
            product_title
            image {
              childImageSharp {
                  gatsbyImageData(
                        width: 240
                        quality: 64
                        layout: CONSTRAINED
                      )
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
