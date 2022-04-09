import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../redux/bookstore';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const booklist = useSelector((state) => state);

  return (
    <div className="container-fluid p-5">
      <ul className="list-group">
        {booklist.map((book) => (
          <li key={book.id} className="list-group-item">
            <p>{book.category}</p>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
