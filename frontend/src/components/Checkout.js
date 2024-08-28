import { Link } from 'react-router-dom';
// assets
import logo from '../logo.svg';

function Checkout(props) {
    return (
        <div className='container mt-4'>
            <h3 className='mb-4'>All Items (4)</h3>
            <div className='row'>
                <div className='col-md-8 col-12'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Link to="#"><img src={logo} className="img-thumbnail" width='80' alt="..." /> DJango</Link>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <Link to="#"><img src={logo} className="img-thumbnail" width='80' alt="..." /> Flask</Link>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <Link to="#"><img src={logo} className="img-thumbnail" width='80' alt="..." /> Python</Link>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <Link to="#"><img src={logo} className="img-thumbnail" width='80' alt="..." /> ReactJS</Link>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total:</th>
                                    <th colSpan='2' className='text-end'>Rs. 2500</th>
                                </tr>
                                <tr>
                                    <th colSpan='3' className='text-end'>
                                        <Link to="/categories" className='btn btn-secondary'>Continue Shopping</Link>
                                        <Link to="#" className='btn btn-primary ms-1'>Proceed to payment</Link>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;