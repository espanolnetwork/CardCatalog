document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
      const link = item.getAttribute('data-link');
      window.location.href = link;
    });
  
    item.addEventListener('mouseover', () => {
      const overlay = item.querySelector('.overlay');
      overlay.textContent = item.getAttribute('data-text');
    });
  });