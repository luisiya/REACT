import React from 'react';
import PropTypes from 'prop-types';


const ReadySquadState = ({savedSquad, deleteSquad}) => (

  <div className="readySquad" style={{textAlign: 'center', display: 'flex', margin: '20px 0 0 0'}}>
    {savedSquad.length > 0 ?

      <div>

        {savedSquad.map(user => (
            <div style={{display: 'flex', margin: '0 0 20px 0 ', fontSize: '12px'}}>

              <ul style={{width: '142px'}}>
                <button onClick={() => deleteSquad(user.id)}

                        style={{
                          width: '15px',
                          height: '15px',
                          border: 'none',
                          backgroundColor: 'white',
                          color: 'lightcoral',
                          margin: '0 0 0 180px',
                          fontSize: '12px',
                          lineHeight: '5px',
                          textAlign: 'left'
                        }}>&#10006;</button>
                <h7 style={{fontWeight: 'bold'}}>stats:</h7>
                <li style={{listStyleType: 'none'}}>strength: {user.stats.str} </li>
                <li style={{listStyleType: 'none'}}>speed: {user.stats.spd} </li>
                <li style={{listStyleType: 'none'}}>intelligence: {user.stats.int}</li>

              </ul>
              <ul style={{margin: '35px 0 0 0'}}>
                <h7 style={{fontWeight: 'bold'}}>heroes:</h7>
                {user.heroes.map(hero =>
                  <li style={{listStyleType: 'square'}}>{hero.name}</li>
                )}</ul>


            </div>
          )
        )
        }

      </div> : <span>No squads</span>}

  </div>
);

ReadySquadState.propTypes = {


  savedSquad: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

  deleteSquad: PropTypes.func.isRequired
};

export default ReadySquadState;
