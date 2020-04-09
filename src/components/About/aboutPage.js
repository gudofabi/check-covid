import React from 'react';
import app from './../../../package.json'


const AboutPage = () => {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-center text-gray-500 text-xl font-bold">CheckCovid v{app.version}</h1>
        </div>
    )
}

export default AboutPage