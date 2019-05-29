import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
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


export default class DataForm extends Component {
    state = {
        desgn: [],
        len: '',
        data: []
    }

    componentDidMount() {
        let data = reactLocalStorage.get('url');
        console.log(data);

        axios.get('/form/data/' + data)
            .then(res => {
                let ds = [...this.state.desgn];
                for (var i = 0; i < res.data.design.length; i++) {
                    ds.push(res.data.design[i])
                }
                this.setState({
                    desgn: ds
                })

            })

            .catch(err => console.log(err));

    }

    handleClk() {
        let datax = reactLocalStorage.get('url');
        axios.post('/find-data/', {
            data: this.state.data,
            url: datax
        })
            .then(res => console.log(res))
            .catch(err => console.log('Error'))
    }
    handleData(e, index) {
        this.setState({ data: [...this.state.data, ""] });
        this.state.data[index] = e.target.value;
        this.setState({ data: this.state.data });
    }
    redr(e) {
        e.preventDefault();
        let datax = reactLocalStorage.get('url');
        window.location.href = "http://localhost:5000/data/" + datax;
    }

    render() {

        return (
            <div className="uk-container">
                <div>
                    <Link to="/">
                        <ion-icon name="arrow-round-back" className="uk-align-left" style={{ position: 'fixed', fontSize: '25px', top: '30px', left: '40px' }}></ion-icon>
                    </Link>
                    <div className="limiter">
                        <div className="container-login100">
                            <div className="wrap-login100 p-t-50 p-b-90">
                                <form className="login100-form validate-form flex-sb flex-w" >
                                    <span className="login100-form-title p-b-51" style={{ fontSize: '26px' }}>
                                        <ion-icon name="cloud-circle" className="ic-sz"></ion-icon>    Enter Data For Your API
					</span>

                                    {
                                        this.state.desgn.map((name, index) => {
                                            return (
                                                <div className="wrap-input100 validate-input m-b-16" key={index} >
                                                    <input className="input100" type="text" placeholder={name.name}
                                                        onChange={(e) => { this.handleData(e, index) }}
                                                        required={true}
                                                        id="username"
                                                    />
                                                    <span className="focus-input100"></span>
                                                </div>
                                            )
                                        })
                                    }

                                    <input type="submit" value="sub" id="sign" style={{ display: 'none' }} />
                                    <div className="container-login100-form-btn m-t-17">
                                        <Button className="login100-form-btn" style={{ border: 'none' }} onClick={this.handleClk.bind(this)}>
                                            Add Data
        </Button>

                                    </div>

                                </form>
                                <br />
                                <div className="uk-flex">

                                    <div className="login100-form-btn" style={{ background: '#2ecc71', boxShadow: 'none' }}>
                                        <Link to="/api" style={{ color: '#fff' }} target="_blank" className="txt1" onClick={this.redr.bind(this)} >
                                            Get API
							</Link>
                                    </div>
                                    <div className="login100-form-btn uk-margin-left" style={{ background: '#3498db', boxShadow: 'none' }}>
                                        <Link to="/login" style={{ color: '#fff' }} className="txt1">
                                            Edit API
							</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div >


                {
                    // this.state.desgn.map((name, index) => {
                    //     return <Input type='text' key={index} placeholder={name.name} className="uk-margin" onChange={(e) => { this.handleData(e, index) }} />
                    // })
                }
                {/* <Button type="primary" className="uk-margin" onClick={this.handleClk.bind(this)}>Add Data To Api</Button> */}

            </div>
        );
    }
}