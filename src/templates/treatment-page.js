import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

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
        backgroundPosition: 'right center',
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
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3
                className="has-text-weight-semibold is-size-2 mb-0 is-size-5-mobile is-size-3-tablet"
                style={{
                  marginBottom: 0,
                }}
              >
                {facial.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="column is-10 is-offset-1">
          <div className="columns is-multiline">
            {facial.treatments.map((treatment) => (
              <div key={treatment.description} className="column is-6">
                <article className="message">
                  <div className="message-header">
                    <p>{treatment.title}</p>
                  </div>
                  <div className="message-body">
                    <p className="my-0">
                      <span className="has-text-weight-bold">Prijs: </span>€
                      {treatment.price},-
                    </p>
                    <p className="my-0">
                      <span className="has-text-weight-bold">Duur: </span>€
                      {treatment.duration} min
                    </p>
                    <div className="mt-1">{treatment.description}</div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* OVERIGE */}
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3
                className="has-text-weight-semibold is-size-2 mb-0 is-size-3-mobile is-size-3-tablet"
                style={{
                  marginBottom: 0,
                }}
              >
                {other.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="column is-10 is-offset-1">
          <div className="columns is-multiline">
            {other.treatments.map((treatment) => (
              <div key={treatment.description} className="column is-6">
                <article className="message">
                  <div className="message-header">
                    <p>{treatment.title}</p>
                  </div>
                  <div className="message-body">
                    <p className="my-0">
                      <span className="has-text-weight-bold">Prijs: </span>€
                      {treatment.price},-
                    </p>
                    <p className="my-0">
                      <span className="has-text-weight-bold">Duur: </span>
                      {treatment.duration} min
                    </p>
                    <div className="mt-1">{treatment.description}</div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* ONTHAREN */}
        <div className="section" style={{ marginBottom: 0, paddingBottom: 0 }}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3
                className="has-text-weight-semibold is-size-2 mb-0 is-size-3-mobile is-size-3-tablet"
                style={{
                  marginBottom: 0,
                }}
              >
                Ontharen
              </h3>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Behandeling</th>
                    <th>Prijs</th>
                  </tr>
                </thead>
                <tbody>
                  {hairremoval.map((item) => (
                    <tr>
                      <td>{item.description}</td>
                      <td>€{item.price},-</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* LOSSE */}
        <div className="section" style={{ marginBottom: 0, paddingBottom: 0 }}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3
                className="has-text-weight-semibold is-size-2 mb-0 is-size-3-mobile is-size-3-tablet"
                style={{
                  marginBottom: 0,
                }}
              >
                Losse behandelingen
              </h3>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Behandeling</th>
                    <th>Prijs</th>
                  </tr>
                </thead>
                <tbody>
                  {single.map((item) => (
                    <tr>
                      <td>{item.description}</td>
                      <td>€{item.price},-</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
            fluid(maxWidth: 2048, quality: 100) {
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
