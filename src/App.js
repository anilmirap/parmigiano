import { Component } from "react";


import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();

      this.state = {
        name: 'Parmigiano',
        company: 'Migros',
      }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Merhaba {this.state.name}! Ben {this.state.company} mağazalarında satılıyorum.
          </p>
          <button 
            onClick={() => {
              this.setState({name: 'Mozzarella'});
              this.setState({company: "Macro Center"});
            }
            }
          >
            Parmigiano'nun yanıtı
          </button>
        </header>
      </div>
    ); 
  }
}

export default App;
