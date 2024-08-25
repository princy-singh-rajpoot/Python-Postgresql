import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Categories() {
    return (
       <section className="container mt-4">
        {/* start popularrr categoriesssssssss */}
            <h3 className='mb-4'> All Categories </h3>
            <div className='row mb-2'>

                {/* categories box 1*/}
                <div className='col-12 col-md-3 mb-3'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/"> Category title </Link></h4>
                        </div>             
                        <div className='card-footer'>
                            Product Downloads : 2331
                        </div>   
                    </div>
                </div>
                {/* categories box ended 1*/}

                {/* categories box 2*/}
                <div className='col-12 col-md-3 mb-3'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/"> Category title </Link></h4>
                        </div>             
                        <div className='card-footer'>
                            Product Downloads : 2331
                        </div>   
                    </div>
                </div>
                {/* categories box ended 2*/}

                {/* categories box 3*/}
                <div className='col-12 col-md-3 mb-3'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/"> Category title </Link></h4>
                        </div>             
                        <div className='card-footer'>
                            Product Downloads : 2331
                        </div>   
                    </div>
                </div>
                {/* categories box ended 3*/}

                {/* categories box 4*/}
                <div className='col-12 col-md-3 mb-3'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/"> Category title </Link></h4>
                        </div>             
                        <div className='card-footer'>
                            Product Downloads : 2331
                        </div>   
                    </div>
                </div>
                {/* categories box ended 4*/}

            </div>

            <div className='row mb-2'>

                    {/* categories box 5*/}
                    <div className='col-12 col-md-3 mb-3'>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title"> <Link to="/"> Category title </Link></h4>
                            </div>             
                            <div className='card-footer'>
                                Product Downloads : 2331
                            </div>   
                        </div>
                    </div>
                    {/* categories box ended 5*/}

                    {/* categories box 6*/}
                    <div className='col-12 col-md-3 mb-3'>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title"><Link to="/"> Category title </Link></h4>
                            </div>             
                            <div className='card-footer'>
                                Product Downloads : 2331
                            </div>   
                        </div>
                    </div>
                    {/* categories box ended 5*/}

                    {/* categories box 5*/}
                    <div className='col-12 col-md-3 mb-3'>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title"><Link to="/"> Category title </Link></h4>
                            </div>             
                            <div className='card-footer'>
                                Product Downloads : 2331
                            </div>   
                        </div>
                    </div>
                    {/* categories box ended 5*/}

                     {/* categories box 5*/}
                     <div className='col-12 col-md-3 mb-3'>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title"><Link to="/category/python/1"> Category title </Link></h4>
                            </div>             
                            <div className='card-footer'>
                                Product Downloads : 2331
                            </div>   
                        </div>
                    </div>
                    {/* categories box ended 5*/}

                </div>
            {/* end of popularrr categoriesssssssss */}
       
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                    </li>
                </ul>
            </nav>

       </section>
    )
}
export default Categories;