function Header(){
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
        <a className="navbar-brand" href="#">Python Market Place</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Use 'ms-auto' to push items to the right */}
            <li className="nav-item"><a className="nav-link" aria-current="page" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
            </ul>
        </div>

        </div>
    </nav>
    )    
}

export default Header;