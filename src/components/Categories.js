import { NavLink } from 'react-router-dom';
import useFetchCategories from '../utils/useFetchCategories';
function Categories() {
    const initialCategories = useFetchCategories();
    return (
        <ul className="categories">
            {initialCategories.map(function(cat,index){
                return (
                    <li key={index}>
                        <NavLink to={'/'+ cat} key={index} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }>{cat}</NavLink>
                  </li>
                )
                
            })}
        </ul>
    )
}

export default Categories;