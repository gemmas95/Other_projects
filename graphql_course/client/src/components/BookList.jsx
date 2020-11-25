import React, { useState } from "react";
import {
  useQuery,
  // gql
} from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

// Components
import BookDetails from "./BookDetails";

/* const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`; */

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  /*   useEffect(() => {
    useQuery(getBooksQuery);
  }, [data]); */

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops,.... something went wrong!</p>;
  console.log("this is data....", data);
  return (
    <div>
      <ul id="book_list">
        {data.books.map((book) => {
          return (
            <li
              key={book.id}
              onClick={() => {
                setSelected(book.id);
              }}
            >
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}
export default BookList;
