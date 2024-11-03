const keySounds = {
    'a': 'sounds/almighty_push.mp3',
    's': 'sounds/suara_tembak.mp3',
    'd': 'sounds/omg.mp3',
    'f': 'sounds/bankai.mp3',
    'g': 'sounds/guru_guru_anime.mp3',
    'h': 'sounds/ara_ara.mp3',
    'j': 'sounds/atomic_edited.mp3',
    'k': 'sounds/extension_de_dominio_g.mp3',
    'l': 'sounds/ara_ara_sayonara.mp3',
    'q': 'sounds/beethoven_s_5th.mp3',
    'w': 'sounds/brook_laugh.mp3',
    'e': 'sounds/moonlight_sonata.mp3',
    'r': 'sounds/mozart_1.mp3',
    't': 'sounds/nada_dering.mp3',
    'y': 'sounds/naruto.mp3',
    'u': 'sounds/one_piece_good_smell.mp3',
    'i': 'sounds/one_piece_overtake.mp3',
    'o': 'sounds/simon_announcer.mp3',
    'p': 'sounds/for_shaaaame.mp3',
    'z': 'sounds/rains_of_castamere.mp3',
    'x': 'sounds/love_this_song.mp3',
    'c': 'sounds/noriaki_lero_lero_lero.mp3',
    'v': 'sounds/yt1.mp3',
    'b': 'sounds/yt2.mp3',
    'n': 'sounds/ahh_ahh.mp3',
    'm': 'sounds/yt3.mp3',
};

function playSound(key) {
    const audio = new Audio(keySounds[key]);
    if (audio) {
        audio.play();
    }

    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.add('active');

        for (let i = 0; i < 5; i++) {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            spark.style.left = `${Math.random() * 100}%`;
            spark.style.top = `${Math.random() * 100}%`;
            keyElement.appendChild(spark);


            setTimeout(() => spark.remove(), 500);
        }

        setTimeout(() => keyElement.classList.remove('active'), 200);
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key in keySounds) {
        playSound(key);
    }
});

function createRipplingMusicIcons() {
    const icons = ['♪', '♫', '♬', '♩', '♭', '♯'];
    const icon = document.createElement('div');
    icon.className = 'music-icon';
    icon.innerText = icons[Math.floor(Math.random() * icons.length)];

    const container = document.getElementById('icon-container');
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const minX = 50;
    const maxX = containerWidth - 50;
    const minY = 100;
    const maxY = containerHeight - 100;

    icon.style.left = `${Math.random() * (maxX - minX) + minX}px`;
    icon.style.top = `${Math.random() * (maxY - minY) + minY}px`;

    container.appendChild(icon);

    setTimeout(() => icon.remove(), 2000);
}

setInterval(createRipplingMusicIcons, 500);