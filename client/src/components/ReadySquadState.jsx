import React from 'react';
import PropTypes from 'prop-types';
import CalculateReadySquadsStats from './CalculateReadySquadsStats';
import IconButton from './shared/IconButton';

const ReadySquadState = ({savedSquad}) => (

  <div className="readySquad" style={{textAlign: 'center', display:'flex', margin:'20px 0 0 0'}}>
    {savedSquad ?
    <ul  style={{margin:'20px 0 0 20px'}}>

      { savedSquad.length < 2 ?
        savedSquad.map(user => user.map(hero =>(
            <li  key ={hero.id}>
              {hero.name}
              <CalculateReadySquadsStats savedSquad={savedSquad} />
              <IconButton  text="&#10006;" about="Delete_Hero" onClick={() =>this.props.deleteSquad(this.props.id)}/>
              </li>

          )
        )
      ) :
          savedSquad.map(user => user.map(hero =>(
          <li  key ={hero.id}>
            {hero.name}

          </li>

          )
          )
          )



      }


      </ul> : <span>....</span>}


  </div>
);

ReadySquadState.propTypes = {


  savedSquad: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,



};

export default ReadySquadState;
