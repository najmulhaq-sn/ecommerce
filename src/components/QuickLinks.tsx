import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./QuickLinks.module.css";

export type QuickLinksType = {
  className?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const QuickLinks: FunctionComponent<QuickLinksType> = ({
  className = "",
  frameDivTop,
  frameDivLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  return (
    <div
      className={[styles.borderWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.border}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <h3 className={styles.quickLinks}>Quick Links</h3>
            </div>
            <div className={styles.list}>
              <div className={styles.frame}>
                <div className={styles.itemmargin}>
                  <div className={styles.item}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>About us</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame1}>
                <div className={styles.itemmargin}>
                  <div className={styles.item1}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Advertise</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <div className={styles.itemmargin}>
                  <div className={styles.item2}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Investor Relations</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame3}>
                <div className={styles.itemmargin}>
                  <div className={styles.item3}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Media</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame4}>
                <div className={styles.itemmargin}>
                  <div className={styles.item4}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>We're hiring</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame5}>
                <div className={styles.itemmargin}>
                  <div className={styles.item5}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Testimonials</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame6}>
                <div className={styles.itemmargin}>
                  <div className={styles.item6}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Customer Care</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame7}>
                <div className={styles.itemmargin}>
                  <div className={styles.item7}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Feedback</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame8}>
                <div className={styles.itemmargin}>
                  <div className={styles.item8}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Free Listing</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.itemmargin9}>
                <div className={styles.item9}>
                  <div className={styles.link}>
                    <b className={styles.aboutUs}>Business Badge</b>
                  </div>
                </div>
              </div>
              <div className={styles.frame9}>
                <div className={styles.itemmargin}>
                  <div className={styles.item10}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>What's New</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame10}>
                <div className={styles.itemmargin}>
                  <div className={styles.item11}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Report a Bug</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame11}>
                <div className={styles.itemmargin}>
                  <div className={styles.item12}>
                    <div className={styles.link}>
                      <b className={styles.aboutUs}>Sr Curated list</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
