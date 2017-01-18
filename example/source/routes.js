import React from "react"
import { Router, browserHistory, Route } from "react-router"
import { App } from "./app"
import { SDKS } from "./sdks"


const Routes = props => <Router history={ browserHistory }
                                key={ Math.random() }>
                          <Route path="/"
                                 component={ App }>
                            <Route path="/sdks"
                                   component={ SDKS } />
                          </Route>
                        </Router>
export default Routes