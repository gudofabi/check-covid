import React from 'react';
import { Switch, Route } from 'react-router-dom'

// component
import Layout from './hoc/layout'
import HomePage from './components/Home/homePage'
import CountryPage from './components/Country/countryPage'

const Routes = () => {

    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/:code" exact component={CountryPage} />
            </Switch>
        </Layout>
    )

}

export default Routes