export default function EmbedVideo ({ embedId })  {

  return (
    <div className="overflow-hidden relative h-0 pb-[56.25%]">
      <iframe
      className="absolute h-full w-full left-0 top-0"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}