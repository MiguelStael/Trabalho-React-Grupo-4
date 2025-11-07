import { Routes, Route} from 'react-router'
import { Login } from '../Pages/Login'
import Home from './../Pages/Home/Home';
import { Layout } from '../Pages/Layout';
import { About } from '../Pages/About/index'
import { AuthProvider } from '../context/AuthContext.jsx'


export const Router = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route element={<Layout/>}>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}
