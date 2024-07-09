import { useParams } from "react-router-dom";
import useFetchSingleProduct from "../utils/useFetchSingleProduct";

function ProductDetails(){
    const productId = useParams('prodId');
    console.log('prodId',productId)
    const  productData= useFetchSingleProduct(productId.prodId);
    console.log('productData',productData);
    return <>
        <h1>this is product datail page</h1>
    </>
}

export default ProductDetails;