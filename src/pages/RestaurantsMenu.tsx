import { FunctionComponent, useCallback } from "react";
import Restorentmenu from "../components/Restorentmenu";
import RestorentMenuProduct from "../components/RestorentMenuProduct";
import QuickLinks from "../components/QuickLinks";
import Bottom from "../components/Bottom";
import styles from "./RestaurantsMenu.module.css";

const RestaurantsMenu: FunctionComponent = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.justdial.com/Terms-of-Use");
  }, []);

  return (
    <main className={styles.restaurantsMenu}>
      <Restorentmenu />
      <main className={styles.frame} menu>
        <RestorentMenuProduct />
        <QuickLinks frameDivTop="1778px" frameDivLeft="0px" />
        <Bottom
          containerAlignSelf="unset"
          containerWidth="1200px"
          containerWidth1="unset"
          copyrights200824AllFlex="unset"
          linkFlex="unset"
          containerWidth2="5.29%"
          containerRight="8.09%"
          containerLeft="86.62%"
          linkFlex1="unset"
          containerWidth3="6.43%"
          containerRight1="9.46%"
          containerLeft1="84.11%"
          linkFlex2="unset"
          containerPosition="absolute"
          containerTop="2218px"
          containerLeft2="0px"
          onLinkContainerClick={onLinkContainerClick}
          containerHeight="unset"
          containerAlignSelf1="stretch"
          privacyFlex="unset"
          divAlignSelf="unset"
          termsFlex="unset"
          divAlignSelf1="unset"
          infringementFlex="unset"
        />
      </main>
    </main>
  );
};

export default RestaurantsMenu;
