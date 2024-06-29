import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePageComponents.module.css";

export type HomePageComponentsType = {
  className?: string;
};

const HomePageComponents: FunctionComponent<HomePageComponentsType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFoodAndDiningClick = useCallback(() => {
    navigate("/food-and-dining");
  }, [navigate]);

  const onHealthAndWellnessClick = useCallback(() => {
    navigate("/health-and-wellness");
  }, [navigate]);

  const onHomeServicesClick = useCallback(() => {
    navigate("/home-services");
  }, [navigate]);

  const onPersonalServicesClick = useCallback(() => {
    navigate("/personal-services");
  }, [navigate]);

  const onProfessionalServicesClick = useCallback(() => {
    navigate("/professional-services");
  }, [navigate]);

  const onRetailAndShoppingClick = useCallback(() => {
    navigate("/retail-and-shopping");
  }, [navigate]);

  const onAutomotiveServicesClick = useCallback(() => {
    navigate("/automotive-services");
  }, [navigate]);

  const onEducationAndTrainingClick = useCallback(() => {
    navigate("/education-and-training");
  }, [navigate]);

  const onEntertainmentAndRecreationClick = useCallback(() => {
    navigate("/entertainment-and-recreation");
  }, [navigate]);

  const onTravelAndAccommodationClick = useCallback(() => {
    navigate("/travel-and-accommodation");
  }, [navigate]);

  const onRealEstateClick = useCallback(() => {
    navigate("/real-estate");
  }, [navigate]);

  const onEventsAndWeddingsClick = useCallback(() => {
    navigate("/events-and-weddings");
  }, [navigate]);

  const onPetsAndAnimalsClick = useCallback(() => {
    navigate("/pets-and-animals");
  }, [navigate]);

  const onTechnologyAndElectronicsClick = useCallback(() => {
    navigate("/technology-and-electronics");
  }, [navigate]);

  return (
    <section className={[styles.foodAndDiningParent, className].join(" ")}>
      <button className={styles.foodAndDining} onClick={onFoodAndDiningClick}>
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Food and Dining</div>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onHealthAndWellnessClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Health and Wellness</div>
        <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
      </button>
      <button className={styles.foodAndDining} onClick={onHomeServicesClick}>
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Home Services</div>
        <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onPersonalServicesClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Personal Services</div>
        <img className={styles.image1Icon} alt="" src="/image-13@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onProfessionalServicesClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Professional Services</div>
        <img className={styles.image1Icon} alt="" src="/image-14@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onRetailAndShoppingClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Retail and Shopping</div>
        <img className={styles.image1Icon} alt="" src="/image-15@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onAutomotiveServicesClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Automotive Services</div>
        <img className={styles.image1Icon} alt="" src="/image-16@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onEducationAndTrainingClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Education and Training</div>
        <img className={styles.image1Icon} alt="" src="/image-17@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onEntertainmentAndRecreationClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>
          Entertainment and Recreation
        </div>
        <img className={styles.image1Icon} alt="" src="/image-18@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onTravelAndAccommodationClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Travel and Accommodation</div>
        <img className={styles.image1Icon} alt="" src="/image-19@2x.png" />
      </button>
      <button className={styles.foodAndDining} onClick={onRealEstateClick}>
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Real Estate</div>
        <img className={styles.image1Icon} alt="" src="/image-110@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onEventsAndWeddingsClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Events and Weddings</div>
        <img className={styles.image1Icon} alt="" src="/image-111@2x.png" />
      </button>
      <button className={styles.foodAndDining} onClick={onPetsAndAnimalsClick}>
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Pets and Animals</div>
        <img className={styles.image1Icon} alt="" src="/image-112@2x.png" />
      </button>
      <button
        className={styles.foodAndDining}
        onClick={onTechnologyAndElectronicsClick}
      >
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Technology and Electronics</div>
        <img className={styles.image1Icon} alt="" src="/image-113@2x.png" />
      </button>
      <button className={styles.foodAndDining}>
        <div className={styles.foodAndDiningChild} />
        <div className={styles.foodAndDining1}>Sports and Outdoors</div>
        <img className={styles.image1Icon} alt="" src="/image-114@2x.png" />
      </button>
    </section>
  );
};

export default HomePageComponents;
