
import { Outlet } from 'react-router';
import { Navbar } from './../../components/NavBar/index';
export const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
