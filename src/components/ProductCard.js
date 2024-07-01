function ProductCard(props) {
    const productData = props.productData;
    const productCards = productData.map(function(product){
        return <div className="product-card" key={product.id}>
                    <div className="image-wrapper">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="content-wrapper">
                        <div className='category'>
                            {product.category}
                        </div>
                        <div className="name">
                            <strong>{product.title}</strong>
                        </div>
                        <div className='description'>
                            <p>{product.description}</p>
                        </div>
                        <div className='bottom-container'>
                            <div className='price-container'>
                                £{product.price}
                            </div>
                            <div className='rating-container'>
                                {product.rating.rate}⭐
                            </div>
                        </div>
                        <div className='bottom-actions-container'>
                            <div className='add-to-cart'>
                                    <button className='action primary'>Add to cart</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
    })
    
   
    
    return (
        <>
         {productCards}
        </>
        
        
    )
}
export default ProductCard;