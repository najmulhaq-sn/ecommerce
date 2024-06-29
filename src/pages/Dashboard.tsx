import { FunctionComponent, useState } from "react";
import "antd/dist/antd.min.css";
import { TextField, Icon, LinearProgress, Box, Slider } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Slider as AntSlider } from "antd";
import FrameComponent from "../components/FrameComponent";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.dashboard}>
        <div className={styles.frame}>
          <FrameComponent />
        </div>
        <main className={styles.frame1}>
          <section className={styles.frameInner}>
            <main className={styles.frameParent}>
              <section className={styles.frameGroup}>
                <div className={styles.dashboardParent}>
                  <h3 className={styles.dashboard1}>Dashboard</h3>
                  <div className={styles.frame2}>
                    <div className={styles.frame3}>
                      <b className={styles.totalViews}>Total Views</b>
                      <b className={styles.k}>500K</b>
                    </div>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame3.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frame4}>
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
              </section>
              <section className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameParent2}>
                        <div className={styles.frameParent3}>
                          <div className={styles.totalViewsWrapper}>
                            <b className={styles.totalViews}>Total Views</b>
                          </div>
                          <div className={styles.kParent}>
                            <div className={styles.div}>100k</div>
                            <div className={styles.div}>80k</div>
                            <div className={styles.div}>60k</div>
                            <div className={styles.div}>50k</div>
                            <div className={styles.div}>20k</div>
                            <div className={styles.div}>0</div>
                          </div>
                        </div>
                        <div className={styles.frame5}>
                          <div className={styles.ellipseParent}>
                            <div className={styles.frameChild} />
                            <div className={styles.div}>Profit</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameItem} />
                        <div className={styles.jan}>Jan</div>
                      </div>
                      <div className={styles.frameParent4}>
                        <img
                          className={styles.frameChild1}
                          alt=""
                          src="/frame-1000003353@2x.png"
                        />
                        <div className={styles.thanLastMonthWrapper}>
                          <div className={styles.div}>5% than last month</div>
                        </div>
                      </div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.jan}>Feb</div>
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameChild2} />
                        <div className={styles.jan}>Mar</div>
                      </div>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild3} />
                        <div className={styles.jan}>Apr</div>
                      </div>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.rectangleDiv} />
                        <div className={styles.jan}>May</div>
                      </div>
                      <div className={styles.rectangleParent3}>
                        <div className={styles.frameChild5} />
                        <div className={styles.jan}>Jun</div>
                      </div>
                      <div className={styles.rectangleParent4}>
                        <div className={styles.frameChild3} />
                        <div className={styles.jan}>Jul</div>
                      </div>
                      <div className={styles.rectangleParent5}>
                        <div className={styles.frameChild2} />
                        <div className={styles.jan}>Aug</div>
                      </div>
                      <div className={styles.rectangleParent6}>
                        <div className={styles.frameChild8} />
                        <div className={styles.jan}>Sep</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.frameParent5}>
                    <div className={styles.mostViewedItemsWrapper}>
                      <b
                        className={styles.totalViews}
                      >{`Most Viewed Items `}</b>
                    </div>
                    <div className={styles.frameParent6}>
                      <div className={styles.frameInner}>
                        <div className={styles.frameWrapper1}>
                          <div className={styles.frameParent7}>
                            <div className={styles.frame6}>
                              <div className={styles.jeans}>Jeans</div>
                              <b className={styles.totalViews}>70%</b>
                            </div>
                            <div className={styles.frame7}>
                              <div className={styles.frameChild9} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.frameParent7}>
                          <div className={styles.frame6}>
                            <div className={styles.jeans}>Shirts</div>
                            <b className={styles.totalViews}>40%</b>
                          </div>
                          <Box className={styles.frame9} sx={{ width: "100%" }}>
                            <LinearProgress />
                          </Box>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.frameParent7}>
                          <div className={styles.frame6}>
                            <div className={styles.jeans}>Belts</div>
                            <b className={styles.totalViews}>60%</b>
                          </div>
                          <Box className={styles.frame9}>
                            <Slider color="primary" />
                          </Box>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent10}>
                      <div className={styles.frameWrapper7}>
                        <div className={styles.capsParent}>
                          <div className={styles.caps}>Caps</div>
                          <b className={styles.b3}>80%</b>
                          <div className={styles.frameChild10} />
                          <div className={styles.frameChild11} />
                        </div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.frame6}>
                          <div className={styles.jeans}>Others</div>
                          <b className={styles.totalViews}>20%</b>
                        </div>
                        <AntSlider className={styles.frame9} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className={styles.frameWrapper8}>
                <div className={styles.frameInner}>
                  <div className={styles.latestViewsParent}>
                    <b className={styles.latestViews}>Latest Views</b>
                    <textarea className={styles.rectangleTextarea} />
                    <input className={styles.rectangleInput} type="text" />
                    <div className={styles.frameParent12}>
                      <div className={styles.productsParent}>
                        <div className={styles.totalViews}>Products</div>
                        <div className={styles.totalViews}>Date</div>
                      </div>
                      <div className={styles.iphone13ProParent}>
                        <div className={styles.div}>Iphone 13 Pro</div>
                        <div className={styles.totalViews}>Jun 29,2022</div>
                      </div>
                      <div className={styles.mackbookProParent}>
                        <div className={styles.div}>Mackbook Pro</div>
                        <div className={styles.totalViews}>Jun 29,2022</div>
                      </div>
                      <div className={styles.appleWatchParent}>
                        <div className={styles.div}>Apple Watch</div>
                        <div className={styles.totalViews}>Jun 29,2022</div>
                      </div>
                      <div className={styles.microsoftBookParent}>
                        <div className={styles.div}>Microsoft Book</div>
                        <div className={styles.totalViews}>Jun 29,2022</div>
                      </div>
                      <div className={styles.applePenParent}>
                        <div className={styles.div}>Apple Pen</div>
                        <div className={styles.totalViews}>Jun 29,2022</div>
                      </div>
                      <div className={styles.airpodsParent}>
                        <div className={styles.div}>Airpods</div>
                        <div className={styles.totalViews}>Jun 29,2022</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default Dashboard;
