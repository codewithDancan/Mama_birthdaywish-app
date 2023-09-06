const surprise = document.getElementById('surprise');
surprise.addEventListener('click', () => {
    const birthdayWindow = window.open('', '_blank', width = 500, height = 500);
    const colors = ['#ff6f61', '#64b5f6', '#81c784', '#ffb74d', '#9575cd'];

    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        birthdayWindow.document.body.style.backgroundColor = randomColor;
    }, 1000);

    const birthdayMessage = document.createElement('h1');
    birthdayMessage.textContent = 'Happy Birthday, Mama From Your Son Dancan';
    birthdayMessage.style.textAlign = 'center';
    birthdayMessage.style.color = '#fff';
    birthdayWindow.document.body.appendChild(birthdayMessage);

    const mumImage = document.createElement('img');
    mumImage.src = 'C:/DRF/template/js/images/mum_1.jpeg';
    mumImage.style.display = 'flex';
    mumImage.style.margin = '0 auto';
    mumImage.style.maxWidth = '80%';
    birthdayWindow.document.body.appendChild(mumImage);
});