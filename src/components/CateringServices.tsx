import { FunctionComponent } from "react";
import styles from "./CateringServices.module.css";

export type CateringServicesType = {
  className?: string;
};

const CateringServices: FunctionComponent<CateringServicesType> = ({
  className = "",
}) => {
  return (
    <button className={[styles.cateringServices, className].join(" ")}>
      <div className={styles.cateringServicesChild} />
      <div className={styles.cateringServices1}>
        <span className={styles.cateringServicesTxtContainer}>
          <p className={styles.catering}>Catering</p>
          <p className={styles.catering}> Services</p>
        </span>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1117@2x.png" />
    </button>
  );
};

export default CateringServices;
