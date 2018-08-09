import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
