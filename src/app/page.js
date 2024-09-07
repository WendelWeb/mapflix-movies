import styles from "./page.module.scss";
import MediaCard from "@/components/media-card/mediaCard";
import Popular from "@/components/popular/Popular";
import { notFound } from "next/navigation";

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
    </div>
  );
}
