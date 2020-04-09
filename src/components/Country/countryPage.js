import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Cards from '../widgets/cards';


const CountryPage = (props) => {

    const country = props.location.state.country

    return (
        <div className="container mx-auto p-5" >

            <ul className="flex text-gray-400 text-sm pb-3">
                <li className="py-2 px-1">
                    <Link to="/">Home</Link>&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <li className="py-2 px-1 text-teal-700 font-bold">
                    {country.country}
                </li>
            </ul>

            <Cards data={country} />
        </div>
    )
}

export default CountryPage