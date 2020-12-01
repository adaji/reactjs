import React from "react";
import Seperator from "../base-components/seperator";
import styles from "./style.module.scss";

function AddContact(props) {
  const newContact = { name: "", familyName: "", phoneNumber: "", ID: null };

  //Form Handlers
  const changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    if (nam === "ID") {
      if (val !== "" && !Number(val)) {
        alert("ID must be a number");
        event.target.value = "";
        val = null;
      }
      newContact[nam] = Number(val);
    } else {
      newContact[nam] = val;
    }
  };

  const submitHandler = () => {
    props.submitHandler(newContact);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.badge} />
      <p className={styles.title}>New Contact Item</p>
      <Seperator />
      <div className={styles.itemRow}>
        <p>Name:</p>
        <input
          className={styles.inputBox}
          name="name"
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className={styles.itemRow}>
        <p>Family Name:</p>
        <input
          className={styles.inputBox}
          name="familyName"
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className={styles.itemRow}>
        <p>Phone Number:</p>
        <input
          className={styles.inputBox}
          name="phoneNumber"
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <div className={styles.itemRow}>
        <p>ID:</p>
        <input
          className={styles.inputBox}
          name="ID"
          onChange={changeHandler}
          autoComplete="off"
        />
      </div>
      <button onClick={submitHandler}>Add Contact</button>
    </div>
  );
}

export default AddContact;
