import { useEffect, useState } from "react";
import {getProductById} from "./HTTPRequest";

function useFetchSingleProduct(id){
    const [productData, setProductData] = useState([]);
    useEffect(function(){
        getProductData();
    },[])
    const getProductData = function() {
        getProductById(id).then(function(resp){
            if(resp.status === 200){
                setProductData(resp.data);
            }
        })
    }
    return productData;
}
export default useFetchSingleProduct;