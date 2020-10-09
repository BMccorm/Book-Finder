import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", {
      link: bookData.volumeInfo.previewLink,
      image: bookData.volumeInfo.imageLinks.smallThumbnail,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      thumbnail: bookData.volumeInfo.imageLinks.smallThumbnail
    });
  },
  getTitle: function (title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=AIzaSyA1KdcgL8_HtATiFE3m00pUXvotEV-n1BI");

  }
};

