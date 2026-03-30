"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FloatingAssets() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="floating-container" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }}>
      <div 
        className="floating-asset asset-pistacho"
        style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.05}deg)` }}
      >
        <Image src="/floating_flakes.png" alt="" width={80} height={80} priority />
      </div>
      
      <div 
        className="floating-asset asset-chocolate"
        style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.02}deg)` }}
      >
        <Image src="/floating_flakes.png" alt="" width={120} height={120} style={{ filter: "brightness(0.3) sepia(1) hue-rotate(-50deg)" }} priority />
      </div>

      <div 
        className="floating-asset asset-pastry"
        style={{ transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.03}deg)` }}
      >
        <Image src="/floating_pastry.png" alt="" width={180} height={180} priority />
      </div>
    </div>
  );
}
