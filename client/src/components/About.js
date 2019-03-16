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
import Ankush from '../img/ankush.jpg';
import Naughty from '../img/naughty.jpeg';

export default class About extends Component {

    render() {
        return (
            <div>
                <Link to="/">
                    <ion-icon name="arrow-round-back" className="uk-align-left" style={{ position: 'fixed', fontSize: '25px', top: '30px', left: '40px' }}></ion-icon>
                </Link>

                <div className="limiter">

                    <div className="container-login100">
                        <div className="wrap-login100 p-t-50 p-b-90" style={{ width: '600px' }}>
                            <form className="login100-form validate-form flex-sb flex-w">
                                <span className="login100-form-title p-b-51">
                                    <ion-icon name="cloud-circle" className="ic-sz"></ion-icon>    ApiNow
					</span>



                                <h2 style={{ lineHeight: '53px', marginBottom: '20px' }} className="uk-align-center">What is APINOW ?</h2>

                                <p>
                                    ApiNow is a web service which allows you to make your custom API's for your application
                                    and you can easily integrate API in your application.
                                </p>
                                <h2 style={{ lineHeight: '53px', marginBottom: '20px' }} className="uk-align-center">Developers</h2>





                            </form>
                            <div className="uk-child-width-expand@s " uk-grid="true">
                                <div>
                                    <div className="uk-card uk-card-default uk-width-1-1@m">
                                        <div className="uk-card-header" style={{ border: 'none' }}>
                                            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                                <div className="uk-width-auto">
                                                    <img className="uk-border-circle" width="100" height="100" src={Ankush} />
                                                </div>
                                                <div className="uk-width-expand">
                                                    <p className="uk-text-meta uk-margin-remove-top" style={{ fontSize: '13px' }}>Developed By </p>
                                                    <h3 className="uk-card-title uk-margin-remove-bottom" style={{ fontSize: '20px' }}>Ankush Kumar</h3>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-default uk-width-1-1@m">
                                        <div className="uk-card-header" style={{ border: 'none' }}>
                                            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                                                <div className="uk-width-auto">
                                                    <img className="uk-border-circle" width="100" height="100" src={Naughty} />
                                                </div>
                                                <div className="uk-width-expand">
                                                    <p className="uk-text-meta uk-margin-remove-top" style={{ fontSize: '13px' }}>Idea By </p>
                                                    <h3 className="uk-card-title uk-margin-remove-bottom" style={{ fontSize: '20px' }}>Himanshu Nautiyal</h3>

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
