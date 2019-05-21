import React from "react";
import ReactDOM from "react-dom";
import shortid from "shortid";
import "./styles.css";

//Program that takes a persons face and name then puts it on the screen
class App extends React.Component {
  state = {
    personArr: []
  };

  componentDidMount = async () => {
    //Put the url in a var
    var url = "https://randomuser.me/api/?results=50";

    //fetch data from the url
    var response = await fetch(url);

    //turn data into json
    var json = await response.json();

    //Set the picture
    this.setState({ personArr: json.results });
  };

  render() {
    var { personArr } = this.state;

    return (
      <div className="App">
        {personArr.map(person => {
          return (
            <ul className="person" key={shortid()}>
              <img
                className="images"
                src={person.picture.large}
                alt="Will not load"
              />
              <div className="personText">
                Hi! My name is {person.name.first} {person.name.last}
                {""}
              </div>
            </ul>
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
