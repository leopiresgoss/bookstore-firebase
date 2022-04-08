import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Bookstore from './pages/Bookstore';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Bookstore />} />
    </Routes>
  </>
);

export default App;
