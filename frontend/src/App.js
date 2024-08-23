import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

function App() {
  return (
    <> 
      <Header/>
      <main className='mt-4'> 
        <div className='container'>

          {/* start latesssssssssssssssssssssssssssssssssssssssst product */}
            <div className='d-flex justify-content-between align-items-center mb-4'> 
              <h3 className='mb-0'>Latest Products</h3>
              <a href='#' className='float-end btn btn-sm btn-dark'>View All Products <i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
            <div className='row mb-4'>
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
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                      <i className="fa fa-heart"></i>
                    </button>
                  </div>
                  
                </div>
              </div>
              {/* product box ended 1*/}

              {/* prooooo  2*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>

                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-muted">Price: Rs. 500</h5>
                  </div>

                  <div className='card-footer'>
                    <button title="Add to cart" className='btn btn-success btn-sm'>
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                      <i className="fa fa-heart"></i>
                    </button>
                  </div>
                  
                </div>
              </div>
              {/* prooo  2 ended */}
              
              {/* proo 3 */}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Product title</h4>
                    <h5 className="card-title text-muted">Price: Rs. 500</h5>
                  </div>

                  <div className='card-footer'>
                    <button title="Add to cart" className='btn btn-success btn-sm'>
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                      <i className="fa fa-heart"></i>
                    </button>
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
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                      <i className="fa fa-heart"></i>
                    </button>
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
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                      <i className="fa fa-heart"></i>
                    </button>
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
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                      <i className="fa fa-heart"></i>
                    </button>
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
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                      <i className="fa fa-heart"></i>
                    </button>
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
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                      <i className="fa fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* product box ended 8*/}
            </div>
          {/* end of latesssssssssssssssssssssssssssssssssssssssst product */}

          {/* start popularrr categoriesssssssss */}
            <div className='d-flex justify-content-between align-items-center mb-4'> 
              <h3 className='mb-0'>Popular Categories </h3>
              <a href='#' className='float-end btn btn-sm btn-dark'>View All Categories <i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
            <div className='row mb-4'>

              {/* categories box 1*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                  </div>             
                  <div className='card-footer'>
                  Product Downloads : 2331
                  </div>   
                </div>
              </div>
              {/* categories box ended 1*/}

              
              {/* categories box 2*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                  </div>             
                  <div className='card-footer'>
                  Product Downloads : 2331
                  </div>   
                </div>
              </div>
              {/* categories box ended 2*/}
              
              {/* categories box 3*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                  </div>             
                  <div className='card-footer'>
                  Product Downloads : 2331
                  </div>   
                </div>
              </div>
              {/* categories box ended 3*/}

              
              {/* categories box 4*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                  </div>             
                  <div className='card-footer'>
                  Product Downloads : 2331
                  </div>   
                </div>
              </div>
              {/* categories box ended 4*/}

              {/* categories box 5*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                  </div>             
                  <div className='card-footer'>
                  Product Downloads : 2331
                  </div>   
                </div>
              </div>
              {/* categories box ended 5*/}

              {/* categories box 6*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                  </div>             
                  <div className='card-footer'>
                  Product Downloads : 2331
                  </div>   
                </div>
              </div>
              {/* categories box ended 6*/}

              {/* categories box 7*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                  </div>             
                  <div className='card-footer'>
                  Product Downloads : 2331
                  </div>   
                </div>
              </div>
              {/* categories box ended 7*/}

              {/* categories box 8*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Category title</h4>
                  </div>             
                  <div className='card-footer'>
                  Product Downloads : 2331
                  </div>   
                </div>
              </div>
              {/* categories box ended 8*/}

            </div>
          {/* end of popularrr categoriesssssssss */}

          {/* start Popular product */}
            <div className='d-flex justify-content-between align-items-center mb-4'> 
              <h3 className='mb-0'>Popluar Products</h3>
              <a href='#' className='float-end btn btn-sm btn-dark'>View All Products <i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
            <div className='row mb-4'>
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
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                      <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                        <i className="fa fa-heart"></i>
                      </button>
                    </div>
                    
                  </div>
                </div>
                {/* product box ended 1*/}

                {/* prooooo  2*/}
                <div className='col-12 col-md-3 mb-3'>
                  <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>

                    <div className="card-body">
                      <h4 className="card-title">Product title</h4>
                      <h5 className="card-title text-muted">Price: Rs. 500</h5>
                    </div>

                    <div className='card-footer'>
                      <button title="Add to cart" className='btn btn-success btn-sm'>
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                      <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                        <i className="fa fa-heart"></i>
                      </button>
                    </div>
                    
                  </div>
                </div>
                {/* prooo  2 ended */}
                
                {/* proo 3 */}
                <div className='col-12 col-md-3 mb-3'>
                  <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h4 className="card-title">Product title</h4>
                      <h5 className="card-title text-muted">Price: Rs. 500</h5>
                    </div>

                    <div className='card-footer'>
                      <button title="Add to cart" className='btn btn-success btn-sm'>
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                      <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                        <i className="fa fa-heart"></i>
                      </button>
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
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                      <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'>
                        <i className="fa fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* product box ended 4*/}                     
            </div>
          {/* end of popular product */}

          {/* start popularrr Sellers */}
          <div className='d-flex justify-content-between align-items-center mb-4'> 
              <h3 className='mb-0'>Popular Seller </h3>
              <a href='#' className='float-end btn btn-sm btn-dark'>View All Seller <i class="fa-solid fa-arrow-right-long"></i> </a>
            </div>
            <div className='row mb-4'>

              {/* sellers box 1*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                  </div>             
                  <div className='card-footer'>
                    Categories: <a href="#"> Python </a><a href="#"> PHP </a>
                  </div>   
                </div>
              </div>
              {/* sellers box ended 1*/}

              {/* sellers box 2*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                  </div>             
                  <div className='card-footer'>
                  Categories: <a href="#"> VueJs </a> <a href="#"> Shopify </a>
                  </div>   
                </div>
              </div>
              {/* sellers box ended 2*/}
              
              {/* sellers box 3*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                  </div>             
                  <div className='card-footer'>
                  Categories: <a href="#">AngularJs </a> <a href="#"> ReactJs</a>
                  </div>   
                </div>
              </div>
              {/* sellers box ended 3*/}

              
              {/* sellers box 4*/}
              <div className='col-12 col-md-3 mb-3'>
                <div className="card">
                  <img src={logo} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h4 className="card-title">Seller Name</h4>
                  </div>             
                  <div className='card-footer'>
                  Categories: <a href="#"> JAVASCRIPT </a><a href="#"> WordPress </a>
                  </div>   
                </div>
              </div>
              {/* sellers box ended 4*/}                   

            </div>
          {/* end of popularrr sellersrrrrrrrrrrr */}

        </div>
      </main>
    </>
  );
}

export default App;
