
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AddNewValueOfHero from './AddNewValueOfHero';
import styles from './Hero.css';
import IconButton from './shared/IconButton';


export default class Hero extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    deleteHero: PropTypes.func.isRequired,
    addToSquad: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    strength:PropTypes.number.isRequired,
    intelligence:PropTypes.number.isRequired,
    speed:PropTypes.number.isRequired,
  };

  state = { isBeingEdited: false, users:[] };


  handleInfo = () => console.log(`
  name:  ${this.props.name}
  id: ${this.props.id}
  strength: ${this.props.strength}
  intelligence: ${this.props.intelligence}
  speed: ${this.props.speed}`);

  render(){

    const { name } = this.props;
    const { value } = this.props;
    const { id } = this.props;
    const { isBeingEdited } = this.state;


    return (

      <Fragment>
        {isBeingEdited ? (
          <AddNewValueOfHero
            name={name}
          />
        ) : (
          <div className={styles.hero}>
            <p className={styles.text}>{name}</p>
            <div className={styles.actions}>
              <IconButton  onClick={() =>this.props.deleteHero(id)} text="&#10006;" about="Delete_Hero"/>
              <IconButton onClick={this.handleInfo} text="&#9937;" about="About_Hero"/>
              {value === "true" ? (
                <span style={{color: 'white'}}>_</span>
                  )
              :
                <IconButton onClick={()=>this.props.addToSquad(id)} text="&#10004;" about="Abd_Hero_to_Squad"/>
              }

            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
