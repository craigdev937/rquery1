import React from "react";
import "./App.css";
import { Routes } from "../pages/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const QClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={QClient}>
            <React.Fragment>
                <Routes />
                <ReactQueryDevtools initialIsOpen={false} />
            </React.Fragment>
        </QueryClientProvider>
    );
};




