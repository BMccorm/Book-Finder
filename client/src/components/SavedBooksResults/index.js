import React from 'react'
// import API from "../../utils/API"


function SavedBooksResults(props) {
    console.log(props.books)
    // const [SavedBooksResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     setSearchResults(props.books)
    // }, [props.books])

    // API.getBook(SavedBooksResults).then(function (obj) {
    //     setSearchResults(obj.data.items);
    // })

    // const getBook = (id) => {
    //     API.getBook(SavedBooksResults[id])
    // }

    return (
        <div >
            {props.books ? (
                <div>
                    {props.books.map((currentbook, index) => {
                        return (
                            <div key={currentbook.id} className="card col-9 mx-auto mt-3"> <div className="card-body">
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
