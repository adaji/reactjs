import React from "react";
//Styling
import styles from "./style.module.scss";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleChangeFilter(e) {
    this.setState({ inputValue: e.currentTarget.value }, () =>
      this.props.setFilter(this.state.inputValue)
    );
  }

  render() {
    return (
      <div>
        <input
          className={styles.inputBox}
          onChange={this.handleChangeFilter}
          placeholder="Search Contact"
        />
      </div>
    );
  }
}

export default Filter;
