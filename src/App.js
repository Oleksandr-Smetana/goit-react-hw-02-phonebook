import React, { Component } from 'react';
import ContactForm from './components/ContactForm';

class Phonebook extends Component {
  state = {
    contacts: [],
  };

  handleFormSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default Phonebook;
