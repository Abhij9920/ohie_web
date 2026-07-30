"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const tabs = ['ALL MEDIA', 'VIDEOS ONLY', 'IMAGES ONLY'];

type MediaItem = {
  id: number;
  type: 'video' | 'photo';
  src: string;
  thumbnail: string;
  title: string;
};

const galleryItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    src: 'https://www.youtube.com/embed/G3DIeP3UksI',
    thumbnail: 'https://img.youtube.com/vi/G3DIeP3UksI/hqdefault.jpg',
    title: 'Explore Ozford | 333 Queen Street, Melbourne Campus Tour'
  },
  {
    id: 2,
    type: 'video',
    src: 'https://www.youtube.com/embed/f9osuMqx3Mg',
    thumbnail: 'https://img.youtube.com/vi/f9osuMqx3Mg/hqdefault.jpg',
    title: 'OIHE Ozford Graduation December 2019'
  },
  {
    id: 3,
    type: 'video',
    src: 'https://www.youtube.com/embed/NJfzMFvYWMg',
    thumbnail: 'https://img.youtube.com/vi/NJfzMFvYWMg/hqdefault.jpg',
    title: 'OIHE Graduation'
  },
  {
    id: 4,
    type: 'photo',
    src: '/gallery/img1.png',
    thumbnail: '/gallery/img1.png',
    title: 'Group Photo'
  },
  {
    id: 5,
    type: 'video',
    src: 'https://www.youtube.com/embed/mdGk1mhH6Jo',
    thumbnail: 'https://img.youtube.com/vi/mdGk1mhH6Jo/hqdefault.jpg',
    title: 'Birthing of TNE with Inti International College'
  },
  {
    id: 6,
    type: 'video',
    src: 'https://www.youtube.com/embed/5WEJh08dHdc',
    thumbnail: 'https://img.youtube.com/vi/5WEJh08dHdc/hqdefault.jpg',
    title: 'Melbourne: The Home of Ozford'
  },
  {
    id: 7,
    type: 'video',
    src: 'https://www.youtube.com/embed/Iqldx4DQ3Cg',
    thumbnail: 'https://img.youtube.com/vi/Iqldx4DQ3Cg/hqdefault.jpg',
    title: 'Meet our Student: Sivleang Chiv'
  },
  {
    id: 8,
    type: 'video',
    src: 'https://www.youtube.com/embed/5zjY7IhNQ_4',
    thumbnail: 'https://img.youtube.com/vi/5zjY7IhNQ_4/hqdefault.jpg',
    title: 'Class of 2024 - Ozford Graduation Day'
  },
  {
    id: 9,
    type: 'video',
    src: 'https://www.youtube.com/embed/LLLX4mvtE-w',
    thumbnail: 'https://img.youtube.com/vi/LLLX4mvtE-w/hqdefault.jpg',
    title: 'Cambodian Students at Ozford: Meet Pichvithia'
  },
  {
    id: 10,
    type: 'photo',
    src: '/gallery/img2.png',
    thumbnail: '/gallery/img2.png',
    title: 'Classroom Session'
  }
];

const VideoIcon = () => (
  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.16732 5.08349L12.2143 7.11466C12.2582 7.14388 12.3093 7.16065 12.362 7.16317C12.4147 7.16569 12.4671 7.15387 12.5136 7.12897C12.5601 7.10407 12.599 7.06702 12.6261 7.02176C12.6532 6.97651 12.6676 6.92475 12.6676 6.87199V2.09099C12.6676 2.03967 12.6541 1.98925 12.6284 1.94483C12.6027 1.90041 12.5657 1.86356 12.5212 1.838C12.4767 1.81243 12.4262 1.79906 12.3749 1.79924C12.3236 1.79941 12.2732 1.81312 12.2289 1.83899L9.16732 3.62515M2.16676 1H8.00056C8.64494 1 9.16732 1.52233 9.16732 2.16667V6.83333C9.16732 7.47767 8.64494 8 8.00056 8H2.16676C1.52238 8 1 7.47767 1 6.83333V2.16667C1 1.52233 1.52238 1 2.16676 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ImageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.25 8.74982L10.4498 6.94966C10.2311 6.73094 9.93436 6.60807 9.625 6.60807C9.31564 6.60807 9.01895 6.73094 8.80017 6.94966L3.5 12.2498M2.91667 1.75H11.0833C11.7277 1.75 12.25 2.27233 12.25 2.91667V11.0833C12.25 11.7277 11.7277 12.25 11.0833 12.25H2.91667C2.27233 12.25 1.75 11.7277 1.75 11.0833V2.91667C1.75 2.27233 2.27233 1.75 2.91667 1.75ZM6.41667 5.25C6.41667 5.89433 5.89433 6.41667 5.25 6.41667C4.60567 6.41667 4.08333 5.89433 4.08333 5.25C4.08333 4.60567 4.60567 4.08333 5.25 4.08333C5.89433 4.08333 6.41667 4.60567 6.41667 5.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState('ALL MEDIA');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = galleryItems.filter(item => {
    if (activeTab === 'ALL MEDIA') return true;
    if (activeTab === 'VIDEOS ONLY') return item.type === 'video';
    if (activeTab === 'IMAGES ONLY') return item.type === 'photo';
    return true;
  });

  return (
    <section className="w-full bg-[#FAFAF7] py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] md:px-[40px] lg:px-[80px] xl:px-[100px] xl:px-[100px]">
        
        {/* Tabs Container */}
        <div className="flex flex-col sm:flex-row items-stretch border border-[#E6E6DF] bg-white mb-8 md:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center text-[12px] sm:text-[13px] font-semibold tracking-wider cursor-pointer transition-colors ${
                activeTab === tab
                  ? 'bg-[#4D97E6] text-white'
                  : 'text-[#2D2D2D] hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-[#E8E8E4] cursor-pointer group flex flex-col h-full"
              onClick={() => setSelectedItem(item)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                )}
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 pt-20 sm:pt-24">
                  <h3 className="text-white text-[15px] sm:text-[18px] font-semibold leading-tight pr-2 sm:pr-4">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-4 py-[12px] flex items-center justify-between mt-auto bg-white relative z-10 border-t border-transparent">
                <div className={`flex items-center space-x-2 ${item.type === 'video' ? 'text-[#2463A7]' : 'text-[#6E7E75]'}`}>
                  {item.type === 'video' ? <VideoIcon /> : <ImageIcon />}
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    {item.type === 'video' ? 'VIDEO' : 'IMAGE'}
                  </span>
                </div>
                <div className="text-[12px] font-semibold text-[#1A1A1A] underline decoration-solid hover:opacity-80 transition-opacity">
                  {item.type === 'video' ? 'Full Screen Video' : 'Full Screen Image'}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div 
            className="bg-black w-full max-w-5xl rounded-lg overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {selectedItem.type === 'video' ? (
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src={`${selectedItem.src}?autoplay=1`} 
                  title={selectedItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="relative w-full h-[70vh] bg-black flex items-center justify-center">
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            
            <div className="bg-white p-4 sm:p-6 text-center">
              <p className="text-[#2D2D2D] text-[16px] font-medium">{selectedItem.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
