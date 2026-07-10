export const ChevronDown = () => (
  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4 4L7 1" stroke="#0B1F4A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ArrowRight = ({ color = "#477EFF" }: { color?: string }) => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5.0838H9.1676M5.0838 9.1676L9.1676 5.0838L5.0838 1" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
