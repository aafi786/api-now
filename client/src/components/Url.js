import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { reactLocalStorage } from 'reactjs-localstorage';
import AddForm from './Form';
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



export default class Url extends Component {
    constructor() {
        super();
        this.state = {
            url: '',
            check: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            url: e.target.value
        })

    }
    handleSubmit() {
        this.setState({
            check: true
        })
        reactLocalStorage.set('url', this.state.url);

    }
    render() {
        if (!this.state.check) {
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
                                        <ion-icon name="cloud-circle" className="ic-sz"></ion-icon>    SetUp Api URL
					</span>
                                    <h1 style={{ lineHeight: '0px', marginBottom: '25px', fontSize: '18px' }}>https://www.apinow.com/</h1>


                                    <div className="wrap-input100 validate-input m-b-16" >
                                        <input className="input100" type="email" placeholder="Enter Url"
                                            onChange={this.handleChange}

                                            required={true}
                                            id="text"
                                        />
                                        <span className="focus-input100"></span>
                                    </div>



                                    <input type="submit" value="sub" id="sign" style={{ display: 'none' }} />
                                    <div className="container-login100-form-btn m-t-17">
                                        <Button className="login100-form-btn" style={{ border: 'none' }} onClick={this.handleSubmit}>
                                            Next
        </Button>

                                    </div>

                                </form>


                            </div>

                        </div>

                    </div>
                    {/* <div className="uk-container uk-margin">
                        <h1>Set Your Api URL</h1>
                        <div style={{ width: '500px', margin: '0 auto' }}>
                            <Input addonBefore="http://www.xyz.com/" onChange={this.handleChange} placeholder="My Api URL" />
                            <Button type="primary" icon="upload" className="new-btn uk-margin" style={{ background: '#3498db' }} onClick={this.handleSubmit}>Upload Schema</Button>
                        </div>

                    </div> */}

                </div >

            );
        } else {
            return (

                <AddForm />
            );
        }
    }
}