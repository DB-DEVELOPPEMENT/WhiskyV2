import { whiskies } from '@/Data/whiskies';

// Décor de la page d'accueil, fixé derrière tout le contenu.
// Les 4 fonds sont empilés : seul celui de la slide active est opaque.
// Une opacité peut se transitionner (contrairement à background-image),
// d'où le fondu enchaîné. Bonus : toutes les images sont chargées dès le départ.
export default function Fond({ activeSlide }) {
  return (
    <div className="fond" aria-hidden="true">
      {whiskies.map((whisky, index) => (
        <div
          key={whisky.id}
          className={`fond__image${index === activeSlide ? ' fond__image--active' : ''}`}
          style={{
            '--fond-image': `url("${whisky.fond}")`,
            '--fond-position': whisky.fondPosition,
            '--fond-position-mobile': whisky.fondPositionMobile,
            '--fond-voile-haut': whisky.voileHaut,
          }}
        />
      ))}

      {/* Calque noir commun, par-dessus les images */}
      <div className="fond__calque" />

      {/* Bandes noires dégradées à gauche et à droite, sur toute la hauteur,
          pour que les textes des deux côtés restent lisibles */}
      <div className="fond__cotes" />

      {/* Nuages légers en bas de l'écran.
          3 couches de brume floue qui dérivent à des vitesses différentes (effet de profondeur). */}
      <div className="fond__nuages">
        <div className="fond__nuage fond__nuage--loin" />
        <div className="fond__nuage fond__nuage--milieu" />
        <div className="fond__nuage fond__nuage--proche" />
      </div>
    </div>
  );
}
