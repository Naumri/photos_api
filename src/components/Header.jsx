import styles from "./Header.module.css";
import searchIcon from "../assets/search.svg";

function Header() {
    return (
        <header>
            <div className={styles.container}>
                <h1 className={styles.logo}>PHOTOS API</h1>
                <nav className={styles.nav_desktop}>
                    <ul>
                        <li className={styles.active}><a href="#">Photos</a></li>
                        <li><a href="#">Random Photos</a></li>
                    </ul>
                    <div className={styles.input_wrapper}>
                        <input className={styles.search} id="search" placeholder="Search for an image" type="text" />
                        <img src={searchIcon} alt="search icon" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;