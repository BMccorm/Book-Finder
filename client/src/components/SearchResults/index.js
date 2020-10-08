import React from "react";
// import "./style.css";
// import searchItem from "../Search/index"
// import { image } from "../../../../models";

function SearchResults(props) {

    console.log(props.books)

    // console.log(obj.data.items[0].volumeInfo.title);
    // console.log(obj.data.items[0].volumeInfo.authors);
    // console.log(obj.data.items[0].volumeInfo.description);
    // console.log(obj.data.items[0].volumeInfo.imageLinks.smallThumbnail);
    // console.log(obj.data.items[0].id

    return (
        <div >
            {props.books.length ? (
                <div>
                    {props.books.map(currentbook => {
                        return (
                            <div key={currentbook.volumeInfo.imageLinks.smallThumbnail}>
                                <div className="card col-9 mx-auto mt-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title">{currentbook.volumeInfo.title}</h5>
                                            <div className="d-flex justify-content-end">
                                                <a class="btn btn-light" href={currentbook.volumeInfo.previewLink} role="button" target="_blank" rel="noopener noreferrer">View</a>
                                                <button type="button" class="btn btn-success ml-1">Save</button></div>
                                        </div>
                                        <h6 className="card-subtitle mb-2 text-muted">{currentbook.volumeInfo.authors}</h6>
                                        <div className="d-flex">
                                            <div className="d-flex align-middle">
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