// Lien vers le portfolio : à remplacer par l'adresse du futur portfolio.
// En attendant, il pointe vers le profil GitHub.
const PORTFOLIO_URL = 'https://github.com/DB-DEVELOPPEMENT';

// fixe = true sur l'accueil : le footer reste collé en bas de l'écran,
// pour que le crédit soit visible même sur un petit écran sans faire défiler.
const Footer = ({ fixe = false }) => {
    const annee = new Date().getFullYear();

    return (
        <footer className={fixe ? "footer footer--fixe" : "footer"}>
            {/* Mention obligatoire en France pour un site sur l'alcool (loi Évin).
                Sur l'accueil, elle est affichée sous la bouteille du slider. */}
            {!fixe && (
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
                    DB-Développement
                </a>
            </p>
        </footer>
    );
};

// export du footer pour l'utiliser dans le layout
export default Footer;
