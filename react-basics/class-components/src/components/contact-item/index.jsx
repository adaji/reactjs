import React from "react";
import Seperator from "../base-components/seperator";
import styles from "./style.module.scss";
//Icons
import editIcon from "./edit.png";
import removeIcon from "./remove.png";

class ContactItem extends React.Component {
  constructor(props) {
    super(props);

    this.conRemHandler = this.conRemHandler.bind(this);
  }

  conRemHandler = () => {
    this.props.handleRemove(this.props.contactData);
  };

  render() {
    const { contactData } = this.props;
    const { name, familyName, phoneNumber, ID } = contactData;
    return (
      <div className={styles.wrapper}>
        <div className={styles.badge} />
        <div className={styles.iconBox}>
          <img src={editIcon} alt="Edit contact" className={styles.icon} />
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
  }
}

export default ContactItem;
