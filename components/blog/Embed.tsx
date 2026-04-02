interface EmbedProps {
  src: string;
  title: string;
  height?: number;
}

export default function Embed({ src, title, height = 500 }: EmbedProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700" tabIndex={-1}>
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        loading="lazy"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  );
}
