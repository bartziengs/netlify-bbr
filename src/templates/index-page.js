import Certifications from "../components/Certifications";
import HomePageBlogRoll from "../components/HomePageBlogRoll";
import Layout from "../components/Layout";
import PhotoGrid from "../components/Photogrid";
import PropTypes from "prop-types";
import React from "react";
import SellingPoints from "../components/SellingPoints";
import { graphql } from "gatsby";

export const IndexPageTemplate = ({
  image,
  title,
  main,
  certifications,
  subheading,
  selling_points,
  description,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: "center center",
        flexDirection: "column"
      }}
    >
      <h1
        className="is-size-4-mobile is-size-2-tablet is-size-1-widescreen header-home page-title my-1 has-text-centered"
        style={{
          color: "white",
          lineHeight: "1",
          padding: "0.25em",
          display: "inline-block",
        }}
      >
        {title}
      </h1>
      <h3
        className="is-size-5-mobile is-size-5-tablet is-size-1-widescreen header-sub page-title my-0 has-text-centered"
        style={{
          color: "white",
          lineHeight: "1",
          padding: "0.25em",
          display: "inline-block",
        }}
      >
        {subheading}
      </h3>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section py-1">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-12">
                  <p className="is-size-5">{description}</p>
                </div>
              </div>
              <SellingPoints
                title={selling_points.title}
                sellingpoints={selling_points.points}
              />
            </div>
          </div>
        </div>
        <Certifications data={certifications} />

        <PhotoGrid data={main} />

        {/* LAATSTE NIEUWS */}
        <div className="section py-1">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-3">
                    Laatste nieuws
                  </h3>
                  <div className="columns is-multiline">
                    <HomePageBlogRoll />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  selling_points: PropTypes.shape({
    title: PropTypes.string,
    products: PropTypes.array,
  }),
  certifications: PropTypes.object,
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        selling_points={frontmatter.selling_points}
        main={frontmatter.main}
        certifications={frontmatter.certifications}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 50) {
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
        certifications {
          description
          heading
          certifications {
            product_title
            text
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
`;
