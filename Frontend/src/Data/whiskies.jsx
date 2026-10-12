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
    // ----- Fiche détaillée (page produit) -----
    slug: 'togouchi-9-ans',
    pays: 'Japon',
    type: 'Blended whisky japonais',
    distillerie: 'Sakurao (Chugoku Jozo)',
    age: '9 ans minimum',
    degre: 40,
    contenance: '70 cl',
    futs: 'Fûts de bourbon',
    couleur: 'Or clair',
    puissance: 2, // de 1 (léger) à 5 (intense)
    nez: 'Floral : fleur d’oranger et miel.',
    bouche: 'Fraîche et sèche : agrumes, eucalyptus, fleurs blanches.',
    finale: 'Élégante : menthe poivrée et épices boisées.',
    profil: { fume: 1, boise: 2, fruite: 3, epice: 3, douceur: 3 }, // de 0 à 5
    service: 'Nature, sur un glaçon, ou allongé en highball avec une eau gazeuse bien fraîche.',
    accords: ['Sushis et sashimis', 'Tarte aux agrumes', 'Desserts à la fleur d’oranger'],
    anecdote: 'Ses fûts mûrissent dans un ancien tunnel ferroviaire d’Akiota-Togouchi, où la température et l’humidité restent stables toute l’année.',
  },
  {
    id: 2,
    nom: 'Yamazaki',
    edition: '25 ans',
    origine: 'Japon · Yamazaki',
    fondation: 1923,
    description: 'Une expression japonaise de très longue maturation, élevée notamment en chêne japonais Mizunara. Des notes d’encens et de bois de santal, portées par le kaki et la prune ume.',
    notes: ['Encens', 'Kaki', 'Bois de santal'],
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
    // ----- Fiche détaillée (page produit) -----
    slug: 'yamazaki-25-ans',
    pays: 'Japon',
    type: 'Single malt japonais',
    distillerie: 'Yamazaki (Suntory)',
    age: '25 ans',
    degre: 43,
    contenance: '70 cl',
    futs: 'Chêne américain, chêne espagnol et chêne japonais Mizunara',
    couleur: 'Ambre',
    puissance: 4,
    nez: 'Notes fumées d’encens du chêne Mizunara, puis un bouquet de kaki mûr et de prune ume.',
    bouche: 'Bois de santal fumé, douceur du kaki, prune ume acidulée et pointe de gingembre.',
    finale: 'Profonde et longue, fumée de Mizunara et bois subtilement sucré.',
    profil: { fume: 3, boise: 5, fruite: 4, epice: 3, douceur: 3 },
    service: 'Nature, à température ambiante, éventuellement avec quelques gouttes d’eau pour ouvrir les arômes.',
    accords: ['Chocolat noir', 'Fruits secs', 'Wagashi (pâtisseries japonaises)'],
    anecdote: 'Yamazaki est la première distillerie de malt du Japon, fondée en 1923 près de Kyoto.',
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
    // ----- Fiche détaillée (page produit) -----
    slug: 'dalmore-king-alexander-iii',
    pays: 'Écosse',
    type: 'Single malt écossais',
    distillerie: 'The Dalmore',
    age: 'Sans mention d’âge',
    degre: 40,
    contenance: '70 cl',
    futs: 'Six fûts : bourbon, xérès Matusalem Oloroso, madère, marsala, porto et cabernet sauvignon',
    couleur: 'Acajou',
    puissance: 3,
    nez: 'Baies rouges et fruits de la passion.',
    bouche: 'Zeste d’agrumes, gousse de vanille, crème caramel et éclats d’amandes.',
    finale: 'Cannelle, muscade et gingembre.',
    profil: { fume: 0, boise: 3, fruite: 5, epice: 4, douceur: 4 },
    service: 'Nature ou avec une goutte d’eau, dans un verre tulipe.',
    accords: ['Chocolat noir à l’orange', 'Crème brûlée', 'Fromages à pâte dure'],
    anecdote: 'Le cerf de l’étiquette rappelle la légende de 1263 : un ancêtre du clan Mackenzie aurait sauvé le roi Alexandre III de la charge d’un cerf.',
  },
  {
    id: 4,
    nom: 'Bowmore',
    edition: '25 ans',
    origine: 'Écosse · Islay',
    fondation: 1779,
    description: 'Un single malt d’Islay élevé en fûts de bourbon et de xérès. Les fruits secs et la framboise rencontrent un caramel tendre, sous une fumée douce et maritime.',
    notes: ['Fruits secs', 'Caramel', 'Fumée douce'],
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
    // ----- Fiche détaillée (page produit) -----
    slug: 'bowmore-25-ans',
    pays: 'Écosse',
    type: 'Single malt écossais (Islay)',
    distillerie: 'Bowmore',
    age: '25 ans',
    degre: 43,
    contenance: '70 cl',
    futs: 'Chêne américain ex-bourbon et chêne européen ex-xérès Oloroso',
    couleur: 'Acajou profond',
    puissance: 4,
    nez: 'Rhubarbe, prunes séchées et raisins secs, framboise acidulée et crème vanillée.',
    bouche: 'Fruits confits et fruits à noyau, caramel tendre et noisettes.',
    finale: 'Une fumée douce et sucrée qui s’attarde longuement.',
    profil: { fume: 3, boise: 3, fruite: 4, epice: 2, douceur: 4 },
    service: 'Nature, à température ambiante, pour profiter de la fumée douce d’Islay.',
    accords: ['Fromages affinés', 'Noix et noisettes', 'Chocolat noir'],
    anecdote: 'Ses fûts reposent dans les No.1 Vaults, l’un des plus anciens chais de vieillissement d’Écosse, au bord de la mer.',
  },
];

// Trouver un whisky à partir de son adresse (ex. /produits/bowmore-25-ans)
export const trouverWhisky = (slug) => whiskies.find((whisky) => whisky.slug === slug);
