import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  main,
  subheading,
  // mainpitch,
  selling_points,
  description,
  // intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-20"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-widescreen header-home page-title"
          style={{
            // boxShadow:
            //   'rgb(74, 68, 68) 0.5rem 0px 0px, rgb(74, 68, 68) -0.5rem 0px 0px',
            // backgroundColor: 'rgb(74, 68, 68)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="is-size-5-mobile is-size-5-tablet is-size-1-widescreen header-sub page-title has-text-centered"
          style={{
            // boxShadow:
            //   'rgb(74, 68, 68) 0.5rem 0px 0px, rgb(74, 68, 68) -0.5rem 0px 0px',
            // backgroundColor: 'rgb(74, 68, 68)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {/* <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div> */}
              <div className="columns">
                <div className="column is-12">
                  <p className="is-size-5">{description}</p>
                </div>
              </div>
              {/* <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> */}
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {selling_points.title}
                  </h3>
                  {/* list */}
                  <ul style={{ listStyle: 'inside', paddingLeft: '0.5rem' }}>
                    {selling_points.points.map((item) => (
                      <li key={item.text} style={{ paddingBottom: '0.3rem' }}>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  {/* <p>{main.description}</p> */}
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>

              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">
                  Laatste nieuws
                </h3>
                <BlogRoll />
                {/* <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/blog">
                    Lees meer
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  // heading: PropTypes.string,
  subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  description: PropTypes.string,
  selling_points: PropTypes.shape({
    title: PropTypes.string,
    products: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        // mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        selling_points={frontmatter.selling_points}
        main={frontmatter.main}
        // intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        description
        selling_points {
          title
          points {
            text
          }
        }
        selling_points {
          title
          points {
            text
          }
        }
        main {
          heading
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
