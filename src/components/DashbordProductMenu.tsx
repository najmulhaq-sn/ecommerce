import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DashbordProductMenu.module.css";

export type DashbordProductMenuType = {
  className?: string;
  dukaan?: string;
  showComponent14?: boolean;
  showGroupDiv?: boolean;
  groupDivVisible?: boolean;
  groupDivVisible1?: boolean;
  groupDivVisible2?: boolean;
  groupDivVisible3?: boolean;
  groupDivVisible4?: boolean;
  groupDivVisible5?: boolean;

  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
};

const DashbordProductMenu: FunctionComponent<DashbordProductMenuType> = ({
  className = "",
  dukaan,
  showComponent14,
  showGroupDiv,
  groupDivVisible,
  groupDivVisible1,
  groupDivVisible2,
  groupDivVisible3,
  groupDivVisible4,
  groupDivVisible5,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.componentChild} />
      <div className={styles.dukaan}>{dukaan}</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <img className={styles.groupIcon} alt="" src="/group2.svg" />
      </div>
      <div className={styles.component14Wrapper}>
        {showComponent14 && (
          <div className={styles.component14}>
            <div className={styles.dashboardParent}>
              <img
                className={styles.dashboardIcon}
                alt=""
                src="/dashboard.svg"
              />
              <b className={styles.dashboard}>Dashboard</b>
            </div>
          </div>
        )}
      </div>
      {showGroupDiv && (
        <div className={styles.messagesParent}>
          <div className={styles.messages}>Messages</div>
          <img
            className={styles.groupItem}
            alt=""
            src="/group-1000003273.svg"
          />
        </div>
      )}
      {groupDivVisible && (
        <div className={styles.customerParent}>
          <div className={styles.customer}>Customer</div>
          <img
            className={styles.groupInner}
            alt=""
            src="/group-1000003272.svg"
          />
        </div>
      )}
      <div className={styles.settingsParent}>
        <div className={styles.settings}>Settings</div>
        <img className={styles.layer2Icon} alt="" src="/layer-21.svg" />
      </div>
      {groupDivVisible1 && (
        <div className={styles.productsParent}>
          <div className={styles.products}>Products</div>
          <img
            className={styles.groupChild1}
            alt=""
            src="/group-1000003228.svg"
          />
        </div>
      )}
      {groupDivVisible2 && (
        <div className={styles.transactionsParent}>
          <div className={styles.transactions}>Transactions</div>
          <img
            className={styles.groupChild2}
            alt=""
            src="/group-1000003229.svg"
          />
        </div>
      )}
      {groupDivVisible3 && (
        <div className={styles.dashboardGroup}>
          <div className={styles.dashboard1}>Dashboard</div>
          <img className={styles.vectorIcon} alt="" src="/vector31.svg" />
        </div>
      )}
      {groupDivVisible4 && (
        <div className={styles.statisticsParent}>
          <div className={styles.statistics}>Statistics</div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.groupChild3} />
            <div className={styles.groupChild4} />
          </div>
        </div>
      )}
      {groupDivVisible5 && (
        <div className={styles.paymentParent}>
          <div className={styles.payment}>Payment</div>
          <img className={styles.vectorIcon1} alt="" src="/vector23.svg" />
        </div>
      )}
      <div className={styles.logoutParent}>
        <div className={styles.logout}>Logout</div>
        <img className={styles.vectorIcon2} alt="" src="/vector41.svg" />
      </div>
      <div className={styles.componentItem} />
      <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
    </div>
  );
};

export default DashbordProductMenu;
