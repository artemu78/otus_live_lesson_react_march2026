import { Link } from "react-router"
import "./nav.css"

export const Nav = () => {
    return (
        <nav className="nav-container">
            <Link to="/" className="nav-brand">
                AI Tools
            </Link>

            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/add" className="nav-link">Add Tool</Link>
            </div>

            <div className="nav-actions">
                <button className="btn-login">Login</button>
            </div>
        </nav>
    )
}
