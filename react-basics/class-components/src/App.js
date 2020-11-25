//Files
import logo from "./logo.svg";
import addIcon from "./add.png";

import "./App.css";
import { useState } from "react";
//Components
import ContactList from "./components/contact-list";
import Filter from "./components/filter";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const handleSetFilter = (value) => setFilterValue(value);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Contact List </h2>
        {/* import and show Contact List Component in here */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img className="icon" src={addIcon} alt="Add Contact" />
          <Filter setFilter={handleSetFilter} />
        </div>
        <ContactList filterStr={filterValue} />
      </header>
    </div>
  );
}

export default App;
