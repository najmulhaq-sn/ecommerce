import { FunctionComponent, useState, useCallback } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DashBordMenuAny from "../components/DashBordMenuAny";
import { useNavigate } from "react-router-dom";
import Frame1 from "../components/Frame1";
import styles from "./DashboardAnalytics.module.css";

const DashboardAnalytics: FunctionComponent = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.dashboardAnalytics}>
        <div className={styles.frameParent}>
          <div className={styles.frame}>
            <DashBordMenuAny />
            <button className={styles.frame1} onClick={onFrameClick}>
              <div className={styles.dashboardParent}>
                <div className={styles.dashboard}>Dashboard</div>
                <img className={styles.vectorIcon} alt="" src="/vector61.svg" />
              </div>
            </button>
          </div>
          <Frame1 />
        </div>
        <div className={styles.frame2}>
          <div className={styles.frame3} />
          <div className={styles.frame4}>
            <div className={styles.analyticsWrapper}>
              <b className={styles.analytics}>Analytics</b>
            </div>
            <div className={styles.frame5}>
              <DateTimePicker
                label="28 jan, 2021 - 28 Dec, 2021"
                value={frameDateTimePickerValue}
                onChange={(newValue: any) => {
                  setFrameDateTimePickerValue(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "28 jan, 2021 - 28 Dec, 2021",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.frame6}>
            <div className={styles.frameInner}>
              <div className={styles.frameGroup}>
                <div className={styles.mostViewedItemsWrapper}>
                  <b
                    className={styles.mostViewedItems}
                  >{`Most Viewed Items `}</b>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameParent1}>
                        <div className={styles.frame7}>
                          <div className={styles.jeans}>Jeans</div>
                          <b className={styles.mostViewedItems}>70%</b>
                        </div>
                        <div className={styles.frame8}>
                          <div className={styles.frameChild} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.frame7}>
                        <div className={styles.jeans}>Shirts</div>
                        <b className={styles.mostViewedItems}>40%</b>
                      </div>
                      <div className={styles.frame10}>
                        <div className={styles.frameItem} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.frame7}>
                        <div className={styles.jeans}>Belts</div>
                        <b className={styles.mostViewedItems}>60%</b>
                      </div>
                      <div className={styles.frame12}>
                        <div className={styles.rectangleDiv} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.capsParent}>
                      <div className={styles.caps}>Caps</div>
                      <b className={styles.b3}>80%</b>
                      <div className={styles.frameChild1} />
                      <div className={styles.frameChild2} />
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frame7}>
                      <div className={styles.jeans}>Others</div>
                      <b className={styles.mostViewedItems}>20%</b>
                    </div>
                    <div className={styles.frame14}>
                      <div className={styles.frameChild3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameInner1}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent6}>
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent8}>
                      <div className={styles.totalViewsWrapper}>
                        <b className={styles.mostViewedItems}>Total Views</b>
                      </div>
                      <div className={styles.kParent}>
                        <div className={styles.k}>100k</div>
                        <div className={styles.k}>80k</div>
                        <div className={styles.k}>60k</div>
                        <div className={styles.k}>50k</div>
                        <div className={styles.k}>20k</div>
                        <div className={styles.k}>0</div>
                      </div>
                    </div>
                    <div className={styles.frame15}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.ellipseDiv} />
                        <div className={styles.k}>Profit</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild4} />
                    <div className={styles.frame16}>
                      <div className={styles.k}>Jan</div>
                    </div>
                  </div>
                  <div className={styles.frameParent9}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame-10000033531.svg"
                    />
                    <div className={styles.thanLastMonthWrapper}>
                      <div className={styles.k}>5% than last month</div>
                    </div>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameChild5} />
                    <div className={styles.frame17}>
                      <div className={styles.k}>Feb</div>
                    </div>
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameChild6} />
                    <div className={styles.frame18}>
                      <div className={styles.k}>Mar</div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild7} />
                    <div className={styles.frame17}>
                      <div className={styles.k}>Apr</div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild5} />
                    <div className={styles.frame20}>
                      <div className={styles.k}>May</div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent3}>
                    <div className={styles.frameChild9} />
                    <div className={styles.frame21}>
                      <div className={styles.k}>Jun</div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent4}>
                    <div className={styles.frameChild7} />
                    <div className={styles.frame22}>
                      <div className={styles.k}>Jul</div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent5}>
                    <div className={styles.frameChild6} />
                    <div className={styles.frame18}>
                      <div className={styles.k}>Aug</div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent6}>
                    <div className={styles.frameChild12} />
                    <div className={styles.frame17}>
                      <div className={styles.k}>Sep</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default DashboardAnalytics;
