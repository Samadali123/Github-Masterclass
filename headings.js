const toggleButton = document.querySelector("#toggle-explanations");
const highlightButton = document.querySelector("#highlight-headings");
const explanations = document.querySelectorAll(".heading-explanation");
const headingExamples = document.querySelectorAll(".heading-example");

toggleButton.addEventListener("click", () => {
  const explanationsAreHidden = explanations[0].classList.toggle("is-hidden");

  explanations.forEach((explanation) => {
    explanation.classList.toggle("is-hidden", explanationsAreHidden);
  });

  toggleButton.textContent = explanationsAreHidden
    ? "Show explanations"
    : "Hide explanations";
});

highlightButton.addEventListener("click", () => {
  const headingsAreHighlighted = headingExamples[0].classList.toggle("is-highlighted");

  headingExamples.forEach((heading) => {
    heading.classList.toggle("is-highlighted", headingsAreHighlighted);
  });

  highlightButton.textContent = headingsAreHighlighted
    ? "Remove highlights"
    : "Highlight headings";
});