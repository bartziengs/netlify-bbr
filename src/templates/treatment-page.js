import Layout from '../components/Layout'
import PriceList from '../components/PriceList';
import PropTypes from 'prop-types'
import React from 'react'
import Treatments  from "../components/Treatments";
import { graphql } from 'gatsby'

export const TreatmentPageTemplate = ({
  image,
  title,
  facial,
  other,
  hairremoval,
  single,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: 'center center',
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1 is-size-3-mobile is-size-3-tablet  page-title header-home"
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
        {/* GEZICHTSBEHANDELINGEN */}
        <Treatments title={facial.title} treatments={facial.treatments} />
        {/* BEHANDELINGEN */}
        <Treatments title={other.title} treatments={other.treatments} />
        {/* ONTHAREN */}
        <PriceList title='Ontharen' treatments={hairremoval} />
        {/* LOSSE */}
        <PriceList title='Losse Behandelingen' treatments={single} />
      </div>
    </section>
  </div>
)

TreatmentPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  facial: PropTypes.shape({
    title: PropTypes.string,
    treatments: PropTypes.array,
  }),
  other: PropTypes.shape({
    title: PropTypes.string,
    treatments: PropTypes.array,
  }),
  hairremoval: PropTypes.array,
  single: PropTypes.array,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TreatmentPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        facial={frontmatter.facial}
        other={frontmatter.other}
        hairremoval={frontmatter.hairremoval}
        single={frontmatter.single}
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

export const treatmentPageQuery = graphql`
  query TreatmentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        facial {
          title
          treatments {
            title
            price
            duration
            description
          }
        }
        other {
          title
          treatments {
            title
            price
            duration
            description
          }
        }
        hairremoval {
          description
          price
        }
        single {
          description
          price
        }
      }
    }
  }
`
