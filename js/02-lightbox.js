import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = makeGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", selectImg);

function makeGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
        })
        .join("");
}

function selectImg(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    let lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });
}
