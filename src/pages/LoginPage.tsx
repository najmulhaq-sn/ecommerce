import { FunctionComponent } from "react";
import Login from "../components/Login";
import styles from "./LoginPage.module.css";

const LoginPage: FunctionComponent = () => {
  return (
    <div className={styles.loginPage}>
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
      <Login />
    </div>
  );
};

export default LoginPage;
