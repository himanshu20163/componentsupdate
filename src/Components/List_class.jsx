import { Component } from "react";

class List_class extends Component {
  constructor() {
    super();
    console.log("constructor called");
    this.state = {
      data: {
        name: "",
        password: "",
      },
    };
  }

  get_name = (e) => {
    let name = e.target.value;
    this.setState((prevState) => ({ data: { ...prevState.data, name } }));
  };

  get_pass = (e) => {
    let password = e.target.value;
    this.setState((prevState) => ({
      data: { ...prevState.data, password },
    }));
  };

  render() {
    return (
      <div>
        <div>
          <h4>Components mount update</h4>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={this.get_name}
          />
          <input
            type="text"
            placeholder="Enter your password"
            onChange={this.get_pass}
          />
          {
            <div>
              <h3>Name : {this.state.data.name}</h3>
              <h3>password : {this.state.data.password}</h3>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default List_class;
