import { FunctionComponent } from "react";
import styles from "./QuickLink5.module.css";

export type QuickLink5Type = {
  className?: string;
};

const QuickLink5: FunctionComponent<QuickLink5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.borderWrapper, className].join(" ")}>
      <div className={styles.border}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.container2}>
              <div className={styles.quickLinks}>Quick Links</div>
            </div>
            <div className={styles.list}>
              <div className={styles.frame}>
                <div className={styles.itemmargin}>
                  <div className={styles.item}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>About us</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame1}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item1}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Advertise</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame2}>
                <div className={styles.itemmargin2}>
                  <div className={styles.item2}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Investor Relations</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame3}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item3}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Media</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame4}>
                <div className={styles.itemmargin}>
                  <div className={styles.item4}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>We're hiring</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item5}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Testimonials</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame6}>
                <div className={styles.itemmargin}>
                  <div className={styles.item6}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Customer Care</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame7}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item7}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Feedback</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame8}>
                <div className={styles.itemmargin}>
                  <div className={styles.item8}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Free Listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame9}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item9}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Business Badge</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame10}>
                <div className={styles.itemmargin}>
                  <div className={styles.item10}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>What's New</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame11}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item11}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Sr Curated list</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.itemmargin}>
                <div className={styles.item12}>
                  <div className={styles.link}>
                    <div className={styles.aboutUs}>Report a Bug</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.container2}>
              <div className={styles.srVerticals}>Sr Verticals</div>
            </div>
            <div className={styles.list1}>
              <div className={styles.frame12}>
                <div className={styles.itemmargin}>
                  <div className={styles.item13}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>B2B</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame13}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item14}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Colleges</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame14}>
                <div className={styles.itemmargin}>
                  <div className={styles.item15}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>All India</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame15}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item16}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>AC Repair</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLink5;
