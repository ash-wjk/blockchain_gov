import React, { Component } from "react";

class TodoItems extends Component {

  constructor(props) {
    super(props);
  }

  createTasks = (item) => {
    return <li onClick={() => this.props.delete(item.id)}
              id={item.id}>{item.text}</li>
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default TodoItems;
