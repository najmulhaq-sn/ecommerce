import { FunctionComponent, memo } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import styles from "./Lists.module.css";

export type ListsType = {
  className?: string;
};

const Lists: FunctionComponent<ListsType> = memo(({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.productList}>
        <div className={styles.component37}>
          <button className={styles.component37Child} />
          <img
            className={styles.component37Item}
            alt=""
            src="/rectangle-153842@2x.png"
          />
          <h1 className={styles.hajiyarHottel}>Hajiyar Hottel</h1>
          <Slider className={styles.parent} width="203.9px" colorScheme="teal">
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
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            <h1 className={styles.baticaloSriLanka}>Baticalo, Sri Lanka.</h1>
          </div>
          <div className={styles.peopleRecentlyEnquiredParent}>
            <div className={styles.peopleRecentlyEnquired}>
              115 People Recently Enquired
            </div>
            <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          </div>
          <button className={styles.image6} />
          <div className={styles.rectangleGroup}>
            <button className={styles.groupItem} />
            <button className={styles.groupInner} />
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            <h2 className={styles.chat}>Chat</h2>
            <button className={styles.rectangleButton} />
            <div className={styles.div1}>094 700000000</div>
            <h2 className={styles.menu}>Menu</h2>
            <div className={styles.lineMdphoneCall} />
            <img className={styles.groupIcon} alt="" src="/group@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Lists;
