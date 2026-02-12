const lightBox = document.querySelector(".lightbox");

const galleryImages = document.querySelectorAll(".gallery-item");

const lightboxImage = document.getElementById("lightbox-image");

const closeBtn = document.getElementById("close-btn");

galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    lightBox.style.display = "flex";
    lightboxImage.src = image.src.replace("-thumbnail", "");
  });
});

closeBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
});

lightBox.addEventListener("click", () => {
  lightBox.style.display = "none"
});