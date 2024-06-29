import { FunctionComponent } from "react";
import styles from "./HelthAndWellnessComponents.module.css";

export type HelthAndWellnessComponentsType = {
  className?: string;
};

const HelthAndWellnessComponents: FunctionComponent<
  HelthAndWellnessComponentsType
> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.frame1}>
        <button className={styles.hospitals}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.hospitals1} h1>
            Hospitals
          </h2>
          <img
            className={styles.image1Icon}
            ico1
            alt=""
            src="/image-185@2x.png"
          />
        </button>
        <button className={styles.clinics}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Clinics</h2>
          <img
            className={styles.image1Icon}
            io2
            alt=""
            src="/image-1110@2x.png"
          />
        </button>
        <button className={styles.pharmacies}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Pharmacies</h2>
          <img
            className={styles.image1Icon}
            ico3
            alt=""
            src="/image-1210@2x.png"
          />
        </button>
        <button className={styles.gymsAndFitnessCenters}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Gyms and Fitness Centers</h2>
          <img
            className={styles.image1Icon}
            ico4
            alt=""
            src="/image-1310@2x.png"
          />
        </button>
        <button className={styles.mentalHealthServices}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Mental Health Services</h2>
          <img
            className={styles.image1Icon}
            io6
            alt=""
            src="/image-1410@2x.png"
          />
        </button>
        <button className={styles.dentists}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Dentists</h2>
          <img className={styles.image1Icon} alt="" src="/image-186@2x.png" />
        </button>
        <button className={styles.opticians}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Opticians</h2>
          <img className={styles.image1Icon} alt="" src="/image-187@2x.png" />
        </button>
        <button className={styles.physiotherapists}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Physiotherapists</h2>
          <img className={styles.image1Icon} alt="" src="/image-188@2x.png" />
        </button>
        <button className={styles.spasAndWellnessCenters}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Spas and Wellness Centers</h2>
          <img className={styles.image1Icon} alt="" src="/image-189@2x.png" />
        </button>
        <button className={styles.chiropractors}>
          <div className={styles.hospitalsChild} />
          <h2 className={styles.gymsAndFitness}>Chiropractors</h2>
          <img className={styles.image1Icon} alt="" src="/image-190@2x.png" />
        </button>
      </div>
    </div>
  );
};

export default HelthAndWellnessComponents;
