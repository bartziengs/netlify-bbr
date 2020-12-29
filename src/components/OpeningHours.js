import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

const OpeningHours = class extends React.Component {
  render = () => {
    const { data } = this.props;
    const days = data.allMarkdownRemark.edges[0].node.frontmatter.openinghours;

    return (
      <div className="opening-hours has-text-left">
        <table className="table is-narrow">
          <tbody>
            {days.map((day) =>
              !day.closed ? (
                <tr>
                  <td>{day.day}</td>
                  <td>{day.from}</td>
                  <td>-</td>
                  <td>{day.to}</td>
                </tr>
              ) : (
                <tr>
                  <td>{day.day}</td>
                  <td colSpan='3'>gesloten</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
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
    render={(data) => <OpeningHours data={data} />}
  />
);
