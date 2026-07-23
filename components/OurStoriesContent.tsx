'use client';
import React, { useState } from 'react';

type StoryVideo = {
  id: number;
  title: string;
  src: string;
};

const storiesData: StoryVideo[] = [
  { id: 1, title: 'High School Video Interviews with Ozford Students', src: 'https://www.youtube.com/embed/ts2SYO3qrMM' },
  { id: 2, title: 'Student success program', src: 'https://www.youtube.com/embed/G9pLxHTqWzE' },
  { id: 3, title: 'High School Video Interviews with Ozford Students', src: 'https://www.youtube.com/embed/vr13CGcVTZI' },
  { id: 4, title: 'High School Video Interviews with Ozford Students', src: 'https://www.youtube.com/embed/wTSyHRW3Ams' },
  { id: 5, title: 'Interview with Naila Beg, VCE Ozford College Teacher', src: 'https://www.youtube.com/embed/M8etwN4eO_M' },
  { id: 6, title: 'Higher Education upcoming intake 20th September 2021 FEE HELP available for Australian citizens', src: 'https://www.youtube.com/embed/lRZ-VgiNBjg' },
  { id: 7, title: 'ELICOS upcoming intake 17th January 2022', src: 'https://www.youtube.com/embed/qk9utfxPSTs' },
  { id: 8, title: 'Study with Fee Help at Ozford', src: 'https://www.youtube.com/embed/_eTmRJs_nwY' },
  { id: 9, title: 'ELICOS upcoming intake 17th January 2022', src: 'https://www.youtube.com/embed/WU-7wyLPeRY' },
  { id: 10, title: 'High School upcoming intake 15th February 2022', src: 'https://www.youtube.com/embed/IZHMET9ShUQ' },
  { id: 11, title: 'High School upcoming intake 15th February 2022', src: 'https://www.youtube.com/embed/CEv1VoWgltI' },
  { id: 12, title: 'High School upcoming intake 15th February 2022', src: 'https://www.youtube.com/embed/TVKiEdUpfT0' },
  { id: 13, title: 'Study at Ozford', src: 'https://www.youtube.com/embed/5Pzbnv4ubeg' }
];

const VideoIcon = () => (
  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.16732 5.08349L12.2143 7.11466C12.2582 7.14388 12.3093 7.16065 12.362 7.16317C12.4147 7.16569 12.4671 7.15387 12.5136 7.12897C12.5601 7.10407 12.599 7.06702 12.6261 7.02176C12.6532 6.97651 12.6676 6.92475 12.6676 6.87199V2.09099C12.6676 2.03967 12.6541 1.98925 12.6284 1.94483C12.6027 1.90041 12.5657 1.86356 12.5212 1.838C12.4767 1.81243 12.4262 1.79906 12.3749 1.79924C12.3236 1.79941 12.2732 1.81312 12.2289 1.83899L9.16732 3.62515M2.16676 1H8.00056C8.64494 1 9.16732 1.52233 9.16732 2.16667V6.83333C9.16732 7.47767 8.64494 8 8.00056 8H2.16676C1.52238 8 1 7.47767 1 6.83333V2.16667C1 1.52233 1.52238 1 2.16676 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function OurStoriesContent() {
  const [selectedVideo, setSelectedVideo] = useState<StoryVideo | null>(null);

  return (
    <section className="w-full bg-[#FAFAF7] py-10 md:py-16 relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-[100px]">
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8">
          {storiesData.map((video) => {
            const videoId = video.src.split('/').pop()?.split('?')[0];
            const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            
            return (
              <div 
                key={video.id} 
                className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-[#E8E8E4] cursor-pointer group flex flex-col h-full"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1 sm:ml-2 sm:w-[28px] sm:h-[28px]">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 pt-20 sm:pt-24">
                    <h3 className="text-white text-[15px] sm:text-[18px] font-semibold leading-tight pr-2 sm:pr-4">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="px-4 py-[12px] flex items-center justify-between mt-auto bg-white relative z-10 border-t border-transparent">
                  <div className="flex items-center space-x-2 text-[#2463A7]">
                    <VideoIcon />
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      VIDEO
                    </span>
                  </div>
                  <div className="text-[12px] font-semibold text-[#1A1A1A] underline decoration-solid hover:opacity-80 transition-opacity">
                    Full Screen Video
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" 
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="w-full max-w-[900px] bg-black rounded-lg shadow-2xl relative overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors" 
              onClick={() => setSelectedVideo(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="w-full aspect-video">
              <iframe 
                src={`${selectedVideo.src}?autoplay=1`} 
                title={selectedVideo.title} 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-4 bg-white">
              <p className="text-[#2463A7] font-semibold text-lg">{selectedVideo.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
