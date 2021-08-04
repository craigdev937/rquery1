import { RequestHandler } from "express";
import { pool } from "../config/database";

export const CreateBook: RequestHandler =
async (req, res, next) => {
    try {
        const { title, author } = req.body;
        const createQuery = `INSERT INTO books
        (title, author)
        VALUES ($1, $2) RETURNING *`;
        const values = [title, author];
        const newBook = await pool.query(createQuery, values);
        res.json(newBook.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetAllBooks: RequestHandler =
async (req, res, next) => {
    try {
        const getAllQuery = "SELECT * FROM books";
        const allBooks = await pool.query(getAllQuery);
        res.json(allBooks.rows);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetOneBook: RequestHandler =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const getOneQuery = `
            SELECT * FROM books 
            WHERE id = $1
        `;
        const values = [id];
        const book = await pool.query(getOneQuery, values);
        res.json(book.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const UpdateBook: RequestHandler =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, author } = req.body;
        const updateQuery = `UPDATE books 
        SET title = $1, author = $2
        WHERE id = $3 RETURNING *`;
        const values = [title, author, id];
        const updateBook = await pool.query(updateQuery, values);
        res.status(200).json(updateBook.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const DeleteBook: RequestHandler =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteQuery = `
            DELETE FROM books 
            WHERE id = $1
        `;
        const values = [id];
        const deleteBook = await pool.query(deleteQuery, values);
        res.status(200).json("The Book was Deleted!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};





