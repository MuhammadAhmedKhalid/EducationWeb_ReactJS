import { Route, Routes } from 'react-router-dom';
import AboutUs from './routes/AboutUs';
import Home from './routes/Home';
import Blog from './routes/Blog'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
