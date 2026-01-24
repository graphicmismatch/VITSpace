setInterval(() => {
        const lat = (Math.random() * 180 - 90).toFixed(4);
        const lon = (Math.random() * 360 - 180).toFixed(4);
        document.getElementById('coords').innerText = `${lat}, ${lon}`;
    }, 2000);