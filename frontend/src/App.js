import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Categories' element={<Categories/>} />
        </Routes>
      <Footer/>
    </>
  );
}
export default App;
