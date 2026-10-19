import { Link } from 'react-router-dom';

import useSeo from '@/Hooks/useSeo';
import { AUTEUR, PORTFOLIO_URL } from '@/Data/site';

// Crédits photographiques : auteur, sujet, licence et lien vers la source.
const PHOTOS = [
  {
    page: 'Notre histoire',
    sujet: 'Glen Etive, Highlands écossais',
    auteur: 'Neil Williamson',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/deed.fr',
    source: 'https://commons.wikimedia.org/wiki/File:Glen_Etive_-_Flickr_-_Neillwphoto.jpg',
  },
  {
    page: 'Notre histoire',
    sujet: 'Portrait de Masataka Taketsuru',
    auteur: 'Photographe inconnu',
    licence: 'Domaine public',
    source: 'https://commons.wikimedia.org/wiki/File:Masataka_Taketsuru.jpg',
  },
  {
    page: 'Notre histoire',
    sujet: 'Mont Fuji et érables d’automne, lac Kawaguchi',
    auteur: 'Alpsdake',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
    source: 'https://commons.wikimedia.org/wiki/File:Autumn_leaf_color_and_Mount_Fuji_from_Lake_Kawaguchi.jpg',
  },
  {
    page: 'Notre histoire',
    sujet: 'Distillerie Bowmore, Islay',
    auteur: 'MSeses',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
    source: 'https://commons.wikimedia.org/wiki/File:Scotland_Argyll_Bute_Islay_Bowmore_Distillery_01.jpg',
  },
  {
    page: 'Notre histoire',
    sujet: 'Distillerie The Dalmore, Alness',
    auteur: 'Wojsyl',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/deed.fr',
    source: 'https://commons.wikimedia.org/wiki/File:Scotland_Alness_Dalmore_Distillery.jpg',
  },
  {
    page: 'Notre histoire',
    sujet: 'Cerisiers en fleurs à Ōyamazaki',
    auteur: 'Oilstreet',
    licence: 'CC BY 2.5',
    licenceUrl: 'https://creativecommons.org/licenses/by/2.5/deed.fr',
    source: 'https://commons.wikimedia.org/wiki/File:Oyamazaki_Kyoto01-r.jpg',
  },
  {
    page: 'Nos procédures',
    sujet: 'Épis d’orge dorés',
    auteur: 'Mhmd.abdrzg',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
    source: 'https://commons.wikimedia.org/wiki/File:Golden_Barley_feild.jpg',
  },
  {
    page: 'Nos procédures',
    sujet: 'Alambics de la distillerie Nikka Yoichi',
    auteur: 'さかおり',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
    source: 'https://commons.wikimedia.org/wiki/File:Nikka_Whisky_Yoichi_Distillery._Still_House._Pot_Still._A.jpg',
  },
  {
    page: 'Nos procédures',
    sujet: 'Verre de dégustation Glencairn',
    auteur: 'Amiko82',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
    source: 'https://commons.wikimedia.org/wiki/File:Glencairn_Whisky_Glass...jpg',
  },
];

// Marques présentées et sites officiels d'où proviennent les visuels produits
const MARQUES = [
  { nom: 'Togouchi', titulaire: 'Sakurao Brewery & Distillery (anciennement Chugoku Jozo)', site: 'https://togouchi.com' },
  { nom: 'Yamazaki', titulaire: 'Suntory', site: 'https://house.suntory.com' },
  { nom: 'The Dalmore', titulaire: 'Whyte & Mackay', site: 'https://www.thedalmore.com' },
  { nom: 'Bowmore', titulaire: 'Suntory Global Spirits', site: 'https://www.bowmore.com' },
];

