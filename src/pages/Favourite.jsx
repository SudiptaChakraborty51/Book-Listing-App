import { useContext } from "react";
import { BookCard } from "../components/BookCard";
import { BookContext } from "../contexts/BookContext";

export const Favourite = () => {
  const { allBooksData, isLoading } = useContext(BookContext);

  const favouriteBooks = allBooksData.filter(({ favourite }) => favourite);

  return (
    <div>
      <h2>Favourites</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : !favouriteBooks.length ? (
        <p>Add some books to favourites!</p>
      ) : (
        <ul>
          {favouriteBooks.map((book, index) => (
            <BookCard bookData={book} favouriteBook key={index} />
          ))}
        </ul>
      )}
    </div>
  );
};
