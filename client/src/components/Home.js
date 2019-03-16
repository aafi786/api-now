import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
import '../vendor/select2/select2.min.css'
import '../css/util.css';
import '../css/main.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css'

export default class Home extends Component {

    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-50 p-b-90">
                            <form className="login100-form validate-form flex-sb flex-w">
                                <span className="login100-form-title p-b-51">
                                    <ion-icon name="cloud-circle" className="ic-sz"></ion-icon>    ApiNow
					</span>


                                {/* <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                                    <input className="input100" type="text" name="username" placeholder="Username" />
                                    <span className="focus-input100"></span>
                                </div> */}
                                <h1 style={{ lineHeight: '53px', marginBottom: '20px' }}>Build Your Custom JSON API</h1>


                                {/* <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                    <input className="input100" type="password" name="pass" placeholder="Password" />
                                    <span className="focus-input100"></span>
                                </div> */}



                                <div className="container-login100-form-btn m-t-17">
                                    <Link to="/signup" className="login100-form-btn">
                                        Get Started
						</Link>
                                </div>

                            </form>
                            <div className="uk-flex">

                                <div className="uk-card uk-card-default uk-card-body uk-margin-left" style={{ background: 'transparent', boxShadow: 'none' }}>
                                    <Link to="/about" className="txt1" >
                                        What is apinow ?
							</Link>
                                </div>
                                <div className="uk-card uk-card-default uk-card-body uk-margin-left" style={{ background: 'transparent', boxShadow: 'none' }}>
                                    <Link to="/login" className="txt1">
                                        Login
							</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
