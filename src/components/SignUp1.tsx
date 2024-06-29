import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp1.module.css";

export type SignUp1Type = {
  className?: string;
};

const SignUp1: FunctionComponent<SignUp1Type> = ({ className = "" }) => {
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
      <div className={styles.welcomeBack}>WELCOME BACK!</div>
      <div
        className={styles.registerYourAccount}
      >{`Register Your Account `}</div>
      <div className={styles.inputField}>
        <div className={styles.username}>
          <div className={styles.name}>Name</div>
          <TextField
            className={styles.usernameChild}
            color="primary"
            label="Enter Your Name "
            required={true}
            fullWidth={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "81px" } }}
          />
        </div>
        <div className={styles.username}>
          <div className={styles.name}>Email</div>
          <TextField
            className={styles.usernameChild}
            color="primary"
            label="Enter Your Email "
            required={true}
            fullWidth={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "81px" } }}
          />
        </div>
        <div className={styles.username}>
          <div className={styles.name}>Password</div>
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
      </div>
      <button className={styles.signIn} onClick={onSignInClick}>
        <div className={styles.signUp}>Sign up</div>
      </button>
      <div className={styles.socialTitle}>
        <button className={styles.orContinueWithWrapper}>
          <div className={styles.orContinueWith}>or continue with</div>
        </button>
        <img
          className={styles.socialTitleChild}
          alt=""
          src="/vector-12@2x.png"
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

export default SignUp1;
