import SingleProduct from './SingleProduct';

function AllProducts(){
    return (
        <section className='container mt-4'> 
            <h3 className='mb-4'>All Products</h3>
            <div className='row mb-4'>
                <SingleProduct title="8 project"/>
                <SingleProduct title="7 project"/>
                <SingleProduct title="6 project"/>
                <SingleProduct title="5 project"/>
                <SingleProduct title="4 project"/>
                <SingleProduct title="1 project"/>
                <SingleProduct title="2 project"/>
                <SingleProduct title="3 project"/>
            </div>

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
export default AllProducts;