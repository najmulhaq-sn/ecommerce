import { FunctionComponent } from "react";
import ShopMenueDetailsInMenu from "./ShopMenueDetailsInMenu";
import styles from "./ShopDetailsInMenu.module.css";

export type ShopDetailsInMenuType = {
  className?: string;
};

const ShopDetailsInMenu: FunctionComponent<ShopDetailsInMenuType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameInner, className].join(" ")}>
      <ShopMenueDetailsInMenu />
    </div>
  );
};

export default ShopDetailsInMenu;
