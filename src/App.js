import './App.css';
import Header from './components/Header';
import MainContent from './components/Main-content';
import BlogPage from './components/Blogpage';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/contact';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/Blog-page' element={<MainContent />} />
      <Route path='/Blog-page/about' element={<About />} />
      <Route path='/Blog-page/contact' element={<Contact />} />
      <Route path='/blog/:id' element={<BlogPage />} />
      <Route path="*" element={<NotFound />} />
    
    </Routes>
      <Footer />
    </BrowserRouter>
      
     
    </>
  );
}

export default App;
