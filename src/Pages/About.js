import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us" Pdescription="Give the gift of life through blood donation - it's easy with us. Our
        user-friendly blood donation website makes it simple to schedule
        appointments, track your donation history, and connect with other donors
        in your community. We prioritize safety and quality to ensure that all
        blood donations are effective and helpful. Join us in making a
        difference and saving lives today."/>
            {/* <AboutUs /> */}
            {/* <FooterTwo FooterData={FooterData}/> */}
        </div>
    )
}
export default About;