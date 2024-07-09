import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryByName } from './HTTPRequest';
import Products from './Products';
function ProductListing() {
    const [categoryData, setCategoryData] = useState([]);
    const queryParam = useParams('categoryName')
    useEffect(function(){
        getCategoryData();
        
    },[queryParam])
    const getCategoryData = function(){
        getCategoryByName(queryParam.categoryName).then(function(resp){
            if(resp.status === 200){
                setCategoryData(resp.data);
            }
        });
    };
    return <>
        <Products productData ={categoryData} />
        
    </>
}

export default ProductListing;