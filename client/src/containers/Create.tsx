import React from "react";
import { BookForm } from "./BookForm";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { createBook } from "../global/FetchAPI";
import { IBook } from "../models/IBook";

export const Create = (): JSX.Element => {
    const history = useHistory();
    const { mutateAsync, isLoading } = useMutation(createBook);

    const handleSubmit = async (data: IBook) => {
        await mutateAsync({...data});
        history.push("/");
    };

    return (
        <React.Fragment>
            <h1>Create a new Book</h1>
            <BookForm 
                onFormSubmit={handleSubmit} 
                isLoading={isLoading} 
            />
        </React.Fragment>
    );
};






