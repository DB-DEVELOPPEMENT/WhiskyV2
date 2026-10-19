import { Link } from 'react-router-dom';

import useSeo from '@/Hooks/useSeo';
import PageHero from '@/Components/Page/PageHero';

// Page affichée pour une adresse inconnue
const Introuvable = () => {
  useSeo({ titre: 'Page introuvable' });

  return (
    <div className="page page--centree">
      <PageHero surtitre="Erreur 404" titre="Fût vide">
        Cette page s'est évaporée avec la part des anges.
      </PageHero>
      <Link to="/" className="bouton">Retour à l'accueil</Link>
    </div>
  );
};

export default Introuvable;
