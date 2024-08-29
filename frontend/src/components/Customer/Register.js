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
                            {/* <img src={logo} alt="logo" className="mb-2" style={{ width: '50px' }} /> */}
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

                                <button 
                                    type="submit" 
                                    className="btn btn-block py-3 text-white" 
                                    style={{
                                        background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
                                        border: 'none',
                                        borderRadius: '30px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                                    Create Account
                                </button>

                                {/* <button type="submit" className="btn btn-gradient-primary btn-block">Create Account</button> */}
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <small>Already have an account? <Link to="/login" className="text-primary">Sign in</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
