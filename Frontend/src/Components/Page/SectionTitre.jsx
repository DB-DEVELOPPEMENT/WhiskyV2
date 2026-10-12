// Titre de section : numéro romain ou sur-titre doré + titre gravé.
export default function SectionTitre({ surtitre, titre, id }) {
  return (
    <div className="section-titre">
      {surtitre && <p className="section-titre__surtitre">{surtitre}</p>}
      <h2 className="section-titre__titre" id={id}>{titre}</h2>
    </div>
  );
}
