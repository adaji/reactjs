//Files
import logo from "./logo.svg";
import addIcon from "./add.png";

import "./App.css";
import { useState } from "react";
//Components
import ContactList from "./components/contact-list";
import Filter from "./components/filter";
import AddContact from "./components/add-contact-item";

function App() {
  //Filter states
  const [filterValue, setFilterValue] = useState("");
  const handleSetFilter = (value) => setFilterValue(value);
  //Add new contact states
  const [activeAdd, setActiveAdd] = useState(false);
  const [newContact, setNewContact] = useState(null);

  const addSubmitHandler = (newContact) => {
    setNewContact(newContact);
    setActiveAdd(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Contact List </h2>
        {/* import and show Contact List Component in here */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            className="icon"
            src={addIcon}
            alt="Add Contact"
            onClick={() => setActiveAdd(true)}
          />
          <Filter setFilter={handleSetFilter} />
        </div>
        {activeAdd && <AddContact submitHandler={addSubmitHandler} />}

        <ContactList filterStr={filterValue} newContact={newContact} />
      </header>
    </div>
  );
}

export default App;
