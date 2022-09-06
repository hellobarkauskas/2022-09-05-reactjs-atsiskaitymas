import { Link } from "react-router-dom";
import './Layout.css'
import logoImage from './lookback.svg';

function MainLayout() {

    return (
        <div className="main-page">
            <img src={logoImage} />
            <Link to={'/'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    )
}

export default MainLayout;