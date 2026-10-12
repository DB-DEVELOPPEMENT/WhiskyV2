import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { whiskies, trouverWhisky } from '@/Data/whiskies';
import { useSlider } from '@/Context/SliderContext';
import useTitre from '@/Hooks/useTitre';
import SectionTitre from '@/Components/Page/SectionTitre';
import Jauge from '@/Components/Produit/Jauge';
import ProfilAromatique from '@/Components/Produit/ProfilAromatique';
import Introuvable from './Introuvable';

const ProduitDetail = () => {
  const { slug } = useParams();
  const whisky = trouverWhisky(slug);
  const { setActiveSlide } = useSlider();

  useTitre(whisky ? `${whisky.nom} ${whisky.edition}` : 'Whisky introuvable');

  // Le logo du header suit le whisky affiché
  const index = whiskies.indexOf(whisky);
  useEffect(() => {
    if (index >= 0) setActiveSlide(index);
  }, [index, setActiveSlide]);

  if (!whisky) return <Introuvable />;

  // Whiskies précédent et suivant (on boucle aux extrémités)
  const precedent = whiskies[(index - 1 + whiskies.length) % whiskies.length];
  const suivant = whiskies[(index + 1) % whiskies.length];

  // Fiche technique : libellé → valeur
  const fiche = [
    ['Type', whisky.type],
    ['Distillerie', whisky.distillerie],
    ['Origine', whisky.origine],
    ['Âge', whisky.age],
    ['Degré', `${whisky.degre}% vol`],
    ['Contenance', whisky.contenance],
    ['Fûts', whisky.futs],
    ['Couleur', whisky.couleur],
  ];

  return (
    <article className="page produit">
      <nav className="fil-ariane" aria-label="Fil d'Ariane">
        <Link to="/">Accueil</Link>
        <span aria-hidden="true">/</span>
        <Link to="/produits">Nos produits</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{whisky.nom}</span>
      </nav>

      {/* ----- En-tête : bouteille + présentation ----- */}
      <section className="produit__hero">
        <div className="produit__visuel">
          <img src={whisky.bouteille} alt={`Bouteille ${whisky.nom} ${whisky.edition}`} />
        </div>

        <div className="produit__presentation">
          <p className="page-hero__surtitre">{whisky.origine}</p>
          <h1 className="produit__nom">{whisky.nom}</h1>
          <p className="produit__edition">{whisky.edition}</p>
          <div className="page-hero__ligne" aria-hidden="true" />
          <p className="produit__description">{whisky.description}</p>

          <div className="produit__puissance">
            <span className="produit__puissance-label">Puissance</span>
            <Jauge valeur={whisky.puissance} label="Puissance" />
            <span className="produit__puissance-degre">{whisky.degre}% vol</span>
          </div>

          <ul className="produit__notes" aria-label="Notes dominantes">
            {whisky.notes.map((note) => (
              <li key={note} className="note">{note}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----- Dégustation : nez, bouche, finale ----- */}
      <section className="produit__section" aria-labelledby="degustation">
        <SectionTitre surtitre="Notes de dégustation" titre="Le goût" id="degustation" />
        <ol className="degustation">
          <li className="degustation__etape">
            <span className="degustation__chiffre" aria-hidden="true">I</span>
            <h3 className="degustation__titre">Nez</h3>
            <p>{whisky.nez}</p>
          </li>
          <li className="degustation__etape">
            <span className="degustation__chiffre" aria-hidden="true">II</span>
            <h3 className="degustation__titre">Bouche</h3>
            <p>{whisky.bouche}</p>
          </li>
          <li className="degustation__etape">
            <span className="degustation__chiffre" aria-hidden="true">III</span>
            <h3 className="degustation__titre">Finale</h3>
            <p>{whisky.finale}</p>
          </li>
        </ol>
      </section>

      {/* ----- Profil aromatique + fiche technique ----- */}
      <section className="produit__section produit__colonnes">
        <div>
          <SectionTitre surtitre="Les arômes" titre="Profil aromatique" />
          <ProfilAromatique profil={whisky.profil} />
          <p className="produit__precision">Profil indicatif, établi d'après les notes de dégustation.</p>
        </div>

        <div>
          <SectionTitre surtitre="En détail" titre="Fiche technique" />
          <dl className="fiche">
            {fiche.map(([label, valeur]) => (
              <div key={label} className="fiche__ligne">
                <dt>{label}</dt>
                <dd>{valeur}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ----- Service et accords ----- */}
      <section className="produit__section produit__colonnes">
        <div>
          <SectionTitre surtitre="Conseil" titre="Le service" />
          <p className="produit__texte">{whisky.service}</p>
          <blockquote className="anecdote">{whisky.anecdote}</blockquote>
        </div>

        <div>
          <SectionTitre surtitre="À table" titre="Accords" />
          <ul className="accords">
            {whisky.accords.map((accord) => (
              <li key={accord}>{accord}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----- Navigation entre les fiches ----- */}
      <nav className="produit__navigation" aria-label="Autres whiskies">
        <Link to={`/produits/${precedent.slug}`} className="whisky-corner">
          <span className="whisky-corner__link">← Précédent</span>
          <span className="whisky-corner__title">{precedent.nom}</span>
        </Link>
        <Link to="/produits" className="bouton">Toute la collection</Link>
        <Link to={`/produits/${suivant.slug}`} className="whisky-corner whisky-corner--right">
          <span className="whisky-corner__link">Suivant →</span>
          <span className="whisky-corner__title">{suivant.nom}</span>
        </Link>
      </nav>
    </article>
  );
};

export default ProduitDetail;
