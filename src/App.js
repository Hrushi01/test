import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddAuth from "./Auth/AddAuth.jsx";
import NoAuth from "./Auth/NoAuth.jsx";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [singup, setsingup] = useState(false);

 

  const login = (e) => {
    setToken(e);
    localStorage.setItem("token", e);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <div className=" h-screen content-center  p-3 bg-slate-500 overflow-auto     ">
      {token ? <AddAuth logout={logout} /> : <NoAuth login={login} />}
    </div>
  );
}

export default App;


