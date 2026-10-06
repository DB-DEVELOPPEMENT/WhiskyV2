import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@/Layout/Layout';
import Accueil from '@/Pages/Public/Accueil';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/Accueil" />} />
                <Route path="/Accueil" element={<Accueil />} />
            </Route>

            
        </Routes>
    );  
};

export default PublicRouter;
