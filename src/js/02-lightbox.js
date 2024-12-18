import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.innerHTML = galleryMarkup;

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>
`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});


console.log(galleryItems);