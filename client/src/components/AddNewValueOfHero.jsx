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
    addNewHero:() => {},

  };
  state = {
    name:"",
    strength: "",
    intelligence: "",
    speed: "",
     };

  addNewHero = (e) =>{
    this.setState({name: e.target.value})
  };

  addNewStrength = (e) =>{
      this.setState({strength:e.target.value});
  };

  addNewIntelligence =(e) =>{
     this.setState({intelligence:e.target.value});
  };

  addNewSpeed =(e)=>{
      this.setState({speed:e.target.value});
  };

  handleSubmit=(event)=>{
    event.preventDefault();
    this.setState({
      name: "",
      strength:"",
      intelligence:"",
      speed:""
    });
    this.props.addNewHero(this.state);

  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit} >
        <div>
        <Input value={this.state.name} name="text" placeholder="New hero..." onChange={this.addNewHero}/>
        </div>
        <div>
          <CreateSelectOptions value={this.state.strength}  number={10} placeholder="Strength" onChange={this.addNewStrength}/>
          <CreateSelectOptions value={this.state.intelligence}  number={10} placeholder="Intelligence" onChange={this.addNewIntelligence} />
          <CreateSelectOptions value={this.state.speed}  number={10} placeholder="Speed" onChange={this.addNewSpeed}/>
        </div>
        <div className={styles.actions} style={{ margin: '20px 0 0 0' }}>
        <Button type="submit" text="Add hero"  />
      </div>
      </form>
    );
  }
}
