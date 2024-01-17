import "./styles.css";
import List from "./List";
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { courses } from "./data";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { bagItems: [] ,
    cartCount:0};
  }

  isCourseinBag = (id) => {
    return !!this.state.bagItems.find((c) => c.id === id);
  };

  handleAddToBag = (id) => {
    const course = courses.find((c) => c.id === id);
    this.setState({ bagItems: [course, ...this.state.bagItems],
                    cartCount:this.state.cartCount+1 });
  };

  handleRemoveFromBag = (id) => {
    const filteredCourses = this.state.bagItems.filter((c) => c.id !== id);
    this.setState({ bagItems: filteredCourses, cartCount:this.state.cartCount-1 });
  };
  render(){
    return (
      <div className="App">
        <Navbar cartCount={this.state.cartCount}/>
        <h3>CodeTube Catalog</h3>
        <div className="container">
          <List isCourseinBag={this.isCourseinBag}
                handleAddToBag={this.handleAddToBag}
                handleRemoveFromBag={this.handleRemoveFromBag}
                courses={courses}
            />
          <Sidebar />
        </div>
      </div>
    );
  }
}
