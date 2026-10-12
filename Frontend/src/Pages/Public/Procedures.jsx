import { Link } from 'react-router-dom';

import useTitre from '@/Hooks/useTitre';
import PageHero from '@/Components/Page/PageHero';
import SectionTitre from '@/Components/Page/SectionTitre';

// Les étapes de fabrication, de l'orge au verre
const ETAPES = [
  {
    numero: 'I',
    titre: 'Le maltage',
    chiffre: '5 à 7 jours',
    texte: 'L’orge est trempée dans l’eau puis mise à germer pour libérer ses sucres. On la sèche ensuite au four. À Islay, le feu de tourbe donne au malt sa fumée caractéristique : Bowmore malte encore une partie de son orge sur ses propres aires.',
  },
  {
    numero: 'II',
    titre: 'Le brassage',
    chiffre: '3 eaux chaudes',
    texte: 'Le malt moulu est mélangé à de l’eau chaude dans une grande cuve. L’eau dissout les sucres et donne un liquide sucré, le moût. La qualité de l’eau de source joue ici un rôle essentiel.',
  },
  {
    numero: 'III',
    titre: 'La fermentation',
    chiffre: '48 à 72 heures',
    texte: 'On ajoute des levures au moût refroidi. Elles transforment les sucres en alcool et créent les premiers arômes fruités. On obtient une sorte de bière de malt d’environ 8 % vol.',
  },
  {
    numero: 'IV',
    titre: 'La distillation',
    chiffre: '≈ 70 % vol',
    texte: 'Le liquide passe deux fois dans des alambics en cuivre. Le maître distillateur ne garde que le « cœur » de la chauffe, la partie la plus pure et la plus aromatique.',
  },
  {
    numero: 'V',
    titre: 'Le vieillissement',
    chiffre: '3 ans minimum',
    texte: 'L’eau de vie repose en fûts de chêne : ex-bourbon, xérès, porto ou Mizunara japonais. Chaque année, environ 2 % s’évapore : c’est la part des anges. Le bois apporte couleur, douceur et complexité.',
  },
  {
    numero: 'VI',
    titre: 'L’assemblage',
    chiffre: '40 à 43 % vol',
    texte: 'Le maître assembleur goûte et marie les fûts pour créer un profil unique. Le whisky est ensuite réduit avec de l’eau pure jusqu’à son degré final, puis mis en bouteille.',
  },
];

// Les quatre gestes de la dégustation
const DEGUSTATION = [
  { titre: 'Observer', texte: 'Inclinez le verre : la couleur et les « larmes » sur la paroi révèlent l’âge et la richesse du whisky.' },
  { titre: 'Sentir', texte: 'Approchez le nez doucement, bouche entrouverte. Les premiers arômes sont souvent les plus légers.' },
  { titre: 'Goûter', texte: 'Gardez une petite gorgée en bouche quelques secondes pour que tous les arômes se révèlent.' },
  { titre: 'Allonger', texte: 'Quelques gouttes d’eau suffisent à ouvrir un whisky puissant et à révéler de nouvelles notes.' },
];

const Procedures = () => {
  useTitre('Nos procédures');

  return (
    <div className="page">
      <PageHero surtitre="Nos procédures" titre="De l’orge au verre">
        Trois ingrédients seulement : de l’orge, de l’eau et des levures. Le reste est une affaire
        de patience, de cuivre, de chêne et de savoir-faire.
      </PageHero>

      {/* ----- Étapes de fabrication ----- */}
      <section className="page-section" aria-labelledby="fabrication">
        <SectionTitre surtitre="La fabrication" titre="Six étapes, des années de patience" id="fabrication" />
        <ol className="etapes">
          {ETAPES.map((etape) => (
            <li key={etape.numero} className="etape">
              <span className="etape__numero" aria-hidden="true">{etape.numero}</span>
              <h3 className="etape__titre">{etape.titre}</h3>
              <p className="etape__chiffre">{etape.chiffre}</p>
              <p className="etape__texte">{etape.texte}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ----- Art de la dégustation ----- */}
      <section className="page-section page-colonnes page-colonnes--decalees">
        <div>
          <SectionTitre surtitre="La dégustation" titre="L’art de déguster" />
          <p className="page-texte">
            Choisissez un verre en forme de tulipe : il concentre les arômes vers le nez.
            Servez le whisky à température ambiante, sans glace pour une première découverte.
          </p>
          <Link to="/produits" className="bouton">Choisir un whisky</Link>
        </div>
        <ol className="gestes">
          {DEGUSTATION.map((geste, index) => (
            <li key={geste.titre} className="geste">
              <span className="geste__numero" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3 className="geste__titre">{geste.titre}</h3>
                <p className="geste__texte">{geste.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Procedures;
