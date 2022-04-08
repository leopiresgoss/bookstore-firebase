const BookList = () => {
  const booklist = [
    {
      id: 1,
      title: 'Book title 1',
      author: 'Book author',
      category: 'Action',
      currentChapter: 2,
      totalChapters: 10,
    },
    {
      id: 2,
      title: 'Book title 2',
      author: 'Book author',
      category: 'Drama',
      currentChapter: 2,
      totalChapters: 10,
    },
  ];

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
