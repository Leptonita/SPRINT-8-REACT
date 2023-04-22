import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import ListIndex from '../pages/ListIndex';
import ShipPage from '../pages/ShipPage';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Layout />}>
                <Route path='starships' element={<ListIndex />} />
                <Route path="ship/:id" element={<ShipPage />} />
                { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
                <Route path="*" element={<div>404</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;

const Layout = () => {

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}