import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import {Link} from 'react-router-dom';

const Recipient = () => {
  return (
    <div id="recipient" className="body_wrapper">
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="Recipient"
        Pdescription="Our mission is to create a user-friendly online portal that connects blood donors and recipients, making it easy for individuals and organizations to find and donate blood. Our goal is to facilitate the process of blood donation and increase the availability of blood for those in need, while ensuring the safety and privacy of all users. We strive to create a community of individuals who are passionate about saving lives and making a difference in the world through blood donation."
      />
    
    <div className="link_wrapper">
        <Link exact title="signIn" className="nav-link" to='/SignIn'><button type="submit" className="btn_three sign_btn_transparent">Sign In</button></Link>
        <Link exact title="signUp" className="nav-link" to='/RecipientSignUp'><button type="submit" className="btn_three sign_btn_transparent">Sign Up</button></Link>
        <Link exact title="Faq" className="nav-link" to='/Faq'><button type="submit" className="btn_three sign_btn_transparent">FAQ</button></Link> 
      </div> 
    </div>
    
  );
};
export default Recipient;