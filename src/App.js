import React, { Component } from 'react'
import Header from './components/Header';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptocurrency : []
    };
  }

  async componentDidMount() {
    await fetch('/api/coinmarketcap/cryptocurrency')
      .then(response => response.json())
      .then(data => this.setState({ cryptocurrency: data.cryptoData.data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
      </div>
    )
  }
}

export default App;