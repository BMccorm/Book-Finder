import React, { useState, useEffect } from 'react'
import axios from 'axios';


// API.saveBook(searchItem).then(function (obj) {
//     setBooks(obj.data.items);


function SearchResults(props) {
    console.log(props.books)
    const [searchResults, setSearchResults] = useState([]);

    // console.log(obj.data.items[0].volumeInfo.title);
    // console.log(obj.data.items[0].volumeInfo.authors);
    // console.log(obj.data.items[0].volumeInfo.description);
    // console.log(obj.data.items[0].volumeInfo.imageLinks.smallThumbnail);
    // console.log(obj.data.items[0].id
    useEffect(() => {
        setSearchResults(props.books)
    }, [props.books])

    const addBook = (id) => {
        axios.post('/api/books', searchResults[id]);
        console.log(searchResults[id])
    }

    return (
        <div >
            {props.books.length ? (
                <div>
                    {props.books.map((currentbook, index) => {
                        return (
                            <div key={currentbook.volumeInfo.imageLinks.smallThumbnail}>
                                <div className="card col-9 mx-auto mt-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title">{currentbook.volumeInfo.title}</h5>
                                            <div className="d-flex justify-content-end">
                                                <a className="btn btn-light" href={currentbook.volumeInfo.previewLink} role="button" target="_blank" rel="noopener noreferrer">View</a>
                                                <button type="button" className="btn btn-success ml-1" id={currentbook.id} onClick={() => addBook(index)}>Save</button></div>

                                        </div>
                                        <h6 className="card-subtitle mb-2 text-muted">{currentbook.volumeInfo.authors}</h6>
                                        <div className="d-flex">
                                            <div className="mt-3 mr-3">
                                                <img src={currentbook.volumeInfo.imageLinks.smallThumbnail} alt="book_logo" ></img> </div>
                                            <p className="card-text ml-2">{currentbook.volumeInfo.description}</p>
                                        </div>
                                    </div>
                                </div >

                            </div>
                        );
                    })}
                </div>
            ) : (
                    <h3 className="col-9 mx-auto mt-3">No Results to Display</h3>
                )}
        </div>
    );
}

export default SearchResults;