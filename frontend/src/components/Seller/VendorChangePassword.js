import { Link } from 'react-router-dom';
import SellerSidebar from './SellerSidebar';

function VendorChangePassword(props) {
    return (
        <div className="container mt-4">
            <div className="row">

                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar />
                </div>

                <div className='col-lg-9 col-12 mb-2'>
                    <div className='card shadow-sm'>
                        <div className='card-header bg-primary text-white'>
                            <h4>Change Password</h4>
                        </div>
                        <div className='card-body'>
                            <form>

                                <div className="form-group mb-3">
                                    <label htmlFor="newPassword">New Password</label>
                                    <div className="input-group">
                                        <input type="password" className="form-control" id="newPassword" placeholder="Enter your new password" />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <div className="input-group">
                                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your new password" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block py-2">Submit</button>

                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <small>Remembered your password? <Link to="/customer/dashboard" className="text-primary">Back To Dashboard </Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VendorChangePassword;
