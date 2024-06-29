import { FunctionComponent } from "react";
import Heder from "../components/Heder";
import Ad from "../components/Ad";
import PersanalServiceComponents from "../components/PersanalServiceComponents";
import QuickLink3 from "../components/QuickLink3";
import Bottom from "../components/Bottom";
import styles from "./RetailAndShopping.module.css";

const RetailAndShopping: FunctionComponent = () => {
  return (
    <div className={styles.retailAndShopping}>
      <Heder
        frameWidth="unset"
        frameOverflow="unset"
        frameAlignSelf="stretch"
        vector="/vector13@2x.png"
        vector1="/vector14@2x.png"
        image="/image8@2x.png"
        image1="/image9@2x.png"
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
      <section className={styles.clothingStoresParent}>
        <PersanalServiceComponents
          accountants="Clothing Stores"
          image1="/image-133@2x.png"
        />
        <PersanalServiceComponents
          accountants="Shoe Stores"
          image1="/image-134@2x.png"
        />
        <PersanalServiceComponents
          accountants="Jewelry Stores"
          image1="/image-135@2x.png"
        />
        <PersanalServiceComponents
          accountants="Bookstores"
          image1="/image-136@2x.png"
        />
        <PersanalServiceComponents
          accountants="Electronics Stores"
          image1="/image-137@2x.png"
        />
        <PersanalServiceComponents
          accountants="Furniture Stores"
          image1="/image-138@2x.png"
        />
        <PersanalServiceComponents
          accountants="Grocery Stores"
          image1="/image-139@2x.png"
        />
        <PersanalServiceComponents
          accountants="Mechanical Parts Shops"
          image1="/image-140@2x.png"
        />
        <PersanalServiceComponents
          accountants="Florists"
          image1="/image-141@2x.png"
        />
        <PersanalServiceComponents
          accountants="chemical shop"
          image1="/image-142@2x.png"
        />
      </section>
      <QuickLink3 />
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

export default RetailAndShopping;
