import React, { Component } from 'react';
import axios from 'axios'


class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            cases: []
        }
    }

    componentDidMount() {
        axios({
            "method": "GET",
            "url": "https://covid-19-data.p.rapidapi.com/totals",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "06fa5ec16fmsh36268afb31e25bep11ab4ejsn45c4e73e280f"
            }, "params": {
                "format": "json"
            }
        }).then((response) => {
            this.setState({
                cases: response.data[0]
            })
        }).catch((error) => {
            console.log(error)
        })
    }


    render() {
        return (
            <div>

                Home Page
            </div>
        )
    }
}

export default HomePage