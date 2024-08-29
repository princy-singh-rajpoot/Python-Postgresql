import { Link } from 'react-router-dom';
// asset
import logo from '../../logo.svg';

function Login(props) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card shadow-lg">
                        <div className="card-header text-center bg-primary text-white">
                            <h4>Customer Login</h4>
                        </div>
   
                        <div className="card-body p-5">
                            <form>
                                <div className="form-group mb-4">
                                    <label htmlFor="username">Username</label>
                                    <div className="input-group">
                                        {/* <div className="input-group-prepend"> */}
                                        {/* <span className="input-group-text bg-dark text-white"><i className="bi bi-person"></i></span> */}
                                        {/* </div> */}
                                        <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="pwd">Password</label>
                                    <div className="input-group">
                                        {/* <div className="input-group-prepend">
                                            <span className="input-group-text bg-dark text-white"><i className="bi bi-lock"></i></span>
                                        </div> */}
                                        <input type="password" className="form-control" id="pwd" placeholder="Enter your password" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block py-2">Login</button>
                            </form>
                        </div>

                        <div className="card-footer text-center">
                            <small>Don't have an account? <Link to="/customer/register" className="text-primary">Login here</Link></small>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
      );
}
export default Login;