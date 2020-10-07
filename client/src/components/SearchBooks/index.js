
import SearchResults from "../SearchResults/index";
import API from "../../utils/API";
import React, { useEffect, useState } from "react";


function SearchBooks() {
    const [books, setBooks] = useState([])
    API.getTitle("Harry Potter").then(function (obj) {
        setBooks(obj.data.items);

    })
    return (
        <div>
            <form className="form-group d-flex mx-5 mt-2 justify-content-center">

                <input type="text"
                    // value={this.state.search}
                    className="form-control col-6"
                    placeholder="Search" />
            </form>
            <h4 className="col-9 mx-auto mt-3">Results:</h4>
            <SearchResults books={books} />
        </div>

    );
}

export default SearchBooks;

// <SearchResults
//     search={this.state.search}
//     employee={this.state.employee} />

// <input type="text"
//     // value={this.state.search}
//     className="form-control col-10 mr-2"
//     placeholder="Search"
//     onChange={this.handleOnInputChange} />


