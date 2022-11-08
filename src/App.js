import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Nishant",
      todoItems: [
        {
          action: "Buy Milk",
          done: false,
        },
        {
          action: "Buy coffee",
          done: false,
        },
        {
          action: "Buy chana",
          done: false,
        },
      ],
      newTodo: "",
    };
  }
  newTodo = (event) => {
    if (!this.state.newTodo || /^\s*$/.test(this.state.newTodo)) {
      console.log("oops");
      return;
    }
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };
  toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };
  todoRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleDone(item)}
          />
        </td>
      </tr>
    ));
  changeTheData = () => {
    this.setState({
      userName: this.state.userName === "Nishant" ? "Name2" : "Nishant",
    });
  };
  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="bg-primary text-white text-center">
                The To Do List
              </h2>
              <h1>{this.state.userName} To Do List</h1>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.newTodo}
                  onChange={this.updateValue}
                />
                <button
                  className="btn btn-primary"
                  onClick={() => this.newTodo()}
                >
                  Add Todo
                </button>
              </div>
              <div className="col-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Task</th>
                    </tr>
                  </thead>
                  <tbody>{this.todoRows()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
