"use client";
import { cn } from "../lib/utils";
import { useRouter } from "next/navigation";
import {
  IconCamera,
  IconCloud,
  IconHeart,
  IconPencil,
  IconRouteAltLeft,
  IconTerminal2,
  IconWebhook,
  IconWorld,
  IconTrendingUp,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const router = useRouter();

  const handleCardClick = (title: string) => {
    if (title === "Web Development") {
      router.push("/services/web-development");
    } else if (title === "Video Editing") {
      router.push("/services/videoediting");
    } else if (title === "UI/UX Design") {
      router.push("/services/ui-ux-design");
    } else if (title === "Graphics Design") {
      router.push("/services/Graphics");
    } else if (title === "Web Design") {
      router.push("/services/web-development");
    }
    // Add more navigation cases here for other services if needed
  };

  const features = [
    {
      title: "Web Development",
      description:
        "We build high-performance, scalable websites and web apps using the latest tech stacks — fast, secure, and built to grow with you.",
      icon: <IconTerminal2 />,
    },
     {
      title: "Web Design",
      description: "Beautiful, responsive designs that look stunning and work flawlessly. We turn your ideas into intuitive digital experiences.",
      icon: <IconWorld />,
    },
     {
      title: "UI/UX Design",
      description: "Design that feels right. We create sleek, user-centered interfaces that elevate engagement on web and mobile platforms.",
      icon: <IconCloud />,
    },
    {
      title: "Graphics Design",
      description:
        "Make your brand unforgettable. From logos to banners, our designs are bold, creative, and always on point.",
      icon: <IconPencil />,
    },
    {
      title: "Video Editing",
      description:
        "Transform raw footage into cinematic stories. We edit with purpose — for creators, brands, and storytellers.",
      icon: <IconCamera />,
    },
    
   
   
    {
      title: "Digital Marketing",
      description:
        "Strategic campaigns to boost visibility, drive traffic, and convert clicks into loyal customers. SEO, social, paid — we do it all.",
      icon: <IconTrendingUp />,
    },
    {
      title: "Graphics & Video Editing Courses",
      description:
        "Learn from pros. Master editing, motion graphics, and design with hands-on courses built for the next generation of creators.",
      icon: <IconCamera />,
    },
    {
      title: "Web Development Courses",
      description: "Go from beginner to advanced. Learn real-world skills through expert-led, project-based coding courses.",
      icon: <IconTerminal2 />,
    },
  ];
  return (
    <div className="relative z-20 py-32 max-w-7xl mx-auto">
      <div className="flex justify-center items-center mb-20">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white text-center font-sans">
          Our Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {features.map((feature, index) => (
          <Feature 
            key={feature.title} 
            {...feature} 
            index={index} 
            onClick={() => handleCardClick(feature.title)}
          />
        ))}
      </div>
    </div>
  );
  
}

const Feature = ({
  title,
  description,
  icon,
  index,
  onClick,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  onClick?: () => void;
}) => {
  const isClickable = title === "Web Development" || title === "Video Editing" || title === "UI/UX Design" || title === "Graphics Design" || title === "Web Design";
  
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-12 relative group/feature dark:border-neutral-800 border-neutral-200",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800 border-neutral-200",
        index < 4 && "lg:border-b dark:border-neutral-800 border-neutral-200",
        isClickable && "cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors duration-200"
      )}
      onClick={isClickable ? onClick : undefined}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 font-sans">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 font-sans">
        {description}
      </p>
    </div>
  );
}

// To render the features section, use the component in your page or another component like this:
// <FeaturesSectionDemo />
