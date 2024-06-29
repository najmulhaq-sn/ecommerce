import { FunctionComponent, memo } from "react";
import MenuelistCom from "./MenuelistCom";
import styles from "./List1.module.css";

export type List1Type = {
  className?: string;
};

const List1: FunctionComponent<List1Type> = memo(({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.frame1}>
        <div className={styles.productList}>
          <MenuelistCom
            component37Position="absolute"
            component37Top="0px"
            component37Left="0px"
          />
        </div>
      </div>
    </div>
  );
});

export default List1;
