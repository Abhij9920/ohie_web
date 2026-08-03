"use client";

import { useEffect, useState } from 'react';

export default function DynamicHostLink({ pathname }: { pathname: string }) {
  const [host, setHost] = useState('');

  useEffect(() => {
    setHost(window.location.origin);
  }, []);

  const fullUrl = host ? `${host}${pathname}` : pathname;

  return (
    <a 
      href={pathname} 
      className="text-[#4D97E6] hover:underline break-all" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {fullUrl}
    </a>
  );
}
