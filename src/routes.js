import React from 'react';
import { Switch, Route } from 'react-router-dom'

// component
import Layout from './hoc/layout'
import HomePage from './components/Home/homePage'
import AboutPage from './components/About/aboutPage'
import CountryPage from './components/Country/countryPage'
import PageNotFound from './components/ErrorPage/pageNotFound'

const Routes = () => {

    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/country/:country" exact component={CountryPage} />
                <Route component={PageNotFound} />
            </Switch>
        </Layout>
    )

}

export default Routes