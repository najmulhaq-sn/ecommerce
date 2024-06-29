import { FunctionComponent, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ListYourProductPage.module.css";

const ListYourProductPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSubmitTextClick = useCallback(() => {
    // Please sync "Payment plan" to the project
  }, []);

  return (
    <div className={styles.listYourProductPage}>
      <div className={styles.parent} required={true} autoFocus={true} src>
        <label className={styles.label} for="file-58:2896" />
        <input className={styles.input} type="file" id="file-58:2896" />
      </div>
      <div className={styles.addPhotos}>Add Photos</div>
      <img
        className={styles.imageUploadIcon260nw115742}
        alt=""
        src="/imageuploadicon260nw1157424790-1@2x.png"
      />
      <TextField
        className={styles.listYourProductPageChild}
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "59px" } }}
      />
      <TextField
        className={styles.listYourProductPageItem}
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "59px" } }}
      />
      <div className={styles.titleItemTitleContainer}>
        <span className={styles.titleItemTitleContainer1}>
          <p className={styles.title}>TITLE</p>
          <p className={styles.title}>&nbsp;</p>
          <p className={styles.title}>Item title</p>
        </span>
      </div>
      <div className={styles.category}>{`Category `}</div>
      <img
        className={styles.listYourProductPageInner}
        alt=""
        src="/rectangle-153867.svg"
      />
      <div className={styles.price}>Price</div>
      <div className={styles.itemDescription}>ITEM DESCRIPTION</div>
      <TextField
        className={styles.rectangleTextfield}
        color="primary"
        required={true}
        fullWidth={true}
        sx={{ width: 938 }}
        variant="outlined"
        multiline
      />
      <div className={styles.writeADetailed}>
        Write a detailed description of your item
      </div>
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButtonClick}
      />
      <div className={styles.submit} onClick={onSubmitTextClick}>
        Submit
      </div>
      <div className={styles.listYourProducts}>{`List Your Products `}</div>
      <div className={styles.rs9000}>RS 9000</div>
    </div>
  );
};

export default ListYourProductPage;
