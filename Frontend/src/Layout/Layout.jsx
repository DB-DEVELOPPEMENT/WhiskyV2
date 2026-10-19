// import des modules nécessaires
// ici pour la V1  à vpor si je garde ou reste sur la v2
// import { Outlet } from 'react-router-dom';
// import { SliderProvider } from '@/Context/SliderContext';
// import Header from '@/Layout/Header/Header';
// import Footer from '@/Layout/Footer/Footer'

// // fonction d'appel du Layout.
// const Layout = () => {
//     return (
//         <SliderProvider>
//             <div className='layout'>
//                 <Header accueil={estPageAccueil} />
//                 <main>
//                     <Outlet />
//                 </main>
//                 <Footer accueil={estPageAccueil} />
//             </div>
//         </SliderProvider>

//     );
// };

// export default Layout;

// ici je démarre ma V2
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SliderProvider, useSlider } from '@/Context/SliderContext';
import Header from '@/Layout/Header/Header';
import Footer from '@/Layout/Footer/Footer';
import Fond from '@/Layout/Fond/Fond';

// Ce composant est rendu SOUS le Provider : il peut lire le contexte.
function LayoutContent() {
  const { activeSlide } = useSlider();
  const { pathname } = useLocation();

  // À chaque changement de page, on remonte en haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Le décor ne s'applique qu'à l'Accueil, pas aux futures pages.
  const chemin = pathname.replace(/\/+$/, '').toLowerCase();
  const estPageAccueil = chemin === '' || chemin === '/accueil';

  return (
    <div className={estPageAccueil ? "layout layout--accueil" : "layout"}>
      {estPageAccueil && <Fond activeSlide={activeSlide} />}
      <Header accueil={estPageAccueil} />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer accueil={estPageAccueil} />
    </div>
  );
}

// Un seul Provider entoure le header ET la page.
export default function Layout() {
  return (
    <SliderProvider>
      <LayoutContent />
    </SliderProvider>
  );
}
