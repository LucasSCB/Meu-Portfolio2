document.querySelectorAll('.card-desc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const desc = card.querySelector('.card-desc');
    desc.classList.toggle('active');
  });
});
