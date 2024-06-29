import { FunctionComponent } from "react";
import styles from "./DashBordMenuAny.module.css";

export type DashBordMenuAnyType = {
  className?: string;
};

const DashBordMenuAny: FunctionComponent<DashBordMenuAnyType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.instanceChild} />
      <div className={styles.dukaan}>SHop Name</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <img className={styles.groupIcon} alt="" src="/group2.svg" />
      </div>
      <div className={styles.component14Wrapper}>
        <div className={styles.component14}>
          <div className={styles.dashboardParent}>
            <img className={styles.dashboardIcon} alt="" src="/dashboard.svg" />
            <b className={styles.dashboard}>Dashboard</b>
          </div>
        </div>
      </div>
      <div className={styles.messagesParent}>
        <div className={styles.messages}>Messages</div>
        <img className={styles.groupItem} alt="" src="/group-1000003273.svg" />
      </div>
      <div className={styles.customerParent}>
        <div className={styles.customer}>Customer</div>
        <img className={styles.groupInner} alt="" src="/group-1000003272.svg" />
      </div>
      <button className={styles.settingsParent}>
        <div className={styles.settings}>Settings</div>
        <img className={styles.layer2Icon} alt="" src="/layer-21.svg" />
      </button>
      <div className={styles.productsParent}>
        <div className={styles.products}>Products</div>
        <img
          className={styles.groupChild1}
          alt=""
          src="/group-1000003228.svg"
        />
      </div>
      <div className={styles.transactionsParent}>
        <div className={styles.transactions}>Transactions</div>
        <img
          className={styles.groupChild2}
          alt=""
          src="/group-1000003229.svg"
        />
      </div>
      <div className={styles.dashboardGroup}>
        <div className={styles.dashboard1}>Dashboard</div>
        <img className={styles.vectorIcon} alt="" src="/vector31.svg" />
      </div>
      <div className={styles.statisticsParent}>
        <div className={styles.statistics}>Statistics</div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
        </div>
      </div>
      <div className={styles.paymentParent}>
        <div className={styles.payment}>Payment</div>
        <img className={styles.vectorIcon1} alt="" src="/vector23.svg" />
      </div>
      <button className={styles.logoutParent}>
        <div className={styles.logout}>Logout</div>
        <img className={styles.vectorIcon2} alt="" src="/vector41.svg" />
      </button>
      <div className={styles.instanceItem} />
      <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
    </div>
  );
};

export default DashBordMenuAny;
