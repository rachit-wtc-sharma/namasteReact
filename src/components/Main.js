import Filter from './Filter';
import { useState } from 'react';
import Home from './Home';
import useFetchAllProducts from '../utils/useFetchAllProducts';

function Main() {
    const productData = useFetchAllProducts();
    const [initialState, setInitialState] = useState('1');
  

    function sortBy(event) {
        let selectedValue = event.target.value;
        if(selectedValue == 1) {

        }else if(selectedValue == 2) {
            productData.sort(function(a,b){
                return a.price - b.price;
            });
        }else if(selectedValue == 3){
            productData.sort(function(a,b){
                return b.price - a.price;
            });
        }else if(selectedValue == 4){
            productData.sort(function(a,b){
                return a.rating.rate - b.rating.rate;
            });
        }else if(selectedValue == 5){
            productData.sort(function(a,b){
                return b.rating.rate - a.rating.rate;
            });
        }
        setInitialState(function(){
            return event.target.value;
        });

    }
    return (
       <>
                    <Filter initialState={initialState} sortBy={sortBy}/>
                    <Home productData = {productData} />
       </>
                   
    )
}

export default Main;