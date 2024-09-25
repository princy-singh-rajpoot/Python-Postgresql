import Sidebar from './SellerSidebar';

function AddProduct(props) {
    return (
        <div className="container mt-4">
            <div className="row">

                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                
                {/* Profile form on the right side */}
                <div className='col-lg-9 col-12 mb-2'>
                    <div className='card shadow-sm'>
                        <div className='card-header bg-primary text-white'>
                            <h5 className='mb-0'>Add Product</h5>
                        </div>
                        <div className='card-body'>
                            <form>

                                <div className="form-group mb-3">
                                    <label htmlFor="Title">Category</label>
                                    <div className="input-group">
                                        <select className='form-control'>
                                            <option>Python</option>
                                            <option>Django</option>    
                                            <option>Flask</option>
                                            <option>React</option>
                                            <option>Pandas</option>
                                        </select>    
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="Title">Title</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="Title" placeholder="Enter your Title" />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="Price">Price</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" id="Price" placeholder="Enter your Price" />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="Description">Description</label>
                                    <div className="input-group">
                                        <textarea className="form-control" row="8" id="Description"> </textarea>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="ProductImg">Product Image</label>
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="ProductImg" />
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

export default AddProduct;