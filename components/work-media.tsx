import { isVideoThumbnail } from "@/lib/works";

type WorkMediaProps = {
  src: string;
  alt: string;
  className?: string;
};

export function WorkMedia({ src, alt, className = "aspect-video w-full object-cover" }: WorkMediaProps) {
  if (isVideoThumbnail(src)) {
    return (
      <video
        src={src}
        className={className}
        muted
        loop
        autoPlay
        playsInline
        aria-label={alt}
      />
    );
  }

  return <img src={src} alt={alt} className={className} />;
}
