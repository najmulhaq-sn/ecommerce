import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Header2.module.css";

export type Header2Type = {
  className?: string;
  vector?: string;
  vector1?: string;
  image?: string;
  image1?: string;

  /** Style props */
  header1Width?: CSSProperties["width"];
  header1AlignSelf?: CSSProperties["alignSelf"];
  header1Height?: CSSProperties["height"];
  header1Width1?: CSSProperties["width"];
  header1Flex?: CSSProperties["flex"];
  logosvsWidth?: CSSProperties["width"];
  logosvsHeight?: CSSProperties["height"];
  logosvsDisplay?: CSSProperties["display"];
  logosvsFlexDirection?: CSSProperties["flexDirection"];
  logosvsGap?: CSSProperties["gap"];
  vectorIconPosition?: CSSProperties["position"];
  vectorIconHeight?: CSSProperties["height"];
  vectorIconWidth?: CSSProperties["width"];
  vectorIconTop?: CSSProperties["top"];
  vectorIconRight?: CSSProperties["right"];
  vectorIconBottom?: CSSProperties["bottom"];
  vectorIconLeft?: CSSProperties["left"];
  vectorIconOverflow?: CSSProperties["overflow"];
  vectorIconMaxHeight?: CSSProperties["maxHeight"];
  vectorIconPosition1?: CSSProperties["position"];
  vectorIconHeight1?: CSSProperties["height"];
  vectorIconWidth1?: CSSProperties["width"];
  vectorIconTop1?: CSSProperties["top"];
  vectorIconRight1?: CSSProperties["right"];
  vectorIconBottom1?: CSSProperties["bottom"];
  vectorIconLeft1?: CSSProperties["left"];
  vectorIconOverflow1?: CSSProperties["overflow"];
  vectorIconMaxHeight1?: CSSProperties["maxHeight"];
  inputMainAutoSuggestWidth?: CSSProperties["width"];
  inputMainAutoSuggestAlignSelf?: CSSProperties["alignSelf"];
};

const Header2: FunctionComponent<Header2Type> = ({
  className = "",
  header1Width,
  header1AlignSelf,
  header1Height,
  header1Width1,
  header1Flex,
  logosvsWidth,
  logosvsHeight,
  logosvsDisplay,
  logosvsFlexDirection,
  logosvsGap,
  vector,
  vectorIconPosition,
  vectorIconHeight,
  vectorIconWidth,
  vectorIconTop,
  vectorIconRight,
  vectorIconBottom,
  vectorIconLeft,
  vectorIconOverflow,
  vectorIconMaxHeight,
  vector1,
  vectorIconPosition1,
  vectorIconHeight1,
  vectorIconWidth1,
  vectorIconTop1,
  vectorIconRight1,
  vectorIconBottom1,
  vectorIconLeft1,
  vectorIconOverflow1,
  vectorIconMaxHeight1,
  inputMainAutoSuggestWidth,
  inputMainAutoSuggestAlignSelf,
  image,
  image1,
}) => {
  const header1Style: CSSProperties = useMemo(() => {
    return {
      width: header1Width,
      alignSelf: header1AlignSelf,
      height: header1Height,
    };
  }, [header1Width, header1AlignSelf, header1Height]);

  const header11Style: CSSProperties = useMemo(() => {
    return {
      width: header1Width1,
      flex: header1Flex,
    };
  }, [header1Width1, header1Flex]);

  const logosvsStyle: CSSProperties = useMemo(() => {
    return {
      width: logosvsWidth,
      height: logosvsHeight,
      display: logosvsDisplay,
      flexDirection: logosvsFlexDirection,
      gap: logosvsGap,
    };
  }, [
    logosvsWidth,
    logosvsHeight,
    logosvsDisplay,
    logosvsFlexDirection,
    logosvsGap,
  ]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      position: vectorIconPosition,
      height: vectorIconHeight,
      width: vectorIconWidth,
      top: vectorIconTop,
      right: vectorIconRight,
      bottom: vectorIconBottom,
      left: vectorIconLeft,
      overflow: vectorIconOverflow,
      maxHeight: vectorIconMaxHeight,
    };
  }, [
    vectorIconPosition,
    vectorIconHeight,
    vectorIconWidth,
    vectorIconTop,
    vectorIconRight,
    vectorIconBottom,
    vectorIconLeft,
    vectorIconOverflow,
    vectorIconMaxHeight,
  ]);

  const vectorIcon1Style: CSSProperties = useMemo(() => {
    return {
      position: vectorIconPosition1,
      height: vectorIconHeight1,
      width: vectorIconWidth1,
      top: vectorIconTop1,
      right: vectorIconRight1,
      bottom: vectorIconBottom1,
      left: vectorIconLeft1,
      overflow: vectorIconOverflow1,
      maxHeight: vectorIconMaxHeight1,
    };
  }, [
    vectorIconPosition1,
    vectorIconHeight1,
    vectorIconWidth1,
    vectorIconTop1,
    vectorIconRight1,
    vectorIconBottom1,
    vectorIconLeft1,
    vectorIconOverflow1,
    vectorIconMaxHeight1,
  ]);

  const inputMainAutoSuggestStyle: CSSProperties = useMemo(() => {
    return {
      width: inputMainAutoSuggestWidth,
      alignSelf: inputMainAutoSuggestAlignSelf,
    };
  }, [inputMainAutoSuggestWidth, inputMainAutoSuggestAlignSelf]);

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
      className={[styles.header1, className].join(" ")}
      style={header1Style}
    >
      <header className={styles.header11} style={header11Style}>
        <div className={styles.header}>
          <button
            className={styles.logosvs}
            onClick={onLogosvsClick}
            style={logosvsStyle}
          >
            <img
              className={styles.vectorIcon}
              alt=""
              src={vector}
              style={vectorIconStyle}
            />
            <img
              className={styles.vectorIcon1}
              alt=""
              src={vector1}
              style={vectorIcon1Style}
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
                style={inputMainAutoSuggestStyle}
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
          <div className={styles.frame}>
            <div className={styles.menuitemNotification}>
              <div className={styles.buttonNotifications}>
                <img className={styles.imageIcon1} alt="" src={image1} />
              </div>
            </div>
            <button
              className={styles.listYourBusinessWrapper}
              onClick={onFrameButtonClick}
            >
              <div className={styles.listYourBusiness}>List Your Business</div>
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
  );
};

export default Header2;
