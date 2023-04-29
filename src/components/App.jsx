import { Component } from 'react';
import ContactForm from './Form';
export class App extends Component {
  state = {};
  submitForm = data => {
    console.log(data);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm onSubmit={this.submitForm} />
      </div>
    );
  }
}
