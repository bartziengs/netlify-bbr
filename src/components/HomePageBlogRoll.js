import { StaticQuery, graphql } from "gatsby";

import { BlogRoll } from "./BlogRoll";
import React from "react";

const homePageBlogQuery = graphql`
  query HomePageBlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 2
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
          }
        }
      }
    }
  }
`;

const HomePageBlogRoll = () => (
  <StaticQuery
    query={homePageBlogQuery}
    render={(data) => <BlogRoll data={data} />}
  />
);

export default HomePageBlogRoll;
