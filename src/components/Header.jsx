import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";

export const Header = () => {
  const { allBooksData } = useContext(BookContext);

  const favouriteCount = allBooksData.filter(({ favourite }) => favourite)
    .length;
  const readCount = allBooksData.filter(({ read }) => read).length;

  return (
    <div>
      <NavLink to="/" className="navlink">
        All Books
      </NavLink>
      <NavLink to="/favourite" className="navlink">
        Favourites({favouriteCount})
      </NavLink>
      <NavLink to="/read" className="navlink">
        Read({readCount})
      </NavLink>
      <NavLink to="/profile" className="navlink">
        Profile
      </NavLink>
    </div>
  );
};
