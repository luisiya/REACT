import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from './shared/Button';
import Input from './shared/Input';
import styles from './AddNewValueOfHero.css';
import CreateSelectOptions from './CreateSelectOptions';
import * as api from '../utils/api';


export default class AddNewValueOfHero extends Component {

  state = {

    users:[1] ,
    filter:"",
    isLoading: false,
    strength: "",
    intelligence:"",
    speed:"",

  };


  addNewNameHero = (e) =>{

  const newName = e.target.value;
  this.setState({users: newName})

  };

  addNewStrength = (e) =>{

    const newStrength = e.target.value;

    this.setState({strength:newStrength});

  };
  addNewIntelligence =(e) =>{
    const newIntelligence = e.target.value;

    this.setState({intelligence:newIntelligence});

  };
  addNewSpeed =(e)=>{
    const newSpeed = e.target.value;

    this.setState({speed:newSpeed});

  };


 addNewHero = (event) =>{

   event.preventDefault();
       const hero = {

       "name": this.state.users,
       "strength": this.state.strength,
       "intelligence": this.state.intelligence,
       "speed": this.state.speed
     };

     this.setState({ isLoading: true });

     api.addNewHero(hero).then(({ data, error }) => {
       if (error) {
         console.log(error);
         this.setState({ isLoading: false });
         return;
       }

       this.setState(state => ({

         users: [...state.heroes, data],
         isLoading: false,
       }));

     });
   };


  render() {

    return (

      <form className={styles.form} >
        <div>
        <Input name="text"  placeholder="New hero..." onChange={this.addNewNameHero}/>
        </div>
        <div>
          <CreateSelectOptions number="10" title="Strength" onChange={this.addNewStrength}/>
          <CreateSelectOptions number="10" title="Intelligence" onChange={this.addNewIntelligence} />
          <CreateSelectOptions number="10" title="Speed" onChange={this.addNewSpeed}/>
        </div>
        <div className={styles.actions}>
        <Button type="submit" text="Add hero" onClick={this.addNewHero}/>

      </div>
      </form>
    );
  }
}
