import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from './Navbar';
import "./style.css"
// import { User } from "../../Context/userContext";


const SharedLayout = () => {
  // const [user, setUser] = useState("");
  return (
    <div>
      {/* <User.provider value={{ user, setUser }}> */}

          <Navbar />
          <main>
            <Outlet />
          </main>
      {/* </User.provider> */}
    </div>
  );
};

export default SharedLayout;
