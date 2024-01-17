import { Component } from "react";

export class Form extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: ""
  //   };
  // }

  
  render() {
    const {text, handleChange, handleAddText} = this.props;
    return (
      <div className="form">
        <input
          onChange={handleChange}
          value={text}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={() => handleAddText(text)}>Add</button>
      </div>
    );
  }
}
