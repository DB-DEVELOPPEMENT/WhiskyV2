import Slider from '@/Components/Slider/Slider';
import useSeo from '@/Hooks/useSeo';

const Accueil = () => {
    useSeo({
        description: 'Découvrez une sélection de whiskies de luxe du Japon et d’Écosse : Togouchi 9 ans, Yamazaki 25 ans, Dalmore King Alexander III et Bowmore 25 ans.',
    });

    return (
        <Slider />
    );
};

export default Accueil;
