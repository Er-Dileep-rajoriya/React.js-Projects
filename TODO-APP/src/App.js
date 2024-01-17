import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor()
  {
    super();
    this.state = {
      todos:[{ text: "Do the laundry" },
      { text: "Iron the clothes" },
      { text: "Go for a walk" }],
      text: ""
    }
  }

  // create handleAdd and handleRemove functions here
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddText = (text) => {
    const {todos} = this.state;

    todos.unshift({text:text});

    this.setState({
      todos,
      text:''
    });
  }

  handleRemove = (todo) => {

    const {todos} = this.state;
    const index = todos.indexOf(todo);

    delete todos[index];

    this.setState({
      todos
    })
  }

  render() {
    const {todos, text} = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        <Form todos={todos} 
              text={text}
              handleChange={this.handleChange}
              handleAddText={this.handleAddText}/>
        <List todos={todos}
              handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
