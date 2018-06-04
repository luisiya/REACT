/* eslint-disable */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import AddNewValueOfHero from './AddNewValueOfHero';
import styles from './Hero.css';
import IconButton from './shared/IconButton';


export default class Hero extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onDeleteHero: PropTypes.func,
    onAddToSquad: PropTypes.func,
    edit: PropTypes.bool,
  };
  static defaultProps = {
    edit: true,
  }

  state = { isBeingEdited: false, users:[] };

  handleDelete = () => this.props.onDeleteHero(this.props.id);


  handleAddToSquad = () => this.props.onAddToSquad(this.props);


  handleInfo = () => console.log(`
  name:  ${this.props.name}
  id: ${this.props.id}
  strength: ${this.props.strength}
  intelligence: ${this.props.intelligence}
  speed: ${this.props.speed}`);

  render(){

    const { name } = this.props;
    const { edit } = this.props;
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

              <IconButton  onClick={this.handleDelete} text="&#10006;" about="Delete_Hero"/>
              <IconButton onClick={this.handleInfo} text="&#9937;" about="About_Hero"/>
              {edit ? (
                <span></span>
                  )
              :
                <IconButton onClick={this.handleAddToSquad} text="&#10004;" about="Abd_Hero_to_Squad"/>
              }

            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
