import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllBooks } from "../global/FetchAPI";
import { BookItem } from "./BookItem";

export const List = (): JSX.Element => {
    const { isLoading, error, data } = 
    useQuery("books", getAllBooks);

    if (isLoading) {
        return <Loader type="ThreeDots" color="#ccc" />
    };

    if (error) return <span>Error: {`${error}`}</span>

    return (
        <React.Fragment>
            {data?.map(({id, title, author}) => (
                <BookItem 
                    key={id} 
                    id={id} 
                    author={author} 
                    title={title} 
                />
            ))}
        </React.Fragment>
    );
};






