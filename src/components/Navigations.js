import {NavLink} from 'react-router-dom';

function Navigations() {
    return (
        <ul className="nav-items">
            <li className="nav-item"><NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Home</NavLink></li>
            <li className="nav-item"><NavLink to='/about' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>About us</NavLink></li>
            <li className="nav-item">Sign In</li>
            <li className="nav-item">Cart</li>
        </ul>
    )
}

export default Navigations;