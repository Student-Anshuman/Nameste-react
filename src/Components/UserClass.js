import React from "react";

class UserClass extends React.Component {
  // to using props in class based we have to create a constructor;

  constructor(props) {
    super(props);
    
    // This state is a big Object
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  
  render() {
    //by destructuring
    const { name, location } = this.props;
    
    const { count, count2} = this.state;

    return (
      <div className="user-card">
        <h1>Count = {count}</h1> 
        <h1>Count2 = {count2}</h1>
        <h2>Name :{name}</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}


export default UserClass;