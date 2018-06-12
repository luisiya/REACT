import React from 'react';
import PropTypes from 'prop-types';


const ReadySquadState = ({savedSquad, deleteSquad}) => (

  <div className="readySquad" style={{textAlign: 'center', display: 'flex', margin: '20px 0 0 0'}}>
    {savedSquad.length > 0 ?

      <div>

        {savedSquad.map(user => (
            <div key={user.id} style={{display: 'flex', margin: '0 0 20px 0 ', fontSize: '14px'}}>

              <ul style={{width: '142px'}}>
                <button onClick={() => deleteSquad(user.id)}

                        style={{
                          width: '22px',
                          height: '15px',
                          border: 'none',
                          boxShadow:'darkseagreen 0px 2px 2px',
                          backgroundColor: 'white',
                          color: 'lightcoral',
                          margin: '0 0 0 180px',
                          fontSize: '14px',
                          lineHeight: '5px',
                          hover:'color:green'

                        }}>&#10006;</button>
                <h4 style={{ color:'grey'}}>stats:</h4>
                <li style={{listStyleType: 'none'}}>strength: {user.stats.str} </li>
                <li style={{listStyleType: 'none'}}>speed: {user.stats.spd} </li>
                <li style={{listStyleType: 'none'}}>intelligence: {user.stats.int}</li>

              </ul>
              <ul style={{margin: '34px 0 0 0'}}>
                <h4 style={{ color:'grey'}}>heroes:</h4>
                {user.heroes.map(hero =>
                  <li key={hero.id} style={{listStyleType: 'square'}}>{hero.name}</li>
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
