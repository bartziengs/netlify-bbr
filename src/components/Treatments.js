import PropTypes from "prop-types";
import React from "react";

const Treatments = ({title, treatments}) => (
  <div className="mx-3 mb-5">
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <h2
          className="has-text-weight-semibold is-size-2 mb-0 is-size-4-mobile is-size-3-tablet"
          style={{ marginBottom: 0, paddingBottom: 0 }}
        >
          {title}
        </h2>
      </div>
    </div>

    <div className="column is-10 is-offset-1">
      <div className="columns is-multiline">
        {treatments.map((treatment) => (
          <div key={treatment.description} className="column is-6">
            <div className="message h-100">
              <div className="message-header">
                <p>{treatment.title}</p>
              </div>
              <div className="message-body">
                <p className="my-0">
                  <span className="has-text-weight-bold">Prijs: </span>€
                  {treatment.price},-
                </p>
                <p className="my-0">
                  <span className="has-text-weight-bold">Duur: </span>
                  {treatment.duration} min
                </p>
                <div className="mt-1">{treatment.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Treatments.propTypes = {
  title: PropTypes.string,
  treatments: PropTypes.array,
};

export default Treatments;
