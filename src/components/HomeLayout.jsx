import { Link } from "react-router-dom";
import logoImage from './lookback.svg';

function HomeLayout() {

    return (
        <div className="home-page">
            <img src={logoImage} />
            <Link to={'/home'}>Home</Link>
            <Link to={'/add'}>Skills</Link>
        </div>
    )
}

export default HomeLayout;