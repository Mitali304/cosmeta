import React, { useState, useEffect } from "react";
import "./Tips.css"; // Import the external CSS file

const acneTriggerIngredients = ["Coconut Oil", "Shea Butter", "Lanolin", "Alcohol", "Fragrance"];

const allTips = [
  {
    id: 1,
    category: "Makeup",
    title: "Flawless Foundation Application",
    content: "Always start with a primer for smooth application and long-lasting coverage.",
    likes: 10,
  },
  {
    id: 4,
    category: "Makeup",
    title: "Perfect Winged Eyeliner",
    content: "Use tape as a guide for a sharp, even wing. A gel liner can provide better control.",
    likes: 12,
  },
  {
    id: 5,
    category: "Makeup",
    title: "Long-Lasting Lipstick",
    content: "Exfoliate your lips, apply lip balm, line your lips, and then apply matte lipstick for all-day wear.",
    likes: 9,
  },

  // Skincare Tips
  {
    id: 2,
    category: "Skincare",
    title: "Hydration is Key",
    content: "Drink at least 8 glasses of water daily and use a good moisturizer for glowing skin.",
    likes: 15,
  },
  {
    id: 6,
    category: "Skincare",
    title: "Sunscreen is a Must",
    content: "Always apply sunscreen with SPF 30 or higher before stepping out, even on cloudy days.",
    likes: 20,
  },
  {
    id: 7,
    category: "Skincare",
    title: "Nighttime Skincare Routine",
    content: "Double cleanse, apply toner, serum, and moisturizer before bed for healthy skin.",
    likes: 14,
  },

  // Haircare Tips
  {
    id: 3,
    category: "Haircare",
    title: "Heat Protection Matters",
    content: "Always apply a heat protectant before using styling tools to prevent damage.",
    likes: 8,
  },
  {
    id: 8,
    category: "Haircare",
    title: "Oil Your Scalp",
    content: "Apply coconut or argan oil once a week for deep nourishment and strong hair.",
    likes: 11,
  },
  {
    id: 9,
    category: "Haircare",
    title: "Cold Water Rinse",
    content: "Finish your hair wash with cold water to seal cuticles and boost shine.",
    likes: 10,
  },
];


const Tips = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tips, setTips] = useState(allTips);
  const [comments, setComments] = useState({});
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredientResults, setIngredientResults] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || {};
    setComments(storedComments);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setTips(category === "All" ? allTips : allTips.filter((tip) => tip.category === category));
  };

  const addComment = (id, comment) => {
    const updatedComments = { ...comments, [id]: [...(comments[id] || []), comment] };
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const deleteComment = (id, index) => {
    const updatedComments = { ...comments };
    updatedComments[id].splice(index, 1);
    if (updatedComments[id].length === 0) delete updatedComments[id];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const checkIngredients = () => {
    const userIngredients = ingredientInput.split(",").map((i) => i.trim().toLowerCase());
    const problematicIngredients = userIngredients.filter((i) => acneTriggerIngredients.map((x) => x.toLowerCase()).includes(i));

    setIngredientResults(problematicIngredients.length ? problematicIngredients : ["This product is safe for acne-prone skin."]);
  };

  return (
    <div className="tips-container">
      <h2>Beauty Tips & Tricks</h2>

      {/* Category Filter */}
      <div className="categories">
        {["All", "Makeup", "Skincare", "Haircare", "Ingredients"].map((category) => (
          <button key={category} onClick={() => handleCategoryChange(category)} className={selectedCategory === category ? "active" : ""}>
            {category}
          </button>
        ))}
      </div>

      {/* Ingredients Analysis Section */}
      {selectedCategory === "Ingredients" && (
        <div className="ingredient-checker">
          <h2>Check Product Ingredients</h2>
          <input
            type="text"
            placeholder="Enter ingredients (comma separated)..."
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
          />
          <button onClick={checkIngredients}>Check</button>
          <div className="ingredient-results">
            <h3>Analysis Result:</h3>
            <ul>
              {ingredientResults.map((result, index) => (
                <li key={index} className={acneTriggerIngredients.includes(result) ? "red" : "green"}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Display Tips */}
      {selectedCategory !== "Ingredients" && (
        <div className="tips-list">
          {tips.map((tip) => (
            <div key={tip.id} className="tip-card">
              <h2>{tip.title}</h2>
              <p>{tip.content}</p>
              <span className="category-label">{tip.category}</span>
              <div className="comments-section">
                <h4>Comments</h4>
                <ul>
                  {(comments[tip.id] || []).map((comment, index) => (
                    <li key={index}>
                      {comment}{" "}
                      <button onClick={() => deleteComment(tip.id, index)} className="delete-comment-btn">X</button>
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="Leave a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim() !== "") {
                      addComment(tip.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tips;
