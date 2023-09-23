import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise()

export async function getNotes() {
    const [rows] = await pool.query("select * from notes");
    return rows;
};

export async function getNote(id) {
    const [row] = await pool.query(`
    select * from notes where id = ?
    `, [id]);
    return row[0];
};

export async function createNote(title, contents) {
    const [result] = await pool.query(`
    insert into notes (title, contents)
    values (?, ?)
    `, [title, contents]);
    const id = result.insertId;

    return getNote(id);
};

// const note = await getNote(1);
// console.log(note);

// const result = await createNote("Title", "A note about description");
// console.log(result);

// const notes = await getNotes();
// console.log(notes);



