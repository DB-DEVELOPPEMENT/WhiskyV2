// Logo générique de la « maison » (salle de dégustation), affiché dans le header
// des pages Notre histoire et Nos procédures, quel que soit le whisky sélectionné.
// Le texte est en HTML (et non dans le SVG) pour profiter des polices du site.
export default function LogoMaison() {
  return (
    <span className="logo-maison" role="img" aria-label="Whiskies d’Exception, salle de dégustation">
      {/* Médaillon doré : verre de whisky, comme le favicon */}
      <svg className="logo-maison__embleme" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="32" cy="32" r="26.5" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.6" />
        <path d="M22.5 31 H41.5 L40.6 41.4 Q40.4 43.4 38.4 43.4 H25.6 Q23.6 43.4 23.4 41.4 Z" fill="currentColor" fillOpacity="0.45" />
        <path d="M21 19 H43 L41.2 42 Q40.9 45 38 45 H26 Q23.1 45 22.8 42 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M25 22.5 L26 39" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
      <span className="logo-maison__textes" aria-hidden="true">
        <span className="logo-maison__nom">Whiskies d’Exception</span>
        <span className="logo-maison__sous-titre">Salle de dégustation</span>
      </span>
    </span>
  );
}
