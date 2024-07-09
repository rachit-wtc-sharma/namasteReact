import { useEffect, useState } from "react";
import { getAllProducts } from "../components/HTTPRequest";

function useFetchAllProducts(){
    const [productData, setProductData] = useState([]);
    useEffect(function(){
        getAllProductsData()
    },[]);

    const getAllProductsData = function() {
            getAllProducts().then(function(resp){
                if(resp.status === 200) {
                    setProductData(resp.data)
                }
            })
    }

    return productData;
}

export default useFetchAllProducts;