import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from '@/Router/PublicRouter';
import AuthRouter from '@/Router/AuthRouter';
import AdminRouter from '@/Router/AdminRouter';

const App = () => {
   
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route path="/admin/*" element={<AdminRouter />} />
                </Routes>
            </BrowserRouter>
    );
};

export default App;