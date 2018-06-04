import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import PropTypes from 'prop-types';
import Loader from './shared/Loader';
import * as api from '../utils/api';

import HeroesList from './HeroesList';
import InlineMessage from './InlineMessage';
import CalculateHeroStats from './CalculateHeroStats';
import Button from './shared/Button';


class CreateSquad extends Component {
  static propTypes = {
    onAddToSquad: PropTypes.func.isRequired,

  };

  state = {
    users: [],
    filter: "",
    isLoading: false,
    strength: "",
    intelligence: "",
    speed: "",
    edit: true
  };

  componentDidMount() {
    this.getSquadFromData();
  };

  getSquadFromData = () => {

    this.setState({isLoading: true});

    api.getSquadFromData().then(({data, error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }

      this.setState({users: data, isLoading: false});
    });

    this.setState({isLoading: false});

  };

  addToSquad = (hero) => {

    api.AddToSquad(hero).then(({data, error}) => {
      if (error) {
        console.log(error);

        this.setState({isLoading: false});
        return;
      }
      this.setState(state => ({
        users: [...state.users, data],
        isLoading: false,
      }));

    });
  };

  deleteHeroFromSquad = (id) => {

    this.setState({isLoading: true});
    api.deleteHeroFromSquad(id).then(({error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }
      this.setState(state => ({
        users: state.users.filter(hero => hero.id !== id),
        isLoading: false,
      }));
    });

  };


  handleSaveSquad = () => this.props.onAddToSquad(this.props);


  handleResetSquad = () => {
    console.log("reset")
  };

  render() {


    const {users, isLoading, edit} = this.state;


    return (

      <div className="Squad_editor">
        <h2 style={{textAlign: 'center'}}>Squad editor</h2>
        <Button type="submit" onClick={this.handleSaveSquad} text="Save Squad"/>
        <Button type="submit" onClick={this.handleResetSquad} text="Reset"/>

        {isLoading && <Loader width={80} height={80}/>}

        {users.length > 0 ? (
          <div>
            <CalculateHeroStats users={users}/>
            <HeroesList value={edit} users={users} onDeleteHero={this.deleteHeroFromSquad}
                        onAddToSquad={this.addToSquad}/>
          </div>

        ) : (
          <InlineMessage text="You have zero users"/>
        )}


      </div>
    );
  }
}

export default hot(module)(CreateSquad);
