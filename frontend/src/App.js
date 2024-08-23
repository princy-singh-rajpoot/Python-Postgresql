import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
  <> 
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <a className="navbar-brand" href="#">Python Market Place</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Use 'ms-auto' to push items to the right */}
            <li className="nav-item"><a className="nav-link" aria-current="page" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <main className='mt-4'> 
      <div className='container'>
        <h3 className='mb-4'> Latest Products <a href='#' className='ms-auto'>
          View All Products </a></h3>
        <div className='row'>
          {/* product box 1*/}
          <div className='col-12 col-md-3 mb-3'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>

              <div className='card-footer'>
                <button title="Add to cart" className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to wishlist" className='btn btn-success btn-sm ms-1'>
                <i className="fa fa-heart"></i></button>
              </div>

            </div>
          </div>
          {/* product box ended 1*/}

           {/* product box 2*/}
           <div className='col-12 col-md-3 mb-3'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>

              <div className='card-footer'>
                <button title="Add to cart" className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to wishlist" className='btn btn-success btn-sm ms-1'>
                <i className="fa fa-heart"></i></button>
              </div>
              
            </div>
          </div>
          {/* product box ended 2 */}

           {/* product box 3*/}
           <div className='col-12 col-md-3 mb-3'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>

              <div className='card-footer'>
                <button title="Add to cart" className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to wishlist" className='btn btn-success btn-sm ms-1'>
                <i className="fa fa-heart"></i></button>
              </div>
              
            </div>
          </div>
          {/* product box ended 3*/}

           {/* product box 4*/}
           <div className='col-12 col-md-3 mb-3'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>

              <div className='card-footer'>
                <button title="Add to cart" className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to wishlist" className='btn btn-success btn-sm ms-1'>
                <i className="fa fa-heart"></i></button>
              </div>
              
            </div>
          </div>
          {/* product box ended 4*/}

           {/* product box 5*/}
           <div className='col-12 col-md-3 mb-4'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>

              <div className='card-footer'>
                <button title="Add to cart" className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to wishlist" className='btn btn-success btn-sm ms-1'>
                <i className="fa fa-heart"></i></button>
              </div>
              
            </div>
          </div>
          {/* product box ended 5*/}

           {/* product box 6*/}
           <div className='col-12 col-md-3 mb-4'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>

              <div className='card-footer'>
                <button title="Add to cart" className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to wishlist" className='btn btn-success btn-sm ms-1'>
                <i className="fa fa-heart"></i></button>
              </div>
              
            </div>
          </div>
          {/* product box ended 6*/}

           {/* product box 7*/}
           <div className='col-12 col-md-3 mb-4'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>

              <div className='card-footer'>
                <button title="Add to cart" className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to wishlist" className='btn btn-success btn-sm ms-1'>
                <i className="fa fa-heart"></i></button>
              </div>
              
            </div>
          </div>
          {/* product box ended 7*/}

           {/* product box 8*/}
           <div className='col-12 col-md-3 mb-4'>
            <div className="card">
              <img src={logo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
                <h5 className="card-title text-muted">Price: Rs. 500</h5>
              </div>

              <div className='card-footer'>
                <button title="Add to cart" className='btn btn-success btn-sm'>
                <i className="fa-solid fa-cart-plus"></i></button>
                <button title="Add to wishlist" className='btn btn-success btn-sm ms-1'>
                <i className="fa fa-heart"></i></button>
              </div>
              
            </div>
          </div>
          {/* product box ended 8*/}

        </div>
      </div>
    </main>

  </>
  );
}

export default App;
