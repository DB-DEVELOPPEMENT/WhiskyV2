// Textes verticaux de chaque côté du slider (décor de la maquette).
// Un fragment <> permet de renvoyer deux éléments qui restent
// des cases directes de la grille du slider.
export default function SliderRails({ whisky }) {
  return (
    <>
      <div className="whisky-rail whisky-rail--left" aria-hidden="true">
        <span className="whisky-rail__text">Nos dégustations</span>
      </div>
      <div className="whisky-rail whisky-rail--right" aria-hidden="true">
        <span className="whisky-rail__text">
          L'histoire de <strong>{whisky.nom}</strong>
        </span>
      </div>
    </>
  );
}
