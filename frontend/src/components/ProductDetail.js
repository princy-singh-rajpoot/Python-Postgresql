import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

// Carousel component for product images
function ProductImageCarousel() {
    const images = [logo, logo, logo];
    return (
        <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                {images.map((_, index) => (
                    <li key={index} data-bs-target="#productThumbnailSlider" data-bs-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {images.map((src, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={src} className="img-thumbnail mb-5" alt={`Product ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev text-dark" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

// Tags component
function ProductTags({ tags }) {
    return (
        <div className="product-tags mt-4">
            <h5 className="fw-bold">Tags</h5>
            <div>
                {tags.map((tag, index) => (
                    <Link to="#" key={index} className="badge bg-secondary text-white me-1">
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}

// Product information component
function ProductInfo() {
    return (
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
            <ProductTags tags={['Python', 'Django', 'JavaScript']} />
        </div>
    );
}

// Related products carousel component
function RelatedProductsCarousel() {
    const productGroups = [
        ['latest product 1', 'latest product 1', 'latest product 1', 'latest product 1'],
        ['latest product 2', 'latest product 2', 'latest product 2', 'latest product 2'],
        ['latest product 3', 'latest product 3', 'latest product 3', 'latest product 3'],
    ];

    return (
        <div id="relatedProductsSlider" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                {productGroups.map((_, index) => (
                    <li key={index} data-bs-target="#relatedProductsSlider" data-bs-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {productGroups.map((group, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className="row mb-5">
                            {group.map((title, i) => (
                                <SingleProduct key={i} title={title} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Main product detail component
function ProductDetail() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <ProductImageCarousel />
                </div>
                <ProductInfo />
            </div>

            {/* Related Products */}
            <h3 className="mt-5 mb-3">Related Products</h3>
            <RelatedProductsCarousel />
        </section>
    );
}

export default ProductDetail;


