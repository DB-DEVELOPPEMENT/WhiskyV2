import { createContext, useContext, useState } from "react";

// 1. On crée la "boîte" (vide pour l'instant)
const SliderContext = createContext();

// 2. Un composant qui remplit la boîte et l'entoure autour de ses enfants
export const SliderProvider = ({ children }) => {
    const [activeSlide, setActiveSlide] = useState(0); // index de la slide affichée

    return (
        <SliderContext.Provider value={{ activeSlide, setActiveSlide }}>
            {children}
        </SliderContext.Provider>
    );
};

// 3. Un petit raccourci pour lire la boîte facilement
export const useSlider = () => useContext(SliderContext);
