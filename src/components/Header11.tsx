import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Header11.module.css";

export type Header1Type = {
  className?: string;
  vector?: string;
  vector1?: string;
  image?: string;
  image1?: string;

  /** Style props */
  headerPosition?: CSSProperties["position"];
  headerTop?: CSSProperties["top"];
  headerLeft?: CSSProperties["left"];
  headerBackgroundColor?: CSSProperties["backgroundColor"];
  headerFlexDirection?: CSSProperties["flexDirection"];
  headerPadding?: CSSProperties["padding"];
  headerMixBlendMode?: CSSProperties["mixBlendMode"];
  frameOverflow?: CSSProperties["overflow"];
  headerWidth?: CSSProperties["width"];
  frameWidth?: CSSProperties["width"];
  headerAlignSelf?: CSSProperties["alignSelf"];
};

const Header1: FunctionComponent<Header1Type> = ({
  className = "",
  headerPosition,
  headerTop,
  headerLeft,
  headerBackgroundColor,
  headerFlexDirection,
  headerPadding,
  headerMixBlendMode,
  frameOverflow,
  vector,
  vector1,
  image,
  image1,
  headerWidth,
  frameWidth,
  headerAlignSelf,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      position: headerPosition,
      top: headerTop,
      left: headerLeft,
      backgroundColor: headerBackgroundColor,
      flexDirection: headerFlexDirection,
      padding: headerPadding,
      mixBlendMode: headerMixBlendMode,
      width: headerWidth,
      alignSelf: headerAlignSelf,
    };
  }, [
    headerPosition,
    headerTop,
    headerLeft,
    headerBackgroundColor,
    headerFlexDirection,
    headerPadding,
    headerMixBlendMode,
    headerWidth,
    headerAlignSelf,
  ]);

  const frame7Style: CSSProperties = useMemo(() => {
    return {
      overflow: frameOverflow,
      width: frameWidth,
    };
  }, [frameOverflow, frameWidth]);

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
    <header
      className={[styles.header, className].join(" ")}
      style={headerStyle}
    >
      <header className={styles.frame} hear style={frame7Style}>
        <header className={styles.header1}>
          <header className={styles.header11}>
            <div className={styles.header2}>
              <button className={styles.logosvs} onClick={onLogosvsClick}>
                <img className={styles.vectorIcon} alt="" src={vector} />
                <img className={styles.vectorIcon1} alt="" src={vector1} />
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
                  <img className={styles.imageIcon} alt="" src={image} />
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
              <div className={styles.frame1}>
                <div className={styles.menuitemNotification}>
                  <div className={styles.buttonNotifications}>
                    <img className={styles.imageIcon1} alt="" src={image1} />
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
                        <div className={styles.loginSign}>Login / Sign Up</div>
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
  );
};

export default Header1;
