import React, { Component } from 'react'
import axios from "axios";
import { reactLocalStorage } from 'reactjs-localstorage';

export default class ApiData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: {},
            bok: 'abc'
        }
    }

    componentDidMount() {
        let datax = reactLocalStorage.get('url');
        axios.get('/data/' + datax)
            .then(res => {
                this.setState({
                    dataset: res.data.data
                })
                console.log(res.data.data);
            })
            .catch(err => console.log(err))

    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}
