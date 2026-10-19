import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NOM_DU_SITE = "Whiskies d'exception";
const URL_DU_SITE = 'https://db-developpement.github.io/WhiskyV2';

// Crée la balise <meta> ou <link> si elle n'existe pas encore, puis la renvoie
function balise(selecteur, creer) {
  let element = document.head.querySelector(selecteur);
  if (!element) {
    element = creer();
    document.head.appendChild(element);
  }
  return element;
}

function meta(attribut, nom, contenu) {
  balise(`meta[${attribut}="${nom}"]`, () => {
    const element = document.createElement('meta');
    element.setAttribute(attribut, nom);
    return element;
  }).setAttribute('content', contenu);
}

// Référencement de chaque page : titre de l'onglet, description Google,
// adresse officielle (canonical) et aperçu de partage (Open Graph).
// useSeo({ titre: 'Nos produits', description: '…' })
export default function useSeo({ titre, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const titreComplet = titre
      ? `${titre} · ${NOM_DU_SITE}`
      : `${NOM_DU_SITE} · Togouchi, Yamazaki, Dalmore, Bowmore`;
    const adresse = `${URL_DU_SITE}${pathname}`;

    document.title = titreComplet;
    meta('property', 'og:title', titreComplet);
    meta('property', 'og:url', adresse);
    if (description) {
      meta('name', 'description', description);
      meta('property', 'og:description', description);
    }
    balise('link[rel="canonical"]', () => {
      const lien = document.createElement('link');
      lien.setAttribute('rel', 'canonical');
      return lien;
    }).setAttribute('href', adresse);
  }, [titre, description, pathname]);
}
