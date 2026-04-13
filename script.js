const SECRET_CODE = "ARC2025";

function tryLogin() {
  const val = document.getElementById('code-input').value.trim();
  const err = document.getElementById('err-msg');
  if (val === SECRET_CODE) {
    document.getElementById('login-screen').style.display = 'none';
    const portal = document.getElementById('portal');
    portal.style.display = 'flex';
    portal.style.flexDirection = 'column';
    err.textContent = '';
  } else {
    err.textContent = 'Code incorrect — accès refusé.';
    document.getElementById('code-input').value = '';
    document.getElementById('code-input').focus();
  }
}

function logout() {
  document.getElementById('portal').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('code-input').value = '';
  document.getElementById('err-msg').textContent = '';
}

function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
