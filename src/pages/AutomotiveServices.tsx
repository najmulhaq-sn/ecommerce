import { FunctionComponent, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Ad from "../components/Ad";
import AutomotiveComp from "../components/AutomotiveComp";
import QuickLink4 from "../components/QuickLink4";
import Bottom from "../components/Bottom";
import styles from "./AutomotiveServices.module.css";

const AutomotiveServices: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogosvsClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/list-your-product-page");
  }, [navigate]);

  const onMenuitemContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.automotiveServices}>
      <header className={styles.header1}>
        <header className={styles.header11}>
          <header className={styles.header12}>
            <header className={styles.header11}>
              <header className={styles.header12}>
                <div className={styles.header}>
                  <button className={styles.logosvs} onClick={onLogosvsClick}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector15@2x.png"
                    />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector16@2x.png"
                    />
                  </button>
                  <div className={styles.container} />
                  <div className={styles.label}>
                    <div className={styles.comboboxListbox}>
                      <Autocomplete
                        className={styles.inputMainAutoSuggest}
                        sx={{ width: "100%" }}
                        disablePortal
                        options={["SmartZen", "ProMobile"]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Search"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                      />
                    </div>
                    <button className={styles.buttonSearch}>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="/image8@2x.png"
                      />
                    </button>
                  </div>
                  <Autocomplete
                    className={styles.container1}
                    sx={{ width: 343 }}
                    disablePortal
                    options={["kalmunai", "colombo", "ampara"]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Location"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                  />
                  <div className={styles.frame}>
                    <div className={styles.menuitemNotification}>
                      <div className={styles.buttonNotifications}>
                        <img
                          className={styles.imageIcon1}
                          alt=""
                          src="/image7@2x.png"
                        />
                      </div>
                    </div>
                    <button
                      className={styles.listYourBusinessWrapper}
                      onClick={onFrameButtonClick}
                    >
                      <div className={styles.listYourBusiness}>
                        List Your Business
                      </div>
                    </button>
                    <div className={styles.frameChild} />
                    <button className={styles.menuitem}>
                      <div
                        className={styles.menuitem1}
                        onClick={onMenuitemContainerClick}
                      >
                        <div className={styles.buttonLoginsignUp}>
                          <div className={styles.container2}>
                            <div className={styles.loginSign}>
                              Login / Sign Up
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </header>
            </header>
          </header>
        </header>
      </header>
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="stretch"
        sellingOnlineWithAnEcommeWidth="unset"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-1@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <AutomotiveComp />
      <QuickLink4 />
      <Bottom
        containerAlignSelf="stretch"
        containerWidth="unset"
        containerWidth1="490px"
        copyrights200824AllFlex="1"
        linkFlex="1"
        containerWidth2="5.31%"
        containerRight="8.08%"
        containerLeft="86.61%"
        linkFlex1="1"
        containerWidth3="6.45%"
        containerRight1="9.39%"
        containerLeft1="84.16%"
        linkFlex2="1"
        containerPosition="unset"
        containerTop="unset"
        containerLeft2="unset"
        containerHeight="unset"
        containerAlignSelf1="stretch"
        privacyFlex="unset"
        divAlignSelf="unset"
        termsFlex="unset"
        divAlignSelf1="unset"
        infringementFlex="unset"
      />
    </div>
  );
};

export default AutomotiveServices;
