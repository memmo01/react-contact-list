import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Mike",
        email: "m@m.com",
        phone: "999-999-0000"
      },
      {
        id: 2,
        name: "laura",
        email: "l@l.com",
        phone: "889-999-0000"
      },
      {
        id: 3,
        name: "Theo",
        email: "T@t.com",
        phone: "632-999-0000"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
