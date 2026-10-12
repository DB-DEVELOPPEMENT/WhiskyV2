import { Link } from 'react-router-dom';

// Bas du slider : un lien à gauche, un lien à droite (comme "150 YEARS" et "DISTILLERY").
export default function SliderFooter({ whisky }) {
  return (
    <div className="whisky-slider__footer">
      <Link to="/histoire" className="whisky-corner">
        <span className="whisky-corner__title">Depuis {whisky.fondation}</span>
        <span className="whisky-corner__link">Notre histoire</span>
      </Link>
      <Link to="/process" className="whisky-corner whisky-corner--right">
        <span className="whisky-corner__title">La distillerie</span>
        <span className="whisky-corner__link">Visiter</span>
      </Link>
    </div>
  );
}
