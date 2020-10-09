import React, { useState } from 'react'
import SavedBooksResults from "../SavedBooksResults"
import API from "../../utils/API"

function SavedBooks() {
    const [books, setBooks] = useState([])

    API.getBook(SavedBooksResults).then(function (obj) {
        setBooks(obj.data.items);
    })

    console.log(SavedBooksResults)

    // console.log(props)
    // const [SavedBooksResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     setSearchResults(props.books)
    // }, [props.books])

    // API.getBook(SavedBooksResults).then(function (obj) {
    //     setSearchResults(obj.data.items);
    // })
    return (
        <div>
            <h4 className="col-9 mx-auto">Saved Books:</h4>
            <SavedBooksResults books={books} />
        </div>

    );
}

export default SavedBooks;
