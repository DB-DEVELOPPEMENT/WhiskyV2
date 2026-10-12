// Jauge en 5 segments dorés (puissance, profil aromatique…).
// valeur : nombre de segments allumés, de 0 à max.
export default function Jauge({ valeur, max = 5, label }) {
  return (
    <span
      className="jauge"
      role="img"
      aria-label={`${label} : ${valeur} sur ${max}`}
    >
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={index < valeur ? 'jauge__segment jauge__segment--plein' : 'jauge__segment'}
        />
      ))}
    </span>
  );
}
