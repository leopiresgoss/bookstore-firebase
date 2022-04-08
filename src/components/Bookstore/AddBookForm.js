import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AddBookForm = () => {
  const initalState = {
    title: '',
    author: '',
    category: '',
  };

  const [newBook, setNewBook] = useState(initalState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setNewBook(initalState);
  };

  return (
    <Form className="p-5" onSubmit={submitForm}>
      <h2>ADD BOOK</h2>
      <Form.Group className="mb-2">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Add title"
          required
          onChange={handleChange}
          value={newBook.title}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Author</Form.Label>
        <Form.Control
          name="author"
          type="text"
          placeholder="Add author"
          required
          onChange={handleChange}
          value={newBook.author}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Category</Form.Label>
        <Form.Control
          name="category"
          type="text"
          placeholder="Add category"
          required
          onChange={handleChange}
          value={newBook.category}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Book
      </Button>
    </Form>
  );
};

export default AddBookForm;
