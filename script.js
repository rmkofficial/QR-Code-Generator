const wrapper = document.querySelector('.wrapper');
const generateButton = wrapper.querySelector('.form button');
const qrInput = wrapper.querySelector('.form input');
const qrImage = wrapper.querySelector('.qr-code img');

generateButton.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) {
        alert('Input a text');
        return;
    }
    generateButton.innerHTML = 'Generating...';
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImage.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateButton.innerHTML = 'Generate QR Code';
    });
});

qrInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        generateButton.click();
    }
});

