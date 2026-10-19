export default function SlideBottle({ whisky, onNext }) {
  return (
    <div className="whisky-product">
      <button
        type="button"
        className="whisky-product__button"
        onClick={onNext}
        aria-label={`${whisky.nom} ${whisky.edition} : afficher le whisky suivant`}
      >
        <span className={
          whisky.detoure
            ? 'whisky-product__visual'
            : 'whisky-product__visual whisky-product__visual--paper'
        }>
          <img
            className="whisky-product__image"
            src={whisky.bouteille}
            alt={`Bouteille et coffret ${whisky.nom} ${whisky.edition}`}
          />
        </span>
      </button>
      {/* Mention obligatoire en France pour un site sur l'alcool (loi Évin) */}
      <p className="whisky-product__caption">
        L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
      </p>
    </div>
  );
}