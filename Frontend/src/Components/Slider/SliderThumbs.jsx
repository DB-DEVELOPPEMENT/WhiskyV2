export default function SliderThumbs({ whiskies, activeSlide, onSelect }) {
  return (
    <ul className="whisky-thumbs" aria-label="Sélection du whisky">
      {whiskies.map((whisky, index) => (
        <li key={whisky.id}>
          <button
            type="button"
            className={`whisky-thumb${index === activeSlide ? ' whisky-thumb--active' : ''}`}
            onClick={() => onSelect(index)}
            aria-pressed={index === activeSlide}
            aria-label={`Afficher ${whisky.nom} ${whisky.edition}`}
          >
            <span className={
              whisky.iconeDetouree
                ? 'whisky-thumb__picture'
                : 'whisky-thumb__picture whisky-thumb__picture--paper'
            }>
              <img src={whisky.icone} alt="" />
            </span>
            <span className="whisky-thumb__name">{whisky.nom}</span>
            <span className="whisky-thumb__edition">{whisky.edition}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}