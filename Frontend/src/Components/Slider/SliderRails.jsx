// Textes verticaux de chaque côté du slider (décor de la maquette).
// Un fragment <> permet de renvoyer deux éléments qui restent
// des cases directes de la grille du slider.
// À droite : un bouton qui fait défiler vers le coffret suivant,
// et le crédit de l'auteur en bas de la colonne.
import { Link } from 'react-router-dom';

import { AUTEUR, PORTFOLIO_URL } from '@/Data/site';

export default function SliderRails({ suivant, onNext }) {
  return (
    <>
      {/* Gauche : texte décoratif, et le lien « Crédits » en bas de la colonne */}
      <div className="whisky-rail whisky-rail--left">
        <span className="whisky-rail__text whisky-rail__deco" aria-hidden="true">Nos dégustations</span>
        <Link className="whisky-rail__credits" to="/credits">
          <span className="whisky-rail__text">Crédits</span>
        </Link>
      </div>
      <div className="whisky-rail whisky-rail--right">
        <button
          type="button"
          className="whisky-rail__suivant"
          onClick={onNext}
          aria-label={`Voir le coffret suivant : ${suivant.nom}`}
        >
          {/* Pastille dorée avec une flèche, dans le style des boutons du slider */}
          <span className="whisky-rail__icone" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="whisky-rail__text" aria-hidden="true">
            Coffret suivant <strong>{suivant.nom}</strong>
          </span>
        </button>

        <a
          className="whisky-rail__credit"
          href={PORTFOLIO_URL}
          target="_blank"
          rel="author noopener noreferrer"
        >
          <span className="whisky-rail__text">
            © {new Date().getFullYear()} · <strong>{AUTEUR}</strong>
          </span>
        </a>
      </div>
    </>
  );
}
