const User = ({name, location}) => {
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>{" "}
      {/*getting that passing argument such as {name} by destructuring  or by using props {props.name}*/}
      <h3>Location : {location}</h3>
    </div>
  );
};

export default User;