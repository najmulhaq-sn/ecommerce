import { FunctionComponent } from "react";
import styles from "./TravelCom.module.css";

export type TravelComType = {
  className?: string;
};

const TravelCom: FunctionComponent<TravelComType> = ({ className = "" }) => {
  return (
    <section className={[styles.hotelsParent, className].join(" ")}>
      <button className={styles.hotels}>
        <div className={styles.hotelsChild} />
        <div className={styles.hotels1}>Hotels</div>
        <img className={styles.image1Icon} alt="" src="/image-167@2x.png" />
      </button>
      <button className={styles.hotels}>
        <div className={styles.hotelsChild} />
        <div className={styles.hotels1}>Bed and Breakfasts</div>
        <img className={styles.image1Icon} alt="" src="/image-168@2x.png" />
      </button>
      <button className={styles.hotels}>
        <div className={styles.hotelsChild} />
        <div className={styles.hotels1}>Hostels</div>
        <img className={styles.image1Icon} alt="" src="/image-169@2x.png" />
      </button>
      <button className={styles.hotels}>
        <div className={styles.hotelsChild} />
        <div className={styles.hotels1}>Tour Operators</div>
        <img className={styles.image1Icon} alt="" src="/image-170@2x.png" />
      </button>
      <button className={styles.hotels}>
        <div className={styles.hotelsChild} />
        <div className={styles.hotels1}>Train Stations</div>
        <img className={styles.image1Icon} alt="" src="/image-171@2x.png" />
      </button>
      <button className={styles.hotels}>
        <div className={styles.hotelsChild} />
        <div className={styles.hotels1}>Travel Agencies</div>
        <img className={styles.image1Icon} alt="" src="/image-172@2x.png" />
      </button>
    </section>
  );
};

export default TravelCom;
