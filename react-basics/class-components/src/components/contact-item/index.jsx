import React from "react";
import Seperator from "../base-components/seperator";
import styles from "./style.module.scss";
//Icons
import editIcon from "./edit.png";
import removeIcon from "./remove.png";

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };

    this.conRemHandler = this.conRemHandler.bind(this);

    //Edit
    this.editableContact = {
      name: "",
      familyName: "",
      phoneNumber: "",
      ID: null,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  conRemHandler = () => {
    this.props.handleRemove(this.props.contactData);
  };

  //Edit
  //Form Handlers
  changeHandler(event) {
    let nam = event.target.name;
    let val = event.target.value;

    if (nam === "ID") {
      if (val !== "" && !Number(val)) {
        alert("ID must be a number");
        event.target.value = "";
      }
      this.editableContact[nam] = Number(val);
    } else {
      this.editableContact[nam] = val;
    }
  }

  handleEditClick() {
    this.props.handleEdit(this.props.contactData, this.editableContact);
    this.setState({ editMode: false });
  }

  render() {
    const { contactData } = this.props;
    const { name, familyName, phoneNumber, ID } = contactData;

    if (!this.state.editMode) {
      return (
        <div className={styles.wrapper}>
          <div className={styles.badge} />
          <div className={styles.iconBox}>
            <img
              src={editIcon}
              alt="Edit contact"
              className={styles.icon}
              onClick={() => this.setState({ editMode: true })}
            />
            <img
              src={removeIcon}
              alt="Remove contact"
              className={styles.icon}
              onClick={this.conRemHandler}
            />
          </div>
          <p className={styles.title}>Contact Item</p>

          <Seperator />
          <div className={styles.itemRow}>
            <p>Name:</p>
            <p>{name}</p>
          </div>
          <div className={styles.itemRow}>
            <p>Family Name:</p>
            <p>{familyName}</p>
          </div>
          <div className={styles.itemRow}>
            <p>Phone Number:</p>
            <p>{phoneNumber}</p>
          </div>
          <div className={styles.itemRow}>
            <p>ID:</p>
            <p>{ID}</p>
          </div>
        </div>
      );
    } else {
      this.editableContact = { ...contactData };
      return (
        <div className={styles.wrapper}>
          <div className={styles.badge} />
          <p className={styles.title}>Contact Item</p>

          <Seperator />
          <div className={styles.itemRow}>
            <p>Name:</p>
            <input
              className={styles.inputBox}
              name="name"
              defaultValue={name}
              onChange={this.changeHandler}
              autoComplete="off"
            />
          </div>
          <div className={styles.itemRow}>
            <p>Family Name:</p>
            <input
              className={styles.inputBox}
              name="familyName"
              defaultValue={familyName}
              onChange={this.changeHandler}
            />
          </div>
          <div className={styles.itemRow}>
            <p>Phone Number:</p>
            <input
              className={styles.inputBox}
              name="phoneNumber"
              defaultValue={phoneNumber}
              onChange={this.changeHandler}
              autoComplete="off"
            />
          </div>
          <div className={styles.itemRow}>
            <p>ID:</p>
            <input
              className={styles.inputBox}
              name="ID"
              defaultValue={ID}
              onChange={this.changeHandler}
              autoComplete="off"
            />
          </div>
          <button onClick={this.handleEditClick}>Edit</button>
          <button
            onClick={() => {
              this.setState({ editMode: false });
            }}
          >
            Cancel
          </button>
        </div>
      );
    }
  }
}

export default ContactItem;
