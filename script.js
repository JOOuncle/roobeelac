const banners = [...document.querySelectorAll('.floating-banner')];

const openAfter = 220;
const previewMode = new URLSearchParams(window.location.search).has('preview');

function syncFloatingBanners() {
  const shouldOpen = previewMode || window.scrollY > openAfter;

  banners.forEach((banner) => {
    banner.classList.toggle('is-expanded', shouldOpen);
  });
}

syncFloatingBanners();

window.addEventListener('scroll', syncFloatingBanners, {
  passive: true
});
