import { Component } from 'react';
import ContactForm from './Form';
// import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitForm = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  handeDeleteContact = deleteId => {
    this.setState(prevState => ({
      ...prevState,
      contacts: this.state.contacts.filter(({ id }) => id !== deleteId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm onSubmit={this.submitForm} contactList={contacts} />
        <h2 title="Filter">Filter</h2>
        <ContactList
          contactList={contacts}
          onDelete={this.handeDeleteContact}
        />
      </div>
    );
  }
}
