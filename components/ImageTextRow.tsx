import React from 'react';
import Image from 'next/image';

interface ImageTextRowProps {
  subtitle: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function ImageTextRow({
  subtitle,
  title,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  children,
  backgroundColor = 'bg-white'
}: ImageTextRowProps) {
  const isImageLeft = imagePosition === 'left';

  return (
    <section className={`w-full ${backgroundColor} py-12 md:py-20`}>
      <div className={`w-full max-w-[1440px] mx-auto px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-start ${isImageLeft ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Content Column */}
        <div className="flex-1 lg:max-w-[800px] w-full">
          <span className="text-[#2463A7] text-[12px] font-bold tracking-wider uppercase mb-4 block">
            {subtitle}
          </span>
          <h2 className="text-[#0B1F4A] text-[28px] md:text-[36px] lg:text-[40px] italic mb-6 md:mb-8" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            {title}
          </h2>
          {children}
        </div>
        
        {/* Image Column */}
        <div className="w-full lg:w-[500px] xl:w-[560px] shrink-0">
          <div className="w-full relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[1.3]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
