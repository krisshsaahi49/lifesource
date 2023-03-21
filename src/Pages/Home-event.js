import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import EventBanner from "../components/Banner/EventBanner";
import EventTeam from "../components/Team/EventTeam";
import EventFact from "../components/EventFact";

const homesupport = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
      />
      <EventBanner />
      <EventTeam />
      <EventFact />
      {/* <EventCount />
      <EventAbout />
      
      <EventFeatures />
      <EventDetails />
      <ScheduleTab />
      <EventPrice />
      <EventFact />
      <Eventgallery />
      <EventSponser />
      <EventLocation /> */}
      {/* <FooterErp fClass="event_footer_area" FooterData={FooterData} /> */}
    </div>
  );
};
export default homesupport;
