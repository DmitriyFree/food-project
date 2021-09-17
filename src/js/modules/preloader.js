function preloader() {
  const loader = document.querySelector('.loader-wrapper ');
  setTimeout(() => {
    if(!loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
    }
  }, 500);

}

export default preloader;