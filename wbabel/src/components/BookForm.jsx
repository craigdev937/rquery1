import React from "react";
import Loader from "react-loader-spinner";
import { useForm } from "react-hook-form";

export const BookForm = 
({defaultValues, onFormSubmit, isLoading}) => {
    const { register, handleSubmit } = 
        useForm({ defaultValues });
    const onSubmit = (data) => {
        onFormSubmit(data);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <aside>
                    <label htmlFor="title">Title</label>
                    <input {...register("title")} />
                </aside>
                <aside>
                    <label htmlFor="author">Author</label>
                    <input {...register("author")} />
                </aside>
                <button>
                    { isLoading ? 
                        <Loader 
                            type="ThreeDots" 
                            color="#fff" 
                            height={10} 
                        /> : "Submit" } 
                </button>
            </form>
        </React.Fragment>
    );
};





