import React, { useState } from "react";

export function ImageWithFallback({ src, alt, className = "", fallback = "/logo192.png" }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallback)}
      loading="lazy"
    />
  );
}
