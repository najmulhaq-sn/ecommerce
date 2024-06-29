import { FunctionComponent } from "react";
import Heder from "../components/Heder";
import Ad from "../components/Ad";
import FoodDiningComponents from "../components/FoodDiningComponents";
import QuickLink6 from "../components/QuickLink6";
import Bottom from "../components/Bottom";
import styles from "./FoodAndDining.module.css";

const FoodAndDining: FunctionComponent = () => {
  return (
    <div className={styles.foodAndDining}>
      <Heder
        frameWidth="unset"
        frameOverflow="unset"
        frameAlignSelf="stretch"
        vector="/vector@2x.png"
        vector1="/vector1@2x.png"
        image="/image@2x.png"
        image1="/image2@2x.png"
        framePosition="unset"
        frameTop="unset"
        frameLeft="unset"
      />
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="stretch"
        sellingOnlineWithAnEcommeWidth="unset"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-1@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <FoodDiningComponents />
      <QuickLink6 />
      <Bottom
        containerAlignSelf="stretch"
        containerWidth="unset"
        containerWidth1="522px"
        copyrights200824AllFlex="1"
        linkFlex="1"
        containerWidth2="5.36%"
        containerRight="8.05%"
        containerLeft="86.59%"
        linkFlex1="1"
        containerWidth3="6.44%"
        containerRight1="9.43%"
        containerLeft1="84.14%"
        linkFlex2="1"
        containerPosition="unset"
        containerTop="unset"
        containerLeft2="unset"
        containerHeight="unset"
        containerAlignSelf1="stretch"
        privacyFlex="1"
        divAlignSelf="stretch"
        termsFlex="1"
        divAlignSelf1="stretch"
        infringementFlex="1"
      />
    </div>
  );
};

export default FoodAndDining;
