import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Layout = () => {
    return (
        <div className="h-full flex flex-col">
            <Navigation />
            <Outlet />  
        </div>
    )
}

export default Layout