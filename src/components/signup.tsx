import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "../css/login.css";
import { selectForm } from "../redux/actions";


const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    const data = {firstName, lastName, username, email, phone, gender, profileImage, bio, password, confirmPassword}
    e.preventDefault();
    console.log(data);
    
  };

  return (
    <div className="form">
      <form>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <TextField
                className="textfield"
                label="First Name"
                value={firstName}
                onChange={(e: any) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <TextField
                className="textfield"
                label="Last Name"
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-outline mb-4">
          <TextField
            className="textfield"
            label="Email"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <TextField
            className="textfield"
            label="Phone"
            value={phone}
            helperText=""
            error={false}
            onChange={(e: any) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <TextField
            className="textfield"
            label="Username"
            value={username}
            onChange={(e: any) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="form-outline mb-4">
          <TextField
            className="textfield"
            label="Gender"
            value={gender}
            onChange={(e: any) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <TextField
            className="textfield"
            label="Profile Image"
            value={profileImage}
            onChange={(e: any) => {
              setProfileImage(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <TextField
            className="textfield"
            label="Bio"
            value={bio}
            onChange={(e: any) => {
              setBio(e.target.value);
            }}
          />
        </div>

        <div className="form-outline mb-4"></div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <TextField
                className="textfield"
                type="password"
                label="Password"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <TextField
                className="textfield"
                type="password"
                label="Password"
                value={confirmPassword}
                onChange={(e: any) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4 submit-btn"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>

        <div className="text-center">
          <p>
            Already registered? <a className="link" onClick={()=>dispatch(selectForm("LOGIN_FORM"))}>Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
