import Header from './src/components/Header';
import Footer from './src/components/Footer';
import {Outlet } from 'react-router-dom';
function MainLayout() {
    return (
        <div className='page-wrapper'>
           <header>
                <Header />
           </header>
           <main>
           <div className="main-content">
                <div className="main">
                    <Outlet />
                </div>
            </div>
           </main>
           <footer>
                <Footer />
           </footer>
        </div>
    )
}

export default MainLayout;