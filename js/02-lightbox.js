import { galleryItems } from "./gallery-items.js";

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join("");
const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
