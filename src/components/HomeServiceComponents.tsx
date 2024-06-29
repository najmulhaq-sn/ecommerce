import { FunctionComponent, memo } from "react";
import styles from "./HomeServiceComponents.module.css";

export type HomeServiceComponentsType = {
  className?: string;
};

const HomeServiceComponents: FunctionComponent<HomeServiceComponentsType> =
  memo(({ className = "" }) => {
    return (
      <section className={[styles.plumbersParent, className].join(" ")}>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Plumbers</h2>
          <img className={styles.image1Icon} alt="" src="/image-1103@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Electricians</h2>
          <img className={styles.image1Icon} alt="" src="/image-1104@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>HVAC Services</h2>
          <img className={styles.image1Icon} alt="" src="/image-1105@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Home Cleaning Services</h2>
          <img className={styles.image1Icon} alt="" src="/image-1106@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Pest Control</h2>
          <img className={styles.image1Icon} alt="" src="/image-1107@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Landscaping and Gardening</h2>
          <img className={styles.image1Icon} alt="" src="/image-1108@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Home Repair and Maintenance</h2>
          <img className={styles.image1Icon} alt="" src="/image-1109@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Locksmiths</h2>
          <img className={styles.image1Icon} alt="" src="/image-1111@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Interior Designers</h2>
          <img className={styles.image1Icon} alt="" src="/image-1112@2x.png" />
        </button>
        <button className={styles.plumbers}>
          <div className={styles.plumbersChild} />
          <h2 className={styles.homeRepairAnd}>Moving Services</h2>
          <img className={styles.image1Icon} alt="" src="/image-1113@2x.png" />
        </button>
      </section>
    );
  });

export default HomeServiceComponents;
