import { useEffect, useState } from "react";
import { getAllCategories } from "./HTTPRequest";

function useFetchCategories() {
    const [initialCategories, setInitialCategories]  = useState([]);
    useEffect(function(){
        getAllCategoryData();
    },[]);
    console.log('get data from custom hooks')
    const getAllCategoryData = function() {
        getAllCategories().then(function(resp){
            if(resp.status === 200){
                setInitialCategories(resp.data);
            }
        })
    }
    return initialCategories;
}

export default useFetchCategories;