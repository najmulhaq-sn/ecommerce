import { FunctionComponent } from "react";
import PersanalServiceComponents from "./PersanalServiceComponents";
import styles from "./TechCom.module.css";

export type TechComType = {
  className?: string;
};

const TechCom: FunctionComponent<TechComType> = ({ className = "" }) => {
  return (
    <section className={[styles.veterinariansParent, className].join(" ")}>
      <PersanalServiceComponents
        accountants="Computer Repair"
        image1="/image-181@2x.png"
      />
      <PersanalServiceComponents
        accountants="Mobile Phone Repair"
        image1="/image-182@2x.png"
      />
      <PersanalServiceComponents
        accountants="Electronic Stores"
        image1="/image-183@2x.png"
      />
      <PersanalServiceComponents
        accountants="Home Automation Services"
        image1="/image-184@2x.png"
      />
    </section>
  );
};

export default TechCom;
