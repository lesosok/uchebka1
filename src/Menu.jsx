import { NavLink, Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Menu() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "red" : theme === "dark" ? "#fff" : "#000",
        fontWeight: isActive ? "bold" : "normal",
        marginRight: "10px",
        textDecoration: "none"
    });

    const linkStyle = {
        color: theme === "dark" ? "#fff" : "#000",
        marginRight: "10px",
        textDecoration: "none"
    };

    return(
        <nav style={{ marginBottom: "20px", padding: "10px", backgroundColor: theme === "dark" ? "#333" : "#f0f0f0" }}>
            <NavLink to="/" end style={navLinkStyle}>
              Главная
            </NavLink>

            <NavLink to="/about" end style={navLinkStyle}>
              О нас
            </NavLink>

            <Link to="/product/1" style={linkStyle}>Товар 1</Link>
            <Link to="/product/2" style={linkStyle}>Товар 2</Link>

            <Link to="/login" style={linkStyle}>Вход</Link>
            
            <Link to="/korzina" style={linkStyle}>Корзина</Link>

            <button onClick={toggleTheme} style={{ marginLeft: "20px" }}>
                Переключить тему ({theme})
            </button>
          </nav>
    );
}

export default Menu;