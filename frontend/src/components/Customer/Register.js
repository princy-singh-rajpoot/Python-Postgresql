import { Link } from 'react-router-dom';
// assets
import logo from '../../logo.svg';

function Register(props) {
    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <div className="col-lg-6 col-md-8 col-12">
                <div className="card shadow-lg border-0 rounded-lg">
                    <div className="card-header bg-gradient-primary text-center text-white py-5" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                        <img src={logo} alt="logo" className="mb-3" style={{ width: '60px' }} />
                        <h4>Customer Registration</h4>
                    </div>
                    <div className="card-body p-5">
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="firstName">First Name</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-primary text-white"><i className="bi bi-person"></i></span>
                                    </div>
                                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-primary text-white"><i className="bi bi-person"></i></span>
                                    </div>
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="username">Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-primary text-white"><i className="bi bi-person-circle"></i></span>
                                    </div>
                                    <input type="text" className="form-control" id="username" placeholder="Enter a username" />
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="email">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-primary text-white"><i className="bi bi-envelope"></i></span>
                                    </div>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="form-group mb-5">
                                <label htmlFor="pwd">Password</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-primary text-white"><i className="bi bi-lock"></i></span>
                                    </div>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter a password" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block py-3" style={{ background: 'linear-gradient(45deg, #007bff, #00c6ff)', fontWeight: 'bold', fontSize: '18px', borderRadius: '30px' }}>
                                Create Account
                            </button>
                        </form>
                    </div>
                    <div className="card-footer text-center py-3" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
                        <small>Already have an account? <Link to="/login" className="text-primary font-weight-bold">Login</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
