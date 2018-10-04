import React, { Component } from 'react';
import axios from 'axios';
import Loader from './Loader';
import RandUser from './RandUser';


class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            person: {}
        }
    }

    loadNewUser(){
        axios.get('https://randomuser.me/api')
            .then(result => this.setState({person: result.data.results[0]}))
            .catch(error => console.log(error))
    }
    componentDidMount() {
        this.loadNewUser();
    }

    render(){
    return (
      <div>
        <h1>Random User</h1>
          {this.state.person.name &&
          <RandUser
              user={this.state.person}
          />}

        <Loader
            loadNewUser={() => this.loadNewUser()}
        />

      </div>
    );
  }
}

export default App;
