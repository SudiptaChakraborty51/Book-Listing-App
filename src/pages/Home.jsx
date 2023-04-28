import { useContext } from "react";
import { BookCard } from "../components/BookCard";
import { BookContext } from "../contexts/BookContext";

export const Home = () => {
  const { allBooksData, isLoading } = useContext(BookContext);

  return (
    <div>
      <h2>All Books</h2>
      {isLoading && <p>Loading Books...</p>}
      <ul>
        {allBooksData.map((book, index) => (
          <BookCard bookData={book} key={index} />
        ))}
      </ul>
    </div>
  );
};
