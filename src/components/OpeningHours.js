import React from "react";
import PropTypes from "prop-types";

const OpeningHours = class extends React.Component {
  render = () => {
    let openingHours = [
      { day: "ma", from: "17:00", to: "17:00" },
      { day: "ma", from: "17:00", to: "17:00" },
      { day: "ma", from: "17:00", to: "17:00" },
      { day: "ma", from: "17:00", to: "17:00" },
      { day: "ma", from: "17:00", to: "17:00" },
    ];

    const { days } = openingHours;

    return (
      <div className="opening-hours has-text-left">
        <p>Openingstijden</p>
        <table className="table">
          <tbody>
              {openingHours.map((day) => (
            <tr>
                <td>{day.day}</td>
                <td>{day.from}</td>
                <td>-</td>
                <td>{day.to}</td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };
};

OpeningHours.propTypes = {
  days: PropTypes.array,
};

export default OpeningHours;
