import React, { Component } from 'react';
import axios from 'axios'

import Suggestions from './suggestion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            countries: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.handleInputChange()
    }

    handleCountries = () => {

        this.setState({
            loading: true
        })

        axios({
            "method": "GET",
            "url": "https://covid-19-data.p.rapidapi.com/country",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "06fa5ec16fmsh36268afb31e25bep11ab4ejsn45c4e73e280f"
            }, "params": {
                "format": "json",
                "name": this.state.query
            }
        }).then((response) => {
            this.setState({
                loading: false,
                countries: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.handleCountries()
                }
            }
        })
    }

    render() {
        return (
            <form className="w-full max-w-xs relative">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search Country"
                        aria-label="Country Name"
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    <button className="flex-shrink-0 bg-transparent text-sm text-teal-500 py-1 px-2" type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <Suggestions results={this.state.countries} loading={this.state.loading} />
            </form>
        )
    }
}

export default Search