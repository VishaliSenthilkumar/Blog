import Home from './Home';
import NavBar from './NavBar';
import Create from './Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter >
      <div>
        <NavBar />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/blogs/:id' element={ <BlogDetails /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
