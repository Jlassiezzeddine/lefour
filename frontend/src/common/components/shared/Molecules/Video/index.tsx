import { useRef, useEffect } from 'react';
interface IProps {
  url: string;
  onLoadedData?: any;
}
function VideoComponent({ url, onLoadedData }: IProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previousUrl = useRef(url);

  useEffect(() => {
    if (previousUrl.current === url) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = url;
  }, [url]);

  return (
    <video
      onLoadedData={onLoadedData}
      ref={videoRef}
      playsInline
      autoPlay
      muted
      loop
      style={{ height: '100%' }}
    >
      <source src={url} />
    </video>
  );
}

export default VideoComponent;
