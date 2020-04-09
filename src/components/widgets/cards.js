import React from 'react';

import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faBed, faLaughBeam, faSadTear, } from '@fortawesome/free-solid-svg-icons'

const Cards = (props) => {

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4" >

            <div className="max-w-lg rounded overflow-hidden shadow-lg p-6">
                <h4 className="float-right text-gray-700 font-medium text-xl">
                    <NumberFormat value={props.data.confirmed} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value}</span>} />
                </h4>
                <h3 className="text-left">
                    <FontAwesomeIcon icon={faClipboard} size="2x" className="text-yellow-500" />
                    <span className="block pt-1 text-gray-600 font-medium">Confirmed</span>
                </h3>
            </div>
            <div className="max-w-lg rounded overflow-hidden shadow-lg p-6">
                <h4 className="float-right text-gray-700 font-medium text-xl">
                    <NumberFormat value={props.data.critical} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value}</span>} />
                </h4>
                <h3 className="text-left">
                    <FontAwesomeIcon icon={faBed} size="2x" className="text-orange-300" />
                    <span className="block pt-1 text-gray-600 font-medium">Critical</span>
                </h3>
            </div>
            <div className="max-w-lg rounded overflow-hidden shadow-lg p-6">
                <h4 className="float-right text-gray-700 font-medium text-xl">
                    <NumberFormat value={props.data.deaths} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value}</span>} />
                </h4>
                <h3 className="text-left">
                    <FontAwesomeIcon icon={faSadTear} size="2x" className="text-red-300" />
                    <span className="block pt-1 text-gray-600 font-medium">Deaths</span>
                </h3>
            </div>
            <div className="max-w-lg rounded overflow-hidden shadow-lg p-6">
                <h4 className="float-right text-gray-700 font-medium text-xl">
                    <NumberFormat value={props.data.recovered} displayType={'text'} thousandSeparator={true} renderText={value => <span>{value}</span>} />
                </h4>
                <h3 className="text-left">
                    <FontAwesomeIcon icon={faLaughBeam} size="2x" className="text-green-300" />
                    <span className="block pt-1 text-gray-600 font-medium">Recovered</span>
                </h3>
            </div>
        </div >
    )
}

export default Cards