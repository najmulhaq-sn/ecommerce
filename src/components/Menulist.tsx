import { FunctionComponent } from "react";
import ShopDetailsInMenu from "./ShopDetailsInMenu";
import styles from "./Menulist.module.css";

export type MenulistType = {
  className?: string;
};

const Menulist: FunctionComponent<MenulistType> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.frame1} />
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-1538471@2x.png"
          />
          <div className={styles.frame4} />
        </div>
      </div>
      <ShopDetailsInMenu />
    </div>
  );
};

export default Menulist;
