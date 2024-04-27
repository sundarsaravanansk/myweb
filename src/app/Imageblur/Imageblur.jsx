"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from "./Image.module.css"

const Imageblur = ({ src, alt , width , height , className}) => {
    
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
      setLoaded(true);
    };
    return (
        <div className={styles.imageContainer}>
        <div className={`${styles.imageWrapper} ${loaded ? styles.loaded : ''}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleImageLoad}
            className={className}
            loading='lazy'
          />
        </div>
      </div>
    );
}

export default Imageblur;
