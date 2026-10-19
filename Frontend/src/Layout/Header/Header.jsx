
import { Link, NavLink } from "react-router-dom";
import { useSlider } from '@/Context/SliderContext';

import { whiskies } from '@/Data/whiskies';
const SOCIAL = ["Facebook", "Instagram", "Twitter"];


// accueil = true : phrase d'accroche ; sinon, lien de retour vers l'accueil
const Header = ({ accueil = false }) => {

    const { activeSlide } = useSlider();
    const whisky = whiskies[activeSlide];

    return (
        <header className="header">
            <section className="header__section">
               <div className="header__1">
                    {accueil ? (
                        <p className="header__accroche">
                            <span className="header__accroche-bienvenue">Bienvenue</span>
                            <span className="header__accroche-texte">Découvrez nos whiskies de luxe</span>
                        </p>
                    ) : (
                        <Link to="/" className="header__retour">
                            <span className="header__retour-fleche" aria-hidden="true">←</span>
                            Retour accueil
                        </Link>
                    )}
                    <nav className="header__menu" aria-label="Navigation principale">
                    <NavLink
                        to="/produits"
                        className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                    >
                        Nos Produits
                    </NavLink>
                    <NavLink to="/histoire">
                        {({ isActive }) => (
                            <span className={isActive ? "active" : ""}>Notre Histoire</span>
                        )}
                    </NavLink>
                    <NavLink to="/process">
                        {({ isActive }) => (
                            <span className={isActive ? "active" : ""}>Nos Procédures</span>
                        )}
                    </NavLink>
                    </nav>
                </div>
                <div className="header__2">
                    <img
                        className={whisky.logoDetoure ? "header__logo header__logo--detoure" : "header__logo"}
                        src={whisky.logo}
                        alt={`Logo ${whisky.nom}`}
                    />
                </div>
                <div className="header__3">
                   <nav className="header__nav">
                        {SOCIAL.map((social) => (
                            <a key={social} href="" target="_blank" rel="noopener noreferrer">
                                {social}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>
        </header>
    );
};

export default Header;

