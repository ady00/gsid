import "./App.css";
import Main from "./Pages/Main.tsx";

import Staff from "./Pages/Staff.tsx";
import Publications from "./Pages/Publications.tsx";
import Outreach from "./Pages/Outreach.tsx";


import NotFound from "./Pages/Error.tsx";

import Footer from "./Components/Footer.js";

import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(JSON.parse(window.localStorage.getItem("mode")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mode", dark);
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <Routes>
        <Route
          path="/"
          element={<Main dark={dark} setDark={setDark} />}
        ></Route>
        
        <Route
          path="staff"
          element={<Staff dark={dark} setDark={setDark} />}
        ></Route>


        <Route
          path="conferences"
          element={<Publications dark={dark} setDark={setDark} />}
        ></Route>

        <Route
          path="outreach"
          element={<Outreach dark={dark} setDark={setDark} />}
        ></Route>


      <Route
          path="*"
          element={<NotFound dark={dark} setDark={setDark} />}
        ></Route>


        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
