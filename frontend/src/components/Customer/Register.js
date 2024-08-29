import { Link } from 'react-router-dom';
// assets
import logo from '../../logo.svg';

function Register(props) {
    return (
        <div className='container mt-4'>
            
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'> Register </h4>
                        <div className='card-body'>
                            <form>

                                <div className="form-group">
                                    <label for="firstName"> First name </label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label for="lastName"> Last name </label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label for="username"> Username </label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label for="email"> Email </label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label for="pwd"> Password </label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter email" />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;