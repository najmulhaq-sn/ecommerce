import { FunctionComponent } from "react";
import Header1 from "../components/Header11";
import Ad from "../components/Ad";
import EDUCom from "../components/EDUCom";
import QuickLink5 from "../components/QuickLink5";
import Bottom from "../components/Bottom";
import styles from "./EducationAndTraining.module.css";

const EducationAndTraining: FunctionComponent = () => {
  return (
    <div className={styles.educationAndTraining}>
      <Header1
        headerPosition="unset"
        headerTop="unset"
        headerLeft="unset"
        headerBackgroundColor="unset"
        headerFlexDirection="column"
        headerPadding="unset"
        headerMixBlendMode="unset"
        frameOverflow="unset"
        vector="/vector15@2x.png"
        vector1="/vector16@2x.png"
        image="/image8@2x.png"
        image1="/image10@2x.png"
        headerWidth="1196px"
        frameWidth="1201px"
        headerAlignSelf="unset"
      />
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="unset"
        sellingOnlineWithAnEcommeWidth="1210px"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-13@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <EDUCom />
      <QuickLink5 />
      <Bottom
        containerAlignSelf="unset"
        containerWidth="1200px"
        containerWidth1="490px"
        copyrights200824AllFlex="1"
        linkFlex="1"
        containerWidth2="5.31%"
        containerRight="8.08%"
        containerLeft="86.61%"
        linkFlex1="1"
        containerWidth3="6.45%"
        containerRight1="9.39%"
        containerLeft1="84.16%"
        linkFlex2="1"
        containerPosition="unset"
        containerTop="unset"
        containerLeft2="unset"
        containerHeight="unset"
        containerAlignSelf1="stretch"
        privacyFlex="unset"
        divAlignSelf="unset"
        termsFlex="unset"
        divAlignSelf1="unset"
        infringementFlex="unset"
      />
    </div>
  );
};

export default EducationAndTraining;
