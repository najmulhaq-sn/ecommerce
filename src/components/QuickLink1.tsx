import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./QuickLink1.module.css";

export type QuickLink1Type = {
  className?: string;

  /** Style props */
  frameSectionWidth?: CSSProperties["width"];
  frameSectionAlignSelf?: CSSProperties["alignSelf"];
  borderWidth?: CSSProperties["width"];
  containerWidth?: CSSProperties["width"];
};

const QuickLink1: FunctionComponent<QuickLink1Type> = ({
  className = "",
  frameSectionWidth,
  frameSectionAlignSelf,
  borderWidth,
  containerWidth,
}) => {
  const frameSection2Style: CSSProperties = useMemo(() => {
    return {
      width: frameSectionWidth,
      alignSelf: frameSectionAlignSelf,
    };
  }, [frameSectionWidth, frameSectionAlignSelf]);

  const borderStyle: CSSProperties = useMemo(() => {
    return {
      width: borderWidth,
    };
  }, [borderWidth]);

  const container7Style: CSSProperties = useMemo(() => {
    return {
      width: containerWidth,
    };
  }, [containerWidth]);

  return (
    <section
      className={[styles.borderWrapper, className].join(" ")}
      style={frameSection2Style}
    >
      <div className={styles.border} style={borderStyle}>
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
                <div className={styles.itemmargin}>
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
                      <div className={styles.aboutUs}>Customer Care</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item5}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Feedback</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame6}>
                <div className={styles.itemmargin}>
                  <div className={styles.item6}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Free Listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame7}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item7}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Business Badge</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame8}>
                <div className={styles.itemmargin}>
                  <div className={styles.item8}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>What's New</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame9} />
              </div>
              <div className={styles.itemmargin}>
                <div className={styles.item9}>
                  <div className={styles.link}>
                    <div className={styles.aboutUs}>Report a Bug</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container3} style={container7Style}>
            <div className={styles.container4}>
              <h3 className={styles.srVerticals}>Sr Verticals</h3>
            </div>
            <div className={styles.list1}>
              <div className={styles.frame10}>
                <div className={styles.itemmargin}>
                  <div className={styles.item10}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>B2B</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame11}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item11}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Colleges</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame12}>
                <div className={styles.itemmargin}>
                  <div className={styles.item12}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>All India</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame13}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item13}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>AC Repair</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame14}>
                <div className={styles.frame15}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item14}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Restaurants</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frame16}>
                    <div className={styles.itemmargin}>
                      <div className={styles.item15}>
                        <div className={styles.link}>
                          <div className={styles.aboutUs}>Car Services</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame17}>
                  <div className={styles.frame18}>
                    <div className={styles.itemmargin}>
                      <div className={styles.item16}>
                        <div className={styles.link}>
                          <div className={styles.aboutUs}>Doctors</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frame19}>
                      <div className={styles.itemmargin}>
                        <div className={styles.item17}>
                          <div className={styles.link}>
                            <div className={styles.aboutUs}>Hotels</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frame20}>
                    <div className={styles.frame21}>
                      <div className={styles.itemmargin}>
                        <div className={styles.item18}>
                          <div className={styles.link}>
                            <div className={styles.aboutUs}>Hospitals</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frame22}>
                        <div className={styles.itemmargin}>
                          <div className={styles.item19}>
                            <div className={styles.link}>
                              <div className={styles.aboutUs}>Real Estate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frame23}>
                      <div className={styles.itemmargin}>
                        <div className={styles.item12}>
                          <div className={styles.link}>
                            <div className={styles.aboutUs}>Schools</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frame24}>
                        <div className={styles.itemmargin}>
                          <div className={styles.item21}>
                            <div className={styles.link}>
                              <div
                                className={styles.aboutUs}
                              >{`Bills & Recharge`}</div>
                            </div>
                          </div>
                        </div>
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

export default QuickLink1;
