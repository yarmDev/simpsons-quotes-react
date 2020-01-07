import React, { Component } from "react";
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";
import "./App.css";
import Lamp from "./Lamp";
import Logo from "./logo512.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: props.working
    };
  }

  changeWorking = () => {
    this.setState({ working: !this.state.working });
    console.log("testyfyfyfd");
  };

  render() {
    const light = this.state.working ? "App-logo" : "secoue";

    return (
      <div className="App">
        <Navbar />
        <Lamp />
        <Lamp />
        <div className="center">
          <button onClick={this.changeWorking}>Bouge !!</button>
          <img className={light} src={Logo} alt="Logo" />
        </div>

        <QuoteList />
      </div>
    );
  }
}

export default App;
