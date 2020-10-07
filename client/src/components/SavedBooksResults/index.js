import React from "react";
// import "./style.css";
// import searchItem from "../Search/index"
// import { image } from "../../../../models";

function SavedBooksResults() {
    return (
        <div className="card col-9 mx-auto mt-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">Card title</h5>
                    <div className="d-flex justify-content-end">
                        <button type="button" class="btn btn-light mr-1">View</button>
                        <button type="button" class="btn btn-danger ml-1">Delete</button></div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <div>
                    {/* <img src={image} alt="book_logo" ></img> */}
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div >

    );
}

export default SavedBooksResults;