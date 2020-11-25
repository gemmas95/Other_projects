import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation,
} from "../queries/queries";

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);

  const [books, setBooks] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  function displayAuthors() {
    return data.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }

  const handleChange = ({ target }) => {
    setBooks({
      ...books,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, genre, authorId } = books;
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
      // This allows us to refetch the query
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops,.... something went wrong!</p>;
  return (
    <form id="add_book" autoComplete="off" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Genre</label>
        <input type="text" name="genre" onChange={handleChange} />
      </div>

      <div className="field">
        <label>Author</label>
        <select name="authorId" onChange={handleChange}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}
export default AddBook;
