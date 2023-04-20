import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListIndex from '../pages/ListIndex';
import ShipPage from '../pages/ShipPage';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<ListIndex />} />
                <Route path="ship/:id" element={<ShipPage />} />
                { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
                <Route path="*" element={<div>404</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;