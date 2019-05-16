import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Program that takes a persons face and name then puts it on the screen
class App extends React.Component {
  state = {
    personArr: [],
    value: 9
  };

  componentDidMount = async () => {
    //Put the url in a var
    var url = "https://randomuser.me/api/";

    //fetch data from the url
    var response = await fetch(url);

    //turn data into json
    var json = await response.json();

    this.setState({ personArr: json.results });
  };
  render() {
    var { personArr, value } = this.state;

    return (
      <div className="App">
        {personArr.map(person => {
          return <div key={value}>Hi! My name is {person.gender} </div>;
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
