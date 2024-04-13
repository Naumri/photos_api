import styles from "./RandomPhotos.module.css";
import randomImg from "../assets/random.svg";
import { useEffect, useRef, useState } from "react";

const API_URL = "https://api.unsplash.com/photos/random";

function RandomPhotos () {

    const [image, setImage] = useState(null);
    const [fetchOnButtonClick, setFetchOnButtonClick] = useState(false);

    useEffect(() => {
        if (!fetchOnButtonClick) {
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(API_URL, {
                    headers: {
                        "Authorization": `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`
                    }
                });
                const data = await response.json();
                setImage(data);
                console.log(data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
        setFetchOnButtonClick(false);
    }, [fetchOnButtonClick]);

    const handleClick = () => {
        setFetchOnButtonClick(true);
    };

    return (
        <section className={styles.random_section}>
            <div className={styles.container}>
                <div className={styles.title_section}>
                    <h2>Random Photo</h2>
                    <img src={randomImg} alt="Random Image" />
                </div>
                <button onClick={handleClick} className={styles.random_button}>click here to find a random image</button>
                <div className={styles.random_photo}>
                    { image && (
                        <img className={styles.photo_found} src={image.urls.full} alt="A Photo" />
                    )}
                </div>
            </div>
        </section>
    )
}

export default RandomPhotos;