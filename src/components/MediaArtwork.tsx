type MediaArtworkProps = {
  label: string;
  eyebrow?: string;
  accent?: string;
  artwork?: string;
};

export function MediaArtwork({ label, eyebrow, accent = "#d6ff5f", artwork = "default" }: MediaArtworkProps) {
  return (
    <div className={`media-artwork artwork-${artwork}`} style={{ "--art-accent": accent } as React.CSSProperties}>
      <div className="artwork-grain" />
      <div className="artwork-light artwork-light--one" />
      <div className="artwork-light artwork-light--two" />
      <div className="artwork-orbit artwork-orbit--one" />
      <div className="artwork-orbit artwork-orbit--two" />
      <div className="artwork-object" />
      <div className="artwork-copy">
        {eyebrow ? <span>{eyebrow}</span> : null}
        <strong>{label}</strong>
      </div>
      <span className="artwork-index">PROJETO CONCEITUAL / ESTUDO VISUAL</span>
    </div>
  );
}
