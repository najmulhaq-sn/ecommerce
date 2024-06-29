import { FunctionComponent } from "react";
import styles from "./I2.module.css";

export type I2Type = {
  className?: string;
};

const I2: FunctionComponent<I2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.kisspngChowMeinChineseNoodParent}>
          <img
            className={styles.kisspngChowMeinChineseNoodIcon}
            alt=""
            src="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-11@2x.png"
          />
          <div className={styles.chineseYakisbo}>{`Chinese Yakisbo `}</div>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frame2}>
            <div className={styles.frame1}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.kisspngChowMeinChineseNoodParent}>
              <img
                className={styles.kisspngChowMeinChineseNoodIcon}
                alt=""
                src="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-11@2x.png"
              />
              <div className={styles.chineseYakisbo}>{`Chinese Yakisbo `}</div>
              <div className={styles.frameItem} />
            </div>
          </div>
          <div className={styles.frame4}>
            <div className={styles.frame5}>
              <div className={styles.frame6}>
                <div className={styles.frame7}>
                  <div className={styles.frameDiv} />
                </div>
                <div className={styles.frame8}>
                  <div
                    className={styles.chineseYakisbo2}
                  >{`Chinese Yakisbo `}</div>
                </div>
              </div>
              <div className={styles.frame9}>
                <div className={styles.frame10}>
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.frame11}>
                  <div
                    className={styles.ametMinimMollit}
                  >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
                </div>
              </div>
            </div>
            <div className={styles.frame12}>
              <div className={styles.frame13}>
                <img className={styles.frameIcon} alt="" src="/frame11.svg" />
                <div className={styles.frame14}>
                  <div className={styles.frame14}>
                    <div className={styles.div}>$5.08</div>
                  </div>
                  <div className={styles.frame16}>
                    <div className={styles.frameChild2} />
                  </div>
                </div>
              </div>
              <div className={styles.frame17}>
                <div className={styles.frame18}>
                  <div className={styles.wrapper}>
                    <div className={styles.div1}>4.5</div>
                  </div>
                </div>
                <div className={styles.frame19}>
                  <div className={styles.maskGroupParent}>
                    <img
                      className={styles.maskGroupIcon}
                      alt=""
                      src="/mask-group10@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon1}
                      alt=""
                      src="/mask-group11@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon2}
                      alt=""
                      src="/mask-group12@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon3}
                      alt=""
                      src="/mask-group13@2x.png"
                    />
                    <img
                      className={styles.maskGroupIcon4}
                      alt=""
                      src="/mask-group14@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame20}>
        <div className={styles.frame21}>
          <div className={styles.frame7}>
            <div className={styles.frameDiv} />
          </div>
          <div className={styles.frame8}>
            <div className={styles.chineseYakisbo2}>{`Chinese Yakisbo `}</div>
          </div>
        </div>
        <div className={styles.frame24}>
          <div className={styles.frame10}>
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.frame11}>
            <div
              className={styles.ametMinimMollit}
            >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
          </div>
        </div>
        <div className={styles.frame27}>
          <div className={styles.frame18}>
            <div className={styles.wrapper}>
              <div className={styles.div1}>4.5</div>
            </div>
          </div>
          <div className={styles.frame19}>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group10@2x.png"
              />
              <img
                className={styles.maskGroupIcon1}
                alt=""
                src="/mask-group11@2x.png"
              />
              <img
                className={styles.maskGroupIcon2}
                alt=""
                src="/mask-group12@2x.png"
              />
              <img
                className={styles.maskGroupIcon3}
                alt=""
                src="/mask-group13@2x.png"
              />
              <img
                className={styles.maskGroupIcon4}
                alt=""
                src="/mask-group14@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frame30}>
          <img className={styles.frameIcon} alt="" src="/frame11.svg" />
          <div className={styles.frame14}>
            <div className={styles.frame14}>
              <div className={styles.div}>$5.08</div>
            </div>
            <div className={styles.frame16}>
              <div className={styles.frameChild2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default I2;
