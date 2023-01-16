import { Route, Routes } from 'react-router-dom';
import AboutUs from './routes/AboutUs';
import Home from './routes/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
