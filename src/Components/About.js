import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React web series </h2>
      <User name={"Raj (functional)"} location={"Jhansi"} />
      {/*passing argument such as name={"Raj (functional"}*/}
      <UserClass name={"Raj (classBased)"} location={"Jhansi"} />
      {/*passing argument such as name={"Raj (classBased"}*/}
    </div>
  );
  
};

export default About;