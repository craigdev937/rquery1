import React from "react";
import { BookForm } from "../components/BookForm";
import { useHistory } from "react-router-dom";
import { createBook } from "../global/FetchAPI";
import { useMutation } from "react-query";

export const Create = () => {
    const history = useHistory();
    const { isLoading, mutateAsync } = useMutation(createBook);

    const handleSubmit = async (data) => {
        await mutateAsync({...data});
        history.push("/");
    };

    return (
        <React.Fragment>
            <BookForm 
                onFormSubmit={handleSubmit}
                isLoading={isLoading}
            />
        </React.Fragment>
    );
};





