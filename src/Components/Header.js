import { useState, useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // if no dependency array ==> useEffect is called on every render.
  // if dependency array is empty = [] ==> useEffect is called on initial render(just once).
  // if dependency array is  [btnNameReact] => called everytime btnNameReact is updated.
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-slate-300">
      <div className="">
        <img className="h-20 w-25 m-10" src={LOGO_URL} />
      </div>
      <div className="justify-between mx-10 px-10">
        <ul className="flex px-10 mx-10 justify-content-space-between">
          <li className="mx-40">
            Online Status : {onlineStatus ? "🥳" : "😡"}
          </li>
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="mx-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="login bg-slate-300 rounded-xl font-bold mx-4"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;