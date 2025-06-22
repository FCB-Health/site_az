document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const container = document.querySelector('.areas-container');

  const cardWidth = document.querySelector('.area-item').offsetWidth + 20;

  let isScrolling = false;

  function disableButtons() {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }

  function enableButtons() {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  prevBtn.addEventListener('click', () => {
    if (isScrolling) return; 
    isScrolling = true; 
    disableButtons(); 

    container.scrollBy({
      left: -cardWidth,  
      behavior: 'smooth'
    });

    setTimeout(() => {
      isScrolling = false;
      enableButtons();
    }, 500); 
  });

  nextBtn.addEventListener('click', () => {
    if (isScrolling) return; 
    isScrolling = true; 
    disableButtons(); 

    container.scrollBy({
      left: cardWidth, 
      behavior: 'smooth'
    });

    setTimeout(() => {
      isScrolling = false;
      enableButtons();
    }, 500); 
  });
});
