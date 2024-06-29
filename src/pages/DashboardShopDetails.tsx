import { FunctionComponent } from "react";
import DashbordMenueShop from "../components/DashbordMenueShop";
import Shopinput from "../components/Shopinput";
import Time from "../components/Time";
import styles from "./DashboardShopDetails.module.css";

const DashboardShopDetails: FunctionComponent = () => {
  return (
    <div className={styles.dashboardShopDetails}>
      <DashbordMenueShop />
      <div className={styles.frame}>
        <Shopinput />
      </div>
      <div className={styles.frame1}>
        <Time />
      </div>
    </div>
  );
};

export default DashboardShopDetails;
