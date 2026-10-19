import { Link } from 'react-router-dom';

import useSeo from '@/Hooks/useSeo';
import PageHero from '@/Components/Page/PageHero';
import SectionTitre from '@/Components/Page/SectionTitre';

// Frise chronologique des quatre maisons de la collection
const FRISE = [
  {
    annee: 1779,
    titre: 'Bowmore',
    lieu: 'Écosse · Islay',
    texte: 'John Simson fonde la distillerie au bord du loch Indaal. Bowmore est l’une des plus anciennes distilleries d’Écosse, et ses No.1 Vaults comptent parmi les plus vieux chais du pays.',
  },
  {
    annee: 1839,
    titre: 'The Dalmore',
    lieu: 'Écosse · Highlands',
    texte: 'Alexander Matheson crée la distillerie face à l’estuaire de Cromarty. La famille Mackenzie la reprend ensuite et lui transmet son emblème : le cerf royal.',
  },
  {
    annee: 1918,
    titre: 'Chugoku Jozo',
    lieu: 'Japon · Hiroshima',
    texte: 'La maison naît à Hatsukaichi, sur la mer intérieure de Seto. Elle donnera plus tard naissance aux whiskies Togouchi, élevés dans un ancien tunnel ferroviaire.',
  },
  {
    annee: 1923,
    titre: 'Yamazaki',
    lieu: 'Japon · Kyoto',
    texte: 'Shinjiro Torii fonde la première distillerie de malt du Japon, entre trois rivières, là où brumes et eaux pures se rencontrent.',
  },
];

const Histoire = () => {
  useSeo({
    titre: 'Notre histoire',
    description: 'L’histoire du whisky, des Highlands d’Écosse au Japon, et des quatre maisons de notre collection : Bowmore (1779), Dalmore (1839), Chugoku Jozo (1918) et Yamazaki (1923).',
  });

  return (
    <div className="page">
      <PageHero surtitre="Notre histoire" titre="L’eau de vie des Highlands au Japon">
        Le whisky est né dans les monastères et les fermes d’Écosse, avant de traverser le monde
        jusqu’aux vallées du Japon. Voici l’histoire des maisons qui composent notre collection.
      </PageHero>

      {/* ----- Les origines ----- */}
      <section className="page-section page-colonnes">
        <div>
          <SectionTitre surtitre="I · Les origines" titre="Uisge beatha" />
          <p className="page-texte">
            Le mot whisky vient du gaélique <em>uisge beatha</em>, « l’eau de vie ». En 1494,
            les registres royaux d’Écosse mentionnent déjà du malt livré au frère John Cor
            « pour faire de l’aqua vitae » : c’est la plus ancienne trace écrite du whisky écossais.
          </p>
          <p className="page-texte">
            Longtemps distillé en secret pour échapper aux taxes, il devient légal en 1823.
            Les distilleries se multiplient alors des Highlands jusqu’aux îles battues par le vent,
            comme Islay.
          </p>
        </div>
        <div>
          <SectionTitre surtitre="II · Le voyage" titre="Le Japon" />
          <p className="page-texte">
            Au début du XX<sup>e</sup> siècle, le Japon se passionne pour le whisky écossais.
            En 1923, Shinjiro Torii fonde Yamazaki près de Kyoto, avec Masataka Taketsuru,
            formé en Écosse.
          </p>
          <p className="page-texte">
            Les maisons japonaises inventent leur propre style, fait de précision et d’équilibre.
            Elles l’élèvent parfois dans un chêne local, le <em>Mizunara</em>, aux notes d’encens.
          </p>
        </div>
      </section>

      {/* ----- Frise des maisons ----- */}
      <section className="page-section" aria-labelledby="maisons">
        <SectionTitre surtitre="III · Nos maisons" titre="Quatre maisons, quatre histoires" id="maisons" />
        <ol className="frise">
          {FRISE.map((etape) => (
            <li key={etape.annee} className="frise__etape">
              <span className="frise__annee">{etape.annee}</span>
              <div className="frise__contenu">
                <h3 className="frise__titre">{etape.titre}</h3>
                <p className="frise__lieu">{etape.lieu}</p>
                <p className="frise__texte">{etape.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ----- Philosophie ----- */}
      <section className="page-section page-citation">
        <blockquote className="citation">
          « Un grand whisky ne se presse pas. Il se laisse attendre. »
        </blockquote>
        <p className="page-texte page-texte--centre">
          Notre sélection réunit des whiskies qui ont pris le temps : des années de fût, un lieu
          unique et le savoir-faire d’une maison. Chaque bouteille raconte son terroir.
        </p>
        <Link to="/produits" className="bouton">Découvrir la collection</Link>
      </section>
    </div>
  );
};

export default Histoire;
