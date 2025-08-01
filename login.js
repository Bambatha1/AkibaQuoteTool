window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('loggedIn')) {
    window.location.href = 'Index.html';
    return;
  }

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // A real login would verify credentials server-side.
    // This demo simply stores a flag in localStorage.
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    if (!email || !password) return;
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'Index.html';
  });
});
