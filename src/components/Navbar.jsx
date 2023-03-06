import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

const Navbar = ({ isAuth, setIsAuth }) => {
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <nav className="nav">
      {isAuth ? (
        <>
          <Link className="btn" onClick={signUserOut}>
            Logout
          </Link>
        </>
      ) : (
        <h3 className="logo">Snap</h3>
      )}
    </nav>
  );
};

export default Navbar;
