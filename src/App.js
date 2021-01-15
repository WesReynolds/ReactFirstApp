import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';
import axios from 'axios';

class App extends Component {
   componentDidMount() {
   axios.get('http://localhost:5000/users')
    .then(res => {
      const characters = res.data.users_list;
      this.setState({ characters });
      })
    .catch(function (error) {
      //Not handling the error. Just logging into the console.
      console.log(error);
      });
    }     

   state = {
      characters: [],
   }

   handleSubmit = character => {
      this.setState({ characters: [...this.state.characters, character] })
   }

   removeCharacter = index => {
      const { characters } = this.state

      this.setState({
         characters: characters.filter((character, i) => {
            return i !== index
         }),
      })
   }

   render() {
      const { characters } = this.state

      return (
         <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
         </div>
      )
   }
}

export default App
