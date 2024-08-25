import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Categories' element={<Categories/>} />
          <Route path='/Category/:slug/:category_id' element={<CategoryProducts/>} />
          <Route path='/Category/:category_slug/:category_id' element={<CategoryProducts/>} />
        </Routes>
      <Footer/>
    </>
  );
}
export default App;
