import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Heder.module.css";

export type HederType = {
  className?: string;
  vector?: string;
  vector1?: string;
  image?: string;
  image1?: string;

  /** Style props */
  frameWidth?: CSSProperties["width"];
  frameOverflow?: CSSProperties["overflow"];
  frameAlignSelf?: CSSProperties["alignSelf"];
  framePosition?: CSSProperties["position"];
  frameTop?: CSSProperties["top"];
  frameLeft?: CSSProperties["left"];
};

const Heder: FunctionComponent<HederType> = ({
  className = "",
  frameWidth,
  frameOverflow,
  frameAlignSelf,
  vector,
  vector1,
  image,
  image1,
  framePosition,
  frameTop,
  frameLeft,
}) => {
  const frame6Style: CSSProperties = useMemo(() => {
    return {
      width: frameWidth,
      overflow: frameOverflow,
      alignSelf: frameAlignSelf,
      position: framePosition,
      top: frameTop,
      left: frameLeft,
    };
  }, [
    frameWidth,
    frameOverflow,
    frameAlignSelf,
    framePosition,
    frameTop,
    frameLeft,
  ]);

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
      className={[styles.frame, className].join(" ")}
      hear
      style={frame6Style}
    >
      <header className={styles.header1}>
        <header className={styles.header11}>
          <div className={styles.header}>
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
  );
};

export default Heder;
