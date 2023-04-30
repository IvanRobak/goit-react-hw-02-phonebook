import { nanoid } from 'nanoid';
import { Component } from 'react';
import {
  Form,
  InpetHeader,
  InputName,
  InputNumber,
  InputBtn,
} from './Form.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };
  handleInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  nameCheker = name => {
    return this.props.contactList.find(contact => contact.name === name);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (this.nameCheker(name)) {
      return alert(`${name} is is already in contacts.`);
    }
    this.props.onSubmit({
      name,
      number,
      id: nanoid(),
    });
    this.resetForm();
    console.log(this.props);
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form title="Phonebook" onSubmit={this.handleSubmit}>
        <InpetHeader>Phonebook</InpetHeader>
        <InputName
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          namevalue={this.state.name}
          onChange={this.handleInput}
        />
        <InputNumber
          id="number"
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleInput}
        />

        <InputBtn type="submit">Add contact</InputBtn>
      </Form>
    );
  }
}
export default ContactForm;
