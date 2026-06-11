document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Efek Fokus Input
    // =========================
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('shadow-lg');
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('shadow-lg');
        });
    });

    // =========================
    // Toggle Password
    // =========================
    const toggleBtn = document.querySelector('button[type="button"]');
    const passInput = document.getElementById('password');

    if (toggleBtn && passInput) {
        toggleBtn.addEventListener('click', () => {

            const isPassword = passInput.type === 'password';

            passInput.type = isPassword ? 'text' : 'password';

            toggleBtn.querySelector('span').textContent =
                isPassword ? 'visibility_off' : 'visibility';
        });
    }

    // =========================
    // Login
    // =========================
    const loginButtons = document.querySelectorAll('button');

    const btnSiswa = loginButtons[1];
    const btnGuru = loginButtons[2];

    function login(role) {

        const username = document
            .getElementById('username')
            ?.value.trim();

        const password = document
            .getElementById('password')
            ?.value.trim();

        if (!username || !password) {
            alert('Username dan Password harus diisi!');
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        window.location.href = 'dashboard.html';
    }

    if (btnSiswa) {
        btnSiswa.addEventListener('click', () => {
            login('siswa');
        });
    }

    if (btnGuru) {
        btnGuru.addEventListener('click', () => {
            login('guru');
        });
    }

    // Enter untuk Login
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            login('siswa');
        }
    });

});
