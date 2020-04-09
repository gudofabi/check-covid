import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container mx-auto text-center pt-12 pb-6">
            <ul className="flex justify-center text-gray-400 text-sm">
                <li className="py-2 px-1">
                    <Link to="/">Home</Link>
                            &nbsp;&nbsp;|
                        </li>
                <li className="py-2 px-1">
                    <Link to="/about">About</Link>
                            &nbsp;&nbsp;|
                        </li>
                <li className="py-2 px-1">
                    <a href="https://github.com/katanga123/check-covid" rel='noreferrer noopener' target="_blank">Repository</a>
                </li>
            </ul>
            <p className="font-regular text-gray-400 pt-2 text-sm">gudofabi &copy; 2020</p>
        </div>
    )
}

export default Footer