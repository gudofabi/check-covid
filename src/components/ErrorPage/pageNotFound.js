import React from 'react';
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="container mx-auto p-5" >

            <ul className="flex text-gray-400 text-sm pb-3">
                <li className="py-2 px-1 text-teal-700 font-bold">
                    <Link to="/">Home</Link>&nbsp;&nbsp;
                </li>
            </ul>

            <h1 className="text-center text-gray-500 text-xl font-bold">Oops, Page not Found <span className="block text-lg">404</span></h1>
        </div>
    )
}

export default PageNotFound