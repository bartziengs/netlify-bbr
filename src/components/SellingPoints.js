import PropTypes from "prop-types";
import React from "react";

const SellingPoints = ({
  title,
  sellingpoints
}) => (
  <div className="columns">
    <div className="column is-7">
      <h3 className="has-text-weight-semibold is-size-3">{title}</h3>
      <ul style={{ listStyle: "inside", paddingLeft: "0.5rem" }}>
        {sellingpoints.map((item) => (
          <li key={item.text} style={{ paddingBottom: "0.3rem" }}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

SellingPoints.propTypes = {
  title: PropTypes.string,
  sellingpoints: PropTypes.array,
};

export default SellingPoints;
