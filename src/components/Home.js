import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      people: []
    }

  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people`).then(res => {
      this.setState(() => {
        let newState = {};
        newState.people = res.data.results;
        return newState;
      })
    })
  }

  goToSingle(ind, character) {
    this.props.history.push({
      pathname: '/single/' + ind,
      state: { character }
    })
  }

  render() {

    let characterList = this.state.people.map((character, index) => {
      return (
          <tr key={index} onClick={this.goToSingle.bind(this, index + 1, character)}>
            <td>{character.name}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.hair_color}</td>
          </tr>
      )
    })

    return (
      <div>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Hair Color</th>
            </tr>
          </thead>
          <tbody>
            {characterList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home;
