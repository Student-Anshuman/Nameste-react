import React from "react";



class UserClass extends React.Component {
  // to using props in class based we have to create a constructor;

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name :{ this.props.name}</h2>
        <h3>Location : { this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;