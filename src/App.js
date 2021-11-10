import React, {Component} from "react";
import './css/App.css';
import Header from "./components/Header";
import MainInformation from "./components/MainInformation";



class App extends Component {
  render() {
    return (

    <div>
      <Header />
      <MainInformation />
    </div>

    );
  }
}

export default App;
