import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import {Button} from "@material-ui/core";
import Axios from "axios";
class App extends React.Component{
  render(){
    return(
      <Router>
      <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/" component={Home}/>
      </Switch>
      </Router>
      );
  }
}

class Navbar extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return(
      <div>
      <h1>Navbar</h1>
      </div>
      );
  }
}

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      companyName: "",
      companyEmail: "",
      password: "",
      confirm_psw: "",
      phone_no: "",
      country: "",
      province: "",
      postal: ""
    }
    
 this.changeCompanyName = this.changeCompanyName.bind(this);
this.changeCompanyEmail = this.changeCompanyEmail.bind(this);
this.changePassword = this.changePassword.bind(this);
this.changeConfirmPsw = this.changeConfirmPsw.bind(this);
this.changePhone = this.changePhone.bind(this);
this.changeCountry = this.changeCountry.bind(this);
this.changeProvince = this.changeProvince.bind(this);
this.changePostalCode = this.changePostalCode.bind(this);
this.onClickHandler = this.onClickHandler.bind(this);
}

changeCompanyName(event){
  this.setState({
    companyName: event.target.value
  })
}
changeCompanyEmail(event){
  this.setState({
    companyEmail: event.target.value
  })
}
changePassword(event){
  this.setState({
    password: event.target.value
  })
}
changeConfirmPsw(event){
  this.setState({
    confirm_psw: event.target.value
  })
}
changePhone(event){
  this.setState({
    phone_no: event.target.value
  })
}
changeCountry(event){
  this.setState({
    country: event.target.value
  })
}
changeProvince(event){
  this.setState({
    province: event.target.value
  })
}
changePostalCode(event){
  this.setState({
    postal: event.target.value
  })
}
onClickHandler(event){
  event.preventDefault();
  var userDetails = {
    companyName: this.state.companyName,
    companyEmail: this.state.companyEmail,
    password: this.state.password,
    phone_no: this.state.phone_no,
    country: this.state.country,
    province: this.state.province,
    postal: this.state.postal
  }
 Axios.post("http://localhost:3001/app/register", userDetails);
 
 this.setState({
    companyName: "",
    companyEmail: "",
    password: "",
    phone_no: "",
    country: "",
    province: "",
    postal: ""
   });
   window.location.assign("/");
}
  render(){
    return(
       <React.Fragment>
  <div className="container mt-5">
  <h1 className="text-center">
  Tell us a little about your company.</h1>
  <p className="text-center">Sign up to start selling or buying right away.</p>
  
  <form method="post" className="">
  <input type="text" className="form-control mt-2" onChange={this.changeCompanyName} value={this.companyName} placeholder="Your company's name"/>
  <input type="email" className="form-control mt-2" onChange={this.changeCompanyEmail} value={this.companyEmail} placeholder="Your company's email"/>
  <input type="password" className="form-control mt-2" onChange={this.changePassword} value={this.password} placeholder="Password"/>
  <input type="password" className="form-control mt-2" onChange={this.changeConfirmPsw} value={this.confirm_psw} placeholder="Confirm your password"/>
  <input type="tel" className="form-control mt-2" onChange={this.changePhone} value={this.phone_no} placeholder="Contact number"/>
 
  <select className="form-control mt-2 d-block form-select"onChange={this.changeCountry} value={this.country}>
  <option>
   Select your country
  </option>
  
  <option>
   Nigeria
  </option>
  
  <option>
   United States
  </option>
  
  </select>
  <input type="text" className="form-control mt-2" onChange={this.changeProvince} value={this.province} placeholder="State or Province"/>
  
  <input type="number" className="form-control mt-2" onChange={this.changePostalCode} value={this.province} placeholder="Postal or Zip code"/>
<input type="submit" className="form-control mt-2 btn-danger" onClick={this.onClickHandler} value="Sign up" />
  </form>
  </div>
       </React.Fragment>
      );
  }
}
class Login extends React.Component{
  render(){
    return(
      <React.Fragment>
  <div className="container">
  <h1>We are glad you are here.</h1>
  <p className="text-center">Sign in to get access to your account.</p>
  <input type="email" className="form-control mt-2" placeholder="Type your email here" value="" onChange=""  />
  <input type="password" className="form-control mt-2" placeholder="Type your password here" value="" onChange=""  />
  <input type="submit" className="form-control mt-2 btn-danger" value="Log in" onChange=""  />
    </div>
      </React.Fragment>
      );
  }
}
class Home extends React.Component{
  render(){
    return(
    <React.Fragment>
    <div className="container">
    <h1>Home</h1>
    </div>
      </React.Fragment>
      );
  }
}
ReactDOM.render( <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
