import React, { Component } from "react";
import TodoItems from './TodoItems';

class TodoList extends Component {
constructor(props) {
    super(props);

    this.state = {
      items: []
    };

}

addItem = e => {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      id: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputElement.value = "";
  }
  console.log(this.state.items);
  e.preventDefault();
}

deleteItem = (id) => {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.id !== id);
  });

  this.setState({
    items: filteredItems
  });
}

saveList = e => {
  this.props.onSaveList(this.state.items);
  e.preventDefault();
}

render() {
    const { items } = this.state;
    return (
      <div className="todoListMain">
      <div className="header">
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a}
                  placeholder="Enter task">
          </input>
          <button type="submit">Add</button>
        </form>
      </div>
      <TodoItems entries={items} delete={this.deleteItem}/>
      <div className="todoSaveBtn">
      <form onSubmit={this.saveList}>  
      {items.length > 0 ? <button type="submit">Save</button> : null}
      </form>
      </div>
    </div>
    );
  }
}

export default TodoList;
