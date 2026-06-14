function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startAnimation() {

  const cards = [
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3"),
    document.getElementById("c4")
  ];

  // reset
  cards.forEach(card => card.classList.remove("active"));

  // sequential animation
  for (let card of cards) {
    card.classList.add("active");
    await delay(700);
  }

}