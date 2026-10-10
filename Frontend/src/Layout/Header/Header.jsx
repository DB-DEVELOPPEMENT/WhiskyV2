
import { NavLink } from "react-router-dom";
import { useSlider } from '@/Context/SliderContext';

import logo_Macallan from '@/Assets/Images/logo_Macallan.jpg';
import logo_Yamazki from '@/Assets/Images/logo_Yamazaki.jpg';
import logo_Dalmore from '@/Assets/Images/logo_Dalmore.jpg';
import logo_Bowmore from '@/Assets/Images/logo_Bowmore.jpg';

const logos = [logo_Macallan, logo_Yamazki, logo_Dalmore, logo_Bowmore];

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

