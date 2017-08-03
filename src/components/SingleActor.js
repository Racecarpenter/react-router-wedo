import React, { Component } from 'react';
import axios from 'axios';

class SingleActor extends Component {
  constructor() {
    super();
    this.state = {
      character: {}
    }
  }
  componentDidMount() {
    axios.get(`https://www.swapi.co/api/people/${this.props.match.params.id}`)
    .then(res => this.setState({character: res.data}));
  }
  render () {
    let style = {
      fontStyle:'italic',
      textAlign: 'center'
    };
    let steez = {
      listStyleType: 'none'
    }
    return (
      <div>
        <h1 style={style}>{JSON.stringify(this.state.character.name)}</h1>
        <ul style={steez}>
        <li style={style}>Hair: {JSON.stringify(this.state.character.hair_color)}</li>
        <li style={style}>Gender: {JSON.stringify(this.state.character.gender)}</li>
        <li style={style}>Birthday: {JSON.stringify(this.state.character.birth_year)}</li>
        </ul>
      </div>
    )
  }
}

export default SingleActor;
