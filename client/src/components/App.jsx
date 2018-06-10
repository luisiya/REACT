import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Loader from './shared/Loader';
import { getVisibleHeroes, getVisibleSquad} from '../utils/selectors';
import * as api from '../utils/api';
import HeroesList from './HeroesList';
import InlineMessage from './InlineMessage';
import styles from './App.css';
import HeroesFilter from './HeroesFilter';
import CalculateHeroStats from './CalculateHeroStats';
import Button from './shared/Button';
import AddNewValueOfHero from './AddNewValueOfHero';
import ReadySquadState from './ReadySquadState';


class App extends Component {

  state = {
    users: [],
    filter:"",
    isLoading: false,
    idFromSquad:[],
    readySquad:[],
    saveSquads:[],
    ids:[],


  };

  componentDidMount() {
       this.getUserFromData();

  };

  onFilterChange = (str) => {
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


  addNewHero = (hero)=>{

    this.setState({ isLoading: true });
    api.addNewHero(hero).then(({ data, error }) => {
      if (error) {
        console.log(error);

        this.setState({ isLoading: false });
        return;
      }
      this.setState(state => ({
        users: [...state.users, data],

        isLoading: false,
      }));

    });
  };

  addToSquad = (id) => {

    const hero =  this.state.users.filter(user=>user.id === id );

      this.setState(state => ({

        idFromSquad:[...state.idFromSquad, id],
        ids:[...state.idFromSquad, id],
        readySquad:[...state.readySquad, hero],

      }));

  };

  deleteHeroFromList = (id) =>{

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

  deleteHeroFromSquad = () => {

    this.setState(state => ({
        idFromSquad: state.idFromSquad.filter(hero=> state.idFromSquad.includes(hero.id)),
        ids: state.ids.filter(hero=> state.ids.includes(hero.id))

      }));

  };
  savedSquad = () =>{

    const hero = this.state.readySquad;
    api.AddToSquad(hero).then(({ data, error}) => {
          if (error) {
            console.log(error);
            this.setState({isLoading: false});
            return;
          }

          this.setState(state => ({

            idFromSquad:[],
            savedSquad:[...state.readySquad],
            isLoading: false,
            move:true,
            reset:false,
          }));
          console.log(data)

        });

  };
  deleteSquad=(id)=>{
    console.log(id)
  }
  ResetSquad=() =>{
    this.setState({
      reset:true,
      idFromSquad:[],
      move:false,
      ids:[],

    });

  }

  render() {

    const { users,  isLoading, filter , edit, idFromSquad, savedSquad, ids} = this.state;
    const visibleHeroes = getVisibleHeroes(users, filter, ids);
    const visibleSquad = getVisibleSquad(users, idFromSquad);

    console.log("APP");
    console.log(this.state );


    return (

      <div className={styles.container}>


        <div className="inputNewHero">
          <h2 style={{ textAlign: 'center' }}>Create Hero</h2>
          <AddNewValueOfHero addNewHero={this.addNewHero} />
        </div>

        <div className="listOfHeroes">
        <h2 style={{ textAlign: 'center' }}>Heroes</h2>
        {isLoading && <Loader width={80} height={80} />}

        <HeroesFilter onFilterChange={this.onFilterChange} filter={filter} value={edit} />

        {users.length > 0  ? (
          <HeroesList
            users={visibleHeroes}
            deleteHero={this.deleteHeroFromList}
            addToSquad={this.addToSquad}
          />
        ) : (

          <InlineMessage text="You have zero users" />
        )}
        </div>

        <div className="Squad_editor" style={{width:'500px', margin:'0 0 0 30px'}} >
          <h2 style={{textAlign: 'center'}}>Squad editor</h2>
          <Button type="submit" onClick={this.savedSquad} text="Save Squad"  />
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


        <div className="Squad_stats" style={{width:'400px'}}>
          <h2 style={{ textAlign: 'center' }}>Saved squad</h2>
          {isLoading && <Loader width={80} height={80} />}

          {users.length > 0 ? (
            <div>

              <ReadySquadState users={users} idFromSquad={idFromSquad}  savedSquad={savedSquad} deleteSquad={this.deleteSquad}
              />


            </div>

          ) : (
            <InlineMessage text="You have zero users" />
          )}


        </div>
      </div>
    );
  }
}

export default hot(module)(App);
