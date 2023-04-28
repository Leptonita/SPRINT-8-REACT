import Provider from './app/Provider';
import { Outlet } from 'react-router-dom';
import ListIndex from '../pages/ListIndex';
import ShipPage from '../pages/ShipPage';
import Login from '../components/Login';

const MyContextLayout = () => {


    return (
        <Provider>
            <Outlet /> {/**/}
            <ListIndex />
            <ShipPage />
            <Login />
        </Provider>
    );
};

export default MyContextLayout;