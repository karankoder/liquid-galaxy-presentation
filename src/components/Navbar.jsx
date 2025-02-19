import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/LGLogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo} className={styles.navbarLogo} />
            <div className={styles.navbarLinks}>
                <Link to="/" className={styles.navbarLink}>Home</Link>
                <Link to="/tools" className={styles.navbarLink}>Tools</Link>
                <Link to="/settings" className={styles.navbarLink}>Settings</Link>
            </div>
        </div>
    );
};

export default Navbar;
