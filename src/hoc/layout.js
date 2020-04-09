import React, { Component } from 'react';

//widgets
import Nav from './../components/widgets/nav'
import Footer from './../components/widgets/footer'



class Layout extends Component {


    render() {
        return (
            <div className="main-container">

                <Nav />

                {/* Main Body */}
                {this.props.children}
                {/* Main Body */}

                <Footer />

            </div >
        )
    }
}

export default Layout