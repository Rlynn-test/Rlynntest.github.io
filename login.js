// Tentukan username dan password yang diizinkan
const validUsername = "alumni";
const validPassword = "password123";

// Ambil elemen form dan error message
const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("error-msg");

// Event listener untuk form submit
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai username dan password dari input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Cek apakah username dan password sesuai
    if (username === validUsername && password === validPassword) {
        // Redirect ke halaman alumni jika login sukses
        window.location.href = "index.html";
    } else {
        // Tampilkan pesan error jika login gagal
        errorMsg.textContent = "Username atau Password salah!";
    }
});
