import { FunctionComponent } from "react";
import SignUp1 from "../components/SignUp1";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.grid12}>
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
        <div className={styles.grid12Child} />
      </div>
      <SignUp1 />
    </div>
  );
};

export default SignUp;
