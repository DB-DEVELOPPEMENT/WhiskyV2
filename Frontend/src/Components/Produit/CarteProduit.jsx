import { Link } from 'react-router-dom';

// Une carte de la page « Nos produits » : toute la carte est cliquable vers la fiche.
export default function CarteProduit({ whisky }) {
  return (
    <li className="carte-produit">
      <Link className="carte-produit__lien" to={`/produits/${whisky.slug}`}>
        <span className="carte-produit__visuel">
          <img
            src={whisky.bouteille}
            alt={`Bouteille ${whisky.nom} ${whisky.edition}`}
            loading="lazy"
          />
        </span>
        <span className="carte-produit__origine">{whisky.origine}</span>
        <span className="carte-produit__nom">{whisky.nom}</span>
        <span className="carte-produit__edition">{whisky.edition}</span>
        <span className="carte-produit__infos">
          {whisky.degre}% vol · {whisky.contenance}
        </span>
        <span className="carte-produit__notes">
          {whisky.notes.map((note) => (
            <span key={note} className="note">{note}</span>
          ))}
        </span>
        <span className="carte-produit__cta">Découvrir la fiche →</span>
      </Link>
    </li>
  );
}
