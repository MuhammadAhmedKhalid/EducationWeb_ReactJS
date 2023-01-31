import { Route, Routes } from 'react-router-dom';
import AboutUs from './routes/AboutUs';
import Home from './routes/Home';
import Blog from './routes/Blog'
import Courses from './routes/Courses';
import Contact from './routes/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
