
import SearchResults from "../SearchResults/index";
import API from "../../utils/API";
import React, { useState } from "react";



function SearchBooks() {
    // event.preventDefault();
    const [books, setBooks] = useState([])
    const handleOnInputChange = (event) => {

        const searchItem = document.getElementById("searchInput").value;
        // console.log(searchItem)

        API.getTitle(searchItem).then(function (obj) {
            setBooks(obj.data.items);
        })
    }

    return (
        <div>
            <form className="form-group d-flex mx-5 mt-2 justify-content-center">

                <input type="text"
                    // value={this.state.search}
                    className="form-control col-6"
                    placeholder="Book Title"
                    id="searchInput"
                />
                <button type="button" className="btn btn-outline-primary ml-3" onClick={handleOnInputChange}>Search</button>
            </form>
            <h4 className="col-9 mx-auto mt-3">Results:</h4>
            <SearchResults books={books} />
        </div>

    );
}

export default SearchBooks;


