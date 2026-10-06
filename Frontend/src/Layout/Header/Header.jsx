
import { NavLink } from "react-router-dom";
import { useSlider } from '@/Context/SliderContext';

import logoClassique from '@/Assets/Images/logo-classique.png';
import logoTourbe from '@/Assets/Images/logo-tourbe.png';
import logoSherry from '@/Assets/Images/logo-sherry.png';
import logoSherryb from '@/Assets/Images/logo-sherry.png';

const logos = [logoClassique, logoTourbe, logoSherry, logoSherryb];

const SOCIAL = ["Facebook", "Instagram", "Twitter"];


const Header = () => {

    const { activeSlide } = useSlider();

    return (
        <header className="header">
            <section className="header__section">
               <div className="header__1">
                    <NavLink
                        to="/produits"
                        className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                    >
                        Nos Produits TEST
                    </NavLink>
                    <NavLink to="/histoire">
                        {({ isActive }) => (
                            <span className={isActive ? "active" : ""}>Notre Histoire</span>
                        )}
                    </NavLink>
                    <NavLink to="/process">
                        {({ isActive }) => (
                            <span className={isActive ? "active" : ""}>Notre Procédure</span>
                        )}
                    </NavLink>
                </div>
                <div className="header__2">
                    <img src={logos[activeSlide]} alt="Logo WhiskyR" />
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

