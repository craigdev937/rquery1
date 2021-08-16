import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllBooks } from "../global/FetchAPI";
import { Item } from "./Item";

export const List = () => {
    const { error, isLoading, data } = 
        useQuery("books", getAllBooks);

    if (isLoading) return <Loader type="ThreeDots" color="#fff" />
    if (error) return <span>Error: {`${error}`}</span>

    return (
        <React.Fragment>
            {data.map(({id, title, author}) => (
                <Item 
                    key={id}
                    id={id}
                    author={author}
                    title={title}
                />
            ))}
        </React.Fragment>
    );
};





