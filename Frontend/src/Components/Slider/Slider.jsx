import { useSlider } from '@/Context/SliderContext';
import { whiskies } from '@/Data/whiskies';
import SlideInfo from './SlideInfo';
import SlideBottle from './SlideBottle';
import SliderThumbs from './SliderThumbs';

export default function Slider() {
  // Le contexte fournit la sélection commune avec le Header.
  const { activeSlide, setActiveSlide } = useSlider();
  const whisky = whiskies[activeSlide];

  function afficherSuivant() {
    // Après le dernier produit, le modulo revient au premier.
    setActiveSlide((index) => (index + 1) % whiskies.length);
  }

  function afficherPrecedent() {
    setActiveSlide((index) => (
      (index - 1 + whiskies.length) % whiskies.length
    ));
  }

  return (
    <section
      className="whisky-slider"
      aria-label="Collection de whiskies"
      style={{
        '--whisky-bg': whisky.fond ? `url("${whisky.fond}")` : 'none',
        '--whisky-bg-position': whisky.fondPosition,
      }}
    >
      <div className="whisky-slider__inner">
        <div className="whisky-slider__topline">
          <span>La collection</span>
          <span>
            {String(activeSlide + 1).padStart(2, '0')} / {String(whiskies.length).padStart(2, '0')}
          </span>
        </div>

        {/* On conserve ce conteneur et ses boutons au changement de sélection.
            Une clé changeante les recréerait et pourrait faire perdre le focus. */}
        <div className="whisky-slider__content">
          <SlideInfo whisky={whisky} />
          <SlideBottle whisky={whisky} onNext={afficherSuivant} />
        </div>

        <div className="whisky-slider__selection">
          <div className="whisky-slider__controls">
            <button type="button" onClick={afficherPrecedent}
              aria-label="Afficher le whisky précédent">←</button>
            <span>Choisir une maison</span>
            <button type="button" onClick={afficherSuivant}
              aria-label="Afficher le whisky suivant">→</button>
          </div>
          <SliderThumbs
            whiskies={whiskies}
            activeSlide={activeSlide}
            onSelect={setActiveSlide}
          />
        </div>

        <p className="whisky-sr-only" role="status">
          Sélection : {whisky.nom}, {whisky.edition}
        </p>
      </div>
    </section>
  );
}