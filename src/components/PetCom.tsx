import { FunctionComponent } from "react";
import PersanalServiceComponents from "./PersanalServiceComponents";
import styles from "./PetCom.module.css";

export type PetComType = {
  className?: string;
};

const PetCom: FunctionComponent<PetComType> = ({ className = "" }) => {
  return (
    <section className={[styles.veterinariansParent, className].join(" ")}>
      <PersanalServiceComponents
        accountants="Veterinarians"
        image1="/image-191@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Groomers"
        image1="/image-192@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Boarding"
        image1="/image-193@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Training"
        image1="/image-194@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Sitting Services"
        image1="/image-195@2x.png"
      />
      <PersanalServiceComponents
        accountants="Animal Shelters"
        image1="/image-196@2x.png"
      />
      <PersanalServiceComponents
        accountants="Pet Stores"
        image1="/image-197@2x.png"
      />
    </section>
  );
};

export default PetCom;
