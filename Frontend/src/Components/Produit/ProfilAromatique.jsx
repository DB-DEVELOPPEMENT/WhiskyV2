import Jauge from './Jauge';

// Les 5 familles d'arômes affichées sur chaque fiche produit
const FAMILLES = [
  { cle: 'fume', label: 'Fumé' },
  { cle: 'boise', label: 'Boisé' },
  { cle: 'fruite', label: 'Fruité' },
  { cle: 'epice', label: 'Épicé' },
  { cle: 'douceur', label: 'Douceur' },
];

export default function ProfilAromatique({ profil }) {
  return (
    <dl className="profil">
      {FAMILLES.map(({ cle, label }) => (
        <div key={cle} className="profil__ligne">
          <dt className="profil__label">{label}</dt>
          <dd className="profil__valeur">
            <Jauge valeur={profil[cle]} label={label} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
