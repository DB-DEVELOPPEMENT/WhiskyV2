// En-tête commun aux pages intérieures : petit sur-titre doré, grand titre, introduction.
export default function PageHero({ surtitre, titre, children }) {
  return (
    <header className="page-hero">
      <p className="page-hero__surtitre">{surtitre}</p>
      <h1 className="page-hero__titre">{titre}</h1>
      <div className="page-hero__ligne" aria-hidden="true" />
      {children && <p className="page-hero__intro">{children}</p>}
    </header>
  );
}
