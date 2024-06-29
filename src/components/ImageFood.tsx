import { FunctionComponent } from "react";
import styles from "./ImageFood.module.css";

export type ImageFoodType = {
  className?: string;
};

const ImageFood: FunctionComponent<ImageFoodType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.sesChickenBiryaniRecipe736, className].join(" ")}
    />
  );
};

export default ImageFood;
