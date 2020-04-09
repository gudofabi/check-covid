import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPumpMedical, } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <nav className=" flex-wrap bg-teal-700 p-4">
            <div className="flex flex items-center justify-between container mx-auto">

                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <FontAwesomeIcon icon={faPumpMedical} size="2x" className="pr-1" />
                    <span className="font-semibold text-xl tracking-tight">CheckCovid</span>
                </div>
                <div className="block">
                    <a href="https://github.com/katanga123/check-covid" rel='noreferrer noopener' target={'_blank'} className="text-white">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav