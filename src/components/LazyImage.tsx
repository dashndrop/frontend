import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fallback?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const LazyImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  fallback,
  onError,
  ...props
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // For eager loading (above the fold), load immediately
    if (loading === "eager") {
      return;
    }

    // Use Intersection Observer for better lazy loading control
    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading when image is in viewport
            setImageSrc(src);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before image enters viewport
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    if (fallback) {
      setImageSrc(fallback);
      setHasError(false);
    }
    if (onError) {
      onError(e);
    }
  };

  // Show placeholder while loading or if error
  const showPlaceholder = (!isLoaded && loading === "lazy") || hasError;

  const { style, ...imgProps } = props;
  
  return (
    <div className="relative inline-block" style={style}>
      {showPlaceholder && !hasError && loading === "lazy" && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center pointer-events-none z-0 rounded">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
      <img
        ref={imgRef}
        src={loading === "eager" ? src : imageSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 relative z-10 ${
          isLoaded || loading === "eager" ? "opacity-100" : "opacity-0"
        } ${hasError && !fallback ? "hidden" : ""}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        {...imgProps}
      />
    </div>
  );
};

export default LazyImage;

