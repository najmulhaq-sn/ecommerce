import { FunctionComponent, useCallback } from "react";
import DashbordShopMenu from "./DashbordShopMenu";
import { useNavigate } from "react-router-dom";
import styles from "./DashbordMenueShop.module.css";

export type DashbordMenueShopType = {
  className?: string;
};

const DashbordMenueShop: FunctionComponent<DashbordMenueShopType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameButtonClick1 = useCallback(() => {
    navigate("/dashboard-analytics");
  }, [navigate]);

  const onFrameButtonClick2 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.instanceParent, className].join(" ")}>
      <DashbordShopMenu />
      <button className={styles.dashboardParent} onClick={onFrameButtonClick}>
        <div className={styles.dashboard}>Dashboard</div>
        <img className={styles.vectorIcon} alt="" src="/vector61.svg" />
      </button>
      <button className={styles.databaseParent} onClick={onFrameButtonClick1}>
        <img className={styles.databaseIcon} alt="" src="/database2.svg" />
        <div className={styles.analytics}>Analytics</div>
      </button>
      <button className={styles.component15}>
        <div className={styles.component15Child} />
        <div className={styles.shopDetailsParent}>
          <div className={styles.shopDetails}>shop details</div>
          <img className={styles.vectorIcon1} alt="" src="/vector71.svg" />
        </div>
      </button>
      <button className={styles.productsParent} onClick={onFrameButtonClick2}>
        <div className={styles.products}>Products</div>
        <img className={styles.frameChild} alt="" src="/group-1000003228.svg" />
      </button>
    </div>
  );
};

export default DashbordMenueShop;
