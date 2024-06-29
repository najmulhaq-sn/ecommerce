import { FunctionComponent } from "react";
import Header2 from "../components/Header2";
import Ad from "../components/Ad";
import ProposanalServiceCom from "../components/ProposanalServiceCom";
import QuickLink2 from "../components/QuickLink2";
import Bottom from "../components/Bottom";
import styles from "./ProfessionalServices.module.css";

const ProfessionalServices: FunctionComponent = () => {
  return (
    <div className={styles.professionalServices}>
      <Header2
        vector="/vector11@2x.png"
        vector1="/vector12@2x.png"
        image="/image6@2x.png"
        image1="/image7@2x.png"
      />
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="unset"
        sellingOnlineWithAnEcommeWidth="1197px"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-12@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <ProposanalServiceCom
        frameSectionWidth="920px"
        frameSectionHeight="677px"
        frameSectionGap="40px 70px"
      />
      <QuickLink2 />
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

export default ProfessionalServices;
