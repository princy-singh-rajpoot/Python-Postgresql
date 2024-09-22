// Assets
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Wishlist() {
    return (
        <div className="container mt-4">
            <div className="row">

                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>

                <div className='col-md-9 col-12 mb-2'>
                    <div className='card shadow-sm'>
                        <div className='card-header bg-primary text-white'>
                            <h5 className='mb-0'>Your Orders</h5>
                        </div>
                        <div className='card-body'>
                            <div className='table-responsive'>
                                <table className='table table-hover'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            {/* <th>Status</th> */}
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <Link to="#" className='d-flex align-items-center'>
                                                    <img src={logo} className="img-thumbnail me-2" width='60' alt="..." />
                                                    <span>DJango</span>
                                                </Link>
                                            </td>
                                            <td>Rs. 500</td>
                                            <td><button className='btn btn-danger btn-sm'> Remove </button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <Link to="#" className='d-flex align-items-center'>
                                                    <img src={logo} className="img-thumbnail me-2" width='60' alt="..." />
                                                    <span>Flask</span>
                                                </Link>
                                            </td>
                                            <td>Rs. 500</td>
                                                <td><button className='btn btn-danger btn-sm'> Remove </button></td>
                                           </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <Link to="#" className='d-flex align-items-center'>
                                                    <img src={logo} className="img-thumbnail me-2" width='60' alt="..." />
                                                    <span>Python</span>
                                                </Link>
                                            </td>
                                            <td>Rs. 500</td>
                                                <td><button className='btn btn-danger btn-sm'> Remove </button></td>    
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <Link to="#" className='d-flex align-items-center'>
                                                    <img src={logo} className="img-thumbnail me-2" width='60' alt="..." />
                                                    <span>ReactJS</span>
                                                </Link>
                                            </td>
                                            <td>Rs. 500</td>
                                                <td><button className='btn btn-danger btn-sm'> Remove </button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='card-footer text-center'>
                            <Link to="#" className='btn btn-outline-primary btn-sm'>View All Orders</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Wishlist;