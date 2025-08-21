// Simulasi fetch data admin dari file lokal
const adminData = {
  username: "admin",
  password: "123456"
};

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === adminData.username && password === adminData.password) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = "index.html";
  } else {
    document.getElementById('errorMsg').textContent = "Username atau password salah!";
  }
});

// Proteksi halaman dashboard
if(window.location.pathname.endsWith('index.html')){
  if(localStorage.getItem('loggedIn') !== 'true'){
    window.location.href = 'login.html';
  }
}

// Logout
function logout(){
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}
