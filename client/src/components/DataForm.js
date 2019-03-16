import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';

export default class DataForm extends Component {
    state = {
        desgn: [],
        len: '',
        data: []
    }

    componentDidMount() {
        let data = reactLocalStorage.get('url');
        console.log(data);

        axios.get('/data/' + data)
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

    render() {

        return (
            <div className="uk-container">
                <h1>Add Data To Your Api </h1>

                {
                    this.state.desgn.map((name, index) => {
                        return <Input type='text' key={index} placeholder={name.name} className="uk-margin" onChange={(e) => { this.handleData(e, index) }} />
                    })
                }
                <Button type="primary" className="uk-margin" onClick={this.handleClk.bind(this)}>Add Data To Api</Button>

            </div>
        );
    }
}