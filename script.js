
const contentDB = [

    {
        id: 101,
        type: 'tv',
        title: "O'zbekiston 24",
        isPremium: false,
        thumb: "assets/uz24.png",
        src: "https://stream8.cinerama.uz/1011/tracks-v1a1/playlist.m3u8"
    },
    {
        id: 102,
        type: 'tv',
        title: "Zo'r TV",
        isPremium: false,
        thumb: "assets/zortv.png",
        src: "https://stream8.cinerama.uz/1016/tracks-v1a1/mono.m3u8"
    },
    {
        id: 103,
        type: 'tv',
        title: "Sevimli TV",
        isPremium: false,
        thumb: "assets/sevimli.png",
        src: "https://stream8.cinerama.uz/1017/tracks-v1a1/playlist.m3u8"
    },


    {
        id: 201,
        type: 'movies',
        title: "Avatar: Suv Yo'li (TIZER)",
        isPremium: true,
        thumb: "assets/avatar.png",
        ytId: "d9MyW72ELq0"
    },
    {
        id: 202,
        type: 'movies',
        title: "Shum Bola",
        isPremium: false,
        thumb: "assets/shumbola.png",
        ytId: "afCFvAnCdmA"
    },
    {
        id: 203,
        type: 'movies',
        title: "Minecraft filmi (TIZER)",
        isPremium: true,
        thumb: "assets/minecraft.png",
        ytId: "PE2YZhcC4NY"
    },
    {
        id: 204,
        type: 'movies',
        title: "Dinner for few",
        isPremium: true,
        thumb: "assets/magnet.png",
        ytId: "HTDdIO74BuA"
    },


    {
        id: 301,
        type: 'sports',
        title: "UFC 300 (Highlights)",
        isPremium: true,
        thumb: "assets/ufc.png",
        ytId: "puOuOJ-aLz0"
    },
    {
        id: 302,
        type: 'sports',
        title: "Real Madrid vs Barcelona",
        isPremium: true,
        thumb: "assets/elclasico.png",
        ytId: "G8tCpxBvKq0"
    },
    {
        id: 401,
        type: 'tv', // Yoki 'movies'
        title: "Test: Tabiat Qo'ynida",
        isPremium: false,
        thumb: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
        id: 402,
        type: 'tv',
        title: "Fil: Orzular Olami",
        isPremium: true,
        thumb: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
        id: 403,
        type: 'tv',
        title: "Olovli Poyga",
        isPremium: false,
        thumb: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
        id: 404,
        type: 'tv',
        title: "Ekstremal Qochish",
        isPremium: true,
        thumb: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&auto=format&fit=crop&q=60",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
        id: 405,
        type: 'tv',
        title: "Google TV Maxsus",
        isPremium: false,
        thumb: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
        id: 406,
        type: 'tv',
        title: "Sintel (Afsonaviy)",
        isPremium: true,
        thumb: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&auto=format&fit=crop&q=60",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    }
];

const heroSlides = [
    {
        id: 201,
        title: "Avatar: Suv Yo'li",
        desc: "Pandoraning sirli suv osti dunyosiga sayohat qiling.",
        tag: "TRENDING #1",
        bg: "assets/avatar.png",
        ytId: "d9MyW72ELq0",
        isPremium: true
    },
    {
        id: 203,
        title: "Minecraft Filmi",
        desc: "Dunyodagi eng mashhur o'yin endi katta ekranlarda.",
        tag: "TEZ KUNDA",
        bg: "assets/minecraft.png",
        ytId: "PE2YZhcC4NY",
        isPremium: true
    },
    {
        id: 302,
        title: "Real Madrid vs Barcelona",
        desc: "Dunyoning eng katta futbol to'qnashuvi.",
        tag: "JONLI EFIR",
        bg: "assets/elclasico.png",
        ytId: "G8tCpxBvKq0",
        isPremium: true
    },
    {
        id: 301,
        title: "UFC 300",
        desc: "Yilning eng katta jangi.",
        tag: "JONLI SPORT",
        bg: "assets/ufc.png",
        ytId: "puOuOJ-aLz0",
        isPremium: true
    }
];

let user = {
    name: localStorage.getItem('amal_name') || "",
    password: localStorage.getItem('amal_pass') || "",
    isPremium: localStorage.getItem('amal_premium') === 'true',
    favorites: JSON.parse(localStorage.getItem('amal_favs')) || []
};

let currentSlide = 0;
let sliderInterval;
let currentItem = null;

document.addEventListener('DOMContentLoaded', () => {
    if (user.name) {
        initApp();
    } else {
        document.getElementById('auth-screen').style.display = 'flex';
    }
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('username-input').value;
    const pass = document.getElementById('password-input').value;

    if (name.length < 3) return alert("Ismingiz kamida 3 ta harfdan iborat bo'lishi kerak!");
    if (pass.length < 4) return alert("Parol kamida 4 ta belgidan iborat bo'lishi kerak!");

    // Agar oldin login qilingan bo'lsa va ism mos kelsa, parolni tekshirish
    const storedName = localStorage.getItem('amal_name');
    const storedPass = localStorage.getItem('amal_pass');

    if (storedName && storedName === name) {
        if (storedPass !== pass) {
            return alert("Xato parol! Iltimos qaytadan urinib ko'ring.");
        }
    }

    user.name = name;
    user.password = pass;
    localStorage.setItem('amal_name', name);
    localStorage.setItem('amal_pass', pass);
    initApp();
});

function initApp() {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-container').style.display = 'flex';

    document.getElementById('display-name').textContent = user.name;
    document.getElementById('user-avatar').textContent = user.name.charAt(0).toUpperCase();
    updateUserStatus();
    updateFavBadge();

    navigate('home');
}

function logout() {
    localStorage.clear();
    location.reload();
}

function updateUserStatus() {
    const badge = document.getElementById('status-badge');
    const premiumBox = document.querySelector('.premium-box');

    if (user.isPremium) {
        badge.textContent = "PREMIUM ACCOUNT";
        badge.className = "status-premium";
        if (premiumBox) premiumBox.style.display = 'none';
    } else {
        badge.textContent = "Free Account";
        badge.className = "status-free";
        if (premiumBox) premiumBox.style.display = 'flex';
    }
}

function openPayment() {
    document.getElementById('payment-modal').style.display = 'flex';
}

function closePayment() {
    document.getElementById('payment-modal').style.display = 'none';
}

function updateFavBadge() {
    document.getElementById('fav-badge').textContent = user.favorites.length;
}


function navigate(tab) {
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));

    const container = document.getElementById('content-display');
    container.innerHTML = '';

    if (tab === 'home') {
        renderHero();
        renderSection("Ommabop Telekanallar", contentDB.filter(i => i.type === 'tv').slice(0, 4));
        renderSection("Yangi Kinolar", contentDB.filter(i => i.type === 'movies'));
        renderSection("Sport", contentDB.filter(i => i.type === 'sports'));
    } else if (tab === 'favorites') {

        if (sliderInterval) clearInterval(sliderInterval);

        const favItems = contentDB.filter(i => user.favorites.includes(i.id));
        renderSection("Sizning Sevimlilaringiz", favItems, true);
    } else {
        if (sliderInterval) clearInterval(sliderInterval);

        const items = contentDB.filter(i => i.type === tab);
        let title = tab === 'tv' ? "Barcha Kanallar" : tab === 'movies' ? "Barcha Kinolar" : "Sport Videolari";
        renderSection(title, items);
    }
}


