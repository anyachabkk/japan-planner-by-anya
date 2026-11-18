(function () {
  const anchorStyle = document.createElement('style');
  anchorStyle.textContent = '.route[id]{scroll-margin-top:110px}';
  document.head.appendChild(anchorStyle);
  const google = (url, label = 'เปิด Google Maps ↗') => ({ url, label });
  const details = {
    1: [
      { time:'09:20', title:'Kansai International Airport → Nankai Namba Station', note:'หลังผ่าน ตม. และรับกระเป๋า ให้ตามป้าย Nankai Railway สามารถจองผ่าน klook ได้ ลงปลายทาง Namba', map:'', maps:[{url:'https://www.klook.com/activity/599-kansai-airport-namba-train-ticket-osaka/',label:'จองผ่าน klook ↗'}] },
      { time:'10:30', title:'Nankai Namba Station → APA Hotel Osaka Higobashi Ekimae', note:'ต่อ Osaka Metro จาก Namba ไป Higobashi · ฝากกระเป๋า', map:'นั่ง Metro สถานี Namba สาย yotsubashi · ลงสถานี higobashi ทางออก 2', maps:[google('https://maps.app.goo.gl/DMWrtsLCkVMfpJFV7')] },
      { time:'12:00', title:'APA Hotel Osaka Higobashi Ekimae → Gokai Tachizushi', note:'มื้อกลางวัน Customer’s choice', map:'นั่ง Metro สถานี yodoyabashi สาย midosuji', maps:[google('https://maps.app.goo.gl/PXuGJFDVEz53G61F8')] },
      { time:'12:00', title:'Gokai Tachizushi → Sakai Ichimonji Mitsuhide', note:'แวะซื้อมีดโซน Sakai · รอบ ๆ นี้มีร้านมีดมากมายให้เปรียบเทียบ', map:'เดินเพียง 5 นาที', maps:[google('https://maps.app.goo.gl/Rscs85NH2LEmXMGU8')] },
      { time:'14:00', title:'Sakai / Osaka → Nakanoshima Vintage & Used Clothing Festival', note:'งานอยู่ริมแม่น้ำและสวน', map:'นั่ง Metro สถานี Namba สาย midosuji', maps:[google('https://maps.app.goo.gl/ta1VKPrLLDD3jHLW7')] },
      { time:'16:00', title:'Nakanoshima → APA Hotel Osaka Higobashi Ekimae', note:'กลับโรงแรมเพื่อ Check-in และพักผ่อน', map:'สามารถเดินกลับAPA Hotel Osaka Higobashi Ekimaeได้เลย', maps:[google('https://maps.app.goo.gl/BAoGr7H31YkpJC2N8')] },
      { time:'17:00', title:'APA Hotel → Dotonbori → Shinsaibashi', note:'เดินทางเข้าโซนช้อปปิ้งและร้านอาหารช่วงเย็น', map:'นั่ง Metro สถานี yodoyabashi สาย midosuji', maps:[google('https://maps.app.goo.gl/RfoAa935pgJzTtyv6')] },
      { time:'20:00', title:'Dotonbori / Shinsaibashi → APA Hotel Osaka Higobashi Ekimae', note:'', map:'', maps:[google('https://maps.app.goo.gl/BAoGr7H31YkpJC2N8')] }
    ],
    2: [
      { time:'07:00', title:'APA Hotel Osaka Higobashi Ekimae → Kizu Fish Market', note:'ควรพกเงินสดและเผื่อเวลารอคิวหรือซื้ออาหารเช้า', map:'นั่ง Metro สถานี Higobashi · ลงสถานี Daikokucho · ทางออก 1', maps:[google('https://maps.app.goo.gl/NapXz4tbsCap1HTW9')] },
      { time:'09:00', title:'Kizu Fish Market → らくらく登山道 Easy Hiking Trail', note:'', map:'นั่ง Metro สถานี Daikokucho สาย midosuji namba', maps:[google('https://maps.app.goo.gl/GJUPQdSaDWuXFkpU8')] },
      { time:'12:00', title:'Easy Hiking Trail → Osaka city', note:'กลับเข้าเมืองและรับประทานอาหารเที่ยงตามอัธยาศัย', map:'', maps:[] },
      { time:'13:00', title:'Osaka city → Nagai Flea Market', note:'', map:'งานจะจัดอยู่ในสวน ป้ายน่าจะมีตามทางค่ะ', maps:[google('https://maps.app.goo.gl/kzg5psz6asEz3FR19')] },
      { time:'16:00', title:'Nagai → Osaka Christmas Market at Tennoji Park', note:'เดินทางเข้าสวน Tennoji เพื่อชมตลาดคริสต์มาส', map:'ใช้เส้น midosuji เพื่อไปสถานี Tennoji งานจะจัดอยู่ในสวน ป้ายน่าจะมีตามทางค่ะ', maps:[google('https://maps.app.goo.gl/DMopJ5yF8yszLFeb7')] },
      { time:'18:00', title:'Tennoji park → APA Hotel Osaka Higobashi Ekimae', note:'กลับโรงแรมและพักผ่อน', map:'แอบเดินผ่านย่าน Shinsekai ที่ดังเรื่องของชุปแป้งทอด สามาถดื่มดริงค์ได้ก่อนกลับโรงแรมค่ะ', maps:[google('https://maps.app.goo.gl/xy3K7e4CRRXU6V268')] }
    ],
    3: [
      { time:'09:00', title:'APA Hotel Osaka Higobashi Ekimae → Kyoto / Arashiyama', note:'เดินทางด้วย Hankyu Railway สู่เกียวโต', map:'', maps:[google('https://maps.app.goo.gl/RwUDwX7xmReCsLmv6')] },
      { time:'10:30', title:'Arashiyama Station → Togetsukyō Bridge → Bamboo Forest', note:'เดินเที่ยวในพื้นที่ Arashiyama · จุดยอดนิยมอาจมีคนหนาแน่น', map:'Togetsukyō Bridge', maps:[google('https://maps.app.goo.gl/chJ4ujo233w4sxbs6','ไป Togetsukyō Bridge ↗'), google('https://maps.app.goo.gl/U2Caij9djAz3xpzv7','ไปป่าไผ่ ↗')] },
      { time:'13:00', title:'Jōjakkōji Temple', note:'วัดใบไม้แดงและธรรมชาติ จากป่าไผ่สามารถเดินได้', map:'', maps:[google('https://maps.app.goo.gl/oVjup7YPAx1r6Cvo7')] },
      { time:'15:00', title:'Jōjakkōji Temple → Fushimi Inari', note:'บริเวณทางขึ้นเขามืดเร็ว หากมีไฟฉายจะดี', map:'นั่ง city bus (ใช้เงินสดหรือ ic card) และต่อสาย nara ไปที่วัด', maps:[google('https://maps.app.goo.gl/HdZpfnDKDEZc6aGF6')] },
      { time:'17:00', title:'Fushimi Inari → Kamo River', note:'กลับเข้าเมือง เดินเล่นริมแม่น้ำ Kamo และรับประทานอาหารเย็น', map:'นั่งสาย keihan เพื่อลงที่ สถานี Gion-shijo บริเวณนั้นจะเป็นย่านการค้า วิวแม่น้ำสวย และมีร้านอาหาร', maps:[google('https://maps.app.goo.gl/WenBwUiCKhbcQH2h6')] },
      { time:'19:00', title:'Kyoto → Osaka → APA Hotel Osaka Higobashi Ekimae', note:'เดินทางกลับโอซาก้า · กลับโรงแรมและพักผ่อนตามอัธยาศัย', map:'นั่งสาย Keihan เพื่อกลับไปยังโอซาก้า ต่อเดียวถึงโรงแรม', maps:[google('https://maps.app.goo.gl/iX1XiXEH5N4tPQNE7')] }
    ],
    4: [
      { time:'11:00', title:'APA Hotel Osaka Higobashi Ekimae → Nakazakicho', note:'ฝากกระเป๋าไว้ที่โรงแรมก่อน · เดินเที่ยวย่าน Local', map:'นั่ง Metro สถานี Higoashi สาย yotsubashi Nakazakicho', maps:[google('https://maps.app.goo.gl/g8DTjgLAepR2BKMZA')] },
      { time:'14:00', title:'Nakazakicho → Karahori', note:'ไปได้หากมีเวลาเหลือ · ต้องเผื่อเวลาเดินทางกลับไปรับกระเป๋า', map:'', maps:[google('https://maps.app.goo.gl/L1yAHzefuxaCJDeX9')] },
      { time:'15:00', title:'Karahori → APA Hotel Osaka Higobashi Ekimae', note:'กลับไปรับกระเป๋า', map:'', maps:[google('https://maps.app.goo.gl/Lx8Kb8qyuiewsEBe9')] },
      { time:'15:30', title:'APA Hotel Osaka Higobashi Ekimae > Nankai namba', note:'เดินทางไปสนามบินด้วย Nankai Line เช่นเดิม', map:'', maps:[google('https://maps.app.goo.gl/SCh3ruo8RsQss3DC7')] },
      { time:'', title:'Nankai Namba Station → Kansai International Airport', noteHtml:'<a href="https://www.klook.com/activity/599-kansai-airport-namba-train-ticket-osaka/" target="_blank" rel="noopener noreferrer">จองผ่าน klook ↗</a>', map:'', maps:[] },
      { time:'19:50', title:'Depart Kansai International Airport', note:'', map:'', maps:[] }
    ]
  };

  const pointAnchors = {
    1: ['kix-nankai', 'hotel-arrival', 'gokai', 'sakai', 'nakanoshima', 'hotel-checkin', 'dotonbori', 'hotel-return'],
    2: ['kizu', 'hiking', 'osaka-lunch', 'nagai', 'christmas-market', 'hotel-night'],
    3: ['arashiyama', 'togetsukyo-bamboo', 'jojakkoji', 'fushimi-inari', 'kamo-river', 'osaka-return'],
    4: ['nakazakicho', 'karahori', 'hotel-luggage', 'nankai-namba', 'kix-departure', 'flight']
  };

  function setMapLinks(content, maps) {
    content.querySelectorAll('.map').forEach(el => el.remove());
    maps.forEach(item => {
      const link = document.createElement('a');
      link.className = 'map'; link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = item.label;
      if (content.querySelector('.map')) link.style.marginLeft = '10px';
      content.insertBefore(link, content.querySelector('.inline-gallery') || null);
    });
  }

  function addTripAnchor(route, dayNo, index) {
    const key = pointAnchors[dayNo]?.[index];
    if (!key) return;
    route.id = `travel-${key}`;
    const link = document.createElement('a');
    link.className = 'map';
    link.href = `../trip/index.html#trip-${key}`;
    link.textContent = 'ดูในแผนเที่ยว ↗';
    if (route.lastElementChild.querySelector('.map')) link.style.marginLeft = '10px';
    route.lastElementChild.appendChild(link);
  }

  function buildRoute(row) {
    const route = document.createElement('div'); route.className = 'route';
    route.innerHTML = '<div class="route-time"></div><div><div class="route-title"></div><div class="route-note"></div></div>';
    route.querySelector('.route-time').textContent = row.time;
    route.querySelector('.route-title').textContent = row.title;
    const content = route.lastElementChild;
    const note = route.querySelector('.route-note');
    if (row.noteHtml) note.innerHTML = row.noteHtml;
    else { note.textContent = row.note || ''; note.hidden = !row.note; }
    addMapNote(route, row.map);
    setMapLinks(content, row.maps);
    return route;
  }

  function addMapNote(route, text) {
    route.querySelectorAll('.route-map-note').forEach(el => el.remove());
    if (!text) return;
    const box = document.createElement('div'); box.className = 'route-map-note';
    box.innerHTML = '<strong>วิธีเดินทาง</strong>' + text;
    const content = route.lastElementChild; const gallery = route.querySelector('.inline-gallery');
    content.insertBefore(box, gallery || null);
  }

  document.querySelectorAll('.day').forEach(day => {
    const dayNo = Number(day.id.split('-')[1]); const rows = details[dayNo]; if (!rows) return;
    const routes = day.querySelector('.routes');
    if (dayNo >= 3) {
      routes.innerHTML = ''; rows.forEach((row, index) => {
        const route = buildRoute(row);
        routes.appendChild(route);
        addTripAnchor(route, dayNo, index);
      });
      return;
    }
    day.querySelectorAll('.route').forEach((route, index) => {
      const row = rows[index]; if (!row) return;
      route.querySelector('.route-time').textContent = row.time;
      route.querySelector('.route-title').textContent = row.title;
      const note = route.querySelector('.route-note');
      if (row.noteHtml) note.innerHTML = row.noteHtml;
      else { note.textContent = row.note || ''; note.hidden = !row.note; }
      addMapNote(route, row.map);
      setMapLinks(route.lastElementChild, row.maps);
      addTripAnchor(route, dayNo, index);
    });
  });
  document.querySelectorAll('.doc-label').forEach(label => { label.textContent = 'แตะเพื่อดูภาพใหญ่'; });
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
  const travelAdvice = document.querySelector('.travel-important-note');
  if (travelAdvice) {
    travelAdvice.innerHTML = '<strong>ข้อแนะนำในการเดินทาง: ลูกค้าสามารถใช้ IC Card ตลอดทริป</strong><br><strong>หรือใช้ Kansai Railway Pass Lite 3 วัน ในการเดินทาง ตั้งแต่วันที่ 21 -23 พ.ย. ค่ะ <a href="https://www.klook.com/activity/599-kansai-airport-namba-train-ticket-osaka/" target="_blank" rel="noopener noreferrer">จองผ่าน klook ↗</a></strong>';
  }
})();
