import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./ShopMenueDetailsInMenu.module.css";

export type ShopMenueDetailsInMenuType = {
  className?: string;
};

const ShopMenueDetailsInMenu: FunctionComponent<ShopMenueDetailsInMenuType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameContainer}>
        <div className={styles.frameParent}>
          <div className={styles.frame}>
            <div className={styles.getDirectionsWrapper}>
              <h2 className={styles.getDirections} direction>
                Get Directions
              </h2>
            </div>
            <div className={styles.rectangleParent}>
              <input
                className={styles.rectangleInput}
                readOnly={true}
                type="checkbox"
                icn
              />
              <img
                className={styles.groupChild}
                alt=""
                src="/vector-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <TextField
              className={styles.frameChild}
              color="primary"
              variant="filled"
              sx={{
                "& .MuiInputBase-root": { height: "40px" },
                width: "222px",
              }}
            />
            <div className={styles.div}>+940000000000</div>
          </div>
          <div className={styles.address}>Address</div>
          <div className={styles.frame1}>
            <div className={styles.am1000}>9:00 AM - 10:00 PM</div>
          </div>
          <div className={styles.spicyKitchenRestaurantWrapper}>
            <h1 className={styles.spicyKitchenRestaurant}>
              Spicy Kitchen Restaurant
            </h1>
          </div>
          <div className={styles.frameItem} />
          <div className={styles.dWellawathaRodeColomboSriWrapper}>
            <div className={styles.dWellawathaRodeContainer}>
              <p className={styles.dWellawathaRode}>
                586,d Wellawatha rode colombo
              </p>
              <p
                className={styles.dWellawathaRode}
              >{`sri lanka (call to action) `}</p>
            </div>
          </div>
          <button className={styles.frameInner} />
          <div className={styles.groupWrapper}>
            <button className={styles.group}>
              <img className={styles.vectorIcon} alt="" src="/vector6@2x.png" />
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector7@2x.png"
              />
              <img
                className={styles.groupItem}
                alt=""
                src="/rectangle-153845@2x.png"
              />
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector8@2x.png"
              />
              <img
                className={styles.vectorIcon3}
                alt=""
                src="/vector9@2x.png"
              />
              <div className={styles.chat}>Chat</div>
            </button>
          </div>
          <button className={styles.frameButton} />
          <div className={styles.frameFrame}>
            <div className={styles.frame2}>
              <div className={styles.am1000}>9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frame3}>
              <div className={styles.am1000}>9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frame4}>
              <div className={styles.am1000}>9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className={styles.frameChild1} />
          <div className={styles.frameWrapper2}>
            <div className={styles.frame5}>
              <div className={styles.am1000}>9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frame6}>
              <div className={styles.am1000}>9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.frame3}>
              <div className={styles.am1000}>9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className={styles.tuesdayParent}>
            <div className={styles.tuesday}>Tuesday</div>
            <div className={styles.wednesdayParent}>
              <div className={styles.wednesday}>{`Wednesday `}</div>
              <div className={styles.thursday}>Thursday</div>
              <div className={styles.sundayWrapper}>
                <div className={styles.sunday}>Sunday</div>
              </div>
              <div className={styles.saturdayWrapper}>
                <div className={styles.saturday}>{`Saturday `}</div>
              </div>
              <div className={styles.frameWrapper5}>
                <div className={styles.fridayWrapper}>
                  <div className={styles.friday}>{`Friday `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mondayWrapper}>
            <div className={styles.monday}>{`Monday `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMenueDetailsInMenu;
