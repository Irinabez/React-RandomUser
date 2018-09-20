import React, { Component } from 'react';
import Controls from './Controls';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cnt: 10,
    }
  }
  countChange(newCount){
    this.setState({cnt: newCount});
  }

  render(){
    return (
      <div>
        <h1>Random User</h1>

          <Controls
            count = {this.state.cnt}

            onChange={(newCount) => this.countChange(newCount)}
           // functionPlus = {()=> this.plus(a)}
            //functionMinus = {()=> this.minus(b)}
          />


          <Result result={this.state.cnt}/>

      </div>
    );
  }
}

export default App;
