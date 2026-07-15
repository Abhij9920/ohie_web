const fs = require('fs');

['components/AboutMegaMenu.tsx', 'components/AdmissionMegaMenu.tsx', 'components/StudentLifeMegaMenu.tsx'].forEach(p => {
  let c = fs.readFileSync(p, 'utf8');

  // Add onClose to interface
  c = c.replace(/interface (Props|\w+Props) \{[\s\S]*?\}/, match => {
    if (!match.includes('onClose?:')) {
      return match.replace('}', '  onClose?: () => void;\n}');
    }
    return match;
  });

  // Add onClose to function signature
  c = c.replace(/export default function (\w+)\(\{\s*isActive\s*\}\s*:\s*(\w+)\)\s*\{/, (match, p1, p2) => {
    return `export default function ${p1}({ isActive, onClose }: ${p2}) {`;
  });
  
  // Add onClick={onClose} to MegaMenuLink
  c = c.replace(/<MegaMenuLink([^>]*)>/g, (match, p1) => {
    if (!p1.includes('onClick')) {
      return `<MegaMenuLink${p1} onClick={onClose}>`;
    }
    return match;
  });

  fs.writeFileSync(p, c);
});
