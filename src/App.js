import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const coworkers = [
  { name: "Pooja", role: "dev" },
  { name: "Junhui", role: "dev" },
  { name: "Raghav", role: "dev" },
  { name: "Navaneet", role: "dev" },
  { name: "Eric", role: "dev" },
  { name: "Josh", role: "dev" },
  { name: "Randy", role: "qa" },
  { name: "Asmi", role: "design" },
  { name: "Santosh", role: "manager" }
]

function App() {

  const [checkoutCoworkers, setcheckoutCoworkers] = useState(coworkers)

  function generateUsers() {
    return checkoutCoworkers.map(person => {
      return (
        <>
          <div>{person.name} ({person.role})</div>
        </>
      )
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Checkout Directory
          </p>
        <div>
          {generateUsers()}
        </div>
      </header>
    </div>
  );

}

export default App;