// Page légale, accessible uniquement par les liens « Crédits » (footer et accueil)
const Credits = () => {
  useSeo({
    titre: 'Crédits et mentions légales',
    description: 'Mentions légales, crédits photographiques, marques, typographies et données personnelles du site de démonstration Whiskies d’exception.',
  });

  return (
    <div className="page legal">
      <h1 className="legal__titre">Crédits et mentions légales</h1>
      <p className="legal__maj">Dernière mise à jour : 19 octobre 2026</p>

      <section>
        <h2>1. Éditeur du site</h2>
        <p>
          Ce site est un <strong>site de démonstration personnel, non commercial</strong>, conçu et
          développé par <strong>{AUTEUR}</strong> dans le cadre d’un portfolio.
        </p>
        <p>
          Responsable de la publication : {AUTEUR}.<br />
          Contact : via le profil GitHub{' '}
          <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">{PORTFOLIO_URL}</a>.
        </p>
      </section>

      <section>
        <h2>2. Hébergement</h2>
        <p>
          GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107,
          États-Unis —{' '}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a>.
        </p>
      </section>

      <section>
        <h2>3. Nature du site</h2>
        <p>
          Aucun produit n’est vendu sur ce site et aucune commande ne peut y être passée.
          Le site n’a aucun lien commercial, de partenariat ou de sponsoring avec les marques présentées.
        </p>
        <p>
          Les informations sont données à titre indicatif. Les notes de dégustation s’inspirent des
          fiches officielles des marques ; les profils aromatiques, niveaux de puissance, conseils de
          service et accords sont des estimations de l’éditeur.
        </p>
      </section>

      <section>
        <h2>4. Marques et visuels des produits</h2>
        <p>
          Les noms, logos, bouteilles, étuis et visuels des produits sont la propriété exclusive de
          leurs titulaires respectifs. Ils sont reproduits uniquement à des fins de démonstration,
          sans usage commercial.
        </p>
        <ul>
          {MARQUES.map((marque) => (
            <li key={marque.nom}>
              <strong>{marque.nom}</strong> — {marque.titulaire} —{' '}
              <a href={marque.site} target="_blank" rel="noopener noreferrer">{marque.site.replace('https://', '')}</a>
            </li>
          ))}
        </ul>
        <p>
          L’image du tunnel de vieillissement Togouchi provient du site officiel togouchi.com.
          Les logos Togouchi et Yamazaki ont été extraits des visuels officiels de leurs étiquettes.
        </p>
        <p>
          Tout titulaire de droits qui souhaite le retrait d’un élément peut le demander via le
          contact ci-dessus : il sera retiré dans les plus brefs délais.
        </p>
      </section>

      <section>
        <h2>5. Crédits photographiques</h2>
        <p>
          Les photographies suivantes proviennent de Wikimedia Commons. Elles ont été recadrées et
          leur teinte a été légèrement retouchée pour s’accorder au site ; le portrait de
          Masataka Taketsuru a été passé en sépia.
        </p>
        <ul>
          {PHOTOS.map((photo) => (
            <li key={photo.source}>
              <strong>{photo.sujet}</strong> ({photo.page}) — {photo.auteur} —{' '}
              {photo.licenceUrl ? (
                <a href={photo.licenceUrl} target="_blank" rel="noopener noreferrer">{photo.licence}</a>
              ) : (
                photo.licence
              )}{' '}
              — <a href={photo.source} target="_blank" rel="noopener noreferrer">source</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>6. Typographies, icônes et code</h2>
        <ul>
          <li>
            <strong>Cinzel</strong> (Natanael Gama), <strong>Cormorant Garamond</strong> (Christian Thalmann)
            et <strong>Lato</strong> (Łukasz Dziedzic) — licence{' '}
            <a href="https://openfontlicense.org" target="_blank" rel="noopener noreferrer">SIL Open Font License 1.1</a>,
            servies par Google Fonts.
          </li>
          <li>Favicon, logo « Whiskies d’Exception » et ornements : création {AUTEUR}.</li>
          <li>Site réalisé avec React, React Router et Vite (licence MIT).</li>
        </ul>
      </section>

      <section>
        <h2>7. Données personnelles et cookies</h2>
        <p>
          Ce site ne contient aucun formulaire, ne dépose <strong>aucun cookie</strong> et n’utilise
          aucun outil de mesure d’audience ni de publicité. Aucune donnée personnelle n’est collectée
          par l’éditeur.
        </p>
        <p>
          Lors de votre visite, votre adresse IP est toutefois transmise techniquement à
          l’hébergeur (GitHub) et à Google, qui fournit les polices d’écriture (Google Fonts).
          Ces traitements relèvent de leurs politiques de confidentialité respectives :{' '}
          <a href="https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
          et{' '}
          <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">Google</a>.
        </p>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et d’effacement,
          ainsi que du droit d’introduire une réclamation auprès de la{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
        </p>
      </section>

      <section>
        <h2>8. Consommation d’alcool</h2>
        <p>
          Ce site s’adresse aux personnes majeures. Conformément à la loi Évin :{' '}
          <strong>l’abus d’alcool est dangereux pour la santé, à consommer avec modération.</strong>
        </p>
      </section>

      <section>
        <h2>9. Liens externes</h2>
        <p>
          Les liens vers d’autres sites sont fournis à titre d’information. L’éditeur n’est pas
          responsable de leur contenu.
        </p>
      </section>

      <p className="legal__retour">
        <Link to="/">← Retour à l’accueil</Link>
      </p>
    </div>
  );
};

export default Credits;
