import ProductCard from './ProductCard';

function Products(props) {
    const productData = props.productData;
    return (
        <div className="products-container">
            <div className='products'>
                <ProductCard productData={productData}/>
            </div>
        </div>
    )
}

export default Products;