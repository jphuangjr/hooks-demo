import React from 'react';
import logo from './logo.svg';
import './App.css';

const coworkers = [
  { name: "Pooja", role: "dev"},
  { name: "Junhui", role: "dev"},
  { name: "Raghav", role: "dev"},
  { name: "Navaneet", role: "dev"},
  { name: "Eric", role: "dev"},
  { name: "Josh", role: "dev"},
  { name: "Randy", role: "qa"},
  { name: "Asmi", role: "design"},
  { name: "Santosh", role: "manager"}
]

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        coworkers: coworkers
      };

      this.generateUsers = this.generateUsers.bind(this);
      this.filterUsers = this.filterUsers.bind(this);
  }

  filterUsers(event) {
    let pattern = new RegExp(event.target.value.toLowerCase())
    const newList = coworkers.filter(person => {
      return pattern.test(person.name.toLowerCase());
    })
    this.setState({coworkers: newList})
  }

  generateUsers() {
    return this.state.coworkers.map(person => {
      return (
      <>
        <div>{person.name} ({person.role})</div>
      </>
      )
    })
  }


  render() {
      return (
        <div className="App">
        <header className="App-header">
          <p>
            Checkout Directory
          </p>
          <div>
            <input onChange={this.filterUsers} type="text" name="filter" placeholder="Filter Names"/>
          </div>
          <br/>
          <div>
            {this.generateUsers()}
          </div>
        </header>
      </div>
      );
  }
}

export default App;

