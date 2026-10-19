import { AUTEUR, PORTFOLIO_URL } from '@/Data/site';

// Footer des pages intérieures.
// accueil = true : sur grand écran il est masqué (la mention est sous la bouteille,
// le crédit dans la colonne de droite) ; sur mobile, où les colonnes disparaissent,
// il affiche seulement le crédit.
const Footer = ({ accueil = false }) => {
    const annee = new Date().getFullYear();

    return (
        <footer className={accueil ? "footer footer--accueil" : "footer"}>
            {/* Mention obligatoire en France pour un site sur l'alcool (loi Évin) */}
            {!accueil && (
                <p className="footer__mention">
                    L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
                </p>
            )}
            <p className="footer__credit">
                © {annee} · Conçu et développé par{' '}
                <a
                    className="footer__auteur"
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="author noopener noreferrer"
                >
                    {AUTEUR}
                </a>
            </p>
        </footer>
    );
};

// export du footer pour l'utiliser dans le layout
export default Footer;
