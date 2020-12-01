import React from "react";
import ContactItem from "../contact-item";
import styles from "./style.module.scss";

const mockApiData = [
  {
    name: "Mahsa",
    familyName: "Pahlevani",
    phoneNumber: "+98912123456",
    ID: 0,
  },
  {
    name: "Ali",
    familyName: "Malek",
    phoneNumber: "+98912123456",
    ID: 1,
  },
  {
    name: "Sara",
    familyName: "Eyvani",
    phoneNumber: "+98912123456",
    ID: 2,
  },
];

const fetchFromMockApiEndPoint = (shouldShowError = false) =>
  new Promise((resolvePromise, rejectPromise) =>
    setTimeout(() => {
      return !shouldShowError
        ? resolvePromise(mockApiData)
        : rejectPromise(new Error("Mock API failed"));
    }, 1500)
  );

// const sampleContactData = {
//   name: "Ali",
//   familyName: "Malek",
//   phoneNumber: "+98912123456",
//   ID: 12,
// };

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: [],
    };

    this.newAdded = null;

    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    // TODO:  start api fetch here
    fetchFromMockApiEndPoint().then((values) =>
      this.setState({ contactsList: values })
    );
  }

  handleRemove(remContact) {
    this.setState({
      contactsList: this.state.contactsList.filter(
        (value) => value !== remContact
      ),
    });
  }

  handleEdit(oldContact, editedContact) {
    let listCopy = this.state.contactsList;
    const index = listCopy.indexOf(oldContact);
    listCopy[index] = editedContact;
    this.setState({ contactsList: listCopy });
  }

  render() {
    const { contactsList } = this.state;
    const { filterStr, newContact } = this.props;

    //Add Contact
    //Using newAdd(NewContact) instead of didUpdate (Boolean) solved latest item remove/edit issue
    if (newContact && this.newAdded !== newContact) {
      console.log("Before", contactsList);
      this.newAdded = newContact;
      this.setState({ contactsList: [...contactsList, newContact] }, () =>
        console.log("Added", this.state.contactsList)
      );
    }

    //Filter contact
    const regex = new RegExp(filterStr, "i");
    const filteredContactsList = contactsList.filter(
      (item) =>
        regex.test(item.name) ||
        regex.test(item.familyName) ||
        regex.test(item.phoneNumber)
    );

    return (
      <div className={styles.listWrapper}>
        {/* TODO:  edit here  and make it dynamic with API Call and mock data that provided in top of this file - use map for arrays in here and make it render at another function*/}
        {filteredContactsList.map((item, index) => (
          <ContactItem
            key={index}
            contactData={item}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
          />
        ))}
      </div>
    );
  }
}

export default ContactList;
