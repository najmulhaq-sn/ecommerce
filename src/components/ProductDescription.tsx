import { FunctionComponent } from "react";
import styles from "./ProductDescription.module.css";

export type ProductDescriptionType = {
  className?: string;
};

const ProductDescription: FunctionComponent<ProductDescriptionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frame, className].join(" ")}>
      <div className={styles.frame1}>
        <h2 className={styles.briyaneAppearsToContainer}>
          <p className={styles.briyaneAppearsTo}>
            Briyane" appears to be a variant spelling of "biryani," a popular
            and flavorful mixed rice dish originating from the Indian
            subcontinent. Biryani is known for its rich aroma, vibrant colors,
            and complex flavors, making it a beloved dish in many South Asian
            and Middle Eastern cuisines. Here are some key characteristics of
            biryani:
          </p>
          <p className={styles.briyaneAppearsTo}>Ingredients</p>
          <ol className={styles.riceTypicallyLongGrainBa}>
            <li className={styles.riceTypicallyLongGrain}>
              Rice: Typically, long-grain basmati rice is used, which is known
              for its fragrance and fluffy texture.
            </li>
            <li className={styles.riceTypicallyLongGrain}>
              Meat: Commonly includes chicken, beef, lamb, goat, or seafood.
              However, vegetarian versions with paneer or vegetables are also
              popular.
            </li>
            <li className={styles.riceTypicallyLongGrain}>
              Spices and Herbs: A blend of spices such as cumin, cloves,
              cardamom, cinnamon, bay leaves, and star anise. Fresh herbs like
              mint and cilantro are often added.
            </li>
            <li className={styles.riceTypicallyLongGrain}>
              Yogurt and Ghee: Yogurt is used for marination, adding tenderness
              and flavor to the meat. Ghee (clarified butter) adds richness to
              the dish.
            </li>
            <li className={styles.riceTypicallyLongGrain}>
              Saffron: This precious spice is usually soaked in milk and
              sprinkled over the rice, giving it a golden hue and unique flavor.
            </li>
            <li>
              Aromatics: Onions, garlic, and ginger are commonly used, often
              fried until caramelized for added depth of flavor.
            </li>
          </ol>
        </h2>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.rs9000}>RS 9000</div>
        </div>
        <div className={styles.frame4}>
          <div className={styles.frameChild} />
          <div className={styles.frame5}>
            <div className={styles.getDirectionsWrapper}>
              <h2 className={styles.getDirections} direction>
                Get Directions
              </h2>
            </div>
            <div className={styles.rectangleParent}>
              <input
                className={styles.rectangleInput}
                readOnly={true}
                type="checkbox"
                icn
              />
              <img
                className={styles.groupChild}
                alt=""
                src="/vector-1@2x.png"
              />
            </div>
          </div>
          <button className={styles.frameItem} />
          <div className={styles.frame6}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frame7}>
            <img className={styles.image4Icon} alt="" src="/image-41@2x.png" />
          </div>
          <button className={styles.frame8}>
            <h2 className={styles.chat}>Chat</h2>
          </button>
          <div className={styles.frame9}>
            <div className={styles.frameParent}>
              <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
              <div className={styles.frame10}>
                <h1 className={styles.baticaloSriLanka}>
                  Baticalo, Sri Lanka.
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.frame11}>
            <div className={styles.frameGroup}>
              <button className={styles.frame12} />
              <div className={styles.frame13}>
                <div className={styles.lineMdphoneCall} />
              </div>
              <img className={styles.frameIcon1} alt="" src="/frame1@2x.png" />
              <div className={styles.div}>094 700000000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
