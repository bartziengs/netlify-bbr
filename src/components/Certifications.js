import Features from "./Features";
import PropTypes from "prop-types";
import React from "react";

const Certifications = ({data}) => (
    <div className="section py-1">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h3 className="has-text-weight-semibold is-size-3">{data.heading}</h3>
          <p>{data.description}</p>
          <Features gridItems={data.certifications} />
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
