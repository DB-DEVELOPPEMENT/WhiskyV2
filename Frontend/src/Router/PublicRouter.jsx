import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@/Layout/Layout';
import Accueil from '@/Pages/Public/Accueil';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* L'accueil est servi directement à la racine du site :
                    GitHub Pages renvoie un vrai code 200 sur cette adresse (bon pour le référencement).
                    L'ancienne adresse /Accueil redirige vers la racine. */}
                <Route index element={<Accueil />} />
                <Route path="/Accueil" element={<Navigate to="/" replace />} />
            </Route>

            
        </Routes>
    );  
};

export default PublicRouter;
