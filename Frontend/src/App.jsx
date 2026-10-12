import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from '@/Router/PublicRouter';
import AuthRouter from '@/Router/AuthRouter';
import AdminRouter from '@/Router/AdminRouter';

const App = () => {
   
    // basename = le "base" de vite.config.js ('/' en local, '/WhiskyV2/' sur GitHub Pages)
    return (
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route path="/admin/*" element={<AdminRouter />} />
                </Routes>
            </BrowserRouter>
    );
};

export default App;