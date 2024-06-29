import { FunctionComponent, useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export type LoginType = {
  className?: string;
};

const Login: FunctionComponent<LoginType> = ({ className = "" }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onSignInClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <section className={[styles.login, className].join(" ")}>
      <h2 className={styles.welcomeBack}>WELCOME BACK!</h2>
      <button className={styles.dontHaveAContainer}>
        <span className={styles.dontHaveA}>{`Don’t have a account, `}</span>
        <b className={styles.signUp}>Sign up</b>
      </button>
      <div className={styles.inputField}>
        <div className={styles.username}>
          <h3 className={styles.username1}>Username</h3>
          <TextField
            className={styles.usernameChild}
            color="primary"
            label="deniel123@gmail.com"
            required={true}
            fullWidth={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "81px" } }}
          />
        </div>
        <div className={styles.username}>
          <h3 className={styles.username1}>Password</h3>
          <TextField
            className={styles.passwordChild}
            color="primary"
            required={true}
            fullWidth={true}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPasswordClick}
                    aria-label="toggle password visibility"
                  >
                    <Icon>
                      {showPassword ? "visibility_off" : "visibility"}
                    </Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiInputBase-root": { height: "80px" } }}
          />
        </div>
        <div className={styles.remenber}>
          <div className={styles.groupParent}>
            <FormControlLabel
              className={styles.groupFormcontrollabel}
              label=""
              control={<Checkbox defaultChecked size="2x" />}
            />
            <div className={styles.rememberMeWrapper}>
              <div className={styles.rememberMe}>Remember me</div>
            </div>
          </div>
          <button className={styles.frameWrapper}>
            <div className={styles.frame}>
              <div className={styles.forgetPassword}>Forget password?</div>
            </div>
          </button>
        </div>
      </div>
      <button className={styles.signIn} onClick={onSignInClick}>
        <h3 className={styles.signIn1}>Sign In</h3>
      </button>
      <div className={styles.socialTitle}>
        <button className={styles.orContinueWithWrapper}>
          <div className={styles.orContinueWith}>or continue with</div>
        </button>
        <img
          className={styles.socialTitleChild}
          alt=""
          src="/vector-11@2x.png"
        />
      </div>
      <div className={styles.socialLogin}>
        <button className={styles.socialLoginInner}>
          <img className={styles.frameChild} alt="" src="/frame-18@2x.png" />
        </button>
        <button className={styles.iconfontAwesomeFreebrandsWrapper}>
          <img
            className={styles.iconfontAwesomeFreebrands}
            alt=""
            src="/iconfont-awesome-freebrandsffacebook@2x.png"
          />
        </button>
        <button className={styles.socialLoginInner}>
          <img className={styles.appleIcon} alt="" src="/apple@2x.png" />
        </button>
      </div>
    </section>
  );
};

export default Login;
