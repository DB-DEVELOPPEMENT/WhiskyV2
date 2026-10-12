import fondTogouchi from '@/Assets/Images/Backgrounds/Fond_Togouchi.webp';
import logoTogouchi from '@/Assets/Images/logo_Togouchi.webp';
import iconeTogouchi from '@/Assets/Images/Icone_Togouchi.webp';
import bouteilleTogouchi from '@/Assets/Images/Togouchi_9ans.webp';

import fondYamazaki from '@/Assets/Images/Backgrounds/Fond_Yamazaki.webp';
import logoYamazaki from '@/Assets/Images/logo_Yamazaki.webp';
import iconeYamazaki from '@/Assets/Images/Icone_Yamazaki.webp';
import bouteilleYamazaki from '@/Assets/Images/Yamazaki_25years.webp';

import fondDalmore from '@/Assets/Images/Backgrounds/Fond_Dalmore.webp';
import logoDalmore from '@/Assets/Images/logo_Dalmore.svg';
import iconeDalmore from '@/Assets/Images/Icone_Dalmore_King_Alexander_III.webp';
import bouteilleDalmore from '@/Assets/Images/Dalmore_King_Alexander_III.webp';

import fondBowmore from '@/Assets/Images/Backgrounds/Fond_Bowmore.webp';
import logoBowmore from '@/Assets/Images/logo_Bowmore.svg';
import iconeBowmore from '@/Assets/Images/Icone_Bowmore.webp';
import bouteilleBowmore from '@/Assets/Images/Bowmore_25years.webp';

// PENSER A MODIIER LES FONDS DANS LE DOSSIER BACKGROUNDS POUR LES FUTURES IMAGES RETOUCHEES et convertir en .WebP SURTOUT!!!
// Premier jet img fait mais a revoir avec new images et new retouches !! TO DO !!!!! 

// .meta.glob méthode de "Vite" Sinon j'utilise des imports classiques. Vite recherche les fonds présents dans ce dossier.
// Sans fichier correspondant, la valeur est undefined penser que le dégradé reste visible!
// précaution qui me permet de préparer mes futures images retouchées après le slider.Une fois les img retouchées,remplacer dans Backgrounds + ICI:Passer detoure:False A : true et iconeDetouree:PAREIL DE False à true
// const fonds = import.meta.glob('/src/Assets/Images/Backgrounds/*.webp', {
//   eager: true,
//   query: '?url',
//   import: 'default',
// });

export const whiskies = [
  {
    id: 1,
    nom: 'Togouchi',
    edition: '9 ans · Blended',
    origine: 'Japon · Hiroshima',
    fondation: 1918,
    description: 'Un assemblage de malt et de grain vieilli au moins 9 ans, mûri dans un ancien tunnel ferroviaire d’Akiota-Togouchi. Ses notes d’agrumes rafraîchissantes s’équilibrent avec des épices et des fruits généreux.',
    notes: ['Fleur d’oranger', 'Agrumes', 'Menthe poivrée'],
    logo: logoTogouchi,
    bouteille: bouteilleTogouchi,
    icone: iconeTogouchi,
    fond: fondTogouchi,
    fondPosition: 'center center',
    fondPositionMobile: 'center center',
    voileHaut: 0.15,
    detoure: true,
    iconeDetouree: true,
    logoClair: true,
    logoDetoure: true,
  },
  {
    id: 2,
    nom: 'Yamazaki',
    edition: '25 ans',
    origine: 'Japon · Yamazaki',
    fondation: 1923,
    description: 'Une expression japonaise de longue maturation, présentée dans son coffret sombre. Une découverte entre richesse aromatique, douceur et nuances boisées.',
    notes: ['Boisé', 'Douceur', 'Épices'],
    logo: logoYamazaki,
    bouteille: bouteilleYamazaki,
    icone: iconeYamazaki,
    fond: fondYamazaki,
    fondPosition: 'center top',
    fondPositionMobile: 'center top',
    voileHaut: 0.18,
    detoure: true,
    iconeDetouree: true,
    logoClair: true,
    logoDetoure: true,
  },
  {
    id: 3,
    nom: 'Dalmore',
    edition: 'King Alexander III',
    origine: 'Écosse · Highlands',
    fondation: 1839,
    description: 'Une expression au profil généreux, associant des évocations de fruits rouges, de mandarine et de vanille à une douceur épicée.',
    notes: ['Fruits rouges', 'Mandarine', 'Vanille'],
    logo: logoDalmore,
    bouteille: bouteilleDalmore,
    icone: iconeDalmore,
    fond: fondDalmore,
    fondPosition: 'center top',
    fondPositionMobile: 'center top',
    voileHaut: 0.22,
    detoure: true,
    iconeDetouree: true,
    logoDetoure: true,
    logoClair: true,
  },
  {
    id: 4,
    nom: 'Bowmore',
    edition: '25 ans',
    origine: 'Écosse · Islay',
    fondation: 1779,
    description: 'Un whisky d’Islay où la fumée rencontre des nuances fruitées et chocolatées. Une évocation maritime accompagnée de notes de caramel et d’agrumes.',
    notes: ['Fumée', 'Agrumes', 'Caramel'],
    logo: logoBowmore,
    bouteille: bouteilleBowmore,
    icone: iconeBowmore,
    fond: fondBowmore,
    fondPosition: 'center top',
    fondPositionMobile: 'center top',
    voileHaut: 0.48,
    detoure: true,
    iconeDetouree: true,
    logoDetoure: true,
    logoClair: true,
  },
];