import { FunctionComponent, useCallback } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import Header from "../components/Header1";
import List1 from "../components/List1";
import { useNavigate } from "react-router-dom";
import Lists from "../components/Lists";
import QuickLinks from "../components/QuickLinks";
import Bottom from "../components/Bottom";
import styles from "./Restaurants.module.css";

const Restaurants: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.justdial.com/Terms-of-Use");
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/restaurants-menu");
  }, [navigate]);

  return (
    <div className={styles.restaurants}>
      <main className={styles.frameParent}>
        <section className={styles.frame}>
          <header className={styles.frame1} hear>
            <header className={styles.header1}>
              <header className={styles.header11}>
                <header className={styles.header1}>
                  <Header />
                </header>
              </header>
            </header>
          </header>
        </section>
        <List1 />
        <div className={styles.frame2} />
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-153847@2x.png"
        />
        <div className={styles.frame3}>
          <div className={styles.frame4}>
            <div className={styles.productList}>
              <div className={styles.component37}>
                <button className={styles.component37Child} />
                <img
                  className={styles.component37Item}
                  alt=""
                  src="/rectangle-153842@2x.png"
                />
                <h1 className={styles.hajiyarHottel}>Hajiyar Hottel</h1>
                <Slider
                  className={styles.parent}
                  width="203.9px"
                  colorScheme="teal"
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.div}>4.5</div>
                  <div className={styles.rating}>500 Rating</div>
                </div>
                <div className={styles.image2Parent}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <h1 className={styles.baticaloSriLanka}>
                    Baticalo, Sri Lanka.
                  </h1>
                </div>
                <div className={styles.peopleRecentlyEnquiredParent}>
                  <div className={styles.peopleRecentlyEnquired}>
                    115 People Recently Enquired
                  </div>
                  <img
                    className={styles.image5Icon}
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
                <button className={styles.image6} />
                <div className={styles.rectangleGroup}>
                  <button
                    className={styles.groupItem}
                    onClick={onRectangleButtonClick}
                  />
                  <button className={styles.groupInner} />
                  <img
                    className={styles.image4Icon}
                    alt=""
                    src="/image-4@2x.png"
                  />
                  <h2 className={styles.chat}>Chat</h2>
                  <button className={styles.rectangleButton} />
                  <div className={styles.div1}>094 700000000</div>
                  <h2 className={styles.menu}>Menu</h2>
                  <div className={styles.lineMdphoneCall} />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame5}>
          <Lists />
        </div>
        <div className={styles.frame6}>
          <div className={styles.frame4}>
            <div className={styles.productList}>
              <div className={styles.component37}>
                <button className={styles.component37Child} />
                <img
                  className={styles.component37Item}
                  alt=""
                  src="/rectangle-153842@2x.png"
                />
                <h1 className={styles.hajiyarHottel}>Hajiyar Hottel</h1>
                <Slider
                  className={styles.parent}
                  width="203.9px"
                  colorScheme="teal"
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.div}>4.5</div>
                  <div className={styles.rating}>500 Rating</div>
                </div>
                <div className={styles.image2Parent}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <h1 className={styles.baticaloSriLanka}>
                    Baticalo, Sri Lanka.
                  </h1>
                </div>
                <div className={styles.peopleRecentlyEnquiredParent}>
                  <div className={styles.peopleRecentlyEnquired}>
                    115 People Recently Enquired
                  </div>
                  <img
                    className={styles.image5Icon}
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
                <button className={styles.image6} />
                <div className={styles.rectangleGroup}>
                  <button className={styles.groupItem} />
                  <button className={styles.groupInner} />
                  <img
                    className={styles.image4Icon}
                    alt=""
                    src="/image-4@2x.png"
                  />
                  <h2 className={styles.chat}>Chat</h2>
                  <button className={styles.rectangleButton} />
                  <div className={styles.div1}>094 700000000</div>
                  <h2 className={styles.menu}>Menu</h2>
                  <div className={styles.lineMdphoneCall} />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame8}>
          <div className={styles.frame4}>
            <div className={styles.productList}>
              <div className={styles.component37}>
                <button className={styles.component37Child} />
                <img
                  className={styles.component37Item}
                  alt=""
                  src="/rectangle-153842@2x.png"
                />
                <h1 className={styles.hajiyarHottel}>Hajiyar Hottel</h1>
                <Slider
                  className={styles.parent}
                  width="203.9px"
                  colorScheme="teal"
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.div}>4.5</div>
                  <div className={styles.rating}>500 Rating</div>
                </div>
                <div className={styles.image2Parent}>
                  <img
                    className={styles.image2Icon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <h1 className={styles.baticaloSriLanka}>
                    Baticalo, Sri Lanka.
                  </h1>
                </div>
                <div className={styles.peopleRecentlyEnquiredParent}>
                  <div className={styles.peopleRecentlyEnquired}>
                    115 People Recently Enquired
                  </div>
                  <img
                    className={styles.image5Icon}
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
                <button className={styles.image6} />
                <div className={styles.rectangleGroup}>
                  <button className={styles.groupItem} />
                  <button className={styles.groupInner} />
                  <img
                    className={styles.image4Icon}
                    alt=""
                    src="/image-4@2x.png"
                  />
                  <h2 className={styles.chat}>Chat</h2>
                  <button className={styles.rectangleButton} />
                  <div className={styles.div1}>094 700000000</div>
                  <h2 className={styles.menu}>Menu</h2>
                  <div className={styles.lineMdphoneCall} />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuickLinks />
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
          containerPosition="absolute"
          containerTop="2549px"
          containerLeft2="-4.5px"
          onLinkContainerClick={onLinkContainerClick}
          containerHeight="unset"
          containerAlignSelf1="stretch"
          privacyFlex="unset"
          divAlignSelf="unset"
          termsFlex="unset"
          divAlignSelf1="unset"
          infringementFlex="unset"
        />
      </main>
    </div>
  );
};

export default Restaurants;
