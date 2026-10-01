"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/utils";
import { MediaArtwork } from "@/components/MediaArtwork";

type VideoFrameProps = {
  src: string;
  poster?: string;
  label: string;
  eyebrow?: string;
  accent?: string;
  artwork?: string;
  className?: string;
  aspect?: "hero" | "wide" | "portrait" | "standard";
  showStatus?: boolean;
};

export function VideoFrame({
  src,
  poster,
  label,
  eyebrow,
  accent,
  artwork,
  className,
  aspect = "standard",
  showStatus = true
}: VideoFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const element = frameRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      const fallbackTimer = setTimeout(() => setShouldLoad(true), 0);
      return () => clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className={cx("video-frame", `video-frame--${aspect}`, className)}
      style={{ "--media-accent": accent } as React.CSSProperties}
    >
      {shouldLoad && !hasFailed ? (
        <video
          className={cx("video-frame__video", isPlaying && "is-playing")}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          onCanPlay={() => setIsPlaying(true)}
          onError={() => setHasFailed(true)}
          aria-label={label}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}

      <div className={cx("video-frame__fallback", isPlaying && "is-hidden")}>
        <MediaArtwork label={label} eyebrow={eyebrow} accent={accent} artwork={artwork} />
      </div>

      {showStatus && !isPlaying ? (
        <div className="video-frame__status">
          <span className="status-dot" />
          <span>Prévia / estudo conceitual</span>
        </div>
      ) : null}
    </div>
  );
}
