import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameClick1 = useCallback(() => {
    navigate("/dashboard-analytics");
  }, [navigate]);

  const onFrameClick2 = useCallback(() => {
    navigate("/dashboard-shop-details");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.frameInner}>
          <div className={styles.rectangleParent}>
            <div className={styles.instanceChild} />
            <div className={styles.dukaan}>SHop Name</div>
            <button className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <img className={styles.groupIcon} alt="" src="/group1@2x.png" />
            </button>
            <button className={styles.component14Wrapper}>
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
            </button>
            <div className={styles.messagesParent}>
              <div className={styles.messages}>Messages</div>
              <img
                className={styles.groupItem}
                alt=""
                src="/group-1000003273.svg"
              />
            </div>
            <div className={styles.customerParent}>
              <div className={styles.customer}>Customer</div>
              <img
                className={styles.groupInner}
                alt=""
                src="/group-1000003272.svg"
              />
            </div>
            <button className={styles.settingsParent}>
              <div className={styles.settings}>Settings</div>
              <img className={styles.layer2Icon} alt="" src="/layer-2@2x.png" />
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
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector22@2x.png"
              />
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
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector110@2x.png"
              />
            </button>
            <div className={styles.instanceItem} />
            <img className={styles.shapeIcon} alt="" src="/shape@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <button className={styles.frame1} onClick={onFrameClick}>
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon} alt="" src="/frame2@2x.png" />
            <div className={styles.products1}>Products</div>
          </div>
        </button>
        <div className={styles.frame2}>
          <button className={styles.frame3} onClick={onFrameClick1}>
            <div className={styles.databaseParent}>
              <img
                className={styles.databaseIcon}
                alt=""
                src="/database@2x.png"
              />
              <div className={styles.analytics}>Analytics</div>
            </div>
          </button>
          <button className={styles.frame4} onClick={onFrameClick2}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon3}
                alt=""
                src="/vector24@2x.png"
              />
              <div className={styles.analytics}>shop details</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
