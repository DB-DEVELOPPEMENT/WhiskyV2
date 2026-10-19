import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@/Layout/Layout';
import Accueil from '@/Pages/Public/Accueil';
import Produits from '@/Pages/Public/Produits';
import ProduitDetail from '@/Pages/Public/ProduitDetail';
import Histoire from '@/Pages/Public/Histoire';
import Procedures from '@/Pages/Public/Procedures';
import Credits from '@/Pages/Public/Credits';
import Introuvable from '@/Pages/Public/Introuvable';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* L'accueil est servi directement à la racine du site :
                    GitHub Pages renvoie un vrai code 200 sur cette adresse (bon pour le référencement).
                    L'ancienne adresse /Accueil redirige vers la racine. */}
                <Route index element={<Accueil />} />
                <Route path="/Accueil" element={<Navigate to="/" replace />} />
                <Route path="/produits" element={<Produits />} />
                <Route path="/produits/:slug" element={<ProduitDetail />} />
                <Route path="/histoire" element={<Histoire />} />
                <Route path="/process" element={<Procedures />} />
                {/* Page légale : accessible seulement par les liens « Crédits » */}
                <Route path="/credits" element={<Credits />} />
                {/* Toute autre adresse : page 404 */}
                <Route path="*" element={<Introuvable />} />
            </Route>

            
        </Routes>
    );  
};

export default PublicRouter;
