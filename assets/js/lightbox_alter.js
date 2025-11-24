document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = '<img src="" alt="">';
  document.body.appendChild(overlay);

  const overlayImage = overlay.querySelector("img");

  // Bild anklicken → Lightbox öffnen
  document.querySelectorAll(".image-lightbox img").forEach(img => {
    img.addEventListener("click", () => {
      // NEU: zuerst data-lightbox-src, sonst fallback auf normales Bild
      overlayImage.src = img.dataset.lightboxSrc || img.src;
      overlay.classList.add("active");
    });
  });

  // Overlay schließen (Klick oder ESC)
  overlay.addEventListener("click", () => overlay.classList.remove("active"));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") overlay.classList.remove("active");
  });
});
