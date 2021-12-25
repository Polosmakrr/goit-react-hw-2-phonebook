import React, { Component } from 'react';
import FormInput from './components/FormInput/FormInput';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  FormSubmitHendler = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };
    console.log('contact:', contact);

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <FormInput onSubmit={this.FormSubmitHendler} />
        <h1>Phone Book</h1>
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter value={filter} onChangeFilter={this.changeFilter} />}
        <ContactsList onRemoveContact={this.removeContact} contacts={this.getFilteredContacts()} />
      </>
    );
  }
}

export default App;