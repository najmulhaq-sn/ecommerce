import { FunctionComponent } from "react";
// import Hdr1 from "../components/Hdr";
import Ad from "../components/Ad";
import HomePageComponents from "../components/HomePageComponents";
import Bottom from "../components/Bottom";
import styles from "./HomePage.module.css";
import Header from "../components/Header1";
import QuickLink1 from "../components/QuickLink1";
import QuickLink2 from "../components/QuickLink2";
import QuickLink3 from "../components/QuickLink3";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="unset"
        sellingOnlineWithAnEcommeWidth="1200px"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-1@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <HomePageComponents />
      <QuickLink3/>
      {/* <section className={styles.borderWrapper}>
        <div className={styles.border}>
          <div className={styles.container}>
            <div className={styles.container1}>
              <div className={styles.container2}>
                <div className={styles.quickLinks}>Quick Links</div>
              </div>
              <div className={styles.list}>
                <div className={styles.itemmargin}>
                  <div className={styles.item}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>About us</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item1}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Advertise</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin2}>
                  <div className={styles.item2}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Investor Relations</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame1}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item3}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Media</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin4}>
                  <div className={styles.item4}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>We're hiring</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame2}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item5}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Testimonials</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin6}>
                  <div className={styles.item6}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Customer Care</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame3}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item7}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Feedback</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin8}>
                  <div className={styles.item8}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Free Listing</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame4}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item9}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Business Badge</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin10}>
                  <div className={styles.item10}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>What's New</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item11}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Sr Curated list</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin12}>
                  <div className={styles.item12}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Report a Bug</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container3}>
              <div className={styles.container4}>
                <div className={styles.srVerticals}>Sr Verticals</div>
              </div>
              <div className={styles.list1}>
                <div className={styles.itemmargin13}>
                  <div className={styles.item13}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>B2B</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin14}>
                  <div className={styles.item14}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>All India</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin15}>
                  <div className={styles.item15}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Restaurants</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin16}>
                  <div className={styles.item16}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Doctors</div>
                    </div>
                  </div>
                </div>
                <div className={styles.itemmargin17}>
                  <div className={styles.item17}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>Hospitals</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame6}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item18}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Colleges</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame7}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item19}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>AC Repair</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame8}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item20}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Car Services</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame9}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item21}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Hotels</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frame10}>
                  <div className={styles.itemmargin1}>
                    <div className={styles.item22}>
                      <div className={styles.link}>
                        <div className={styles.aboutUs}>Real Estate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame11}>
                <div className={styles.itemmargin1}>
                  <div className={styles.item23}>
                    <div className={styles.link}>
                      <div className={styles.aboutUs}>{`Bills & Recharge`}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.itemmargin1}>
                <div className={styles.item14}>
                  <div className={styles.link}>
                    <div className={styles.aboutUs}>Schools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Bottom
        containerAlignSelf="unset"
        containerWidth="1200px"
        containerWidth1="unset"
        copyrights200824AllFlex="unset"
        linkFlex="unset"
        containerWidth2="5.29%"
        containerRight="8.09%"
        containerLeft="86.62%"
        linkFlex1="unset"
        containerWidth3="6.43%"
        containerRight1="9.46%"
        containerLeft1="84.11%"
        linkFlex2="unset"
        containerPosition="unset"
        containerTop="unset"
        containerLeft2="unset"
        containerHeight="unset"
        containerAlignSelf1="stretch"
        privacyFlex="unset"
        divAlignSelf="unset"
        termsFlex="unset"
        divAlignSelf1="unset"
        infringementFlex="unset"
      />
    </div>
  );
};

export default HomePage;