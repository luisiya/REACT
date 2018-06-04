import React from 'react';
import PropTypes from 'prop-types';


const CalculateHeroStats = ({ users }) => (

  <div className="TotalInfo">

        <p style={{ textAlign: 'center' }}>

          strength : {
           users.reduce(
          (totals, p) => (Number(totals) + Number(p.strength)),
          0)}
        </p>
        <p style={{ textAlign: 'center' }}>
         intelligence : {users.reduce(
          (totals, p) => (Number(totals) + Number(p.intelligence) ),
          0)}
      </p>
      <p style={{ textAlign: 'center' }}>
      speed : {users.reduce(
        (totals, p) => (Number(totals) + Number(p.speed) ),
        0)}
      </p>
  </div>
);

CalculateHeroStats.propTypes = {

  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CalculateHeroStats;
