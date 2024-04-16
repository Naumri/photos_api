import styles from "./Photos.module.css";
import { useEffect, useState } from "react";
import Photo from "./Photo";



function Photos ({searchedPhoto}) {

    let [page, setPage] = useState(1);
    let API_URL = `https://api.unsplash.com/photos?page=${page}&per_page=20`;

    const [photos, setPhotos] = useState([]);

    const showMore = () => {
        return setPage(prev => prev + 1)
    }

    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        const url = (searchedPhoto)
            ? `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${encodeURIComponent(searchedPhoto)}`
            : API_URL;

        fetch(url, {
            headers: {
                "Authorization": `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`
            }
        })
        .then(response => response.json())
        .then(data => {
            const newPhotos = data.results ?? data;
            const nonDuplicatePhotos = newPhotos.filter(newPhoto => 
                !allPhotos.some(photo => photo.id === newPhoto.id)
            );
            setPhotos(nonDuplicatePhotos);
            setAllPhotos(prevAllPhotos => [...prevAllPhotos, ...nonDuplicatePhotos]);
        })
        .catch(e => console.log(e));
    }, [searchedPhoto, page]);
    
    return (
        <section className={styles.photos_section}>
            <div className={styles.container}>
                <h2 className={styles.title_section}>Professional photos from Unsplash</h2>
                <div className={styles.photos}>
                    { photos.map((photo) => (
                        <Photo key={photo.id} photo={photo} />
                    ))}
                </div>
                <button className={styles.showMore} onClick={showMore}>Show More</button>
            </div>
        </section>
    )
}

export default Photos;