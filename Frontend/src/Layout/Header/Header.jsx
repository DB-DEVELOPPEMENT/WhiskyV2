
import { NavLink } from "react-router-dom";
import { useSlider } from '@/Context/SliderContext';

import logo_Macallan from '@/Assets/Images/logo_Macallan.jpg';
import logo_Yamazki from '@/Assets/Images/logo_Yamazaki.jpg';
import logo_Dalmore from '@/Assets/Images/logo_Dalmore.jpg';
import logo_Bowmore from '@/Assets/Images/logo_Bowmore.jpg';

const whiskies = [
    { logo: logo_Macallan, nom: "Macallan" },
    { logo: logo_Yamazki, nom: "Yamazaki" },
    { logo: logo_Dalmore, nom: "Dalmore" },
    { logo: logo_Bowmore, nom: "Bowmore" },
];

const SOCIAL = ["Facebook", "Instagram", "Twitter"];


const Header = () => {

    const { activeSlide } = useSlider();
    const whisky = whiskies[activeSlide];

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
                    <img src={whisky.logo} alt={whisky.nom} />
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

