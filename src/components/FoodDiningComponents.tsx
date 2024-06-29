import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CateringServices from "./CateringServices";
import styles from "./FoodDiningComponents.module.css";

export type FoodDiningComponentsType = {
  className?: string;
};

const FoodDiningComponents: FunctionComponent<FoodDiningComponentsType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRestaurantsClick = useCallback(() => {
    navigate("/restaurants");
  }, [navigate]);

  return (
    <section className={[styles.restaurantsParent, className].join(" ")}>
      <button className={styles.restaurants} onClick={onRestaurantsClick}>
        <div className={styles.restaurantsChild} />
        <div className={styles.restaurants1}>Restaurants</div>
        <img className={styles.image1Icon} alt="" src="/image-1114@2x.png" />
      </button>
      <button className={styles.restaurants}>
        <div className={styles.restaurantsChild} />
        <div className={styles.restaurants1}>Cafes</div>
        <img className={styles.image1Icon} alt="" src="/image-1115@2x.png" />
      </button>
      <button className={styles.restaurants}>
        <div className={styles.restaurantsChild} />
        <div className={styles.restaurants1}>Bakeries</div>
        <img className={styles.image1Icon} alt="" src="/image-1116@2x.png" />
      </button>
      <CateringServices />
      <button className={styles.restaurants}>
        <div className={styles.restaurantsChild} />
        <div className={styles.restaurants1}>Food Trucks</div>
        <img className={styles.image1Icon} alt="" src="/image-1118@2x.png" />
      </button>
      <button className={styles.restaurants}>
        <div className={styles.restaurantsChild} />
        <div className={styles.restaurants1}>Fast Food</div>
        <img className={styles.image1Icon} alt="" src="/image-1119@2x.png" />
      </button>
    </section>
  );
};

export default FoodDiningComponents;
