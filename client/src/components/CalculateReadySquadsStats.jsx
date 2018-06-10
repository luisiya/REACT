import React from 'react';
import PropTypes from 'prop-types';

const  CalculateReadySquadsStats = ({ savedSquad }) => (


      <div className="TotalInfo">

          <div>
            <p style={{textAlign: 'center'}}>

              strength :

              {savedSquad.length > 0 ?
                savedSquad.map(user => user.reduce((totals, p) => (Number(totals) + Number(p.strength)), 0)
                ) : 0}

            </p>
            <p style={{textAlign: 'center'}}>

              intelligence :

              {savedSquad.length > 0 ?
                savedSquad.map(user => user.reduce((totals, p) => (Number(totals) + Number(p.intelligence)), 0)
                ) : 0}

            </p>
            <p style={{textAlign: 'center'}}>

              speed :

              {savedSquad.length > 0 ?
                savedSquad.map(user => user.reduce((totals, p) => (Number(totals) + Number(p.speed)), 0)
                ) : 0}

            </p>
          </div>


      </div>
    );


CalculateReadySquadsStats.propTypes = {
  savedSquad: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CalculateReadySquadsStats;


