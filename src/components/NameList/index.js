import React from "react";
import "./index.css";
import { v4 } from "uuid";

class NameList extends React.Component {
  render() {
    const nameList = this.props.nameList.map((el) => <li key={v4()}>{el}</li>);
    return <ol className="NameList">{nameList}</ol>;
  }
}

export default NameList;
