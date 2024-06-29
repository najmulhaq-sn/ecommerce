import { FunctionComponent } from "react";
import styles from "./PersanalServiceComponents.module.css";

export type PersanalServiceComponentsType = {
  className?: string;
  accountants?: string;
  image1?: string;
};

const PersanalServiceComponents: FunctionComponent<
  PersanalServiceComponentsType
> = ({ className = "", accountants, image1 }) => {
  return (
    <button className={[styles.clothingStores, className].join(" ")}>
      <div className={styles.clothingStoresChild} />
      <div className={styles.clothingStores1}>{accountants}</div>
      <img className={styles.image1Icon} alt="" src={image1} />
    </button>
  );
};

export default PersanalServiceComponents;
