"use client";

import { useState } from "react";
import { cx } from "@/lib/utils";
import { MediaArtwork } from "@/components/MediaArtwork";

type StillFrameProps = {
  src: string;
  alt: string;
  label: string;
  artwork?: string;
  accent?: string;
  className?: string;
};

export function StillFrame({ src, alt, label, artwork, accent, className }: StillFrameProps) {
  const [hasFailed, setHasFailed] = useState(false);

  return (
    <div className={cx("still-frame", className)}>
      {!hasFailed ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={src} alt={alt} loading="lazy" onError={() => setHasFailed(true)} />
      ) : null}
      <div className={cx("still-frame__fallback", !hasFailed && "is-hidden")}>
        <MediaArtwork label={label} accent={accent} artwork={artwork} />
      </div>
    </div>
  );
}
