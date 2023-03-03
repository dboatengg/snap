import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const Navbar = ({ isAuth, setIsAuth }) => {
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/snap/";
    });
  };

  return (
    <nav className="nav">
      {isAuth ? (
        <>
          <button onClick={signUserOut}>Logout</button>
          <Link to="/snap/posts">Add note</Link>
        </>
      ) : (
        <Link to="/snap/">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;