import CircularGalleryWrapper from './desgin/CircularGalleryi'
import Logo, { MovingLogosCarousel } from './desgin/logo'
import { motion } from 'framer-motion';
import { SpotlightNewDemo } from './desgin/SpotlightNewDemo';
import { ParallaxScrollDemo } from './desgin/ParallaxScrollDemo';
import GradientTextDemo  from './desgin/GradientText';

import WebDevToolsCards from './desgin/services/servic';
import VideoEditingSection from './desgin/video_editing/newedite';
export default function ServicesPage() {
  return (
    <div className="w-full">
     <div className="mt-28">
       <SpotlightNewDemo/>
     </div>
      <CircularGalleryWrapper/>

 
        <WebDevToolsCards/>
          <GradientTextDemo/>
        < ParallaxScrollDemo/>
        
        <VideoEditingSection/>
    
       
    </div>
  );
}
