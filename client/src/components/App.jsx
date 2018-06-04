import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Loader from './shared/Loader';
import { getVisibleNotes } from '../utils/selectors';
import * as api from '../utils/api';
import HeroesList from './HeroesList';
import InlineMessage from './InlineMessage';
import styles from './App.css';
import HeroesFilter from './HeroesFilter';
import CreateHero from './CreateHero';
import CreateSquad from './CreateSquad';
import ReadySquad from './ReadySquad';

class App extends Component {
  state = {
    users: [],
    filter:"",
    isLoading: false,
    strength: "",
    intelligence:"",
    speed:"",
    edit:false
  };

  componentDidMount() {
       this.getUserFromData();
  };

  onChangeFilter = (str) => {
    this.setState({ filter: str.charAt(0).toUpperCase() + str.slice(1) });
  };

  getUserFromData = () => {
    this.setState({ isLoading: true });
    api.getUserFromData().then(({ data, error }) => {
          if (error) {
        console.log(error);
        this.setState({ isLoading: false });
        return;
      }

      this.setState({ users: data, isLoading: false });
    });
  };

  deleteHero = (id) =>{

    this.setState({ isLoading: true });
    api.deleteHero(id).then(({ error }) => {
      if (error) {
        console.log(error);
        this.setState({ isLoading: false });
        return;
      }
      this.setState(state => ({
        users: state.users.filter(hero => hero.id !== id),
        isLoading: false,
      }));
    });
  };

  // AddToSquad = (props)=>{
  //   const hero = {
  //
  //     "name":props.name,
  //     "strength":props.strength,
  //     "intelligence":props.intelligence,
  //     "speed":props.speed,
  //
  //   };
  //
  //   this.setState({ isLoading: true });
  //
  //   api.AddToSquad(hero).then(({ data, error }) => {
  //     if (error) {
  //       console.log(error);
  //
  //       this.setState({ isLoading: false });
  //       return;
  //     }
  // console.log(data)
  //     this.setState({
  //
  //       isLoading: false,
  //     });
  //
  //
  //   });
  //
  //
  //
  // };
  AddToSquadInfo = () =>{
    console.log(this)
  }

  render() {

    const { users,  isLoading, filter , edit} = this.state;
    const visibleNotes = getVisibleNotes(users, filter);

    return (

      <div className={styles.container}>
        <div className="addHero">
          <CreateHero />
        </div>
        <div className="listOfHeroes">
        <h2 style={{ textAlign: 'center' }}>Heroes</h2>
        {isLoading && <Loader width={80} height={80} />}

        <HeroesFilter onFilterChange={this.onChangeFilter} filter={filter} value={edit} />

        {users.length > 0 ? (
          <HeroesList

            users={visibleNotes}
            onDeleteHero={this.deleteHero}


          />
        ) : (
          <InlineMessage text="You have zero users" />
        )}
        </div>
          <CreateSquad />

          <ReadySquad onAddToSquad={this.AddToSquadInfo}/>
      </div>
    );
  }
}

export default hot(module)(App);
