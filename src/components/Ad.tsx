import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import styles from "./Ad.module.css";

export type AdType = {
  className?: string;

  /** Style props */
  sellingOnlineWithAnEcommeAnimationDirection?: CSSProperties["animationDirection"];
  sellingOnlineWithAnEcommeAlignSelf?: CSSProperties["alignSelf"];
  sellingOnlineWithAnEcommeWidth?: CSSProperties["width"];
  sellingOnlineWithAnEcommeBackgroundImage?: CSSProperties["backgroundImage"];
  sellingOnlineWithAnEcommePosition?: CSSProperties["position"];
  sellingOnlineWithAnEcommeTop?: CSSProperties["top"];
  sellingOnlineWithAnEcommeLeft?: CSSProperties["left"];
};

const Ad: FunctionComponent<AdType> = memo(
  ({
    className = "",
    sellingOnlineWithAnEcommeAnimationDirection,
    sellingOnlineWithAnEcommeAlignSelf,
    sellingOnlineWithAnEcommeWidth,
    sellingOnlineWithAnEcommeBackgroundImage,
    sellingOnlineWithAnEcommePosition,
    sellingOnlineWithAnEcommeTop,
    sellingOnlineWithAnEcommeLeft,
  }) => {
    const sellingOnlineWithAnEcommerStyle: CSSProperties = useMemo(() => {
      return {
        animationDirection: sellingOnlineWithAnEcommeAnimationDirection,
        alignSelf: sellingOnlineWithAnEcommeAlignSelf,
        width: sellingOnlineWithAnEcommeWidth,
        backgroundImage: sellingOnlineWithAnEcommeBackgroundImage,
        position: sellingOnlineWithAnEcommePosition,
        top: sellingOnlineWithAnEcommeTop,
        left: sellingOnlineWithAnEcommeLeft,
      };
    }, [
      sellingOnlineWithAnEcommeAnimationDirection,
      sellingOnlineWithAnEcommeAlignSelf,
      sellingOnlineWithAnEcommeWidth,
      sellingOnlineWithAnEcommeBackgroundImage,
      sellingOnlineWithAnEcommePosition,
      sellingOnlineWithAnEcommeTop,
      sellingOnlineWithAnEcommeLeft,
    ]);

    return (
      <section
        className={[styles.sellingOnlineWithAnEcommer, className].join(" ")}
        style={sellingOnlineWithAnEcommerStyle}
      />
    );
  }
);

export default Ad;
