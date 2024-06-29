import { FunctionComponent } from "react";
import styles from "./I.module.css";

export type IType = {
  className?: string;
};

const I: FunctionComponent<IType> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.kisspngChowMeinChineseNoodParent}>
            <img
              className={styles.kisspngChowMeinChineseNoodIcon}
              alt=""
              src="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-12@2x.png"
            />
            <div className={styles.chineseYakisbo}>{`Chinese Yakisbo `}</div>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.frame3}>
          <div className={styles.frame4}>
            <div className={styles.frame5}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.frame6}>
              <div className={styles.chineseYakisbo1}>{`Chinese Yakisbo `}</div>
            </div>
          </div>
          <div className={styles.frame7}>
            <div className={styles.frame8}>
              <div className={styles.frameDiv} />
            </div>
            <div className={styles.frame9}>
              <div
                className={styles.ametMinimMollit}
              >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
            </div>
          </div>
          <div className={styles.frame10}>
            <div className={styles.frame11}>
              <div className={styles.wrapper}>
                <div className={styles.div}>4.5</div>
              </div>
            </div>
            <div className={styles.frame12}>
              <div className={styles.maskGroupParent}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group5@2x.png"
                />
                <img
                  className={styles.maskGroupIcon1}
                  alt=""
                  src="/mask-group6@2x.png"
                />
                <img
                  className={styles.maskGroupIcon2}
                  alt=""
                  src="/mask-group7@2x.png"
                />
                <img
                  className={styles.maskGroupIcon3}
                  alt=""
                  src="/mask-group8@2x.png"
                />
                <img
                  className={styles.maskGroupIcon4}
                  alt=""
                  src="/mask-group9@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frame13}>
            <img className={styles.frameIcon} alt="" src="/frame11.svg" />
            <div className={styles.frame14}>
              <div className={styles.frame14}>
                <div className={styles.div1}>$5.08</div>
              </div>
              <div className={styles.frame16}>
                <div className={styles.frameChild1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default I;
