import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  description?: string;
  imageUrl?: string;
  theme?: 'light' | 'dark';
}

export default function ProfileCard({ name, role, description, imageUrl, theme = 'light' }: ProfileCardProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`flex flex-col items-center text-center px-4 pt-8 pb-6 md:px-6 md:pt-10 md:pb-8 h-full transition-all duration-300 hover:shadow-lg ${isDark
        ? 'bg-transparent border border-[#FFFFFF26]'
        : 'bg-white border border-[#E0E0E0] border-b-[3px] border-b-[#4D97E6]'
        }`}
    >
      {/* Avatar */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 bg-gray-100 flex-shrink-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className={`text-[16px] font-semibold mb-1 ${isDark ? 'text-[#FFFFFF]' : 'text-[#0B1F4A]'}`}>
        {name}
      </h3>

      <h4 className={`text-[13px] font-medium mb-2 text-[#4D97E6] max-w-[250px] mx-auto leading-tight`}>
        {role}
      </h4>

      {description && (
        <p className={`text-[14px] leading-snug max-w-[250px] mx-auto ${isDark ? 'text-[#0B1F4A]/70' : 'text-[#0B1F4A]/70'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
