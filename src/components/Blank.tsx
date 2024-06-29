import { FunctionComponent } from "react";
import styles from "./Blank.module.css";

export type BlankType = {
  className?: string;
};

const Blank: FunctionComponent<BlankType> = ({ className = "" }) => {
  return (
    <section className={[styles.frame, className].join(" ")}>
      <div className={styles.frame1}>
        <div className={styles.reviews} />
      </div>
    </section>
  );
};

export default Blank;
