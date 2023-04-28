import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import ListIndex from '../pages/ListIndex';
import ShipPage from '../pages/ShipPage';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
//import Login from '../components/Login';




const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Layout />}>
                <Route exact path="starships" element={<PrivateRoute component={ListIndex} />} />
                {/*<Route path='starships' element={<ListIndex />} />*/}
                <Route exact path="ship/:id" element={<PrivateRoute component={ShipPage} />} />
                {/* <Route path="ship/:id" element={<ShipPage />} /> */}
                { /* <Route path="login" element={<Login />} />
                 Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
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