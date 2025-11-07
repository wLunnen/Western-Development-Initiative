// ----- Flip & Expand Card Logic -----
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // If the card is already expanded, flip it back and collapse
    if (card.classList.contains("flipped")) {
      card.classList.remove("flipped", "expanded");
      document.body.classList.remove("no-scroll");
      return;
    }

    // Otherwise, flip and expand this card
    cards.forEach((c) => c.classList.remove("flipped", "expanded")); // reset others
    card.classList.add("flipped", "expanded");
    document.body.classList.add("no-scroll");
  });
});

// Optional: prevent background scrolling when a card is expanded
const style = document.createElement("style");
style.innerHTML = `
  body.no-scroll {
    overflow: hidden;
  }
`;
document.head.appendChild(style);
