document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("div");
  btn.id = "back-to-top";
  btn.textContent = "↑";
  btn.title = "Nach oben";
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
