import { FunctionComponent } from "react";
import PersanalServiceComponents from "./PersanalServiceComponents";
import styles from "./RealEstateCom.module.css";

export type RealEstateComType = {
  className?: string;
};

const RealEstateCom: FunctionComponent<RealEstateComType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.residentialRealEstateParent, className].join(" ")}
    >
      <PersanalServiceComponents
        accountants="Residential Real Estate"
        image1="/image-198@2x.png"
      />
      <PersanalServiceComponents
        accountants="Commercial Real Estate"
        image1="/image-199@2x.png"
      />
      <PersanalServiceComponents
        accountants="Property Management"
        image1="/image-1100@2x.png"
      />
      <PersanalServiceComponents
        accountants="Real Estate Agents"
        image1="/image-1101@2x.png"
      />
      <PersanalServiceComponents
        accountants="Vacation Rentals"
        image1="/image-1102@2x.png"
      />
    </section>
  );
};

export default RealEstateCom;
