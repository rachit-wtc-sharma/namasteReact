import Logo from './Logo'; 
import Navigations from './Navigations';
import Categories from './Categories';
function Header() {
    return (
        <div className="header">
            <Logo />
            <Categories />
            <Navigations />
        </div>
    )
}

export default Header;