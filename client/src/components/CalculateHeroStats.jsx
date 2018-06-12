import React from 'react';
import PropTypes from 'prop-types';


const CalculateHeroStats = ({users, idFromSquad}) => (

  <div className="TotalInfo">

    <p style={{textAlign: 'center'}}>

      strength :

      {idFromSquad.length > 0 ?
        users.filter(user => idFromSquad.includes(user.id)).reduce(
          (totals, p) => (Number(totals) + Number(p.strength)),
          0) : 0}
    </p>
    <p style={{textAlign: 'center'}}>
      intelligence : {
      idFromSquad.length > 0 ?
        users.filter(user => idFromSquad.includes(user.id)).reduce(
          (totals, p) => (Number(totals) + Number(p.intelligence) ),
          0) : 0}
    </p>
    <p style={{textAlign: 'center'}}>
      speed : {
      idFromSquad.length > 0 ?
        users.filter(user => idFromSquad.includes(user.id)).reduce(
          (totals, p) => (Number(totals) + Number(p.speed) ),
          0) : 0}
    </p>
  </div>
);

CalculateHeroStats.propTypes = {

  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  idFromSquad: PropTypes.arrayOf(
    PropTypes.number).isRequired,

};


export default CalculateHeroStats;
