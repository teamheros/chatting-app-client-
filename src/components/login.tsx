import { TextField } from "@material-ui/core";
import { useState } from "react";
import { selectForm } from "../redux/actions";
import { useDispatch } from "react-redux";
// import OTPInput, { ResendOTP } from ""
import "../css/login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [validator, setValidator] = useState(false);

  const [inputScreen, setInputScreen] = useState("credentials");

  const handleLogin = (e: any) => {
    e.preventDefault();

    //make login request here
  };

  const dispatch = useDispatch();

  const credentialsScreen = () => (
    <div>
      <div className="form-outline mb-4">
        <TextField
          className="textfield"
          label="Email, phone, or username"
          value={email}
          error={validator && email === ""}
          helperText={validator && email === "" ? "Required" : ""}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-outline mb-4">
        <TextField
          className="textfield"
          type="password"
          label="Password"
          value={password}
          helperText={validator && password === "" ? "Required" : ""}
          error={validator && password === ""}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="form2Example3"
            />
            <label className="form-check-label" htmlFor="form2Example3">
              Remember me
            </label>
          </div>
        </div>

        <div className="col">
          <a className="link" href="#!">
            Forgot password?
          </a>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block mb-4 submit-btn"
        onClick={(e) => handleLogin(e)}
      >
        Log In
      </button>
    </div>
  );

  const otpScreen = () => (
    <div>
      <div className="form-outline mb-4">
        {/* <OTPInput
          value={otp}
          onChange={(e: any) => setOtp(e.target.value)}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          secure
        />
        <ResendOTP handelResendClick={() => console.log("Resend clicked")} /> */}
      </div>
    </div>
  );

  return (
    <div className="form">
      <form>
        {credentialsScreen()}
        <div className="text-center">
          <p>
            Not a member?{" "}
            <a className="link" onClick={() => dispatch(selectForm("SIGN_UP"))}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
