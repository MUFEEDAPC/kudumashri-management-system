import React from 'react'
import "./Login.scss"; 
import logo1 from "../Assests/Images/logo.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
        <div class="container1-fluid">
		<div class="row main-content bg-success text-center">
			<div class="col-md-4 text-center company__info">
				<span class="company__logo"><img style={{height:"150px",width:"150px"}}src={logo1} alt=""></img></span>
				<h4 class="company_title">Kudumbashree</h4>
			</div>
			<div class="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div class="container-fluid">
					<div class="row">
						<h2>Log In</h2>
					</div>
					<div class="row">
						<form control="" class="form-group">
							<div class="row">
								<input type="text" name="username" id="username" class="form__input" placeholder="Username"/>
							</div>
							<div class="row">
								<span class="fa fa-lock"></span> 
								<input type="password" name="password" id="password" class="form__input" placeholder="Password"/>
							</div>
							<div class="row">
								<input type="checkbox" name="remember_me" id="remember_me" class=""/>
								<label for="remember_me">Remember Me!</label>
							</div>
							<div class="row">
								<Link to="/Dashboard">
								<input type="submit" value="Submit"  class="btn1"/>
								</Link>
							</div>
						</form>
					</div>
					<div class="row">
						<p>Don't have an account? <a href="#">Register Here</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Footer --> */}


    </div>
  )
}

export default Login