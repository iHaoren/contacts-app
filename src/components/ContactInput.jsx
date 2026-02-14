import React from "react";

class ContactInput extends React.Component {
  render() {
    return (
      <form className="contact-input">
        <input type="text" placeholder="Nama" />
        <input type="text" placeholder="Tag" />
        <button type="submit">Tambah</button>
      </form>
    );
  }


  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

   onTagChangeEventHandler(event) {
    this.setState(() => {
        return {
            tag: event.target.value,
        }
    });
   }

   onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
   }
}

export default ContactInput;
