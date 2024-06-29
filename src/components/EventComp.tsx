import { FunctionComponent } from "react";
import PersanalServiceComponents from "./PersanalServiceComponents";
import styles from "./EventComp.module.css";

export type EventCompType = {
  className?: string;
};

const EventComp: FunctionComponent<EventCompType> = ({ className = "" }) => {
  return (
    <section className={[styles.eventPlannersParent, className].join(" ")}>
      <PersanalServiceComponents
        accountants="Event Planners"
        image1="/image-173@2x.png"
      />
      <PersanalServiceComponents
        accountants="Wedding Planners"
        image1="/image-174@2x.png"
      />
      <PersanalServiceComponents
        accountants="Photographers"
        image1="/image-175@2x.png"
      />
      <PersanalServiceComponents
        accountants="Florists"
        image1="/image-176@2x.png"
      />
      <PersanalServiceComponents
        accountants="DJs and Bands"
        image1="/image-177@2x.png"
      />
      <PersanalServiceComponents
        accountants="Rental Services (chairs, tents, etc.)"
        image1="/image-178@2x.png"
      />
      <PersanalServiceComponents
        accountants="Caterers"
        image1="/image-179@2x.png"
      />
      <PersanalServiceComponents
        accountants="Venues"
        image1="/image-180@2x.png"
      />
    </section>
  );
};

export default EventComp;
