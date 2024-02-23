import React from "react";
import SectionHeading from "./SectionHeading";
import * as styles from "../styles/Services.module.css";
import ServiceCard from "./ServiceCard";
import images from "../constants/images";
import Button from "./Button";
const Services = ({ services }) => {
  return (
    <section className={styles.container}>
      <div className="margin-on-side">
        {/* Section Heading */}
        <SectionHeading headingTitle="Hello, User" />
        {/* Section Description */}

        {/* Section List - we will map through array and render a card for each item */}
        <div className={`row ${styles.serviceList}`}>
          {services.map((item) => {
            return <ServiceCard service={item} key={item.id} />;
          })}
        </div>
        <div className="row center">
          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default Services;
