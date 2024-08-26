import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function ProductDetail(){
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <img src={logo} className="imf-thumbnail" alt="..."/>
                </div>
                <div className="col-8">
                    <h3> Product Title </h3> 
                    <p> Lorem lorem Product Title Lorem lorem Product Title Lorem 
                        lorem Product Title Lorem lorem Product Title 
                        Lorem lorem Product Title Lorem lorem Product Title 
                    </p>
                    <h5 className="card-title"> Price : Rs 500/- </h5>
                    <p className='mt-3'>
                        <button title="Add to cart" className="btn btn-success">
                        <i className="fa-solid fa-cart-plus"></i> Add to cart 
                        </button>
                        <button title="Buy now" className="btn btn-warning ms-1">
                        <i className="fa-solid fa-bag-shopping"></i> Buy Now
                        </button>
                        <button title="Add to wishlist" className="btn btn-danger ms-1">
                        <i className="fa fa-heart"></i> Add to Wishlist 
                        </button>
                    </p>
                    <hr></hr>
                    <div className='producttags mt-4'>
                        <h5> Tags </h5>
                        <p>
                            <Link to="#" className='badge bg-secondary text-white me-1'> Python </Link>,
                            <Link to="#" className='badge bg-secondary text-white me-1'> Django </Link>,
                            <Link to="#" className='badge bg-secondary text-white me-1'> JAVASCRIPT </Link>,  
                            <Link to="#" className='badge bg-secondary text-white me-1'> Python </Link>,
                            <Link to="#" className='badge bg-secondary text-white me-1'> Django </Link>,
                            <Link to="#" className='badge bg-secondary text-white me-1'> JAVASCRIPT </Link>,  
                            <Link to="#" className='badge bg-secondary text-white me-1'> Python </Link>,
                            <Link to="#" className='badge bg-secondary text-white me-1'> Django </Link>,
                            <Link to="#" className='badge bg-secondary text-white me-1'> JAVASCRIPT </Link>,  
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ProductDetail;