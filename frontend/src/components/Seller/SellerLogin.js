import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-12">
                    <div className="card shadow-lg">
                        <div className="card-header text-center bg-warning text-white">
                            <h4>Seller Login</h4>
                        </div>
   
                        <div className="card-body p-5">
                            <form>
                                <div className="form-group mb-4">
                                    <label htmlFor="username">Username</label>
                                    <div className="input-group">
                                       
                                        <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="pwd">Password</label>
                                    <div className="input-group">
                                        
                                        <input type="password" className="form-control" id="pwd" placeholder="Enter your password" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-warning btn-block py-2">Login</button>
                            </form>
                        </div>

                        <div className="card-footer text-center">
                            <small>Don't have an account? <Link to="/seller/register" className="text-warning">Login here</Link></small>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
      );
}
export default Login;