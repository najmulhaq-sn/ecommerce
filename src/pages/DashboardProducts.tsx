import { FunctionComponent, useCallback } from "react";
import I3 from "../components/I3";
import { useNavigate } from "react-router-dom";
import I2 from "../components/I2";
import I from "../components/I";
import DashbordProductMenu from "../components/DashbordProductMenu";
import styles from "./DashboardProducts.module.css";

const DashboardProducts: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponentClick = useCallback(() => {
    navigate("/list-your-product-page");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/dashboard-shop-details");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameClick1 = useCallback(() => {
    navigate("/dashboard-analytics");
  }, [navigate]);

  return (
    <div className={styles.dashboardProducts}>
      <div className={styles.frameWrapper}>
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.frameParent}>
              <div className={styles.frame2}>
                <I3 />
                <button
                  className={styles.component15}
                  onClick={onComponentClick}
                >
                  <div className={styles.component15Child} />
                  <div className={styles.listYourProducts}>
                    List Your Products
                  </div>
                </button>
                <I2 />
                <div className={styles.frame3} />
              </div>
              <div className={styles.frame4}>
                <div className={styles.frame5}>
                  <div className={styles.frame6}>
                    <div className={styles.frameGroup}>
                      <div className={styles.frame7}>
                        <div className={styles.frame8}>
                          <div className={styles.frameChild} />
                        </div>
                        <div
                          className={styles.kisspngChowMeinChineseNoodParent}
                        >
                          <img
                            className={styles.kisspngChowMeinChineseNoodIcon}
                            alt=""
                            src="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-12@2x.png"
                          />
                          <div
                            className={styles.chineseYakisbo}
                          >{`Chinese Yakisbo `}</div>
                          <div className={styles.frameItem} />
                        </div>
                      </div>
                      <div className={styles.frame9}>
                        <div className={styles.frame10}>
                          <div className={styles.frame11}>
                            <div className={styles.frameInner} />
                          </div>
                          <div className={styles.frame12}>
                            <div
                              className={styles.chineseYakisbo1}
                            >{`Chinese Yakisbo `}</div>
                          </div>
                        </div>
                        <div className={styles.frame13}>
                          <div className={styles.frame14}>
                            <div className={styles.frameDiv} />
                          </div>
                          <div className={styles.frame15}>
                            <div
                              className={styles.ametMinimMollit}
                            >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
                          </div>
                        </div>
                        <div className={styles.frame16}>
                          <div className={styles.frame17}>
                            <div className={styles.wrapper}>
                              <div className={styles.div}>4.5</div>
                            </div>
                          </div>
                          <div className={styles.frame18}>
                            <div className={styles.maskGroupParent}>
                              <img
                                className={styles.maskGroupIcon}
                                alt=""
                                src="/mask-group5@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon1}
                                alt=""
                                src="/mask-group6@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon2}
                                alt=""
                                src="/mask-group7@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon3}
                                alt=""
                                src="/mask-group8@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon4}
                                alt=""
                                src="/mask-group9@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.frame19}>
                          <img
                            className={styles.frameIcon}
                            alt=""
                            src="/frame11.svg"
                          />
                          <div className={styles.frame20}>
                            <div className={styles.frame21}>
                              <div className={styles.div1}>$5.08</div>
                            </div>
                            <div className={styles.frameChild1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <I />
                  <div className={styles.frame22}>
                    <div className={styles.frameGroup}>
                      <div className={styles.frame7}>
                        <div className={styles.frame8}>
                          <div className={styles.frameChild} />
                        </div>
                        <div
                          className={styles.kisspngChowMeinChineseNoodParent}
                        >
                          <img
                            className={styles.kisspngChowMeinChineseNoodIcon}
                            alt=""
                            src="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-12@2x.png"
                          />
                          <div
                            className={styles.chineseYakisbo}
                          >{`Chinese Yakisbo `}</div>
                          <div className={styles.frameItem} />
                        </div>
                      </div>
                      <div className={styles.frame9}>
                        <div className={styles.frame10}>
                          <div className={styles.frame11}>
                            <div className={styles.frameInner} />
                          </div>
                          <div className={styles.frame12}>
                            <div
                              className={styles.chineseYakisbo1}
                            >{`Chinese Yakisbo `}</div>
                          </div>
                        </div>
                        <div className={styles.frame13}>
                          <div className={styles.frame14}>
                            <div className={styles.frameDiv} />
                          </div>
                          <div className={styles.frame15}>
                            <div
                              className={styles.ametMinimMollit}
                            >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
                          </div>
                        </div>
                        <div className={styles.frame16}>
                          <div className={styles.frame17}>
                            <div className={styles.wrapper}>
                              <div className={styles.div}>4.5</div>
                            </div>
                          </div>
                          <div className={styles.frame18}>
                            <div className={styles.maskGroupParent}>
                              <img
                                className={styles.maskGroupIcon}
                                alt=""
                                src="/mask-group5@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon1}
                                alt=""
                                src="/mask-group6@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon2}
                                alt=""
                                src="/mask-group7@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon3}
                                alt=""
                                src="/mask-group8@2x.png"
                              />
                              <img
                                className={styles.maskGroupIcon4}
                                alt=""
                                src="/mask-group9@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.frame19}>
                          <img
                            className={styles.frameIcon}
                            alt=""
                            src="/frame11.svg"
                          />
                          <div className={styles.frame36}>
                            <div className={styles.frame36}>
                              <div className={styles.div3}>$5.08</div>
                            </div>
                            <div className={styles.frame38}>
                              <div className={styles.frameChild4} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame39}>
        <button className={styles.frameButton}>
          <div className={styles.instanceParent}>
            <DashbordProductMenu
              dukaan="SHop Name"
              showComponent14={false}
              showGroupDiv={false}
              groupDivVisible={false}
              groupDivVisible1={false}
              groupDivVisible2={false}
              groupDivVisible3={false}
              groupDivVisible4={false}
              groupDivVisible5={false}
              groupDivPosition="absolute"
              groupDivTop="0px"
              groupDivLeft="0px"
            />
            <button className={styles.frame40} onClick={onFrameClick}>
              <div className={styles.shopDetailsParent}>
                <div className={styles.shopDetails}>shop details</div>
                <img className={styles.vectorIcon} alt="" src="/vector51.svg" />
              </div>
            </button>
            <button className={styles.frame41}>
              <div
                className={styles.vectorParent}
                onClick={onFrameContainerClick}
              >
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector61.svg"
                />
                <div className={styles.dashboard}>Dashboard</div>
              </div>
            </button>
            <button className={styles.frame42}>
              <div className={styles.component14}>
                <div className={styles.component14Child} />
                <div className={styles.groupParent}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-10000032281.svg"
                  />
                  <div className={styles.products}>Products</div>
                </div>
              </div>
            </button>
            <button className={styles.frame43} onClick={onFrameClick1}>
              <div className={styles.databaseParent}>
                <img
                  className={styles.databaseIcon}
                  alt=""
                  src="/database1.svg"
                />
                <div className={styles.analytics}>Analytics</div>
              </div>
            </button>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DashboardProducts;
