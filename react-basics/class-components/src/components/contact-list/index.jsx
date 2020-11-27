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
    this.handleRemove = this.handleRemove.bind(this);
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
        (value) => value != remContact
      ),
    });
  }

  render() {
    const { contactsList } = this.state;
    const { filterStr, newContact } = this.props;

    //Add Contact
    //This condition is for preventing re-rendering in-finite loop
    if (!contactsList.includes(newContact)) {
      this.didUpdate = false;
    }

    if (newContact && !this.didUpdate) {
      this.setState({ contactsList: [...contactsList, newContact] });
      this.didUpdate = true;
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
          />
        ))}
      </div>
    );
  }
}

export default ContactList;
