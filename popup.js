document.addEventListener('DOMContentLoaded', function() {
    const poemElement = document.getElementById('randomPoem');

  
    const quotes = [
        "\"موفقیت نتیجه آماده‌سازی، سخت‌کوشی و یادگیری از شکست‌هاست. – 🌿 کالیبان\"",
        "\"شما می‌توانید هر چیزی که به آن باور دارید را به دست آورید. – 🌿 ناپلئون هیل\"",
        "\"تنها راه انجام کارهای بزرگ، عشق به آن کار است. – 🚀 استیو جابز\"",
        "\"خود را با افرادی احاطه کنید که شما را بالا می‌برند. – 🌟 اوپرا وینفری\"",
        "\"هر روز یک شانس جدید برای شروع دوباره است. – 🌼 ناشناس\"",
        "\"بزرگ‌ترین ریسک، هیچ ریسکی نکردن است. – 🚀 مارک زاکربرگ\"",
        "\"موفقیت به معنای عدم شکست نیست، بلکه به معنای ادامه دادن است. – 💪 وینستون چرچیل\"",
        "\"مهم نیست چقدر آهسته حرکت می‌کنید، مهم این است که متوقف نشوید. – 🌟 کنفوسیوس\"",
        "\"تغییر را بپذیرید، اما نه برای تغییر، بلکه برای بهبود. – 🌼 ناشناس\"",
        "\"هر صبح یک هدیه است. – 🌞 ناشناس\"",
        "\"شکست فقط فرصتی برای شروع دوباره است. – 🚀 هنری فورد\"",
        "\"به جای اینکه به مشکلات فکر کنید، به راه‌حل‌ها فکر کنید. – 🌿 ناشناس\"",
        "\"اگر می‌خواهید به اهدافتان برسید، باید از منطقه راحتی خود خارج شوید. – 🌟 ناشناس\"",
        "\"هر روز با یک هدف جدید شروع کنید. – 🌼 ناشناس\"",
        "\"برای رسیدن به موفقیت، باید سخت کار کنید. – 💪 ناشناس\"",
        "\"شما قدرت تغییر دنیا را دارید. – 🌍 ناشناس\"",
        "\"هر ناکامی یک درس است. – 🚀 ناشناس\"",
        "\"موفقیت یک سفر است، نه یک مقصد. – 🌿 آرنولد شوارتزنگر\"",
        "\"در هر چالش، فرصتی نهفته است. – 🌞 ناشناس\"",
        "\"شکست، بخشی از روند موفقیت است. – 🌟 ناشناس\"",
        "\"هر قدم کوچک به سمت هدف، مهم است. – 🏃‍♂️ ناشناس\"",
        "\"هرگز تسلیم نشوید. – 💪 ناشناس\"",
        "\"شما می‌توانید بر هر مانعی غلبه کنید. – 🌟 ناشناس\"",
        "\"شکست‌ها، پل‌های موفقیت هستند. – 🚀 ناشناس\"",
        "\"زندگی شما به انتخاب‌هایتان بستگی دارد. – 🌿 ناشناس\"",
        "\"هیچ گاه برای رویاهایتان دیر نیست. – 🌼 ناشناس\"",
        "\"آنکه خود را شناخت، خدا را شناخته است. – 🌿 نیچه\"",
        "\"جرأت کن بدان که باید بدانید. – 🌟 کانت\"",
        "\"زندگی سراسر مبارزه است. – 💪 شوپنهاور\"",
        "\"به یاد داشته باش که زندگی کوتاه است و از هر لحظه‌اش لذت ببر. – 🌼 نیچه\"",
        "\"چنان باش که بتوانی به هر که رسیدی بگویی که دوستش داری. – 💖 کانت\"",
        "\"آنجا که کلمات شکست می‌خورند، موسیقی آغاز می‌شود. – 🎶 شوپنهاور\"",
        "\"به یاد داشته باش که هیچ چیز پایدار نیست. – 🌿 نیچه\"",
        "\"هر کسی که خود را نشناسد، نمی‌تواند دیگران را بشناسد. – 🌟 کانت\"",
        "\"زندگی در جریان است و هیچ‌گاه متوقف نمی‌شود. – 🌞 شوپنهاور\"",
        "\"برون از تو نیست آنچه در عالم است. – 🌿 حافظ\"",
        "\"هر که در این بزم مقرب‌تر است، جام بلا بیشترش می‌دهند. – 🌹 حافظ\"",
        "\"بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند. – 🌍 سعدی\"",
        "\"به یاد داشته باش که عشق، بزرگ‌ترین هدیهٔ زندگی است. – 💖 مولانا\"",
        "\"گفتی ز ناز بیش مرنجان مرا، برو. – 🌹 حافظ\"",
        "\"ای دوست بیا تا غم فردا نخوریم. – 🌼 مولانا\"",
        "\"دلا معاش چنان کن که گر بلغزد پای. – 🌿 سعدی\"",
        "\"He who has a why to live can bear almost any how. – 🌿 Friedrich Nietzsche\"",
        "\"Act only according to that maxim whereby you can, at the same time, will that it should become a universal law. – 🌟 Immanuel Kant\"",
        "\"Effort only fully releases its reward after a person refuses to quit. – 💪 Napoleon Hill\"",
        "\"Failure is simply the opportunity to begin again, this time more intelligently. – 🚀 Henry Ford\"",
        "\"Lose yourself in the music, the moment, you own it. – 🎶 Eminem\"",
        "\"To be, or not to be, that is the question. – 🎭 William Shakespeare\"",
        "\"Do not go gentle into that good night. – 🌌 Dylan Thomas\"",
        "\"Hope is the thing with feathers. – 🌼 Emily Dickinson\"",
        "\"The only journey is the one within. – 🌟 Rainer Maria Rilke\"",
        "\"And miles to go before I sleep. – 🌌 Robert Frost\"",
        "\"I am the master of my fate, I am the captain of my soul. – 🚢 William Ernest Henley\"",
        "\"با مردم آن گونه معاشرت كنيد، كه اگر مْرديد بر شما اشك ريزند، و اگر زنده مانديد، با اشتياق سوى شما آيند. – 💐 امام علی علیه السلام\"",
        "\"ناتوان ترين مردم كسى است كه در دوست يابى ناتوان است، و از او ناتوان تر آن كه دوستان خود را از دست بدهد. – 💐 امام علی علیه السلام\"",
        "\"اگر بر دشمنت دست يافتى، بخشيدن او را شكرانه پيروزى قرار ده. – 💐 امام علی علیه السلام\"",
        "\"از لغزش جوانمردان در گذريد، زيرا جوانمردى نمى لغزد جز آن كه دست خدا او را بلند مرتبه مى سازد. – 💐 امام علی علیه السلام\"",
        "\"چون نشانه هاى نعمت پروردگار آشكار شد، با ناسپاسى نعمت ها را از خود دور نسازيد. – 💐 امام علی علیه السلام\"",
        "\"همای اوج سعادت به دام ما افتد اگر تو را گذری بر مقام ما افتد – 🌻 حافظ\"",
        "\"امروز که در دستِ توام مرحمتی کن، فردا که شَوَم خاک چه سود اشکِ ندامت – 🌻 حافظ\"",
        "\"The woods are lovely, dark and deep. – 🌌 Robert Frost\"",
        "\"کسی که پیروز می‌شود، هرگز سوال نمی‌کند که آیا حقیقت دارد یا خیر.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"در جنگ، پیروزی مهم‌ترین چیز است، نه حقیقت.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"کسی که می‌خواهد به قلب‌ها نفوذ کند، باید به غریزه‌هایشان توجه کند.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"توده‌ها بیشتر تحت تاثیر احساسات هستند تا منطق.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"دروغی بزرگ بگویید و آن را تکرار کنید تا باور کنند.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"رهبری به معنای مسئولیت‌پذیری است.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"زبان سلاح یک رهبر است.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"تاریخ را فاتحان می‌نویسند.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"در سیاست، هیچ‌چیز به شانس واگذار نمی‌شود.🇩🇪 – 卐 آدولف هیتلر\"",
        "\"کسی که می‌خواهد زنده بماند، باید مبارزه کند.🇩🇪 – 卐 آدولف هیتلر\"",
    ];

    // jomle random
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    poemElement.textContent = randomQuote;

    // لینک‌های نیمسال‌ها
    const semesters = [
        { year: 1399, term: 2, url: "https://offline.shirazu.ac.ir/99002/" },
        { year: 1400, term: 1, url: "https://offline.shirazu.ac.ir/14001/" },
        { year: 1400, term: 2, url: "https://offline.shirazu.ac.ir/14002/" },
        { year: 1401, term: 1, url: "https://offline.shirazu.ac.ir/14011/" },
        { year: 1401, term: 2, url: "https://offline.shirazu.ac.ir/14012/" },
        { year: 1402, term: 1, url: "https://offline.shirazu.ac.ir/14021/" },
        { year: 1403, term: 1, url: "https://offline.shirazu.ac.ir/14031/" },
        { year: 1403, term: 2, url: "https://offline.shirazu.ac.ir/14032/" }
    ];

    const semesterSelect = document.getElementById('semesterSelect');
    
    // dropp
    semesters.forEach(semester => {
        const option = document.createElement('option');
        option.value = semester.url;
        option.textContent = `نیمسال ${semester.term === 1 ? 'اول' : 'دوم'} ${semester.year}`;
        semesterSelect.appendChild(option);
    });

    // default
    semesterSelect.selectedIndex = semesters.length - 1;

    document.getElementById('download_button').addEventListener('click', function() {
        const manualLink = document.getElementById('manualLink').value;
        const selectedSemesterUrl = semesterSelect.value;
        downloadFile(manualLink, selectedSemesterUrl);
    });

    function downloadFile(link, semesterUrl) {
        if (!link) {
            alert('لطفاً لینک کلاس را وارد کنید.');
            return;
        }
        const fileId = link.split('/').filter(Boolean).pop();
        const downloadLink = `${semesterUrl}${fileId}.zip`;
        chrome.tabs.create({ url: downloadLink });
    }
});