function renderHero() {
    const container = document.getElementById('content-display');

    let hero = document.querySelector('.hero-banner');
    if (!hero) {
        hero = document.createElement('div');
        hero.className = 'hero-banner';
        container.appendChild(hero);
    }

    updateHeroContent(hero);
    startSlider(hero);
}

function updateHeroContent(heroElement) {
    const slide = heroSlides[currentSlide];
    heroElement.style.backgroundImage = `url('${slide.bg}')`;

    heroElement.innerHTML = `
        <div class="hero-content">
            <span class="hero-tag" style="background: ${slide.tag === 'JONLI EFIR' ? '#dc2626' : '#ef4444'}">${slide.tag}</span>
            <h1>${slide.title}</h1>
            <p style="color: #ccc; margin-bottom: 20px; max-width: 600px;">${slide.desc}</p>
            <button class="btn-primary" onclick="openPlayer({id:${slide.id}, title:'${slide.title}', isPremium:${slide.isPremium}, ytId:'${slide.ytId}'})">
                <i class="fas fa-play"></i> Hozir Ko'rish
            </button>
        </div>
    `;
}

function startSlider(heroElement) {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        currentSlide++;
        if (currentSlide >= heroSlides.length) currentSlide = 0;
        updateHeroContent(heroElement);
    }, 5000);
}


