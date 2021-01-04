import Features from "./Features";
import PropTypes from "prop-types";
import React from "react";

const Certifications = (props) => (
    <div className="section py-1">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h3 className="has-text-weight-semibold is-size-3">{props.data.heading}</h3>
          <p>{props.data.description}</p>
          <Features gridItems={props.data.certifications} />
        </div>
      </div>
    </div>
  );

Certifications.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    certifications: PropTypes.array,
  }),
};

export default Certifications;
