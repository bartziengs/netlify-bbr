import { StaticQuery, graphql } from "gatsby";

import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

const OpeningHours = ({ days }) => (
  <div className="opening-hours has-text-left columns is-centered is-mobile">
    <table className="table is-narrow column">
      <tbody>
        {days.map((day) =>
          !day.closed ? (
            <tr key={day.day}>
              <td>{day.day}</td>
              <td>{moment(day.from).format("HH:mm")}</td>
              <td>-</td>
              <td>{moment(day.to).format("HH:mm")}</td>
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
);

OpeningHours.propTypes = {
  days: PropTypes.array,
};

export default () => (
  <StaticQuery
    query={graphql`
        query OpeningHoursQuery {
          allMarkdownRemark(
            filter: {frontmatter: {templateKey: {eq: "no-page-openinghours"}}}
          ) {
            nodes {
              frontmatter {
                openinghours {
                  closed
                  day
                  to
                  from
                }
              }
            }
          }
        }
    `}
    render={(data) => (
      <OpeningHours
        days={data.allMarkdownRemark.nodes[0].frontmatter.openinghours}
      />
    )}
  />
);
