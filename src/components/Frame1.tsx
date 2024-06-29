import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame1.module.css";

export type Frame1Type = {
  className?: string;
};

const Frame1: FunctionComponent<Frame1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameClick1 = useCallback(() => {
    navigate("/dashboard-shop-details");
  }, [navigate]);

  return (
    <div className={[styles.frame, className].join(" ")}>
      <button className={styles.frame1} onClick={onFrameClick}>
        <div className={styles.productsParent}>
          <div className={styles.products}>Products</div>
          <img
            className={styles.frameIcon}
            alt=""
            src="/group-1000003228.svg"
          />
        </div>
      </button>
      <button className={styles.frame2} onClick={onFrameClick1}>
        <div className={styles.shopDetailsParent}>
          <div className={styles.shopDetails}>shop details</div>
          <img className={styles.vectorIcon} alt="" src="/vector51.svg" />
        </div>
      </button>
      <button className={styles.frame3}>
        <div className={styles.frame4}>
          <div className={styles.component14}>
            <div className={styles.component14Child} />
          </div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.databaseParent}>
            <img className={styles.databaseIcon} alt="" src="/database11.svg" />
            <div className={styles.analytics}>Analytics</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Frame1;
