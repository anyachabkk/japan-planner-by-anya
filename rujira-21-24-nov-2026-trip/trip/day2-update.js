(function () {
  const anchorStyle = document.createElement('style');
  anchorStyle.textContent = '.activity[id]{scroll-margin-top:110px}';
  document.head.appendChild(anchorStyle);
  const heroCopy = document.querySelector('#itinerary')?.closest('main')?.querySelector('.hero-copy');
  if (heroCopy) heroCopy.remove();

  const dayDates = {
    1: 'Day 1 - เสาร์ 21 พ.ย. 2569',
    2: 'Day 2 - อาทิตย์ 22 พ.ย. 2569',
    3: 'Day 3 - จันทร์ 23 พ.ย. 2569',
    4: 'Day 4 - อังคาร 24 พ.ย. 2569'
  };
  document.querySelectorAll('.day').forEach(day => {
    const dayNo = Number(day.id.split('-')[1]);
    const kicker = day.querySelector('.day-kicker');
    if (kicker && dayDates[dayNo]) kicker.textContent = dayDates[dayNo];
    const oldDate = day.querySelector('.day-date');
    if (oldDate) oldDate.remove();
  });

  const rows = [
    ['07:00', 'Kizu fish market', 'ควรพกเงินสด'],
    ['09:00', 'Easy Hiking Trail · らくらく登山道', 'ทางขึ้นเขาง่ายๆ เดินชิลๆ วิวสูงโอซาก้า'],
    ['12:00', 'กลับเข้าเมือง รับประทานอาหารเที่ยง', ''],
    ['13:00', 'Nagai Flea Market', ''],
    ['16:00', 'ตลาดคริสมาส Osaka Christmas Market สวน Tennoji', ''],
    ['18:00', 'พักผ่อนตามอัธยาศัย', '']
  ];
  document.querySelectorAll('#day-2 .stop').forEach((stop, index) => {
    const row = rows[index];
    if (!row) return;
    stop.querySelector('.time').textContent = row[0];
    stop.querySelector('.activity strong').textContent = row[1];
    const note = stop.querySelector('.activity span');
    if (row[2]) {
      if (note) note.textContent = row[2];
      else stop.querySelector('.activity').insertAdjacentHTML('beforeend', '<span></span>');
    } else if (note) note.remove();
  });

  const dotonbori = [...document.querySelectorAll('#day-1 .stop')]
    .find(stop => stop.textContent.includes('Dotonbori'));
  if (dotonbori && !document.querySelector('#day-1 .monja-option')) {
    const option = document.createElement('div');
    option.className = 'stop monja-option';
    option.innerHTML = '<div class="time"></div><div class="dot-line"></div><div class="activity"><strong>Tsukishima Monja Kuuya Namba</strong><span>ร้าน Monjayaki · ตัวเลือกร้านอาหารให้ลูกค้า</span><div class="trip-doc-gallery"><span class="trip-doc-image"><img src="../assets/osaka-kyoto-itinerary/tsukishima-monja-kuuya-namba.png" alt="Tsukishima Monja Kuuya Namba ร้าน Monjayaki" loading="lazy"></span></div></div>';
    dotonbori.insertAdjacentElement('afterend', option);
  }

  const imageMap = [
    ['Gokai Tachizushi', 'image12.png'],
    ['Sakai Ichimonji Mitsuhide', 'image5.png'],
    ['Nakanoshima Vintage', 'image11.png'],
    ['Dotonbori', 'image8.png'],
    ['Kizu fish market', 'image10.png'],
    ['Easy Hiking Trail', 'image7.png'],
    ['Nagai Flea Market', 'image2.png'],
    ['Christmas Market', 'image9.png'],
    ['Arashiyama', 'image6.png'],
    ['Jōjakkōji', 'image3.png'],
    ['Fushimi Inari', 'image1.png'],
    ['Nakazakicho', 'image13.png'],
    ['Karahori', 'image4.png']
  ];
  document.querySelectorAll('.activity').forEach(activity => {
    const match = imageMap.find(([label]) => activity.textContent.includes(label));
    if (!match || activity.querySelector(`img[src$="${match[1]}"]`)) return;
    const gallery = activity.querySelector('.trip-doc-gallery') || document.createElement('div');
    gallery.className = 'trip-doc-gallery';
    const card = document.createElement('span');
    card.className = 'trip-doc-image';
    card.innerHTML = `<img src="../assets/osaka-kyoto-itinerary/${match[1]}" alt="${match[0]} ภาพจากเอกสารการเดินทาง" loading="lazy">`;
    gallery.appendChild(card);
    if (!gallery.parentElement) activity.appendChild(gallery);
  });

  const tripPointMap = [
    ['Arrive Kansai International Airport', 'kix-nankai'],
    ['Gokai Tachizushi', 'gokai'],
    ['Sakai Ichimonji Mitsuhide', 'sakai'],
    ['Nakanoshima Vintage', 'nakanoshima'],
    ['Dotonbori', 'dotonbori'],
    ['Kizu fish market', 'kizu'],
    ['Easy Hiking Trail', 'hiking'],
    ['Nagai Flea Market', 'nagai'],
    ['Christmas Market', 'christmas-market'],
    ['Arashiyama', 'arashiyama'],
    ['Jōjakkōji', 'jojakkoji'],
    ['Fushimi Inari', 'fushimi-inari'],
    ['แม่น้ำ Kamo', 'kamo-river'],
    ['Nakazakicho', 'nakazakicho'],
    ['Karahori', 'karahori'],
    ['Nankai Line', 'nankai-namba']
  ];
  document.querySelectorAll('.activity').forEach(activity => {
    const match = tripPointMap.find(([label]) => activity.textContent.includes(label));
    if (!match) return;
    activity.id = `trip-${match[1]}`;
    if (activity.querySelector('.travel-anchor')) return;
    const link = document.createElement('a');
    link.className = 'restaurant-label travel-anchor';
    link.href = `../travel/index.html#travel-${match[1]}`;
    link.textContent = 'ดูรายละเอียดการเดินทาง ↗';
    activity.appendChild(link);
  });

  const eventTimes = [
    ['Nakanoshima Vintage', 'เวลางาน 09:30–16:30'],
    ['Nagai Flea Market', 'เวลางาน 10:00–16:00']
  ];
  eventTimes.forEach(([label, time]) => {
    const activity = [...document.querySelectorAll('.activity')].find(item => item.textContent.includes(label));
    if (!activity || activity.textContent.includes(time)) return;
    const note = [...activity.children].find(element =>
      element.tagName === 'SPAN' && !element.classList.contains('trip-doc-image') && !element.classList.contains('restaurant-label')
    ) || document.createElement('span');
    if (!note.parentElement) activity.insertBefore(note, activity.querySelector('.trip-doc-gallery') || activity.querySelector('.travel-anchor') || null);
    note.textContent = note.textContent ? `${note.textContent} · ${time}` : time;
  });

  const arashiyama = [...document.querySelectorAll('#day-3 .activity')]
    .find(activity => activity.textContent.includes('Arashiyama'));
  if (arashiyama) {
    const note = [...arashiyama.children].find(element => element.tagName === 'SPAN' && !element.classList.contains('restaurant-label'))
      || arashiyama.appendChild(document.createElement('span'));
    note.textContent = 'เดินเที่ยวในพื้นที่ Arashiyama · Togetsukyō Bridge · Bamboo Forest · จุดยอดนิยมอาจมีคนหนาแน่น';
  }
})();
