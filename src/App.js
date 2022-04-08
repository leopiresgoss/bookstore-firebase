import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import BookList from './components/Bookstore/Booklist';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookList />} />
    </Routes>
  </>
);

export default App;
