import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "@material-ui/core";
import reportWebVitals from './reportWebVitals';
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
  render(){
    return(
       <React.Fragment>
  <div className="container mt-5">
  <h1 className="text-center">
  Tell us a little about your company.</h1>
  <p className="text-center">Sign up to start selling or buying right away.</p>
  
  <form method="post" className="">
  <input type="text" className="form-control mt-2" onClick="" value="" placeholder="Your company's name"/>
  <input type="email" className="form-control mt-2" onClick="" value="" placeholder="Your company's email"/>
  <input type="password" className="form-control mt-2" onClick="" value="" placeholder="Password"/>
  <input type="password" className="form-control mt-2" onClick="" value="" placeholder="Confirm your password"/>
  <input type="tel" className="form-control mt-2" onClick="" value="" placeholder="Contact number"/>
 
  <select className="form-control mt-2 d-block form-select">
  <option>
   Select your country
  </option>
  </select>
  <input type="text" className="form-control mt-2" onClick="" value="" placeholder="State or Province"/>
  
  <input type="number" className="form-control mt-2" onClick="" value="" placeholder="Postal or Zip code"/>
  <Button color="secondary" variant="contained" className="form-control mb-5 mt-2"> 
  Sign up
  </Button>
  
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
  <h1>Login</h1>
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
