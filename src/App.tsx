/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PageLayout from 'components/foundations/PageLayout/PageLayout'
import Home from 'pages/Home'
import Login from 'pages/Login'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <PageLayout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="*">
            <span>Page not found</span>
          </Route>
        </Switch>
      </Router>
    </PageLayout>
  )
}
