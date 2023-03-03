import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/snap/posts");
    });
  };

  return (
    <div className="">
      <div className="">
        <h2 className="">Sign In With Google to continue</h2>
        <button className="" onClick={signInWithGoogle}>
          <FcGoogle className="" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
