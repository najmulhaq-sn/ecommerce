import { FunctionComponent } from "react";
import PersanalServiceComponents from "./PersanalServiceComponents";
import styles from "./EDUCom.module.css";

export type EDUComType = {
  className?: string;
};

const EDUCom: FunctionComponent<EDUComType> = ({ className = "" }) => {
  return (
    <section className={[styles.schoolsAndCollegesParent, className].join(" ")}>
      <PersanalServiceComponents
        accountants="Schools and Colleges"
        image1="/image-151@2x.png"
      />
      <PersanalServiceComponents
        accountants="Language Schools"
        image1="/image-152@2x.png"
      />
      <PersanalServiceComponents
        accountants="Music Schools"
        image1="/image-153@2x.png"
      />
      <PersanalServiceComponents
        accountants="Dance Schools"
        image1="/image-154@2x.png"
      />
      <PersanalServiceComponents
        accountants="Tutoring Services"
        image1="/image-155@2x.png"
      />
      <PersanalServiceComponents
        accountants="Driving Schools"
        image1="/image-156@2x.png"
      />
      <PersanalServiceComponents
        accountants="Vocational Training"
        image1="/image-157@2x.png"
      />
      <PersanalServiceComponents
        accountants="Art Classes"
        image1="/image-158@2x.png"
      />
    </section>
  );
};

export default EDUCom;
