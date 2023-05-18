import './App.css';
import Header from './components/Header';
import MainContent from './components/Main-content';
import BlogPage from './components/Blogpage';

import Footer from './components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/Blog-page' element={<MainContent />} />
      <Route path='/blog/:id' element={<BlogPage />} />
    
    </Routes>
      <Footer />
    </BrowserRouter>
      
     
    </>
  );
}

export default App;
