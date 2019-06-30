import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import './styles/App.scss';

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
      <div className="wrapper">
        <div className="container">
          <header className="header-wrapper">
            <Header/>
          </header>
          <div className="content-wrapper">
            <List cryptocurrency={this.state.cryptocurrency}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;