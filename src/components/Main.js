import Products from './Products';
import Filter from './Filter';
import { getAllProducts } from './HTTPRequest';
import { useEffect, useState } from 'react';
import Categories from './Categories';
function Main() {
    const [productData, setProductData] = useState([]);
    const [initialState, setInitialState] = useState('1')
    useEffect(function(){
        getProductData();
    },[]);
    const getProductData = function(){
        getAllProducts().then(function(resp){
            if(resp.status === 200){
                setProductData(resp.data);
            }
        });
    }
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
        <div className="main-content">
            <div className="main">
                    <Categories />
                    <Filter initialState={initialState} sortBy={sortBy}/>
                    <Products productData={productData}/>
            </div>
        </div>
    )
}

export default Main;