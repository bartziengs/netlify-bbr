import PropTypes from "prop-types";
import React from "react";

const PriceList = ({ title, treatments }) => (
  <div className="mx-3 mb-5">
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <h3 className="has-text-weight-semibold is-size-2 mb-0 is-size-4-mobile is-size-3-tablet">
          {title}
        </h3>
      </div>
    </div>
    <div className="column is-10 is-offset-1">
      <div className="columns">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Behandeling</th>
              <th className="w-15">Prijs</th>
            </tr>
          </thead>
          <tbody>
            {treatments.map((item) => (
              <tr key={item.description}>
                <td>{item.description}</td>
                <td>€{item.price.toFixed(2).toString().replace('.00','')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

PriceList.propTypes = {
  title: PropTypes.string,
  treatments: PropTypes.array,
};

export default PriceList;
