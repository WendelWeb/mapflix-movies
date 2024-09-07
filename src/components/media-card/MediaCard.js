import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";

const MediaCard = ({ media }) => {
  console.log(media,'jhygfdcfg');
  
  return (
    <div className={styles.card}>
      <Link href={`/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
            alt={`${media.original_title}-poster`}
            fill
          />
        </div>
        <div className={styles.content}>
          <h3>{media.original_title}</h3>
          <p>{media.release_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
