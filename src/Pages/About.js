import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Contacts from "../components/Contacts";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";

const About = () => {
  return (
    <div id="about" className="body_wrapper">
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="About"
        Pdescription="Give the gift of life through blood donation - it's easy with us. Our
        user-friendly blood donation website makes it simple to schedule
        appointments, track your donation history, and connect with other donors
        in your community. We prioritize safety and quality to ensure that all
        blood donations are effective and helpful. Join us in making a
        difference and saving lives today."
      />
    </div>
  );
};
export default About;
