import { Routes, Route} from 'react-router'
import App from '../App'
import Login from '../Pages/Login'


export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    )
}