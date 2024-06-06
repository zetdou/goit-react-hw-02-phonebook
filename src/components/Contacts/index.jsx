import { Component } from "react";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: "",
      number: "",
      filter: ""
    };
  }

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState((prev) => {
      const list = [...prev.contacts];
      list.push({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      });
      return { contacts: list };
    });
  };

  render() {
    const nameId = nanoid();
    const numId = nanoid();

    return (
      <>
        <form>
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul>
          {this.state.contacts
          .filter()
          .map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.number}
            </li>
          ))}
          <li></li>
        </ul>
      </>
    );
  }
}
