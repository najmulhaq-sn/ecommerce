import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProposanalServiceCom.module.css";

export type ProposanalServiceComType = {
  className?: string;

  /** Style props */
  frameSectionWidth?: CSSProperties["width"];
  frameSectionHeight?: CSSProperties["height"];
  frameSectionGap?: CSSProperties["gap"];
};

const ProposanalServiceCom: FunctionComponent<ProposanalServiceComType> = ({
  className = "",
  frameSectionWidth,
  frameSectionHeight,
  frameSectionGap,
}) => {
  const frameSection1Style: CSSProperties = useMemo(() => {
    return {
      width: frameSectionWidth,
      height: frameSectionHeight,
      gap: frameSectionGap,
    };
  }, [frameSectionWidth, frameSectionHeight, frameSectionGap]);

  return (
    <section
      className={[styles.hairSalonsParent, className].join(" ")}
      style={frameSection1Style}
    >
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>Hair Salons</h2>
        <img className={styles.image1Icon} alt="" src="/image-115@2x.png" />
      </button>
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>Beauty Salons</h2>
        <img className={styles.image1Icon} alt="" src="/image-116@2x.png" />
      </button>
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>Barber Shops</h2>
        <img className={styles.image1Icon} alt="" src="/image-117@2x.png" />
      </button>
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>Nail Salons</h2>
        <img className={styles.image1Icon} alt="" src="/image-118@2x.png" />
      </button>
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>Massage Therapists</h2>
        <img className={styles.image1Icon} alt="" src="/image-119@2x.png" />
      </button>
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>Personal Trainers</h2>
        <img className={styles.image1Icon} alt="" src="/image-120@2x.png" />
      </button>
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>Tattoo Parlors</h2>
        <img className={styles.image1Icon} alt="" src="/image-121@2x.png" />
      </button>
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>
          Dry Cleaning and Laundry Services
        </h2>
        <img className={styles.image1Icon} alt="" src="/image-122@2x.png" />
      </button>
      <button className={styles.hairSalons}>
        <div className={styles.hairSalonsChild} />
        <h2 className={styles.dryCleaningAnd}>Tailors and Alterations</h2>
        <img className={styles.image1Icon} alt="" src="/image-123@2x.png" />
      </button>
    </section>
  );
};

export default ProposanalServiceCom;
