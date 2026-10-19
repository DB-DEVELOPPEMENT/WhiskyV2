import { useState } from 'react';

import { whiskies } from '@/Data/whiskies';
import useSeo from '@/Hooks/useSeo';
import PageHero from '@/Components/Page/PageHero';
import CarteProduit from '@/Components/Produit/CarteProduit';

// Filtres par pays : "Tous" + chaque pays présent dans les données
const FILTRES = ['Tous', ...new Set(whiskies.map((whisky) => whisky.pays))];

const Produits = () => {
  useSeo({
    titre: 'Nos produits',
    description: 'La collection : Togouchi 9 ans, Yamazaki 25 ans, Dalmore King Alexander III et Bowmore 25 ans. Whiskies japonais et écossais d’exception, filtrables par pays.',
  });
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
