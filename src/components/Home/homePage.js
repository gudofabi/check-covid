import React, { Component } from 'react';
import axios from 'axios'

import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClipboard, faBed, faLaughBeam, faSadTear, } from '@fortawesome/free-solid-svg-icons'


class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            cases: []
        }
    }

    componentDidMount() {
        this.handleCases()
    }

    handleCases = () => {
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
            <div className="container mx-auto p-5">

                <div className="search-container flex justify-end pt-4 pb-12">
                    <form className="w-full max-w-xs ">
                        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Country" aria-label="Full name"></input>
                            <button class="flex-shrink-0 bg-transparent text-sm text-teal-500 py-1 px-2" type="button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">

                    <div className="max-w-lg rounded overflow-hidden shadow-lg p-6">
                        <h4 className="float-right text-gray-700 font-medium text-xl">
                            <NumberFormat value={this.state.cases.confirmed} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value}</span>} />
                        </h4>
                        <h3 className="text-left">
                            <FontAwesomeIcon icon={faClipboard} size="2x" className="text-yellow-500" />
                            <span className="block pt-1 text-gray-600 font-medium">Confirmed</span>
                        </h3>
                    </div>
                    <div className="max-w-lg rounded overflow-hidden shadow-lg p-6">
                        <h4 className="float-right text-gray-700 font-medium text-xl">
                            <NumberFormat value={this.state.cases.critical} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value}</span>} />
                        </h4>
                        <h3 className="text-left">
                            <FontAwesomeIcon icon={faBed} size="2x" className="text-orange-300" />
                            <span className="block pt-1 text-gray-600 font-medium">Critical</span>
                        </h3>
                    </div>
                    <div className="max-w-lg rounded overflow-hidden shadow-lg p-6">
                        <h4 className="float-right text-gray-700 font-medium text-xl">
                            <NumberFormat value={this.state.cases.deaths} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value}</span>} />
                        </h4>
                        <h3 className="text-left">
                            <FontAwesomeIcon icon={faSadTear} size="2x" className="text-red-300" />
                            <span className="block pt-1 text-gray-600 font-medium">Deaths</span>
                        </h3>
                    </div>
                    <div className="max-w-lg rounded overflow-hidden shadow-lg p-6">
                        <h4 className="float-right text-gray-700 font-medium text-xl">
                            <NumberFormat value={this.state.cases.recovered} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value}</span>} />
                        </h4>
                        <h3 className="text-left">
                            <FontAwesomeIcon icon={faLaughBeam} size="2x" className="text-green-300" />
                            <span className="block pt-1 text-gray-600 font-medium">Recovered</span>
                        </h3>
                    </div>

                </div>
            </div>
        )
    }
}

export default HomePage