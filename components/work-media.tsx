import { isVideoThumbnail } from "@/lib/works";

type WorkMediaProps = {
  src: string;
  alt: string;
  className?: string;
};

export function WorkMedia({ src, alt, className = "h-full w-full object-cover" }: WorkMediaProps) {
  if (isVideoThumbnail(src)) {
    return (
      <video
        src={src}
        className={`block ${className}`}
        muted
        loop
        autoPlay
        playsInline
        aria-label={alt}
      />
    );
  }

  return <img src={src} alt={alt} className={`block ${className}`} />;
}
