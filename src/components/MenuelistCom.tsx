import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuelistCom.module.css";

export type MenuelistComType = {
  className?: string;

  /** Style props */
  component37Position?: CSSProperties["position"];
  component37Top?: CSSProperties["top"];
  component37Left?: CSSProperties["left"];
};

const MenuelistCom: FunctionComponent<MenuelistComType> = ({
  className = "",
  component37Position,
  component37Top,
  component37Left,
}) => {
  const component37Style: CSSProperties = useMemo(() => {
    return {
      position: component37Position,
      top: component37Top,
      left: component37Left,
    };
  }, [component37Position, component37Top, component37Left]);

  return (
    <div
      className={[styles.component37, className].join(" ")}
      style={component37Style}
    >
      <div className={styles.component37Child} />
      <img
        className={styles.component37Item}
        alt=""
        src="/rectangle-153842@2x.png"
      />
      <h1 className={styles.hajiyarHottel}>Hajiyar Hottel</h1>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group1@2x.png"
        />
        <img
          className={styles.maskGroupIcon2}
          alt=""
          src="/mask-group2@2x.png"
        />
        <img
          className={styles.maskGroupIcon3}
          alt=""
          src="/mask-group3@2x.png"
        />
        <img
          className={styles.maskGroupIcon4}
          alt=""
          src="/mask-group4@2x.png"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.div}>4.5</div>
        <div className={styles.rating}>500 Rating</div>
      </div>
      <div className={styles.image2Parent}>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <h1 className={styles.baticaloSriLanka}>Baticalo, Sri Lanka.</h1>
      </div>
      <div className={styles.peopleRecentlyEnquiredParent}>
        <div className={styles.peopleRecentlyEnquired}>
          115 People Recently Enquired
        </div>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      </div>
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <h2 className={styles.chat}>Chat</h2>
        <input className={styles.rectangleInput} type="text" />
        <div className={styles.div1}>094 700000000</div>
        <h2 className={styles.menu}>Menu</h2>
        <div className={styles.lineMdphoneCall} />
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
      </div>
    </div>
  );
};

export default MenuelistCom;
