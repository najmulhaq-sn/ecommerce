import { FunctionComponent } from "react";
import Heder from "./Heder";
import Menulist from "./Menulist";
import styles from "./Restorentmenu.module.css";

export type RestorentmenuType = {
  className?: string;
};

const Restorentmenu: FunctionComponent<RestorentmenuType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frame, className].join(" ")}>
      <Heder
        vector="/vector4@2x.png"
        vector1="/vector5@2x.png"
        image="/image3@2x.png"
        image1="/image4@2x.png"
      />
      <Menulist />
    </section>
  );
};

export default Restorentmenu;
