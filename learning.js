'use strict';
window.LEARNING={
 note:'Ubat hanya diambil mengikut arahan doktor atau orang dewasa yang bertanggungjawab.',
 materials:[
  {id:'tembakau',name:'Tembakau',label:'TEMBAKAU',alt:'Daun tembakau dan rokok yang belum dinyalakan, dengan simbol dilarang merokok.',neutral:'Dua helai daun dan rokok yang belum dinyalakan dengan simbol larangan.',text:'Tembakau terdapat dalam rokok. Asap rokok membahayakan kesihatan. Jauhi asap rokok dan pilih udara bersih.'},
  {id:'alkohol',name:'Alkohol',label:'ALKOHOL',alt:'Botol dan gelas minuman berlabel alkohol, tanpa jenama.',neutral:'Botol tanpa jenama dan gelas berisi minuman, dengan simbol larangan.',text:'Alkohol terdapat dalam minuman beralkohol. Minuman ini boleh menjejaskan kesihatan dan pertimbangan. Pilih air kosong.'},
  {id:'dadah',name:'Dadah',label:'DADAH TERLARANG',alt:'Bungkusan bahan terlarang dengan simbol amaran. Tiada gambaran penggunaan atau pil ubat.',neutral:'Bungkusan tertutup dengan tanda amaran dan simbol larangan.',text:'Jauhi dadah terlarang. Jangan sentuh atau cuba bahan yang tidak dikenali. Beritahu orang dewasa yang dipercayai. Bukan semua ubat ialah dadah terlarang.'}
 ],
 guide:[
  {title:'1. Pilih watak detektif',text:'Masukkan nama dan kelas. Pilih Hud, Izz atau Aini sebagai rakan pengembaraan kamu.',symbol:'character'},
  {title:'2. Gerakkan watak',text:'Ikuti laluan berpasir. Dinding dan pokok renek tidak boleh ditembusi. Lepaskan kawalan untuk berhenti.',symbol:'move'},
  {title:'3. Cari lokasi soalan',text:'Cari peti atau rakan bertanda soalan. Berhenti berdekatan, kemudian tekan Siasat atau kekunci E.',symbol:'question'},
  {title:'4. Dengar dan baca',text:'Tekan Dengar Semua untuk mendengar soalan dan pilihan jawapan. Kamu juga boleh mendengar setiap pilihan secara berasingan.',symbol:'listen'},
  {title:'5. Pilih dan sahkan',text:'Pilih satu jawapan, kemudian tekan Sahkan jawapan. Dengar penerangan. Jika belum tepat, gunakan petunjuk dan cuba lagi.',symbol:'answer'},
  {title:'6. Buka jalan selamat',text:'Selesaikan semua petunjuk. Gunakan kunci untuk membuka pintu dan cari jalan ke Rumah Api Selamat. Jauhi laluan berbahaya.',symbol:'exit'}
 ],
 controls:{keyboard:'Gunakan kekunci anak panah atau W, A, S, D untuk bergerak. Lepaskan kekunci untuk berhenti. Tekan E untuk menyiasat.',pad:'Tekan dan tahan butang arah pada skrin untuk bergerak. Lepaskan butang untuk berhenti. Tekan Siasat apabila sudah dekat.'},
 exercise:{id:'practice',prompt:'Apabila rakan mengajak kamu mencuba rokok, apakah pilihan selamat?',options:['Katakan tidak dan beritahu guru','Cuba sedikit sahaja','Simpan rokok itu'],answer:0,hint:'Kamu berhak berkata tidak. Guru boleh membantu kamu.',explanation:'Betul! Katakan TIDAK, beredar ke tempat selamat dan beritahu orang dewasa yang dipercayai.'},
 messages:{wrong:'Belum tepat. Lihat gambar dan dengar petunjuk, kemudian cuba lagi.',trainingMove:'Latihan tanpa markah. Cuba bergerak di laluan berpasir.',trainingStop:'Sekarang berhenti dekat peti latihan dan tekan Siasat.',trainingDone:'Hebat! Kamu sudah bergerak, berhenti dan menjawab soalan contoh. Latihan ini tidak mengubah markah atau kemajuan kamu.',consent:'Saya mahu mendengar panduan dan soalan dalam Bahasa Melayu.'}
};
(()=>{
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fallback=id=>`<svg viewBox="0 0 320 200" role="img" aria-label="Ilustrasi sandaran"><rect x="4" y="4" width="312" height="192" rx="22" fill="#f2ecd7"/>${id==='tembakau'?'<path d="M70 130Q25 38 110 28Q147 102 70 130M130 144Q96 72 166 46Q190 128 130 144" fill="#75974d" stroke="#416e42" stroke-width="4"/><path d="M205 70v85m22-85v85" stroke="#fff" stroke-width="15"/><path d="M205 136v22m22-22v22" stroke="#c48a50" stroke-width="15"/>':id==='alkohol'?'<path d="M105 25h30v40l15 19v86H88V84l17-19z" fill="#a67032" stroke="#70532d" stroke-width="5"/><rect x="91" y="100" width="56" height="39" rx="4" fill="#fff4cc"/><path d="M194 72h56l-7 59q-22 28-42 0z" fill="#dab26b" stroke="#70532d" stroke-width="5"/><path d="M222 143v29m-21 0h41" stroke="#70532d" stroke-width="5"/>':'<rect x="67" y="50" width="90" height="119" rx="9" fill="#b59767" stroke="#6c593d" stroke-width="5"/><path d="M70 72h85" stroke="#6c593d" stroke-width="5"/><rect x="139" y="78" width="94" height="93" rx="9" fill="#dfce9d" stroke="#6c593d" stroke-width="5"/><path d="M228 27l52 89H176z" fill="#f4c948" stroke="#7b642a" stroke-width="5"/><text x="228" y="98" text-anchor="middle" font-size="51" font-family="Arial" fill="#514427">!</text>'}<circle cx="259" cy="40" r="24" fill="#fff7ed" stroke="#bd533b" stroke-width="6"/><path d="M242 23l34 34" stroke="#bd533b" stroke-width="6"/></svg>`;
 window.Materials={
  html(id,reveal=false){const m=LEARNING.materials.find(v=>v.id===id)||LEARNING.materials[0];return `<figure class="material-figure ${reveal?'revealed':''}" data-material="${m.id}"><div class="material-picture"><img src="assets/materials/${m.id}.png" alt="${esc(reveal?m.alt:m.neutral)}" data-material-image="${m.id}"><div class="material-fallback" hidden>${fallback(m.id)}</div>${m.id==='alkohol'?'<span class="bottle-label" aria-hidden="true">ALKOHOL</span>':''}</div><figcaption ${reveal?'':'hidden'}>${m.label}</figcaption></figure>`;},
  bind(root=document){root.querySelectorAll('[data-material-image]').forEach(img=>{img.onerror=()=>{img.hidden=true;img.nextElementSibling.hidden=false;};if(img.complete&&!img.naturalWidth)img.onerror();});},
  reveal(root=document){root.querySelectorAll('.material-figure').forEach(f=>{const m=LEARNING.materials.find(v=>v.id===f.dataset.material);f.classList.add('revealed');f.querySelector('figcaption').hidden=false;f.querySelector('img').alt=m.alt;});}
 };
 window.audioCatalog=()=>{
  const list=[];const add=text=>{if(text&&!list.includes(text))list.push(text);};
  PULAU.questions.forEach((q,i)=>{add(`Soalan ${i%3+1}. ${q.prompt}`);q.options.forEach((v,n)=>add(`Pilihan ${'ABC'[n]}. ${v}`));add(q.hint);add(q.explanation);if(q.scene)add(q.scene);});
  LEARNING.materials.forEach(m=>add(m.name+'. '+m.text));add(LEARNING.note);LEARNING.guide.forEach(g=>add(g.title+'. '+g.text));Object.values(LEARNING.controls).forEach(add);Object.values(LEARNING.messages).forEach(add);const e=LEARNING.exercise;add('Soalan latihan. '+e.prompt);e.options.forEach((v,n)=>add(`Pilihan ${'ABC'[n]}. ${v}`));add(e.hint);add(e.explanation);return list;
 };
})();
