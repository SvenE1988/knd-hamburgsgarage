import Image from "next/image";

type BackgroundVideoProps = {
  /** Video source (mp4). */
  src: string;
  /** Poster image, rendered as the LCP element and as the mobile fallback. */
  poster: string;
  /** Alt text for the poster. Empty + aria-hidden for decorative background use. */
  posterAlt?: string;
  /**
   * Load and play the video only from this min-width up. Below it, the browser
   * matches no <source> and stays on the poster — 0 bytes of video on mobile.
   */
  desktopFrom?: string;
  /** Preload the poster as the LCP image (renders <link rel="preload">). */
  preload?: boolean;
  /** Extra class on the <video> element. */
  videoClassName?: string;
  /** Extra class on the poster <Image>. */
  posterClassName?: string;
};

/**
 * Background video with a poster fallback. The poster is the LCP element
 * (responsive via next/image, optionally preloaded); the video plays muted/looped
 * on top. With `desktopFrom`, mobile loads no video and shows only the poster.
 */
export default function BackgroundVideo({
  src,
  poster,
  posterAlt = "",
  desktopFrom,
  preload = false,
  videoClassName,
  posterClassName,
}: BackgroundVideoProps) {
  return (
    <>
      <Image
        className={posterClassName}
        src={poster}
        alt={posterAlt}
        fill
        preload={preload}
        sizes="100vw"
        aria-hidden={posterAlt === "" ? true : undefined}
      />
      <video className={videoClassName} autoPlay muted loop playsInline preload="metadata">
        <source src={src} type="video/mp4" media={desktopFrom ? `(min-width:${desktopFrom})` : undefined} />
      </video>
    </>
  );
}
