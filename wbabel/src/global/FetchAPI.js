const URL = "http://localhost:9000/api";

export const createBook = async ({...data}) => {
    const res = await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error("Something went wrong!");
    };
    return res.json();
};

export const getAllBooks = async () => {
    const res = await fetch(URL);
    if (!res.ok) {
        throw new Error("Something went wrong!");
    };
    return res.json();
};

export const fetchOneBook = async ({ queryKey }) => {
    const [_key, {id}] = queryKey;
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
        throw new Error("Something went wrong!");
    };
    return res.json();
};

export const updateBook = async ({id, ...data}) => {
    const res = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error("Something went wrong!");
    };
    return res.json();
};

export const deleteBook = async (id) => {
    const res = await fetch(`${URL}/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) {
        throw new Error("Something went wrong!");
    };
    return res.json();
};





