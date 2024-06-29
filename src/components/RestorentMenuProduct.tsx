import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductMenu from "./ProductMenu";
import styles from "./RestorentMenuProduct.module.css";

export type RestorentMenuProductType = {
  className?: string;
};

const RestorentMenuProduct: FunctionComponent<RestorentMenuProductType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onComponentClick = useCallback(() => {
    navigate("/restaurants-menu-full-view");
  }, [navigate]);

  return (
    <section className={[styles.frame, className].join(" ")} menu>
      <div className={styles.frameParent}>
        <div className={styles.frame1}>
          <ProductMenu onComponentClick={onComponentClick} />
          <ProductMenu />
          <ProductMenu />
        </div>
        <div className={styles.frame1}>
          <ProductMenu />
          <ProductMenu />
          <ProductMenu />
        </div>
        <div className={styles.frame1}>
          <ProductMenu />
          <ProductMenu />
          <ProductMenu />
        </div>
        <div className={styles.frame1}>
          <ProductMenu />
          <ProductMenu />
          <ProductMenu />
        </div>
      </div>
    </section>
  );
};

export default RestorentMenuProduct;
