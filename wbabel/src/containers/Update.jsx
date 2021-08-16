import React from "react";
import Loader from "react-loader-spinner";
import { BookForm } from "../components/BookForm";
import { useQuery, useMutation } from "react-query";
import { useParams, useHistory } from "react-router-dom";
import { fetchOneBook, updateBook } from "../global/FetchAPI";

export const Update = () => {
    const { id } = useParams();
    const history = useHistory();
    const { error, isError, isLoading, data } = 
        useQuery(["book", {id}], fetchOneBook);
    const { mutateAsync, isLoading: isMutating } = 
        useMutation(updateBook);

    const handleSubmit = async (data) => {
        await mutateAsync({...data, id});
        history.push("/");
    };

    if (isLoading) {
        <Loader 
            type="ThreeDots" 
            color="#ccc" 
            height={30} 
        />
    };

    if (isError) {
        <aside>
            Error: {error.message}
        </aside>
    };

    return (
        <React.Fragment>
            <h1>Update</h1>
            <BookForm 
                isLoading={isMutating}
                defaultValues={data}
                onFormSubmit={handleSubmit}
            />
        </React.Fragment>
    );
};





