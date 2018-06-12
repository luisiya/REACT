import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './shared/Button';
import Input from './shared/Input';
import styles from './AddNewValueOfHero.css';
import CreateSelectOptions from './CreateSelectOptions';



export default class AddNewValueOfHero extends Component {
  static propTypes = {

    addNewHero: PropTypes.func

  };
  static defaultProps ={
    addNewHero:() => {}
  };
  state = {

    name:[],
    strength: "",
    intelligence: "",
    speed: "",
     };


  addNewHero = (e) =>{

  const newName = e.target.value;
  this.setState({name: newName})

  };

  addNewStrength = (e) =>{

    const newStrength = e.target.value;

    this.setState({strength:Number(newStrength)});

  };
  addNewIntelligence =(e) =>{
    const newIntelligence = e.target.value;

    this.setState({intelligence:Number(newIntelligence)});

  };
  addNewSpeed =(e)=>{
    const newSpeed = e.target.value;

    this.setState({speed:Number(newSpeed)});

  };




  render() {

    return (

      <form className={styles.form} >
        <div>
        <Input name="text"  placeholder="New hero..." onChange={this.addNewHero}/>
        </div>
        <div>
          <CreateSelectOptions number="10" title="Strength" onChange={this.addNewStrength}/>
          <CreateSelectOptions number="10" title="Intelligence" onChange={this.addNewIntelligence} />
          <CreateSelectOptions number="10" title="Speed" onChange={this.addNewSpeed}/>
        </div>
        <div className={styles.actions} style={{ margin: '20px 0 0 0' }}>
        <Button type="submit" text="Add hero"  onClick={()=> this.props.addNewHero(this.state)}/>

      </div>
      </form>
    );
  }
}
