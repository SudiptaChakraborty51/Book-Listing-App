import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";

export const BookCard = ({ bookData, favouriteBook, readBook }) => {
  const { id, title, author, image, read } = bookData;
  const { handleFavourite, handleRead, isBookInFav } = useContext(BookContext);

  return (
    <>
      <li key={id}>
        <img src={image} alt={title} className="card-img" />
        <p>{id}</p>
        <p>Title: {title}</p>
        <p>Author: {author}</p>

        {!readBook && (
          <button disabled={read} onClick={() => handleRead(bookData)}>
            {read ? "Already read" : "Mark as read"}
          </button>
        )}
        <br />

        {!favouriteBook && (
          <button onClick={() => handleFavourite(bookData)}>
            {isBookInFav(bookData) ? (
              <NavLink to="/favourite">Go to Fav</NavLink>
            ) : (
              "Add to Fav"
            )}
          </button>
        )}
      </li>
    </>
  );
};
