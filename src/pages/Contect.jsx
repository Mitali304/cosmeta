import React, { useState } from "react";
import modelFaceBefore from "/images/before.jpeg"; // Initial model face image
import modelFaceAfter from "/images/after.jpeg"; // Placeholder for after-effect image

const skincareRoutines = {
  oily: [
    { id: 1, name: "Cleanser", description: "Removes excess oil and cleans the skin.", effect: "cleansed",images: ["/images/bp1.jpg"] },
    { id: 2, name: "Exfoliator", description: "Exfoliates dead skin cells to prevent clogging pores.", effect: "exfoliated" },
    { id: 3, name: "Moisturizer", description: "Lightweight hydration to avoid excess oil.", effect: "moisturized" },
  ],
  dry: [
    { id: 1, name: "Hydrating Cleanser", description: "Cleans without stripping moisture.", effect: "cleansed" },
    { id: 2, name: "Exfoliator", description: "Gentle exfoliation to avoid dryness.", effect: "exfoliated" },
    { id: 3, name: "Heavy Moisturizer", description: "Deep hydration for dry skin.", effect: "moisturized" },
  ],
  combination: [
    { id: 1, name: "Gentle Cleanser", description: "Cleanses while balancing oil.", effect: "cleansed" },
    { id: 2, name: "Exfoliator", description: "Exfoliates without over-drying.", effect: "exfoliated" },
    { id: 3, name: "Light Moisturizer", description: "Balances hydration for combination skin.", effect: "moisturized" },
  ],
};

const SkincareGame = () => {
  const [selectedSkinType, setSelectedSkinType] = useState(null);
  const [appliedSteps, setAppliedSteps] = useState([]);

  const handleSkinTypeSelect = (skinType) => {
    setSelectedSkinType(skinType);
    setAppliedSteps([]); // Reset applied steps when skin type is changed
  };

  const applyStep = (step) => {
    if (!appliedSteps.includes(step.effect)) {
      setAppliedSteps([...appliedSteps, step.effect]);
    }
  };

  const isRoutineComplete = appliedSteps.length === (selectedSkinType ? skincareRoutines[selectedSkinType].length : 0);

  return (
    <div className="flex flex-col items-center p-6 bg-blue-100 min-h-screen relative">
      <h1 className="text-2xl font-bold mb-4">Skincare Routine Game</h1>
      <p className="mb-4 text-gray-600">Select your skin type and follow the skincare routine!</p>

      {/* Skin Type Selection */}
      <div className="mb-4">
        <button
          onClick={() => handleSkinTypeSelect("oily")}
          className="p-3 rounded-lg bg-green-500 text-white hover:bg-green-600 mr-2"
        >
          Oily Skin
        </button>
        <button
          onClick={() => handleSkinTypeSelect("dry")}
          className="p-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 mr-2"
        >
          Dry Skin
        </button>
        <button
          onClick={() => handleSkinTypeSelect("combination")}
          className="p-3 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
        >
          Combination Skin
        </button>
      </div>

      {/* Model Face Image */}
      <div className="relative w-60 h-80 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-center mb-4 overflow-hidden">
        <img src={isRoutineComplete ? modelFaceAfter : modelFaceBefore} alt="Model Face" className="w-full h-full object-cover transition-all duration-500" />
      </div>

      {/* Display Skincare Routine Based on Selected Skin Type */}
      {selectedSkinType ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">{selectedSkinType.charAt(0).toUpperCase() + selectedSkinType.slice(1)} Skin Routine</h2>
          <div className="grid grid-cols-1 gap-4">
            {skincareRoutines[selectedSkinType].map((step) => (
              <button
                key={step.id}
                onClick={() => applyStep(step)}
                className={`p-3 rounded-lg font-bold transition-all duration-300 ${appliedSteps.includes(step.effect) ? "bg-gray-400 text-white cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                disabled={appliedSteps.includes(step.effect)}
              >
                {step.name} - {step.description}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Please select your skin type to start the routine!</p>
      )}
    </div>
  );
};

export default SkincareGame;
