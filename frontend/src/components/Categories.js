import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Categories() {
    return (
       <section className="container mt-4">
        {/* start popularrr categoriesssssssss */}
            <h3 className='mb-0'> All Categories </h3>
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

                </div>

            </div>
            {/* end of popularrr categoriesssssssss */}
       </section>
    )
}
export default Categories;