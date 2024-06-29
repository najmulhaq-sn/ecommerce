import { FunctionComponent } from "react";
import PersanalServiceComponents from "./PersanalServiceComponents";
import styles from "./AutomotiveComp.module.css";

export type AutomotiveCompType = {
  className?: string;
};

const AutomotiveComp: FunctionComponent<AutomotiveCompType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.carDealershipsParent, className].join(" ")}>
      <PersanalServiceComponents
        accountants="Car Dealerships"
        image1="/image-143@2x.png"
      />
      <PersanalServiceComponents
        accountants="Auto Repair Shops"
        image1="/image-144@2x.png"
      />
      <PersanalServiceComponents
        accountants="Car Washes"
        image1="/image-145@2x.png"
      />
      <PersanalServiceComponents
        accountants="Tire Shops"
        image1="/image-146@2x.png"
      />
      <PersanalServiceComponents
        accountants="Car Rental Services"
        image1="/image-147@2x.png"
      />
      <PersanalServiceComponents
        accountants="Towing Services"
        image1="/image-148@2x.png"
      />
      <PersanalServiceComponents
        accountants="Auto Parts Stores"
        image1="/image-149@2x.png"
      />
      <PersanalServiceComponents
        accountants="Motorcycle Repair"
        image1="/image-150@2x.png"
      />
    </section>
  );
};

export default AutomotiveComp;
