"use client";
import { useRouter } from 'next/navigation';
import CircularGallery from './CircularGallery'

export default function CircularGalleryWrapper() {
  const router = useRouter();

  const handleImageClick = () => {
    router.push('/services/web-development');
  };

  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery 
        bend={3} 
        textColor="#ffffff" 
        borderRadius={0.05} 
        scrollEase={0.02}
        onImageClick={handleImageClick}
      />
    </div>
  );
}