import { useState } from 'react';

import { whiskies } from '@/Data/whiskies';
import useTitre from '@/Hooks/useTitre';
import PageHero from '@/Components/Page/PageHero';
import CarteProduit from '@/Components/Produit/CarteProduit';

// Filtres par pays : "Tous" + chaque pays présent dans les données
const FILTRES = ['Tous', ...new Set(whiskies.map((whisky) => whisky.pays))];

const Produits = () => {
  useTitre('Nos produits');
  const [filtre, setFiltre] = useState('Tous');

  const selection = filtre === 'Tous'
    ? whiskies
    : whiskies.filter((whisky) => whisky.pays === filtre);

  return (
    <div className="page">
      <PageHero surtitre="La collection" titre="Nos produits">
        Quatre whiskies d'exception, entre les brumes d'Écosse et les montagnes du Japon.
        Chacun raconte une maison, un fût et une patience de plusieurs années.
      </PageHero>

      <div className="filtres" role="group" aria-label="Filtrer par pays">
        {FILTRES.map((pays) => (
          <button
            key={pays}
            type="button"
            className={pays === filtre ? 'filtre filtre--actif' : 'filtre'}
            aria-pressed={pays === filtre}
            onClick={() => setFiltre(pays)}
          >
            {pays}
          </button>
        ))}
      </div>

      <ul className="grille-produits">
        {selection.map((whisky) => (
          <CarteProduit key={whisky.id} whisky={whisky} />
        ))}
      </ul>
    </div>
  );
};

export default Produits;
