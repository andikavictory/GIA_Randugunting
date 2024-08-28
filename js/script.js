document.querySelectorAll('.img-container').forEach(container => {
    const img = container.querySelector('img');

    container.addEventListener('mouseover',(e)=>{
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left; //koordinat x dalam container
        const y = e.clientY - rect.top; //koordinat y dalam container

            // hitung posisi gambar berdasarkan posisi mouse
        const moveX = (x/rect.width)*100;
        const moveY = (y/rect.height)*100;

        img.style.transformOrigin = `${moveX}% ${moveY}%`;
        container.classList.add('zoom');
        })

        container.addEventListener('mouseleave', () => {
            img.style.transformOrigin = 'center center';
            container.classList.remove('zoom');
        });
})
