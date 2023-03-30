import { galleryItems } from "./gallery-items.js";
// Change code below this line

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join("");
const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", markup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const image = evt.target;
  if (!image.classList.contains("gallery__image")) {
    return;
  }
  console.log(image);

  const originalImageUrl = image.dataset.source;
  const currentImage = galleryItems.find(
    ({ original }) => original === originalImageUrl
  );

  function onEscKeyPress(evt) {
   
    const isKeyCodeEscape = evt.code === "Escape";
    if (isKeyCodeEscape) {
      instance.close();
    }
  }

  const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${currentImage.original}" alt="${currentImage.description}" width="800" height="600" />
  </div>`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();
}
