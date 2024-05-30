import React from "react";
import "../components/styles/Home/What_We_Can_Do.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPenSquare,
  faChartBar,
  faCode,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
const What_we_offer = () => {
  const items = [
    {
      icon: faPencilAlt,
      text: "Desirous men exercise overcame procured speaking her followed.",
    },
    {
      icon: faPenSquare,
      text: "Property men the why smallest graceful day insisted required.",
    },
    {
      icon: faChartBar,
      text: "Situation admitting promotion at or to perceived be.",
    },
    {
      icon: faCode,
      text: "Acuetness allowance an at eagerness favourite in extensive exquisite.",
    },
    {
      icon: faCheck,
      text: "Saw supported too joy promotion engrossed propriety.",
    },
  ];

  return (
    <section  className="What__We__can__Do__Section">
      <div className="What__RightSide">
        <h4>What we offer</h4>
        <h3>We Offer A Full Stack Of Digital Services</h3>
        <p>
          Her companions instrument set estimating remarkably solicitude
          motionless. Property men the why smallest graceful day insisted
          required. Inquiry justice country old placing sitting any ten age.
          Looking venture justice in evident in totally he do ability. Be is
          lose girl long of up give.
        </p>
        <ul className="custom-list icon-list">
          {items.map((item, index) => (
            <div className="icon-list-item" key={index}>
              <FontAwesomeIcon icon={item.icon} className="icon" />
              <p>{item.text}</p>
            </div>
          ))}
        </ul>
        <button className="Button">Get Start Now</button>
      </div>
      <div className="What__LeftSide">
        <img src="/assets/What_We_Offer.jpg" alt="What we can do" />
      </div>
    </section>
  );
};

export default What_we_offer;