function renderSection(title, items, isEmptyMessage = false) {
    const container = document.getElementById('content-display');

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<h3 class="section-heading"><i class="fas fa-grip-lines-vertical"></i> ${title}</h3>`;

    if (items.length === 0 && isEmptyMessage) {
        wrapper.innerHTML += `<p style="color:gray; padding:20px;">Hozircha hech narsa yo'q.</p>`;
    } else {
        const grid = document.createElement('div');
        grid.className = 'grid-view';

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            const isFav = user.favorites.includes(item.id);

            card.innerHTML = `
                ${item.isPremium ? '<div class="premium-badge">PRO</div>' : ''}
                <div class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(event, ${item.id})">
                    <i class="fas fa-heart"></i>
                </div>
                <img src="${item.thumb}" class="card-thumb" onerror="this.src='https://via.placeholder.com/300x200?text=Rasm+Topilmadi'">
                <div class="card-info">
                    <h4>${item.title}</h4>
                    <span>${item.type.toUpperCase()}</span>
                </div>
            `;

            card.onclick = (e) => {
                if (!e.target.closest('.fav-btn')) openPlayer(item);
            };

            grid.appendChild(card);
        });
        wrapper.appendChild(grid);
    }

    container.appendChild(wrapper);
}



function toggleFav(e, id) {
    e.stopPropagation();
    const index = user.favorites.indexOf(id);
    if (index === -1) {
        user.favorites.push(id);
    } else {
        user.favorites.splice(index, 1);
    }
    localStorage.setItem('amal_favs', JSON.stringify(user.favorites));
    updateFavBadge();

    const btn = e.currentTarget;
    btn.classList.toggle('active');
}
function openPlayer(item) {
    currentItem = item;
    const modal = document.getElementById('player-modal');
    const paywall = document.getElementById('paywall');
    const videoFrame = document.querySelector('.video-frame');

    document.getElementById('video-title').textContent = item.title;
    document.getElementById('video-cat').textContent = item.isPremium ? "Premium Content" : "Free Content";

    // Pleyerni tozalash (faqat paywallni qoldirish)
    const children = Array.from(videoFrame.children);
    children.forEach(child => {
        if (child.id !== 'paywall') {
            videoFrame.removeChild(child);
        }
    });

    modal.style.display = 'flex';

    if (item.isPremium && !user.isPremium) {
        paywall.style.display = 'flex';
        return;
    } else {
        paywall.style.display = 'none';
    }

    if (item.ytId) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${item.ytId}?autoplay=1&rel=0&modestbranding=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        videoFrame.prepend(iframe);

    } else if (item.src) {
        const videoTag = document.createElement('video');
        videoTag.controls = true;
        videoTag.autoplay = true;
        videoTag.style.position = 'absolute';
        videoTag.style.top = '0';
        videoTag.style.left = '0';
        videoTag.style.width = '100%';
        videoTag.style.height = '100%';
        videoTag.style.backgroundColor = 'black';

        if (item.src.endsWith('.m3u8')) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(item.src);
                hls.attachMedia(videoTag);
                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    videoTag.play();
                });
            } else if (videoTag.canPlayType('application/vnd.apple.mpegurl')) {
                videoTag.src = item.src;
            }
        } else {
            videoTag.src = item.src;
        }

        videoFrame.prepend(videoTag);
    }
}

function closePlayer() {
    const modal = document.getElementById('player-modal');
    const videoFrame = document.querySelector('.video-frame');


    modal.style.display = 'none';


    const paywall = document.getElementById('paywall');


    videoFrame.innerHTML = '';

    videoFrame.appendChild(paywall);

    paywall.style.display = 'none';
}

document.getElementById('card-input').addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    let formatted = val.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = formatted;
    document.querySelector('.card-number').textContent = formatted || '8600 •••• •••• ••••';
});

document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('pay-btn');
    btn.textContent = "Amaliyot bajarilmoqda...";

    setTimeout(() => {
        user.isPremium = true;
        localStorage.setItem('amal_premium', 'true');
        updateUserStatus();
        closePayment();

        if (document.getElementById('player-modal').style.display === 'flex') {
            document.getElementById('paywall').style.display = 'none';
            if (currentItem) openPlayer(currentItem); // Reload player with the current item
            alert("To'lov muvaffaqiyatli! Video ochildi.");
        } else {
            alert("Tabriklaymiz! Siz Premium a'zosiz.");
        }
        btn.textContent = "To'lash (20,000 UZS)";
    }, 2000);
});

document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        if (title.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});