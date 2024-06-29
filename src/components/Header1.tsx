import { FunctionComponent, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Header1.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
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
    <div className={[styles.header, className].join(" ")}>
      <button className={styles.logosvs} onClick={onLogosvsClick}>
        <img className={styles.vectorIcon} alt="" src="/vector2@2x.png" />
        <img className={styles.vectorIcon1} alt="" src="/vector3@2x.png" />
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
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
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
            <img className={styles.imageIcon1} alt="" src="/image2@2x.png" />
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
          <div className={styles.menuitem1} onClick={onMenuitemContainerClick}>
            <div className={styles.buttonLoginsignUp}>
              <div className={styles.container2}>
                <div className={styles.loginSign}>Login / Sign Up</div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
