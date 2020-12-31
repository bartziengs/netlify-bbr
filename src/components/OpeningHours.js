import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

const OpeningHours = class extends React.Component {
  render = () => {
    const { days } = this.props;

    return (
      <div className="opening-hours has-text-left columns is-centered is-mobile">
        {/* <div className="column"> */}
          <table className="table is-narrow column">
            <tbody>
              {days.map((day) =>
                !day.closed ? (
                  <tr key={day.day}>
                    <td>{day.day}</td>
                    <td>{day.from}</td>
                    <td>-</td>
                    <td>{day.to}</td>
                  </tr>
                ) : (
                  <tr key={day.day}>
                    <td>{day.day}</td>
                    <td colSpan="3">gesloten</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      // </div>
    );
  };
};

OpeningHours.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

// export default OpeningHours;

export default () => (
  <StaticQuery
    query={graphql`
      query OpeningHoursQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "no-page-openinghours" } }
          }
        ) {
          edges {
            node {
              id
              frontmatter {
                templateKey
                openinghours {
                  closed
                  day
                  from
                  to
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <OpeningHours
        days={data.allMarkdownRemark.edges[0].node.frontmatter.openinghours}
      />
    )}
  />
);
