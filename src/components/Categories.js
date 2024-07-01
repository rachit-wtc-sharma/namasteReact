import { useEffect, useState } from 'react';
import {getAllCategories} from './HTTPRequest';
function Categories() {
    const [initialCategories, setInitialCategories]  = useState([]);
    useEffect(function(){
        getAllCategories().then(function(resp){
            if(resp.status == 200) {
                console.log(resp);
                setInitialCategories(resp.data);
            } 
        })
    },[]);
    return (
        <ul className="categories">
            {initialCategories.map(function(cat,index){
                return <li key={index} >{cat}</li>
            })}
        </ul>
    )
}

export default Categories;