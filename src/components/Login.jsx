import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("kidus@gmail.com");
  const [password, setPassword] = useState("Kidus@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center my-15">
      <div className="card card-border bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Log in</h2>
          <fieldset className="fieldset my-1">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input"
              name="emailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset my-1">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions justify-center my-1">
            <button onClick={() => handleLogin()} className="btn btn-wide">
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
