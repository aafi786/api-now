import React, { Component } from 'react'
import axios from "axios";
import { Button } from 'antd';
import { Redirect, Link } from 'react-router-dom';

import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
import '../vendor/select2/select2.min.css'
import '../css/util.css';
import '../css/main.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css'

export default class SignupForm extends Component {


    state = {
        username: '',
        email: '',
        password: '',
        loading: false,
        red: false
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loading: true });
        axios.post('/signup', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                this.setState({
                    username: '',
                    email: '',
                    password: ''
                })
                console.log(res);
                if (res.data.stat === 1) {
                    this.setState({
                        red: true
                    })
                    console.log('Subbmitted yeahh!!!!!!!');

                }
            })
            .catch(err => console.log(err));
    }


    render() {
        if (this.state.red) {
            return <Redirect to='/about' />;

        }
        return (
            <div>
                <Link to="/">
                    <ion-icon name="arrow-round-back" className="uk-align-left" style={{ position: 'fixed', fontSize: '25px', top: '30px', left: '40px' }}></ion-icon>
                </Link>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-50 p-b-90">
                            <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSubmit.bind(this)}>
                                <span className="login100-form-title p-b-51">
                                    <ion-icon name="cloud-circle" className="ic-sz"></ion-icon>    ApiNow
					</span>


                                <div className="wrap-input100 validate-input m-b-16" >
                                    <input className="input100" type="text" placeholder="Username"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.username}
                                        required={true}
                                        id="username"
                                    />
                                    <span className="focus-input100"></span>
                                </div>


                                <div className="wrap-input100 validate-input m-b-16" >
                                    <input className="input100" type="email" placeholder="Email"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.email}
                                        required={true}
                                        id="email"
                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 validate-input m-b-16" >
                                    <input className="input100" type="password" placeholder="Password"

                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.password}
                                        required={true}
                                        id="password"
                                    />
                                    <span className="focus-input100"></span>
                                </div>

                                <input type="submit" value="sub" id="sign" style={{ display: 'none' }} />
                                <div className="container-login100-form-btn m-t-17">
                                    <Button className="login100-form-btn" style={{ border: 'none' }} loading={this.state.loading} onClick={this.handleSubmit.bind(this)}>
                                        Signup
        </Button>

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


            </div >
        )
    }
}
