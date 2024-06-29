import { FunctionComponent } from "react";
import PersanalServiceComponents from "./PersanalServiceComponents";
import styles from "./EnterTimentCom.module.css";

export type EnterTimentComType = {
  className?: string;
};

const EnterTimentCom: FunctionComponent<EnterTimentComType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.movieTheatersParent, className].join(" ")}>
      <PersanalServiceComponents
        accountants="Movie Theaters"
        image1="/image-159@2x.png"
      />
      <PersanalServiceComponents
        accountants="Amusement Parks"
        image1="/image-160@2x.png"
      />
      <PersanalServiceComponents
        accountants="Museums and Galleries"
        image1="/image-161@2x.png"
      />
      <PersanalServiceComponents
        accountants="Sports Facilities"
        image1="/image-162@2x.png"
      />
      <PersanalServiceComponents
        accountants="Bowling Alleys"
        image1="/image-163@2x.png"
      />
      <PersanalServiceComponents
        accountants="Gaming Centers"
        image1="/image-164@2x.png"
      />
      <PersanalServiceComponents
        accountants="Event Venues"
        image1="/image-165@2x.png"
      />
      <PersanalServiceComponents
        accountants="Nightclubs"
        image1="/image-166@2x.png"
      />
    </section>
  );
};

export default EnterTimentCom;
