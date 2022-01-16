import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Web3 from 'web3';
import Seatmap from './components/seatmap.js';
import Navbar from './components/Navbar';
import React, { Component } from 'react'

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      loading: true
    }
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <Seatmap />
      </div>
    );
  }
  // return (
  //   <div>
  //     <><Navbar account={this.state.account} /><header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //     </header></>
  //   </div>
  // );
}



export default App;
