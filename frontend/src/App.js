import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import Checkout from './components/Checkout';
import Register from './components/Customer/Register';
import Login from './components/Customer/Login';
import Dashboard from './components/Customer/Dashboard';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>} />
          <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/customer/register' element={<Register/>} />
          <Route path='/customer/login' element={<Login/>} />
          <Route path='/customer/dashboard' element={<Dashboard/>} />
        </Routes>
      <Footer/>
    </>
  );
}
export default App;
