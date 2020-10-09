import React, { useState, useEffect } from 'react'
import SavedBooksResults from "../SavedBooksResults"
import API from "../../utils/API"

function SavedBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        API.getBooks().then(function (obj) {
            setBooks(obj.data);
            // console.log(books)
        })

    })

    return (
        <div>
            <h4 className="col-9 mx-auto">Saved Books:</h4>
            <SavedBooksResults books={books} />
        </div>

    );
}

export default SavedBooks;

