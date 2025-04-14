document.getElementById('contentForm').addEventListener('submit', function(e) {
  e.preventDefault();  // ป้องกันการรีเฟรชหน้าเพจเมื่อกด Submit

  const form = document.getElementById('contentForm');
  const data = {
    index: form.index.value,
    title: form.title.value,
    link: form.exampleLink.value,
    postDate: form.postDate.value,
    status: form.status.value
  };

  // ส่งข้อมูลไปที่ Google Apps Script Web App
  fetch('https://script.google.com/macros/s/AKfycbxtHeXPT9z2S9G7tEMTP-TlPsxUszdCUp7TWWdlF8MFUdQcKDfIw2jZCTl3WzIuuOzH/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));
});
