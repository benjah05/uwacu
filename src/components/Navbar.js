import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <nav className="nav">
    <Link to="/" className="site-title">UWACU</Link>
    <ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/learning">Learning</Link>
    </li>
    <li>
    <Link to="/shop">Shop</Link>
    </li>
    <li>
    <Link to="/AuthPage">Log In/ Sign Up</Link>
    </li>
    <li>
    <Link to="/profile">Profile</Link>
    </li>
    </ul>
    </nav>
    )
}