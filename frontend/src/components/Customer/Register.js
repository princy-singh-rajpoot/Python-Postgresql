import { Link } from 'react-router-dom';
// assets
import logo from '../../logo.svg';

function Register(props) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card shadow-lg">
                        <div className="card-header text-center bg-primary text-white">
                            <h4>Register</h4>
                        </div>
                        <div className="card-body p-4">
                            <form>

                                <div className="form-group mb-3">
                                    <label htmlFor="firstName">First Name</label>
                                    <div className="input-group">
                                        
                                        <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="lastName">Last Name</label>
                                    <div className="input-group">
                                        
                                        <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="username">Username</label>
                                    <div className="input-group">
                                       
                                        <input type="text" className="form-control" id="username" placeholder="Enter a username" />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <div className="input-group">
                                        
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="pwd">Password</label>
                                    <div className="input-group">
                                       
                                        <input type="password" className="form-control" id="pwd" placeholder="Enter a password" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block py-2">Submit</button>

                        </form>
                        </div>
                        <div className="card-footer text-center">
                            <small>Already have an account? <Link to="/customer/login" className="text-primary">Login</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
