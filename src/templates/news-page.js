import { FullBlogRoll } from "../components/BlogRoll";
import Layout from "../components/Layout";
import React from "react";
import { graphql } from 'gatsby'

const BlogIndexPageTemplate = ({ description, header, title, image }) => (
  <>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: "center center",
      }}
    >
      <h1
        className="has-text-weight-bold has-text-centered is-size-2-widescreen is-size-3-mobile is-size-2-tablet page-title header-home"
        style={{
          color: "white",
          padding: "1rem",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h1>
    </div>
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="columns is-multiline">
            <div className="column is-12">
              <h2>{header}</h2>
              <p>{description}</p>
            </div>
            <FullBlogRoll />
          </div>
        </div>
      </div>
    </section>
  </>
);

const BlogIndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <BlogIndexPageTemplate
        description={frontmatter.description}
        header={frontmatter.header}
        title={frontmatter.title}
        image={frontmatter.image}
      />
    </Layout>
  );
};
export default BlogIndexPage;

export const pageQuery = graphql`
  query NewsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        header
        description
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
