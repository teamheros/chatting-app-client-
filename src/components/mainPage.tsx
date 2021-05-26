import { useState } from "react";
import "../css/mainPage.css";
import LoginForm from "./login";

const MainPage = () => {
  const [form, setForm] = useState("login");
  return (
    <div className="main-div">
    <div className="main-page">
      <div className="main-form">
        <LoginForm />
      </div>
      <img className='image-div' src="https://applian.com/img/login.svg" alt="some img"></img>
      {/* <h1>discuter</h1>
      <br />
      <h2>It helps you connect and share with the people in your life.</h2> */}
    </div>
    </div>
  );
};

export default MainPage;
