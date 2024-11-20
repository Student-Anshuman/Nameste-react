import React from "react";
import { Component } from "react";

class UserClass extends Component {
  // to using props in class based we have to create a constructor;
  // When classBased component is called or instanciated or loaded then first "CONSTRUCTOR"  is called and then render() and then componentDidMount().
  constructor(props) {
    super(props);

    // This state variable is a big Object, if we have to declare another object then declare inside it
    this.state = {
      count: 0,
      // declare another state here,
      // only render that state was updating
    };

    console.log(this.props.name + "constructor");
  }
// API CALLS INSIDE componentDidMount()
  componentDidMount() {
    console.log(this.props.name + "child componentDidMount ");
  }

  render() {
    console.log(this.props.name + "child render");
    //by destructuring
    const { name, location } = this.props;

    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE DIRECTLY  like ====> this.state.count = this.state.count + 1
            // if we have to update another states then do not create another update inside because state is set of big object
            this.setState({ count: this.state.count + 1 });
            //update another state here
          }}
        >
          click here to increase count
        </button>

        <h2>Name :{name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}


export default UserClass;