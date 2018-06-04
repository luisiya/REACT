import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Loader from './shared/Loader';
import InlineMessage from './InlineMessage';
import TotalInfo from './CalculateHeroStats';


class ReadySquad extends Component {
  state = {
    users: [],
    filter:"",
    isLoading: false,
    strength: "",
    intelligence:"",
    speed:"",
  };


  render() {
   console.log(this)
    const { users,  isLoading  } = this.state;

    return (

      <div className="Squad_editor">
        <h2 style={{ textAlign: 'center' }}>Saved squad</h2>

        {isLoading && <Loader width={80} height={80} />}

        {users.length > 0 ? (
          <div>

            <TotalInfo
              users={users}/>
           </div>

        ) : (
          <InlineMessage text="You have zero users" />
        )}


      </div>
    );
  }
}

export default hot(module)(ReadySquad);
