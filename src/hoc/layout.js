import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Layout extends Component {


    render() {
        return (
            <div className="main-container">
                <nav className="flex items-center justify-between flex-wrap bg-teal-700 p-4">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                        <span className="font-semibold text-xl tracking-tight">CheckCovid</span>
                    </div>
                    <div className="block">
                        <a href="https://github.com/katanga123/check-covid" target={'_blank'} className="text-white">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                </nav>

                {/* Main Body */}
                {this.props.children}
                {/* Main Body */}

                <div className="container mx-auto text-center pt-12 pb-6">
                    <p className="text-gray-400 text-md text-extrabold">gudofabi &copy; 2020</p>
                </div>
            </div >
        )
    }
}

export default Layout