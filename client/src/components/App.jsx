import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import Loader from './shared/Loader';
import {getVisibleHeroes, getVisibleSquad} from '../utils/selectors';
import * as api from '../utils/api';
import HeroesList from './HeroesList';
import InlineMessage from './InlineMessage';
import HeroesFilter from './HeroesFilter';
import CalculateHeroStats from './CalculateHeroStats';
import Button from './shared/Button';
import AddNewValueOfHero from './AddNewValueOfHero';
import SavedSquadState from './SavedSquadState';
import Container from './Container';
import Grid from './Grid';

class App extends Component {

  state = {
    users: [],
    filter: "",
    isLoading: false,
    idFromSquad: [],
    readySquad: [],
    savedSquad: [],
    idFromList: [],
  };

  componentDidMount() {
    this.getUserFromData();
  };
  onFilterChange = (str) => {
    this.setState({filter: str.charAt(0).toUpperCase() + str.slice(1)});
  };
  getUserFromData = () => {
    this.setState({isLoading: true});
    api.getUserFromData().then(({data, error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }
      this.setState({users: data, isLoading: false}, this.getDataFromSquads);
    });
  };
  getDataFromSquads = () => {
    this.setState({isLoading: true});
    api.getDataFromSquads().then(({data, error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }
      this.setState({savedSquad: data, isLoading: false});
    });
  };
  addNewHero = (hero) => {

    this.setState({isLoading: true});
    api.addNewHero(hero).then(({data, error}) => {
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
  addToSquad = (id) => {


    const hero = this.state.users.filter(user => user.id === id)[0];
    this.setState(state => ({
      idFromSquad: [...state.idFromSquad, id],
      idFromList: [...state.idFromSquad, id],
      readySquad: [...state.readySquad, hero],
    }));
  };
  deleteHeroFromList = (id) => {

    this.setState({isLoading: true});
    api.deleteHero(id).then(({error}) => {
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
  deleteHeroFromSquad = (id) => {

    this.setState(state => ({
      idFromSquad: state.idFromSquad.filter(user => user !== id),
      idFromList: state.idFromList.filter(hero => hero !== id),
    }));
  };
  savedSquad = () => {

    const hero = {};
    const readySquad = this.state.readySquad;
    hero.heroes = readySquad;
    hero.stats = {};
    hero.stats.str = readySquad.reduce((totals, p) => (totals + p.strength), 0);
    hero.stats.int = readySquad.reduce((totals, p) => (totals + p.intelligence), 0);
    hero.stats.spd = readySquad.reduce((totals, p) => (totals + p.speed), 0);

    api.AddToSquad(hero).then(({data, error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }

      this.setState(state => ({
        idFromSquad: [],
        users: state.users.filter(user => state.idFromList.indexOf(user.id) === -1),
        savedSquad: [...state.savedSquad, data],
        isLoading: false,
      }));

    });

  };
  deleteSquad = (id) => {

    this.setState({isLoading: true});
    api.deleteSquad(id).then(({error}) => {
      if (error) {
        console.log(error);
        this.setState({isLoading: false});
        return;
      }
      this.setState(state => ({
        savedSquad: state.savedSquad.filter(hero => hero.id !== id),
        isLoading: false,
      }));
    });
  };
  ResetSquad = () => {
    this.setState({

      idFromSquad: [],
      idFromList: [],

    });
  };



  render() {

    const {users, isLoading, filter, edit, idFromSquad, savedSquad, idFromList} = this.state;
    const visibleHeroes = getVisibleHeroes(users, filter, idFromList);
    const visibleSquad = getVisibleSquad(users, idFromSquad);

    return (
      <Container>
        <Grid>
          <div className="inputNewHero">
            <h2 style={{textAlign: 'center'}}>Create Hero</h2>
            <AddNewValueOfHero addNewHero={this.addNewHero}/>
          </div>

          <div className="listOfHeroes">
            <h2 style={{textAlign: 'center'}}>Heroes</h2>
            {isLoading && <Loader width={80} height={80}/>}
            <HeroesFilter onFilterChange={this.onFilterChange} filter={filter} value={edit}/>
            {users.length > 0 ? (
              <HeroesList
                users={visibleHeroes}
                deleteHero={this.deleteHeroFromList}
                addToSquad={this.addToSquad}
              />
            ) : (

              <InlineMessage text="You have zero users"/>
            )}
          </div>

          <div className="Squad_editor" style={{margin: '0 0 0 10px'}}>
            <h2 style={{textAlign: 'center'}}>Squad editor</h2>
            <Button type="submit" onClick={this.savedSquad} text="Save Squad"/>
            <Button type="submit" onClick={this.ResetSquad} text="Reset"/>

            {isLoading && <Loader width={80} height={80}/>}
            {users.length > 0 ? (
              <div>
                <CalculateHeroStats users={users} idFromSquad={idFromSquad}/>
                <HeroesList value="true"
                            users={visibleSquad}
                            deleteHero={this.deleteHeroFromSquad}
                />
              </div>

            ) : (
              <InlineMessage text="You have zero users"/>
            )}

          </div>

          <div className="Squad_stats">
            <h2 style={{textAlign: 'center'}}>Saved squad</h2>
            {isLoading && <Loader width={80} height={80}/>}
            <SavedSquadState savedSquad={savedSquad}
                             deleteSquad={this.deleteSquad}
            />
          </div>
        </Grid>

      </Container>
    );
  }
}

export default hot(module)(App);
