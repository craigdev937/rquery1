import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { List } from "../containers/List";
import { Create } from "../containers/Create";
import { Update } from "../containers/Update";

export const Routes = () => (
    <React.Fragment>
        <Navbar />
        <Switch>
            <Route path="/" exact component={List} />
            <Route path="/create" component={Create} />
            <Route path="/update" component={Update} />
        </Switch>
    </React.Fragment>
);





