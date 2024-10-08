import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import SingleProduct from './SingleProduct';

function Home() {
    return (
        <main className='mt-4'> 
            <div className='container'>

                {/* start latest product */}
                    <div className='d-flex justify-content-between align-items-center mb-4'> 
                        <h3 className='mb-4'>Latest Products</h3>
                        <Link to='/products' className='float-end btn btn-sm btn-dark'>View All Products <i className="fa-solid fa-arrow-right-long"></i> </Link>
                    </div>
                    
                    <div className='row mb-4'>
                        <SingleProduct title="latest product 1" />
                        <SingleProduct title="latest product 2" />
                        <SingleProduct title="latest product 4" />
                        <SingleProduct title="latest product 5" />
                        <SingleProduct title="latest product 3" />
                        <SingleProduct title="latest product 6" />
                        <SingleProduct title="latest product 7" />
                        <SingleProduct title="latest product 7" />
                    </div>
                {/* end of latest product */}




                {/* start popularrr categoriesssssssss */}
                <div className='d-flex justify-content-between align-items-center mb-4'> 
                <h3 className='mb-0'>Popular Categories </h3>
                <a href='#' className='float-end btn btn-sm btn-dark'>View All Categories <i className="fa-solid fa-arrow-right-long"></i> </a>
                </div>
                <div className='row mb-4'>

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
                <a href='#' className='float-end btn btn-sm btn-dark'>View All Products <i className="fa-solid fa-arrow-right-long"></i> </a>
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
                    <a href='#' className='float-end btn btn-sm btn-dark'>View All Seller <i className="fa-solid fa-arrow-right-long"></i> </a>
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
                            Categories: <a href="#"> Python </a> , <a href="#"> PHP </a>
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
                        Categories: <a href="#"> VueJs </a> , <a href="#"> Shopify </a>
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
                        Categories: <a href="#">AngularJs </a> , <a href="#"> ReactJs</a>
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
                        Categories: <a href="#"> JAVASCRIPT </a>
                        </div>   
                        </div>
                    </div>
                    {/* sellers box ended 4*/}                   

                </div>
                {/* end of popularrr sellersrrrrrrrrrrr */}

                {/* rating and reviews */}
                <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">

                    <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote"><p>A well-known quote, contained in a blockquote element.</p></blockquote>
                            <figcaption className="blockquote-footer">
                                <i className='fa fa-star text-warning'></i> <i className='fa fa-star text-warning'></i> <i className='fa fa-star text-warning'></i>
                                <cite title="Source Title">Customer Name</cite>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote"><p>A well-known quote, contained in a blockquote element.</p></blockquote>
                            <figcaption className="blockquote-footer">
                                <i className='fa fa-star text-warning'></i><i className='fa fa-star text-warning'></i>
                                <cite title="Source Title">Customer Name</cite>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote"><p>A well-known quote, contained in a blockquote element.</p></blockquote>
                            <figcaption className="blockquote-footer">
                                <i className='fa fa-star text-warning'></i>
                                <cite title="Source Title">Customer Name</cite>
                            </figcaption>
                        </figure>
                    </div>

                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>

                </div>
                {/* end of rating and reviews */}

            </div>
        </main>
 )
}
export default Home;