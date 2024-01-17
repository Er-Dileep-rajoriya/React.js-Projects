import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: [
  //       { text: "Do the laundry" },
  //       { text: "Iron the clothes" },
  //       { text: "Go for a walk" }
  //     ]
  //   };
  // }
  
  render() {
    const {todos, handleRemove} = this.props;
    return (
      <div className="list">
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} handleRemove={handleRemove} index={i}/>
        ))}
      </div>
    );
  }
}
