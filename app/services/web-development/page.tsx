
import React from 'react'
import Hero from "./hero";
import WebDevToolsCards from "./Web-tools";
import WebsiteTypeCard from "./website-type"
import WebDevelopmentServices from "./ServiceWeOffer";
import SeoMarketingPage from './last';

const WebDevelopment = () => {
  return (
    <div className="w-full">
      <Hero/>
      <WebDevToolsCards/>
      <WebsiteTypeCard/>
      <WebDevelopmentServices/>
      <SeoMarketingPage/>
    </div>
  );
};

export default WebDevelopment;
