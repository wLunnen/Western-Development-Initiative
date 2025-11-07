// ----- Card Flip and Expand Logic -----
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.stopPropagation();

    // Toggle flip state
    card.classList.toggle("flipped");
    card.classList.toggle("expanded");

    // Optional: Dim background cards when one expands
    const isExpanded = card.classList.contains("expanded");
    document.body.classList.toggle("no-scroll", isExpanded);
  });
});

// Prevent scrolling when card is expanded
const style = document.createElement("style");
style.innerHTML = `
  body.no-scroll {
    overflow: hidden;
  }
`;
document.head.appendChild(style);
