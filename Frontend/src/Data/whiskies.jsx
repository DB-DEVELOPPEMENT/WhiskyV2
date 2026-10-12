import fondMacallan from '@/Assets/Images/Backgrounds/Fond_Macallan.webp';
import logoMacallan from '@/Assets/Images/logo_Macallan.webp';
import iconeMacallan from '@/Assets/Images/Icone_Macallan.webp';
import bouteilleMacallan from '@/Assets/Images/Macallan_25years.webp';

import fondYamazaki from '@/Assets/Images/Backgrounds/Fond_Yamazaki.webp';
import logoYamazaki from '@/Assets/Images/logo_Yamazaki.webp';
import iconeYamazaki from '@/Assets/Images/Icone_Yamazaki.webp';
import bouteilleYamazaki from '@/Assets/Images/Yamazaki_25years.webp';

import fondDalmore from '@/Assets/Images/Backgrounds/Fond_Dalmore.webp';
import logoDalmore from '@/Assets/Images/logo_Dalmore.webp';
import iconeDalmore from '@/Assets/Images/Icone_Dalmore_King_Alexander_III.webp';
import bouteilleDalmore from '@/Assets/Images/Dalmore_King_Alexander_III.webp';

import fondBowmore from '@/Assets/Images/Backgrounds/Fond_Bowmore.webp';
import logoBowmore from '@/Assets/Images/logo_Bowmore.webp';
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
    nom: 'Macallan',
    edition: '25 ans · Sherry Oak',
    origine: 'Écosse · Speyside',
    description: 'Un single malt de 25 ans au caractère riche et boisé. Son univers aromatique évoque les fruits secs, le gingembre et le chocolat noir.',
    notes: ['Fruits secs', 'Épices', 'Chocolat noir'],
    logo: logoMacallan,
    bouteille: bouteilleMacallan,
    icone: iconeMacallan,
    fond: fondMacallan,
    fondPosition: 'center top',
    fondPositionMobile: 'center top',
    voileHaut: 0.15,
    detoure: true,
    iconeDetouree: true,
    logoClair: true,
  },
  {
    id: 2,
    nom: 'Yamazaki',
    edition: '25 ans',
    origine: 'Japon · Yamazaki',
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
  },
  {
    id: 3,
    nom: 'Dalmore',
    edition: 'King Alexander III',
    origine: 'Écosse · Highlands',
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
    logoClair: true,
  },
  {
    id: 4,
    nom: 'Bowmore',
    edition: '25 ans',
    origine: 'Écosse · Islay',
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
    logoClair: true,
  },
];