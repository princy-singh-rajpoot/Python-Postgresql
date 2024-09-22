import Sidebar from './Sidebar';

function Profile(props) {
    return (
        <div className="container mt-4">
            <div className="row">

                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                
                {/* Profile form on the right side */}
                <div className="col-lg-9 col-md-9 col-12">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h4 className="text-left">Update Profile</h4>
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
                                    <label htmlFor="profileImage">Profile Image</label>
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="profileImage" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block py-2">Update</button>

                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;