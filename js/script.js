document.addEventListener("DOMContentLoaded", function () {
  const games = document.querySelectorAll(".game");

  games.forEach((game) => {
    game.addEventListener("click", function () {
      const gameId = this.id;
      const detailsSectionId = gameId + "-details";
      scrollToSection(detailsSectionId);
    });
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
