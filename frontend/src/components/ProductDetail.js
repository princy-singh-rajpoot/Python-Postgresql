import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

function ProductDetail() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={logo} className="img-thumbnail mb-5" alt="Product 1" />
                            </div>

                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="Product 2" />
                            </div>

                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="Product 3" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="col-lg-8">
                    <h2 className="display-6 fw-bold">Product Title</h2>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula arcu ut tortor posuere, 
                        non viverra est tristique. Vivamus pharetra orci eget metus facilisis, id vestibulum eros vehicula.
                    </p>
                    <h4 className="text-success fw-bold">Price: ₹500</h4>
                    <div className="d-flex mt-3">
                        <button title="Add to cart" className="btn btn-success me-2">
                            <i className="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        <button title="Buy now" className="btn btn-warning me-2">
                            <i className="fa-solid fa-bag-shopping"></i> Buy Now
                        </button>
                        <button title="Add to wishlist" className="btn btn-danger">
                            <i className="fa fa-heart"></i> Add to Wishlist
                        </button>
                    </div>
                    <hr />
                    <div className="product-tags mt-4">
                        <h5 className="fw-bold">Tags</h5>
                        <div>
                            {['Python', 'Django', 'JavaScript'].map((tag, index) => (
                                <Link to="#" key={index} className="badge bg-secondary text-white me-1">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <h3 className='mt-5 mb-3'>Related Products</h3>
            <div id="relatedProductsSlider" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row mb-5'>
                            <SingleProduct title="Latest Product 1" />
                            <SingleProduct title="Latest Product 1" />
                            <SingleProduct title="Latest Product 1" />
                            <SingleProduct title="Latest Product 1" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row mb-5'>
                            <SingleProduct title="Latest Product 2" />
                            <SingleProduct title="Latest Product 2" />
                            <SingleProduct title="Latest Product 2" />
                            <SingleProduct title="Latest Product 2" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row mb-5'>
                            <SingleProduct title="Latest Product 3" />
                            <SingleProduct title="Latest Product 3" />
                            <SingleProduct title="Latest Product 3" />
                            <SingleProduct title="Latest Product 3" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end of related products */}
        </section>
    );
}

export default ProductDetail;