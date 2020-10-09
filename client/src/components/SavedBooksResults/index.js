import React, { useState, useEffect } from 'react'
import API from "../../utils/API"


function SavedBooksResults(props) {
    const [savedResults, setsavedResults] = useState([]);
    useEffect(() => {
        setsavedResults(props.books)

    }, [props.books])

    const deleteBook = (id) => {
        API.deleteBook(savedResults[id]._id)
        console.log(savedResults[id]._id)
    }

    // link: bookData.volumeInfo.previewLink,
    //     image: bookData.volumeInfo.imageLinks.smallThumbnail,
    //         title: bookData.volumeInfo.title,
    //             authors: bookData.volumeInfo.authors,
    //                 description: bookData.volumeInfo.description,
    //                     thumbnail: bookData.volumeInfo.imageLinks.smallThumbnail

    return (
        <div >
            {props.books.length ? (
                <div>
                    {props.books.map((currentbook, index) => {
                        return (
                            <div key={currentbook._id} className="card col-9 mx-auto mt-3"> <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">{currentbook.title}</h5>
                                    <div className="d-flex justify-content-end">
                                        <a className="btn btn-light" href={currentbook.link} role="button" target="_blank" rel="noopener noreferrer">View</a>
                                        <button type="button" className="btn btn-danger ml-1" id={currentbook._id} onClick={() => deleteBook(index)}>Delete</button></div>
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">{currentbook.authors}</h6>
                                <div className="d-flex">
                                    <div className="mt-3 mr-3">
                                        <img src={currentbook.thumbnail} alt="book_logo" ></img> </div>
                                    <p className="card-text ml-2">{currentbook.description}</p>
                                </div>
                            </div>
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

export default SavedBooksResults;
