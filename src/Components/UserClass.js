import React from "react";



class UserClass extends React.Component {
  // to using props in class based we have to create a constructor;

  constructor(props) {
    super(props);

    console.log(props);
  }

  
  render() {
    //by destructuring
     const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2>Name :{name}</h2>{" "}
        <h3>Location : {location}</h3>{" "}
        
      </div>
    );
  }
}

export default UserClass;