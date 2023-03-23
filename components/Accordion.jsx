import React, { useState } from "react";

function FaqAccordion({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (activeIndex === index) {
      // Si ya está activo, se cierra
      setActiveIndex(-1);
    } else {
      // Se activa el índice de la pregunta seleccionada y se cierran todas las demás
      setActiveIndex(index);
    }
  };

  return (
    <div className="mt-8">
      {faqData.map((item, index) => (
        <div key={index}>
          <button
            className={`${activeIndex === index ? "bg-white text-black" : "rounded-lg mb-3"} w-full text-start p-4 rounded-t-lg font-semibold text-lg`}
            onClick={() => handleClick(index)}
          >
            {item.question}
          </button>
          <div
            className={`${
              activeIndex === index ? "bg-white text-black mb-3" : "hidden"
            } px-4 pb-4 rounded-b-lg text-gray-600 text-sm leading-relaxed`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;