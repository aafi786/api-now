import React, { Component } from 'react'
import axios from "axios"
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
export default class Dashboard extends Component {
    state = {
        all: []
    }
    componentDidMount() {


        axios.get('/dashboard')
            .then(res => {
                console.log(res.data);
                let ds = [...this.state.all];
                for (var i = 0; i < res.data.length; i++) {
                    ds.push(res.data[i])
                }
                this.setState({
                    all: ds
                })

            })

            .catch(err => console.log(err));

    }
    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-50 p-b-90" style={{ width: '60%' }}>
                            <form className="login100-form validate-form flex-sb flex-w">
                                <span className="login100-form-title p-b-51">
                                    <ion-icon name="cloud-circle" className="ic-sz"></ion-icon>   APINOW
                </span>


                                {/* <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                                <input className="input100" type="text" name="username" placeholder="Username" />
                                <span className="focus-input100"></span>
                            </div> */}
                                {/* <h1 style={{ fontSize: '18px', lineHeight: '0px', marginBottom: '20px' }}>Create New API</h1> */}


                                {/* <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Password" />
                                <span className="focus-input100"></span>
                            </div> */}



                                <div className="container-login100-form-btn m-t-17">
                                    <Link to="/add" className="login100-form-btn">
                                        Create NEW API
                    </Link>
                                </div>

                            </form>
                            <br />
                            <div className=" uk-child-width-1-3@m" uk-grid="true">
                                {
                                    this.state.all.map((name, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="uk-card uk-card-default uk-width-1-1@m">

                                                    <div className="uk-card-body">
                                                        <p>https://www.apinow.com/{name.url}</p>
                                                    </div>
                                                    <div class="uk-card-footer uk-text-center">
                                                        <Link to="" className="uk-button uk-button-text">View API</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
