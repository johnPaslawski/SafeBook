import App from "../App";
import "./Hrms.css";
import { useState } from "react";
import { Router, Route, Switch, Link } from 'react-router-dom'
import Shop from "../Shop/Shop";
import HrmsMainMenu from "./HrmsMainMenu";
import { Redirect } from "react-router";
import Organization from "./Organization/Organization";
import React from "react";
import HrmsContentRouter from "./HrmsContentRouter";
// import WebControl;
// import UsersPanel
const Hrms = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email: "taki@email", password: "TakieHaslo" };

  }
  return (
    <div>
      <div className="dark_top_panel">
      </div>
      
        <Link to="/" className="logo-box">
          <img className="logo" src={process.env.PUBLIC_URL + '/partyturaLogoBlack.jpg'} />
        </Link>
      
      
      <HrmsContentRouter />
      
      
      
      {/* <table className="table table-borderless table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}

      {/* {vidLoaded && } */}
      {/* <Content /> */}
      {/* <Footer /> */}
      <video onCanPlay={() => { document.querySelector('video').playbackRate = 0.8 }} autoPlay muted loop id="myVideo">
        <source src={process.env.PUBLIC_URL + '/my_video2.mp4'} type="video/mp4" />
      </video>
    </div>

  );
}


export default Hrms;

{/* <div className="dropdown-menu">moge
        <form className="px-4 py-3" onSubmit={handleSubmit}>masakra
          <div className="form-group">
            <label>Email address</label>
            <input type="email" required value={ email } className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={ (e) => setEmail(e.target.value) }            
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required value={ password } className="form-control" onChange={ (e) => setPassword(e.target.value) } id="exampleDropdownFormPassword1" placeholder="Password" />               
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
            <label className="form-check-label">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <div className="dropdown-divider"></div>
        <p>{email}</p>
        <p>{password}</p>
        <a className="dropdown-item" href="#">New around here? Sign up</a>
        <a className="dropdown-item" href="#">Forgot password?</a>
      </div> */}