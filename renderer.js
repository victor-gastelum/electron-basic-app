const { ipcRenderer } = window.require ? window.require('electron') : window.electron;

document.getElementById('loginTab').onclick = () => {
  document.getElementById('loginForm').style.display = '';
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginTab').classList.add('active');
  document.getElementById('registerTab').classList.remove('active');
};
document.getElementById('registerTab').onclick = () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = '';
  document.getElementById('registerTab').classList.add('active');
  document.getElementById('loginTab').classList.remove('active');
};

document.getElementById('loginForm').onsubmit = async (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const res = await window.electron.invoke('login', { username, password });
  document.getElementById('loginMessage').innerText = res.message;
};

document.getElementById('registerForm').onsubmit = async (e) => {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const res = await window.electron.invoke('register', { username, password });
  document.getElementById('registerMessage').innerText = res.message;
};