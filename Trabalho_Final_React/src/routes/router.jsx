import { Routes, Route} from 'react-router'
import App from '../App'


export const Router = () => {
    return (
        <Routes>
            <Route path='/home' element={<App/>} />
        </Routes>
    )
}