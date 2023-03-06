import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./pages/Posts";
import Login from "./pages/Login";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/posts" element={<Posts isAuth={isAuth} />}></Route>
        <Route path="/" element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
