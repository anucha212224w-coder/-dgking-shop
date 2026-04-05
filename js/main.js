// Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsWrap = document.getElementById('slideDots');

if (slides.length > 0 && dotsWrap) {
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goSlide(i);
    dotsWrap.appendChild(dot);
  });

  function goSlide(n) {
    slideIndex = (n + slides.length) % slides.length;
    document.getElementById('slider').style.transform = `translateX(-${slideIndex * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
  }

  function slideMove(dir) { goSlide(slideIndex + dir); }
  window.slideMove = slideMove;

  setInterval(() => slideMove(1), 4000);
}


function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

// Show alert message
function showAlert(id, message, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${type}`;
  el.textContent = message;
  el.style.display = 'block';
}

// Login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password)
      return showAlert('formAlert', 'กรุณากรอกข้อมูลให้ครบถ้วน', 'error');

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (!res.ok) return showAlert('formAlert', data.message, 'error');

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      showAlert('formAlert', 'เข้าสู่ระบบสำเร็จ กำลังเปลี่ยนหน้า...', 'success');
      setTimeout(() => window.location.href = 'index.html', 1200);
    } catch {
      showAlert('formAlert', 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้', 'error');
    }
  });
}

// Register form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm  = document.getElementById('confirmPassword').value;

    if (!username || !email || !password || !confirm)
      return showAlert('formAlert', 'กรุณากรอกข้อมูลให้ครบถ้วน', 'error');

    if (password.length < 6)
      return showAlert('formAlert', 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร', 'error');

    if (password !== confirm)
      return showAlert('formAlert', 'รหัสผ่านไม่ตรงกัน', 'error');

    try {
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const data = await res.json();

      if (!res.ok) return showAlert('formAlert', data.message, 'error');

      showAlert('formAlert', 'สมัครสมาชิกสำเร็จ กำลังไปหน้าเข้าสู่ระบบ...', 'success');
      setTimeout(() => window.location.href = 'login.html', 1500);
    } catch {
      showAlert('formAlert', 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้', 'error');
    }
  });
}
