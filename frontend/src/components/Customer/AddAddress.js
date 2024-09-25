import Sidebar from './Sidebar';

function AddAddress(props) {
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
                            <h4 className="text-left">Add Address</h4>
                        </div>
                        <div className="card-body p-4">
                            <form>

                                <div className="form-group mb-3">
                                    <label htmlFor="address">Address</label>
                                    <div className="input-group"><br/>
                                        <input type="text" className="form-control" id="address" placeholder="Enter your Address"/>
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

export default AddAddress;