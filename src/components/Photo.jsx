import { useEffect, useState } from "react";
import styles from "./Photo.module.css";
import loadingImg from "../assets/loading3.svg";

function Photo ({photo}) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [])

    return (
        <div className={styles.photo_wrapper} style={{backgroundColor: !isLoading && "transparent"}}>
            <img className={styles.photo} src={photo.urls.regular} style={{opacity: isLoading? "0" : "1"}} alt="image" />
        </div>
    )
}

export default Photo;