import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { List } from "../containers/List";
import { Create } from "../containers/Create";
import { Update } from "../containers/Update";

export const Routes = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={List} />
                <Route path="/create" component={Create} />
                <Route path="/update/:id" component={Update} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);





