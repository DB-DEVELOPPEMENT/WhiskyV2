// Suite d'images en escalier, reliées par des flèches dorées,
// placée en face du titre des pages (Notre histoire, Nos procédures).
// etapes : [{ image, legende, alt }]
const CHIFFRES = ['I', 'II', 'III'];

export default function Triptyque({ etapes, label }) {
  return (
    <figure className="triptyque" aria-label={label}>
      <ol className="triptyque__images">
        {etapes.map((etape, index) => (
          <li key={etape.legende} className="triptyque__etape">
            <img
              src={etape.image}
              alt={etape.alt}
              width="600"
              height="800"
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
            <span className="triptyque__legende">
              <span className="triptyque__numero" aria-hidden="true">{CHIFFRES[index]}</span>
              {etape.legende}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
