// ===== FITUR TAMPIL / SEMBUNYIKAN PASSWORD SIPENA =====

function initPasswordEyes() {
  const root = document.getElementById('app');
  if (!root) return;

  root.querySelectorAll('input[type="password"]').forEach((input) => {
    if (input.parentElement.classList.contains('password-field')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'password-field';

    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'password-toggle';
    button.setAttribute('aria-label', 'Tampilkan password');
    button.setAttribute('aria-pressed', 'false');

    button.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    `;

    button.addEventListener('click', () => {
      const visible = input.type === 'text';

      input.type = visible ? 'password' : 'text';

      button.setAttribute(
        'aria-label',
        visible ? 'Tampilkan password' : 'Sembunyikan password'
      );

      button.setAttribute('aria-pressed', String(!visible));
    });

    wrapper.appendChild(button);
  });
}

// Jalankan ketika halaman berubah
const passwordObserver = new MutationObserver(() => {
  initPasswordEyes();
});

passwordObserver.observe(document.getElementById('app'), {
  childList: true,
  subtree: true
});

initPasswordEyes();