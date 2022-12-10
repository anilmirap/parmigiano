import { Component } from "react";


import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();

      this.state = {
        name: 'Mozzarella',
        company: 'Migros',
      }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, {this.state.name}! I am being in sale at {this.state.company}.
          </p>
          <button 
            onClick={() => {
              this.setState({name: 'Parmigiano'});
              this.setState({company: "Macro Center"});
            }
            }
          >
            Reply from Mozzarella
          </button>
        </header>
      </div>
    ); 
  }
}

export default App;
