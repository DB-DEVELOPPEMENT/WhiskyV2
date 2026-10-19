import { Link } from 'react-router-dom';

import useSeo from '@/Hooks/useSeo';
import PageHero from '@/Components/Page/PageHero';
import SectionTitre from '@/Components/Page/SectionTitre';
import Triptyque from '@/Components/Page/Triptyque';
import imageEcosse from '@/Assets/Images/Histoire/voyage-ecosse.webp';
import imageTaketsuru from '@/Assets/Images/Histoire/voyage-taketsuru.webp';
import imageJapon from '@/Assets/Images/Histoire/voyage-japon.webp';
import imageBowmore from '@/Assets/Images/Histoire/maison-bowmore.webp';
import imageDalmore from '@/Assets/Images/Histoire/maison-dalmore.webp';
import imageTogouchi from '@/Assets/Images/Histoire/maison-togouchi.webp';
import imageYamazaki from '@/Assets/Images/Histoire/maison-yamazaki.webp';

// ⚠ Crédits photos (à garder en mémoire, Wikimedia Commons sauf mention) :
//   Écosse    : Neil Williamson, Glen Etive — CC BY-SA 2.0
//               https://commons.wikimedia.org/wiki/File:Glen_Etive_-_Flickr_-_Neillwphoto.jpg
//   Taketsuru : photographe inconnu — domaine public
//               https://commons.wikimedia.org/wiki/File:Masataka_Taketsuru.jpg
//   Japon     : Alpsdake, mont Fuji depuis le lac Kawaguchi — CC BY-SA 4.0
//               https://commons.wikimedia.org/wiki/File:Autumn_leaf_color_and_Mount_Fuji_from_Lake_Kawaguchi.jpg
//   Bowmore   : MSeses — CC BY-SA 4.0
//               https://commons.wikimedia.org/wiki/File:Scotland_Argyll_Bute_Islay_Bowmore_Distillery_01.jpg
//   Dalmore   : Wojsyl — CC BY-SA 3.0
//               https://commons.wikimedia.org/wiki/File:Scotland_Alness_Dalmore_Distillery.jpg
//   Togouchi  : tunnel-chai, site officiel togouchi.com (même image que le fond de l'accueil)
//   Yamazaki  : Toukou Sousui — CC BY 2.0
//               https://commons.wikimedia.org/wiki/File:Yamazaki_Distillery_山崎蒸留所17.jpg

// Le voyage du whisky, en face du titre : Écosse → Taketsuru → Japon
const VOYAGE = [
  {
    image: imageEcosse,
    legende: 'Les Highlands',
    alt: 'Route déserte traversant la vallée de Glen Etive, dans les Highlands écossais',
  },
  {
    image: imageTaketsuru,
    legende: 'Le voyage',
    alt: 'Portrait ancien de Masataka Taketsuru, parti apprendre le whisky en Écosse',
  },
  {
    image: imageJapon,
    legende: 'Le Japon',
    alt: 'Le mont Fuji enneigé derrière des érables rouges d’automne',
  },
];

// Frise chronologique des quatre maisons de la collection
const FRISE = [
  {
    annee: 1779,
    titre: 'Bowmore',
    lieu: 'Écosse · Islay',
    image: imageBowmore,
    alt: 'Les bâtiments blancs de la distillerie Bowmore au bord du loch Indaal, sur Islay',
    texte: 'John Simson fonde la distillerie au bord du loch Indaal. Bowmore est l’une des plus anciennes distilleries d’Écosse, et ses No.1 Vaults comptent parmi les plus vieux chais du pays.',
  },
  {
    annee: 1839,
    titre: 'The Dalmore',
    lieu: 'Écosse · Highlands',
    image: imageDalmore,
    alt: 'Bâtiment en pierre de la distillerie The Dalmore, dans les Highlands',
    texte: 'Alexander Matheson crée la distillerie face à l’estuaire de Cromarty. La famille Mackenzie la reprend ensuite et lui transmet son emblème : le cerf royal.',
  },
  {
    annee: 1918,
    titre: 'Chugoku Jozo',
    lieu: 'Japon · Hiroshima',
    image: imageTogouchi,
    alt: 'Fûts de whisky Togouchi alignés dans l’ancien tunnel ferroviaire',
    texte: 'La maison naît à Hatsukaichi, sur la mer intérieure de Seto. Elle donnera plus tard naissance aux whiskies Togouchi, élevés dans un ancien tunnel ferroviaire.',
  },
  {
    annee: 1923,
    titre: 'Yamazaki',
    lieu: 'Japon · Kyoto',
    image: imageYamazaki,
    alt: 'Alambics en cuivre de la distillerie Yamazaki',
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
      <div className="page-entete">
        <PageHero surtitre="Notre histoire" titre="L’eau de vie des Highlands au Japon">
          Le whisky est né dans les monastères et les fermes d’Écosse, avant de traverser le monde
          jusqu’aux vallées du Japon. Voici l’histoire des maisons qui composent notre collection.
        </PageHero>
        <Triptyque etapes={VOYAGE} label="Le voyage du whisky, de l’Écosse au Japon" />
      </div>

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
              <img
                className="frise__image"
                src={etape.image}
                alt={etape.alt}
                width="640"
                height="480"
                loading="lazy"
              />
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
