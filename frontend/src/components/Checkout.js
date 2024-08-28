//modules or packages;
import {Link} from 'react-router-dom';
// assets
import logo from '../logo.svg';

function Checkout(props){
    return(
        <div className='container mt-4'>
            <h3 className='mb-4'> All Items (4) </h3>
            <div className='row'>
                <div className='col-md-8 col-12'>
                <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thread>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thread>
                    <tbody>

                        <tr>
                            <td> 1 </td>
                            <td> 
                                <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /> DJango </Link>
                            </td>
                            <td> Rs. 500 </td>
                        </tr>

                        <tr>
                            <td> 2 </td>
                            <td> 
                                <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /> Flask </Link>
                            </td>
                            <td> Rs. 500 </td>
                        </tr>

                        <tr>
                            <td> 3 </td>
                            <td> 
                                <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /> Python </Link>
                            </td>
                            <td> Rs. 500 </td>
                        </tr>

                        <tr>
                            <td> 4 </td>
                            <td> 
                                <Link><img src={logo} className="img-thumbnail" width='80' alt="..." /> ReactJS </Link>
                            </td>
                            <td> Rs. 500 </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>      
                            <th>Total: </th>
                            <th>Rs. 2500 </th>
                        </tr>
                        <tr>
                            <th colSpan='3' align='right'>
                                <Link to="/categories" className='btn btn-secondary'>Continue Shopping</Link>
                                <Link className='btn btn-primary ms-1'>Proceed to payment</Link>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;