function loadQuotes() {
  const tbody = document.querySelector('#quotesTable tbody');
  tbody.innerHTML = '';
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith('quote_')) {
      const q = JSON.parse(localStorage.getItem(key));
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${q.id}</td><td class="status">${q.status}</td>` +
        `<td><button data-id="${q.id}" class="view-btn">View</button> ` +
        `<button data-id="${q.id}" class="approve-btn">Approve</button></td>`;
      tbody.appendChild(tr);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuotes();
  document.querySelector('#quotesTable').addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (!id) return;
    const key = 'quote_' + id;
    const obj = JSON.parse(localStorage.getItem(key));
    if (e.target.classList.contains('view-btn')) {
      const w = window.open('', '_blank');
      w.document.write(obj.html || '');
    }
    if (e.target.classList.contains('approve-btn')) {
      obj.status = 'approved';
      localStorage.setItem(key, JSON.stringify(obj));
      e.target.closest('tr').querySelector('.status').textContent = 'approved';
    }
  });
});
