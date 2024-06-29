import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./QuickLink4.module.css";

export type QuickLink4Type = {
  className?: string;

  /** Style props */
  containerAlignSelf?: CSSProperties["alignSelf"];
  containerWidth?: CSSProperties["width"];
  listWidth?: CSSProperties["width"];
  listAlignSelf?: CSSProperties["alignSelf"];
  frameHeight?: CSSProperties["height"];
  frameHeight1?: CSSProperties["height"];
  frameHeight2?: CSSProperties["height"];
  frameHeight3?: CSSProperties["height"];
  containerFlex?: CSSProperties["flex"];
  containerWidth1?: CSSProperties["width"];
  containerAlignSelf1?: CSSProperties["alignSelf"];
  containerWidth2?: CSSProperties["width"];
  listWidth1?: CSSProperties["width"];
  listAlignSelf1?: CSSProperties["alignSelf"];
  frameFlex?: CSSProperties["flex"];
  frameWidth?: CSSProperties["width"];
  frameFlex1?: CSSProperties["flex"];
  frameMarginLeft?: CSSProperties["marginLeft"];
  frameWidth1?: CSSProperties["width"];
  frameSectionAlignSelf?: CSSProperties["alignSelf"];
  frameSectionPosition?: CSSProperties["position"];
  frameSectionTop?: CSSProperties["top"];
  frameSectionLeft?: CSSProperties["left"];
  frameSectionWidth?: CSSProperties["width"];
};

const QuickLink4: FunctionComponent<QuickLink4Type> = ({
  className = "",
  containerAlignSelf,
  containerWidth,
  listWidth,
  listAlignSelf,
  frameHeight,
  frameHeight1,
  frameHeight2,
  frameHeight3,
  containerFlex,
  containerWidth1,
  containerAlignSelf1,
  containerWidth2,
  listWidth1,
  listAlignSelf1,
  frameFlex,
  frameWidth,
  frameFlex1,
  frameMarginLeft,
  frameWidth1,
  frameSectionAlignSelf,
  frameSectionPosition,
  frameSectionTop,
  frameSectionLeft,
  frameSectionWidth,
}) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: containerAlignSelf,
      width: containerWidth,
    };
  }, [containerAlignSelf, containerWidth]);

  const listStyle: CSSProperties = useMemo(() => {
    return {
      width: listWidth,
      alignSelf: listAlignSelf,
    };
  }, [listWidth, listAlignSelf]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      height: frameHeight,
    };
  }, [frameHeight]);

  const frame1Style: CSSProperties = useMemo(() => {
    return {
      height: frameHeight1,
    };
  }, [frameHeight1]);

  const frame2Style: CSSProperties = useMemo(() => {
    return {
      height: frameHeight2,
    };
  }, [frameHeight2]);

  const frame3Style: CSSProperties = useMemo(() => {
    return {
      height: frameHeight3,
    };
  }, [frameHeight3]);

  const container1Style: CSSProperties = useMemo(() => {
    return {
      flex: containerFlex,
      width: containerWidth1,
    };
  }, [containerFlex, containerWidth1]);

  const container2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: containerAlignSelf1,
      width: containerWidth2,
    };
  }, [containerAlignSelf1, containerWidth2]);

  const list1Style: CSSProperties = useMemo(() => {
    return {
      width: listWidth1,
      alignSelf: listAlignSelf1,
    };
  }, [listWidth1, listAlignSelf1]);

  const frame4Style: CSSProperties = useMemo(() => {
    return {
      flex: frameFlex,
      width: frameWidth,
    };
  }, [frameFlex, frameWidth]);

  const frame5Style: CSSProperties = useMemo(() => {
    return {
      flex: frameFlex1,
      marginLeft: frameMarginLeft,
      width: frameWidth1,
    };
  }, [frameFlex1, frameMarginLeft, frameWidth1]);

  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameSectionAlignSelf,
      position: frameSectionPosition,
      top: frameSectionTop,
      left: frameSectionLeft,
      width: frameSectionWidth,
    };
  }, [
    frameSectionAlignSelf,
    frameSectionPosition,
    frameSectionTop,
    frameSectionLeft,
    frameSectionWidth,
  ]);

  return (
    <section
      className={[styles.borderWrapper, className].join(" ")}
      style={frameSectionStyle}
    >
      <div className={styles.border}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className={styles.container2} style={containerStyle}>
              <div className={styles.quickLinks}>Quick Links</div>
            </div>
            <div className={styles.list} style={listStyle}>
              <div className={styles.frame} style={frameStyle}>
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
              <div className={styles.frame2} style={frame1Style}>
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
              <div className={styles.frame6} style={frame2Style}>
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
              <div className={styles.frame8} style={frame3Style}>
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
          <div className={styles.container3} style={container1Style}>
            <div className={styles.container2} style={container2Style}>
              <div className={styles.srVerticals}>Sr Verticals</div>
            </div>
            <div className={styles.list1} style={list1Style}>
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
              <div className={styles.frame16}>
                <div className={styles.frame17}>
                  <div className={styles.itemmargin}>
                    <div className={styles.item17}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Restaurants</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frame18}>
                    <div className={styles.itemmargin}>
                      <div className={styles.item18}>
                        <div className={styles.link}>
                          <div className={styles.aboutUs}>Car Services</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame19}>
                  <div className={styles.frame20}>
                    <div className={styles.itemmargin}>
                      <div className={styles.item19}>
                        <div className={styles.link}>
                          <div className={styles.aboutUs}>Doctors</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frame21}>
                      <div className={styles.itemmargin}>
                        <div className={styles.item20}>
                          <div className={styles.link}>
                            <div className={styles.aboutUs}>Hotels</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frame22}>
                    <div className={styles.frame23} style={frame4Style}>
                      <div className={styles.itemmargin}>
                        <div className={styles.item21}>
                          <div className={styles.link}>
                            <div className={styles.aboutUs}>Hospitals</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frame24}>
                        <div className={styles.itemmargin}>
                          <div className={styles.item22}>
                            <div className={styles.link}>
                              <div className={styles.aboutUs}>Real Estate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frame25} style={frame5Style}>
                      <div className={styles.itemmargin}>
                        <div className={styles.item15}>
                          <div className={styles.link}>
                            <div className={styles.aboutUs}>Schools</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frame26}>
                        <div className={styles.itemmargin}>
                          <div className={styles.item24}>
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

export default QuickLink4;
