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
      <p className="whisky-product__caption">Cliquer sur le coffret pour continuer</p>
    </div>
  );
}