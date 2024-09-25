import {Routes,Route} from 'react-router-dom';

// Assets Panel
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Website Components Assets - Panel
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import OrderFailure from './components/OrderFailure';

// Components / Customer - Panel
import Register from './components/Customer/Register';
import Login from './components/Customer/Login';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders';
import Wishlist from './components/Customer/Wishlist';
import Profile from './components/Customer/Profile';
import ChangePassword from './components/Customer/ChangePassword';
import AddressList from './components/Customer/AddressList';
import AddAddress from './components/Customer/AddAddress';

//seller panel
import SellerRegister from './components/Seller/SellerRegister';
import SellerLogin from './components/Seller/SellerLogin';
import SellerDashboard from './components/Seller/SellerDashboard';
import SellerProducts from './components/Seller/SellerProducts';
import AddProduct from './components/Seller/AddProduct';
import VendorOrders from './components/Seller/VendorOrders';
import Customers from './components/Seller/Customers';
import Reports from './components/Seller/Reports';
import VendorProfile from './components/Seller/VendorProfile';
import VendorChangePassword from './components/Seller/VendorChangePassword';

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
          <Route path='/order/success' element={<OrderSuccess/>} />
          <Route path='/order/failure' element={<OrderFailure/>} />
          {/* customer routes */}
          <Route path='/customer/register' element={<Register/>} />
          <Route path='/customer/login' element={<Login/>} />
          <Route path='/customer/dashboard' element={<Dashboard/>} />
          <Route path='/customer/orders' element={<Orders/>} />
          <Route path='/customer/wishlist' element={<Wishlist/>} />
          <Route path='/customer/profile' element={<Profile/>} />
          <Route path='/customer/change-password' element={<ChangePassword/>} />
          <Route path='/customer/addresses' element={<AddressList/>} />
          <Route path='/customer/add-address' element={<AddAddress/>} />
          {/* seller routes */}
          <Route path='/seller/register' element={<SellerRegister/>} />
          <Route path='/seller/login' element={<SellerLogin/>} />
          <Route path='/seller/dashboard' element={<SellerDashboard/>} />
          <Route path='/seller/products' element={<SellerProducts/>} />
          <Route path='/seller/add-products' element={<AddProduct/>} />
          <Route path='/seller/orders' element={<VendorOrders/>} />
          <Route path='/seller/customers' element={<Customers/>} />
          <Route path='/seller/reports' element={<Reports/>} />
          <Route path='/seller/profile' element={<VendorProfile/>} />
          <Route path='/seller/change-password' element={<VendorChangePassword/>} />
        </Routes>
      <Footer/>
    </>
  );
}
export default App;
