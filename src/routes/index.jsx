import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from '../components/Nav'
import Main from '../components/Main'
import Forecast from '../components/Forecast'
import Details from '../components/Details'

import styles from './routes.scss'

const Routes = () => {
  return (
    <Router>
        <div className={styles.root}>
          <Nav />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details/:city' component={Details} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
  )
}

export default Routes
