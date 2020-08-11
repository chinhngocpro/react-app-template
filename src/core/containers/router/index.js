import React, {Suspense} from "react";
import ErrorBoundary from "../ErrorBoundary";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { Redirect } from "react-router";

export default function AppRoute() {

    return (
        <ErrorBoundary>
            <Suspense fallback={null}>
                <Router>
                    <Switch>

                        <Route>
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </Router>
            </Suspense>
        </ErrorBoundary>
    )
}