const modal = document.getElementById('contactoModal');
const openBtn = document.getElementById('contactoBtn');
const closeBtn = document.getElementById('closeModal');
const copyBtn = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');
const email = 'pablogizq20@gmail.com';

function toggleModal(show) {
  if (show) {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  } else {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
}

openBtn?.addEventListener('click', () => toggleModal(true));
closeBtn?.addEventListener('click', () => toggleModal(false));

modal?.addEventListener('click', (e) => {
  if (e.target === modal) toggleModal(false);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleModal(false);
});

copyBtn?.addEventListener('click', async () => {
  if (!copyStatus) return;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(email);
    } else {
      const temp = document.createElement('textarea');
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
    }

    copyStatus.textContent = 'Correo copiado en el portapapeles';
  } catch (err) {
    copyStatus.textContent = 'No se pudo copiar. Inténtalo de nuevo.';
  }

  setTimeout(() => {
    copyStatus.textContent = '';
  }, 2200);
});
