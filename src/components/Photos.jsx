import styles from "./Photos.module.css";
import { useEffect, useState } from "react";

const API_URL = "https://api.unsplash.com/photos?page=1";

function Photos ({searchedPhoto}) {

    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        const url = (searchedPhoto)
            ? `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(searchedPhoto)}`
            : API_URL;

        fetch(url, {
            headers: {
                "Authorization": `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setPhotos(data.results ?? data);
        })
        .catch(e => console.log(e));
    }, [searchedPhoto]);
    
    return (
        <section className={styles.photos_section}>
            <div className={styles.container}>
                <h2 className={styles.title_section}>Professional photos from Unsplash</h2>
                <div className={styles.photos}>
                    { photos.map((photo) => (
                        <img key={photo.id} src={photo.urls.full} alt="image" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Photos;