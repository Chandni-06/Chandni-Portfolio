export function formatImageUrl(url: string): string {
  if (!url) return "";
  const driveMatch = url.match(
    /drive\.google\.com\/(?:file\/d\/|open\?id=)([^/?#]+)/,
  );
  if (driveMatch && driveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }
  return url;
}

export function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";

  const videoIdMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );

  if (!videoIdMatch?.[1]) return "";

  return `https://www.youtube-nocookie.com/embed/${videoIdMatch[1]}?rel=0&modestbranding=1`;
}

export function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com|youtu\.be)/.test(url || "");
}
