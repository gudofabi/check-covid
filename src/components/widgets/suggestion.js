import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = (props) => {

    const options = props.results.map(item => (
        <li key={item.country} >
            <Link
                to={{
                    pathname: `/country/${item.country}`,
                    state: {
                        country: item
                    }
                }}
                className="p-3 w-full block text-sm text-gray-500 font-medium">
                {item.country}
            </Link>
        </li>
    ))

    // return options.length > 0
    //     ? <ul className="absolute w-full bg-white shadow-lg">{options}</ul>
    //     : <ul className="absolute w-full bg-white shadow-lg"><p className="p-3 w-full block text-sm text-gray-500 font-medium text-center">No Results!</p></ul>

    return props.loading
        ? <ul className="absolute w-full bg-white shadow-lg"><li className="p-3 w-full block text-sm text-gray-500 font-medium">Searching...</li></ul>
        : <ul className="absolute w-full bg-white shadow-lg">{options}</ul>

    // if (props.loading) {
    //     return <ul className="absolute w-full bg-white shadow-lg"><li className="p-3 w-full block text-sm text-gray-500 font-medium">Searching...</li></ul>
    // } else if (options.length > 0) {
    //     return <ul className="absolute w-full bg-white shadow-lg">{options}</ul>
    // } else {
    //     return <ul className="absolute w-full bg-white shadow-lg"><li className="p-3 w-full block text-sm text-gray-500 font-medium">Not Found</li></ul>
    // }
}

export default Suggestions