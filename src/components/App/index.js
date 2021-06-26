import React from "react";
import NameList from "../NameList";
import "./index.css";

class App extends React.Component {
  render() {
    const nameList = ["John", "James", "Alexander", "Charles", "Bill", "Frank", "Luis"];
    return (
      <div className="App">
        <NameList nameList={nameList} />
      </div>
    );
  }
}

export default App;
