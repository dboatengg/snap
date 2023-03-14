import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/posts");
    });
  };

  return (
    <div className="login">
      <div className="content">
        <h2 className="">Sign In With Google to access Snap</h2>
        <button className="" onClick={signInWithGoogle}>
          <FcGoogle className="icon" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
