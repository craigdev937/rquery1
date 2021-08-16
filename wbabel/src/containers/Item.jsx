import React from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import { deleteBook } from "../global/FetchAPI";

export const Item = ({id, title, author}) => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(deleteBook);

    const handleClick = async () => {
        await mutateAsync(id);
        queryClient.invalidateQueries("books");
    };

    return (
        <React.Fragment>
            <main key={id}>
                <Link to={`/update/${id}`}>{title}</Link>
                <p>{author}</p>
                <button onClick={handleClick}>
                    {isLoading ? 
                        <Loader 
                            type="ThreeDots"
                            color="#fff"
                            height={10}
                        /> : "Remove"}
                </button>
            </main>            
        </React.Fragment>
    );
};





