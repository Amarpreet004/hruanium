"use client";
import { ParallaxScroll } from "./parallax-scroll";
import { useRouter } from 'next/navigation';

export function ParallaxScrollDemo() {
  const router = useRouter();

  const handleViewMoreClick = () => {
    router.push('/services/Graphics');
  };

  return (
    <div className="relative">
      <ParallaxScroll images={images} />
      
      {/* Blur Overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white/95 via-white/50 via-white/25 via-white/15 via-white/8 via-white/4 via-white/2 via-white/1 to-transparent dark:from-gray-900/95 dark:via-gray-900/50 dark:via-gray-900/25 dark:via-gray-900/15 dark:via-gray-900/8 dark:via-gray-900/4 dark:via-gray-900/2 dark:via-gray-900/1 backdrop-blur-sm pointer-events-none">
        {/* Centered Button */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-auto">
          <button 
            onClick={handleViewMoreClick}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-200"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
              Explore Graphic            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

const images = [
  "/tickets are live[1].jpg",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/imge5.png",
  "/image6.png",
  "/image7.png",
  "/image8.png",
  "/gd post amar copy.jpg",
  "/image10.png",
  "/image11.png",
  "/image12.png",
  "/image13.png",
  "/image14.png",
  "/image15.png",
  "/image16.png",
  "/ikmage17.png",
  "/image18.png",
  "/image1.png",
  "/image2.png",
  "/image3.png",
];
