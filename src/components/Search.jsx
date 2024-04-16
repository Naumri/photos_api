
import styles from "./Search.module.css";
import searchIcon from "../assets/search.svg";
import { useState } from "react";

function Search ({inputValue}) {

    const [searchValue, setSearchValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const value = e.target.value;
            inputValue(value);
        }
    }

    const handleClick = () => {
        inputValue(searchValue);
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
  
    return (
    <div className={styles.input_wrapper}>
        <input autoComplete="off" value={searchValue} onKeyDown={handleKeyDown} onChange={handleChange} className={styles.search} id="search" placeholder="Search for an image" type="text" />
        <img onClick={handleClick} src={searchIcon} alt="search icon" />
    </div>
    )
}

export default Search;
