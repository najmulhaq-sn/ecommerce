import { FunctionComponent } from "react";
import Heder from "../components/Heder";
import Ad from "../components/Ad";
import EventComp from "../components/EventComp";
import QuickLink4 from "../components/QuickLink4";
import Bottom from "../components/Bottom";
import styles from "./EventsAndWeddings.module.css";

const EventsAndWeddings: FunctionComponent = () => {
  return (
    <div className={styles.eventsAndWeddings}>
      <Heder
        frameWidth="1201px"
        frameOverflow="unset"
        frameAlignSelf="unset"
        vector="/vector11@2x.png"
        vector1="/vector12@2x.png"
        image="/image6@2x.png"
        image1="/image10@2x.png"
        framePosition="unset"
        frameTop="unset"
        frameLeft="unset"
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
      <EventComp />
      <QuickLink4
        containerAlignSelf="unset"
        containerWidth="330px"
        listWidth="unset"
        listAlignSelf="stretch"
        frameHeight="33px"
        frameHeight1="33px"
        frameHeight2="33px"
        frameHeight3="33px"
        containerFlex="unset"
        containerWidth1="760px"
        containerAlignSelf1="unset"
        containerWidth2="971px"
        listWidth1="unset"
        listAlignSelf1="stretch"
        frameFlex="unset"
        frameWidth="168.5px"
        frameFlex1="unset"
        frameMarginLeft="unset"
        frameWidth1="172.6px"
        frameSectionAlignSelf="stretch"
        frameSectionPosition="unset"
        frameSectionTop="unset"
        frameSectionLeft="unset"
        frameSectionWidth="unset"
      />
      <Bottom
        containerAlignSelf="stretch"
        containerWidth="unset"
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

export default EventsAndWeddings;
