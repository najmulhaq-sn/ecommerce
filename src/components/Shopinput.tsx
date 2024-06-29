import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./Shopinput.module.css";

export type ShopinputType = {
  className?: string;
};

const Shopinput: FunctionComponent<ShopinputType> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <b className={styles.shopDetails}>Shop Details</b>
      <div className={styles.parent} required={true} autoFocus={true}>
        <label className={styles.label} for="file-82:6101" />
        <input className={styles.input} type="file" id="file-82:6101" />
      </div>
      <div className={styles.addYourShop}>Add your Shop banner</div>
      <img
        className={styles.imageUploadIcon260nw115742}
        alt=""
        src="/imageuploadicon260nw1157424790-3@2x.png"
      />
      <div className={styles.shopName}>{`Shop Name `}</div>
      <TextField
        className={styles.frameChild}
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "61px" } }}
      />
      <div className={styles.addYourShop1}>Add your shop Name</div>
      <div className={styles.address}>Address</div>
      <TextField
        className={styles.frameItem}
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "85px" } }}
      />
      <input
        className={styles.enterYourShop}
        placeholder="Enter Your Shop Address"
        type="text"
      />
      <TextField
        className={styles.frameInner}
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "46px" } }}
      />
      <div className={styles.contactNumber}> Contact Number</div>
      <input className={styles.input1} placeholder="+94700058000" type="text" />
      <TextField
        className={styles.rectangleTextfield}
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "46px" } }}
      />
      <div className={styles.div}>+94700058000</div>
      <div className={styles.whatsappNumber}>WhatsApp Number</div>
    </div>
  );
};

export default Shopinput;
