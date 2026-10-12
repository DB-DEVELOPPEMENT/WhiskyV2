export default function SlideInfo({ whisky }) {
  return (
    <div className="whisky-info">
      <p className="whisky-info__eyebrow">{whisky.origine}</p>
      <h1 className="whisky-info__title">{whisky.nom}</h1>
      <p className="whisky-info__edition">{whisky.edition}</p>
      <div className="whisky-info__line" aria-hidden="true" />
      <p className="whisky-info__description">{whisky.description}</p>
      <p className="whisky-info__hint">
        Sélectionnez une bouteille pour découvrir son coffret.
      </p>
    </div>
  );
}