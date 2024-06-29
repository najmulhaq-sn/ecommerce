import { FunctionComponent } from "react";
import Header1 from "../components/Header11";
import Ad from "../components/Ad";
import ProposanalServiceCom from "../components/ProposanalServiceCom";
import QuickLink1 from "../components/QuickLink1";
import Bottom from "../components/Bottom";
import styles from "./PersonalServices.module.css";

const PersonalServices: FunctionComponent = () => {
  return (
    <div className={styles.personalServices}>
      <Header1
        headerPosition="unset"
        headerTop="unset"
        headerLeft="unset"
        headerBackgroundColor="unset"
        headerFlexDirection="column"
        headerPadding="unset"
        headerMixBlendMode="unset"
        frameOverflow="unset"
        vector="/vector11@2x.png"
        vector1="/vector12@2x.png"
        image="/image6@2x.png"
        image1="/image7@2x.png"
        headerWidth="1197px"
        frameWidth="1192px"
        headerAlignSelf="unset"
      />
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="unset"
        sellingOnlineWithAnEcommeWidth="1201px"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-11@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <ProposanalServiceCom />
      <QuickLink1 />
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

export default PersonalServices;
