import React, { Component } from 'react';
import { Button, Input, Select } from 'antd';
import { reactLocalStorage } from 'reactjs-localstorage';
import { message } from 'antd';
import DataForm from './DataForm';
import { Link } from 'react-router-dom';

import axios from 'axios';
const Option = Select.Option;

export default class AddForm extends Component {

    state = {
        sch: [],
        schType: [],
        isadded: false
    }
    handleSch() {
        this.setState({ sch: [...this.state.sch, ""] })
        this.setState({ schType: [...this.state.schType, ""] })
    }
    handleChange(e, index) {
        this.state.sch[index] = e.target.value

        this.setState({ sch: this.state.sch });
    }

    handleRemove(index) {
        this.state.sch.splice(index, 1);
        this.state.schType.splice(index, 1);
        console.log(this.state.sch, this.state.schType);
        this.setState({ sch: this.state.sch })
        this.setState({ schType: this.state.schType })
    }
    handleChangeabc(value, index) {
        // console.log(`selected ${value}`);
        this.state.schType[index] = value
        //  console.log(this.state.schType);
        this.setState({ schType: this.state.schType });

    }

    handleSubmit() {
        if (this.state.sch.length > 0) {
            this.setState({
                isadded: true
            })
            reactLocalStorage.set('class', 'CSE A');
            axios.post('/data', {
                username: this.state.sch,
                password: this.state.schType,
                url: reactLocalStorage.get('url')
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            message.error('No Fields Added !');
        }

    }

    render() {
        let uploadschbtn;
        if (this.state.sch.length > 0) {
            uploadschbtn = <Button type="primary" icon="upload" className="login100-form-btn uk-margin-left" style={{ background: '#3498db' }} onClick={(e) => { this.handleSubmit(e) }}>Upload Schema</Button>

        }
        else {
            uploadschbtn = <span></span>
        }
        if (!this.state.isadded) {
            return (
                <div>
                    <Link to="/">
                        <ion-icon name="arrow-round-back" className="uk-align-left" style={{ position: 'fixed', fontSize: '25px', top: '30px', left: '40px' }}></ion-icon>
                    </Link>
                    <div className="limiter">
                        <div className="container-login100">
                            <div className="wrap-login100 p-t-50 p-b-90" style={{ width: '800px' }}>
                                <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSubmit.bind(this)}>
                                    <span className="login100-form-title p-b-51">
                                        <ion-icon name="cloud-circle" className="ic-sz"></ion-icon>    Setup Database Schema
                </span>

                                    {
                                        this.state.sch.map((sc, index) => {
                                            return (

                                                <div key={index} style={{ marginBottom: '20px' }}>
                                                    <div className="uk-child-width-expand@s uk-padding-remove" uk-grid="true">
                                                        <div>
                                                            <Input placeholder="Field Name" type="text" className="input100" value={sc} onChange={(e) => this.handleChange(e, index)} />
                                                        </div>
                                                        <div>
                                                            <Select
                                                                defaultValue="None"
                                                                style={{ height: '62px', display: 'block', width: '100%' }}
                                                                className="input100"
                                                                placeholder="Select a person"
                                                                optionFilterProp="children"
                                                                onChange={(e) => { this.handleChangeabc(e, index) }}

                                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                            >
                                                                <Option value="String">String</Option>
                                                                <Option value="Number">Number</Option>

                                                            </Select>
                                                        </div>
                                                        <div>
                                                            <Button icon="minus-circle" className="login100-form-btn" style={{ background: '#e74c3c', width: 200 }} onClick={(e) => { this.handleRemove(index) }}>Delete</Button>

                                                        </div>
                                                    </div>




                                                </div>
                                            )
                                        })
                                    }


                                    {/* <div className="container-login100-form-btn m-t-17">
                                        <Button className="login100-form-btn" style={{ border: 'none' }} onClick={this.handleSubmit}>
                                            Next
    </Button>

                                    </div> */}

                                    <div style={{ display: 'flex', margin: '0 auto' }}>

                                        <Button type="primary" icon="plus-circle" className="login100-form-btn" style={{ background: '#2ecc71' }} onClick={(e) => { this.handleSch(e) }}>Add Field</Button>

                                        {uploadschbtn}
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
        }
        else {
            return (
                <DataForm />
            )
        }
    }
}
