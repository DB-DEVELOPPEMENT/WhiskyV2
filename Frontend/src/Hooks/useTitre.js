import { useEffect } from 'react';

const NOM_DU_SITE = "Whiskies d'exception";

// Change le titre de l'onglet du navigateur selon la page affichée.
// useTitre('Nos produits') → « Nos produits · Whiskies d'exception »
export default function useTitre(titre) {
  useEffect(() => {
    document.title = titre ? `${titre} · ${NOM_DU_SITE}` : NOM_DU_SITE;
  }, [titre]);
}
