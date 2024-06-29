import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import styles from "./Bottom.module.css";

export type BottomType = {
  className?: string;

  /** Style props */
  containerAlignSelf?: CSSProperties["alignSelf"];
  containerWidth?: CSSProperties["width"];
  containerWidth1?: CSSProperties["width"];
  copyrights200824AllFlex?: CSSProperties["flex"];
  linkFlex?: CSSProperties["flex"];
  containerWidth2?: CSSProperties["width"];
  containerRight?: CSSProperties["right"];
  containerLeft?: CSSProperties["left"];
  linkFlex1?: CSSProperties["flex"];
  containerWidth3?: CSSProperties["width"];
  containerRight1?: CSSProperties["right"];
  containerLeft1?: CSSProperties["left"];
  linkFlex2?: CSSProperties["flex"];
  containerPosition?: CSSProperties["position"];
  containerTop?: CSSProperties["top"];
  containerLeft2?: CSSProperties["left"];
  containerHeight?: CSSProperties["height"];
  containerAlignSelf1?: CSSProperties["alignSelf"];
  privacyFlex?: CSSProperties["flex"];
  divAlignSelf?: CSSProperties["alignSelf"];
  termsFlex?: CSSProperties["flex"];
  divAlignSelf1?: CSSProperties["alignSelf"];
  infringementFlex?: CSSProperties["flex"];

  /** Action props */
  onLinkContainerClick?: () => void;
};

const Bottom: FunctionComponent<BottomType> = memo(
  ({
    className = "",
    containerAlignSelf,
    containerWidth,
    containerWidth1,
    copyrights200824AllFlex,
    linkFlex,
    containerWidth2,
    containerRight,
    containerLeft,
    linkFlex1,
    containerWidth3,
    containerRight1,
    containerLeft1,
    linkFlex2,
    containerPosition,
    containerTop,
    containerLeft2,
    onLinkContainerClick,
    containerHeight,
    containerAlignSelf1,
    privacyFlex,
    divAlignSelf,
    termsFlex,
    divAlignSelf1,
    infringementFlex,
  }) => {
    const container3Style: CSSProperties = useMemo(() => {
      return {
        alignSelf: containerAlignSelf,
        width: containerWidth,
        position: containerPosition,
        top: containerTop,
        left: containerLeft2,
        height: containerHeight,
      };
    }, [
      containerAlignSelf,
      containerWidth,
      containerPosition,
      containerTop,
      containerLeft2,
      containerHeight,
    ]);

    const container4Style: CSSProperties = useMemo(() => {
      return {
        width: containerWidth1,
        alignSelf: containerAlignSelf1,
      };
    }, [containerWidth1, containerAlignSelf1]);

    const copyrights200824AllStyle: CSSProperties = useMemo(() => {
      return {
        flex: copyrights200824AllFlex,
      };
    }, [copyrights200824AllFlex]);

    const linkStyle: CSSProperties = useMemo(() => {
      return {
        flex: linkFlex,
      };
    }, [linkFlex]);

    const container5Style: CSSProperties = useMemo(() => {
      return {
        width: containerWidth2,
        right: containerRight,
        left: containerLeft,
      };
    }, [containerWidth2, containerRight, containerLeft]);

    const link1Style: CSSProperties = useMemo(() => {
      return {
        flex: linkFlex1,
      };
    }, [linkFlex1]);

    const container6Style: CSSProperties = useMemo(() => {
      return {
        width: containerWidth3,
        right: containerRight1,
        left: containerLeft1,
      };
    }, [containerWidth3, containerRight1, containerLeft1]);

    const link2Style: CSSProperties = useMemo(() => {
      return {
        flex: linkFlex2,
      };
    }, [linkFlex2]);

    const privacyStyle: CSSProperties = useMemo(() => {
      return {
        flex: privacyFlex,
      };
    }, [privacyFlex]);

    const divStyle: CSSProperties = useMemo(() => {
      return {
        alignSelf: divAlignSelf,
      };
    }, [divAlignSelf]);

    const termsStyle: CSSProperties = useMemo(() => {
      return {
        flex: termsFlex,
      };
    }, [termsFlex]);

    const div1Style: CSSProperties = useMemo(() => {
      return {
        alignSelf: divAlignSelf1,
      };
    }, [divAlignSelf1]);

    const infringementStyle: CSSProperties = useMemo(() => {
      return {
        flex: infringementFlex,
      };
    }, [infringementFlex]);

    return (
      <section
        className={[styles.container, className].join(" ")}
        style={container3Style}
      >
        <div className={styles.container1} style={container4Style}>
          <div
            className={styles.copyrights200824All}
            style={copyrights200824AllStyle}
          >
            Copyrights 2008-24.  All Rights Reserved.
          </div>
          <div className={styles.link} style={linkStyle}>
            <div className={styles.privacy} style={privacyStyle}>
              Privacy
            </div>
            <div className={styles.container2} style={container5Style}>
              <div className={styles.div} style={divStyle}>
                |
              </div>
            </div>
          </div>
          <div
            className={styles.link1}
            style={link1Style}
            onClick={onLinkContainerClick}
          >
            <div className={styles.privacy} style={termsStyle}>
              Terms
            </div>
            <div className={styles.container3} style={container6Style}>
              <div className={styles.div} style={div1Style}>
                |
              </div>
            </div>
          </div>
          <div className={styles.link2} style={link2Style}>
            <div className={styles.div} style={infringementStyle}>
              Infringement
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Bottom;
