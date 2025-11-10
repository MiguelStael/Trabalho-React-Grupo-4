
import { Outlet } from 'react-router';
import { Navbar } from './../../components/NavBar/index';
import { Footer } from '../../components/Footer';
export const Layout = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
