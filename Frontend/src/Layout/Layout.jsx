// import des modules nécessaires
import { Outlet } from 'react-router-dom';
import { SliderProvider } from '@/Context/SliderContext';
import Header from '@/Layout/Header/Header';
import Footer from '@/Layout/Footer/Footer'

// fonction d'appel du Layout.
const Layout = () => {
    return (
        <SliderProvider>
            <div className='layout'>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </SliderProvider>

    );
};

export default Layout;
