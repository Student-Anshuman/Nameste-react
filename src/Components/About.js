import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// Note:parent constructor -> parent render -> child constructor -> child render -> child componentDidMount -> parent componentDidMount (This is cycle or priority of class components to rendering or mountaining )

class About extends React.Component{
  constructor(props){
    super(props);

    console.log("parent constructor")
  }

  componentDidMount() {
    console.log("parent componentDidMount ");
  }
  componentWillUnmount() {
    console.log("this is Unmounted")
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>This is About class</h1>
        <h2>This is Namaste React web series </h2>

        <UserClass name={"child 1 (classBased)"} location={"Jhansi"} />
        <UserClass name={"child 2 (classBased)"} location={"Jhansi"} />
        <UserClass name={"child 3 (classBased)"} location={"Jhansi"} />
      </div>
    );
    
  }
}







export default About;