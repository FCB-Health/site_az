document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const container = document.querySelector('.areas-container');
  const hamburger = document.getElementById('hamburger');
  const accordionHeaders = document.querySelectorAll('.footer-col h3.accordion-toggle');


  const cardWidth = document.querySelector('.area-item')?.offsetWidth + 20 || 0;
  let isScrolling = false;

  function toggleButtons(disabled) {
    prevBtn.disabled = disabled;
    nextBtn.disabled = disabled;
  }

  prevBtn.addEventListener('click', () => {
    if (isScrolling) return;
    isScrolling = true;
    toggleButtons(true);

    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });

    setTimeout(() => {
      isScrolling = false;
      toggleButtons(false);
    }, 500);
  });

  nextBtn.addEventListener('click', () => {
    if (isScrolling) return;
    isScrolling = true;
    toggleButtons(true);

    container.scrollBy({ left: cardWidth, behavior: 'smooth' });

    setTimeout(() => {
      isScrolling = false;
      toggleButtons(false);
    }, 500);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  });

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('active');
    });
  });
});
