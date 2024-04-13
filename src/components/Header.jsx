import styles from "./Header.module.css";
import Search from "./Search";

function Header({inputValue}) {
    return (
        <header>
            <div className={styles.container}>
                <h1 className={styles.logo}><a href="/">PHOTOS API</a></h1>
                <nav className={styles.nav_desktop}>
                    <ul>
                        <li className={styles.active}><a href="/">Photos</a></li>
                        <li><a href="/random_photo">Random Photo</a></li>
                    </ul>
                   <Search inputValue={inputValue} />
                </nav>
            </div>
        </header>
    )
}

export default Header;