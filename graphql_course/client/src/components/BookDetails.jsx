import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  function displayBookDetails() {
    if (data.book) {
      const { book } = data;
      console.log("this is book -----", book);

      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other_books">
            {book.author.books.map((book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops,.... something went wrong!</p>;
  if (data) {
    return <div id="book_details">{displayBookDetails()}</div>;
  }
}
export default BookDetails;
