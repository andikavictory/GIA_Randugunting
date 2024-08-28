document.querySelectorAll('.img-container').forEach(container => {
    const img = container.querySelector('img');

    // Tambahkan event listener 'mousemove' untuk memperbarui posisi zoom berdasarkan posisi kursor
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left; // Koordinat x dalam container
        const y = e.clientY - rect.top; // Koordinat y dalam container

        // Hitung posisi gambar berdasarkan posisi mouse
        const moveX = (x / rect.width) * 100;
        const moveY = (y / rect.height) * 100;

        // Update posisi zoom
        img.style.transformOrigin = `${moveX}% ${moveY}%`;
    });

    // Aktifkan zoom saat mouse masuk ke container
    container.addEventListener('mouseover', () => {
        container.classList.add('zoom');
        console.log("zoom ditambahkan");
    });

    // Matikan zoom saat mouse keluar dari container
    container.addEventListener('mouseleave', () => {
        img.style.transformOrigin = 'center center';
        container.classList.remove('zoom');
    });
});
