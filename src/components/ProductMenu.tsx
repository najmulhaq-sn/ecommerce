import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductMenu.module.css";

export type ProductMenuType = {
  className?: string;

  /** Action props */
  onComponentClick?: () => void;
};

const ProductMenu: FunctionComponent<ProductMenuType> = ({
  className = "",
  onComponentClick,
}) => {
  const navigate = useNavigate();

  const onComponentClick1 = useCallback(() => {
    navigate("/restaurants-menu-full-view");
  }, [navigate]);

  return (
    <button
      className={[styles.component2, className].join(" ")}
      onClick={onComponentClick}
    >
      <div className={styles.component2Child} />
      <img
        className={styles.sesChickenBiryaniRecipe736Icon}
        alt=""
        src="/seschickenbiryanirecipe7367850heroaed211926bb0e4ca1be510695c15ce111-1@2x.png"
      />
      <h3 className={styles.productName}>{`Product Name `}</h3>
      <div className={styles.rs90000}>RS 90000</div>
    </button>
  );
};

export default ProductMenu;
