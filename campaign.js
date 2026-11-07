'use strict';
window.CAMPAIGN={
 version:1,
 story:[
  'Rumah Api Selamat kehilangan cahayanya. Bantu Hud, Izz dan Aini menyelesaikan tiga misi untuk menghidupkannya semula dan pulang bersama.',
  'Misi pertama berjaya, lampu penunjuk laluan sudah menyala! Ikuti cahayanya untuk mengumpulkan dan menyusun bukti.',
  'Bukti sudah disusun dan jambatan ke rumah api telah dipulihkan. Mari bantu rakan memilih tindakan selamat sebelum menyalakan rumah api.',
  'Rumah Api Selamat kini bersinar sepenuhnya! Hud, Izz dan Aini tiba dengan selamat kerana kamu bijak mengenali bahaya dan mendapatkan bantuan.'
 ],
 demos:[
  'Cari peti bertanda wajib dan tekan Siasat. Lihat gambar, pilih kategori, kemudian sahkan jawapan kamu.',
  'Tekan kad bukti, kemudian tekan kategori yang sepadan, atau seret kad ke kategori itu. Sahkan pengelasan untuk membuka pintu seterusnya.',
  'Dengar masalah Hud, Izz atau Aini dan pilih tindakan yang selamat. Selepas menjawab, lihat watak beredar dan mendapatkan bantuan.'
 ],
 finalIntro:'Tiga bahagian rumah api masih perlu dinyalakan. Kenali bahan, pilih tindakan selamat dan susun langkah untuk menolak pelawaan berbahaya.',
 summary:'Kamu mengenali tembakau, alkohol dan dadah terlarang. Apabila diajak mencuba bahan ketagihan, katakan TIDAK, beredar ke tempat selamat dan beritahu orang dewasa yang dipercayai.',
 orderPrompt:'Seorang kenalan mengajak kamu mencuba rokok. Susun tiga langkah selamat mengikut turutan.',
 orderSteps:['Katakan TIDAK','Beredar ke tempat selamat','Beritahu orang dewasa yang dipercayai'],
 orderHint:'Mulakan dengan menolak pelawaan. Kemudian jauhi tempat itu dan dapatkan bantuan orang dewasa yang dipercayai.',
 orderCorrect:'Tepat! Katakan TIDAK, beredar ke tempat selamat dan beritahu orang dewasa yang dipercayai.',
 sortPrompt:'Susun bukti. Padankan kad gambar dengan kategori yang betul.',
 wrong:'Mari fikir semula.',
 extras:[
  {id:'sign',name:'Papan tanda',symbol:'🚭',image:'tembakau',text:'Simbol dilarang merokok mengingatkan kita supaya tidak merokok di kawasan ini. Jika ada asap rokok, pilih laluan lain yang bersih.'},
  {id:'book',name:'Buku petunjuk',symbol:'▤',image:'alkohol',text:'Minuman beralkohol perlu dijauhi. Pilih air kosong dan minta bantuan penjaga jika seseorang menawarkan minuman yang meragukan.'},
  {id:'card',name:'Peti pembelajaran',symbol:'▣',image:'dadah',text:'Ilustrasi ini mewakili dadah terlarang, tetapi rupa bungkusan sahaja tidak menentukan kandungannya. Jangan sentuh bungkusan tidak dikenali dan beritahu guru.'},
  {id:'notice',name:'Papan pesanan',symbol:'✋',image:null,text:'Jika diajak mencuba bahan ketagihan, katakan TIDAK, beredar dan beritahu orang dewasa yang dipercayai. Ubat hanya diambil mengikut arahan doktor atau orang dewasa yang bertanggungjawab.'}
 ],
 accessories:[{id:'hat',name:'Topi Jejak Emas',description:'Hiasan jalur emas pada topi detektif.'},{id:'bag',name:'Beg Pengembaraan',description:'Beg kecil untuk menyimpan kad pembelajaran.'},{id:'glass',name:'Kanta Pembesar',description:'Kanta pembesar berbingkai emas.'},{id:'badge',name:'Lencana Pulau',description:'Lencana bintang pada pakaian detektif.'}],
 reactions:{
  Hud:{thanks:'Terima kasih! Kita boleh melalui laluan berudara bersih bersama-sama.',steps:['Mari pilih laluan bersih.','Beredar daripada asap rokok.','Beritahu guru tentang kawasan berasap.']},
  Izz:{thanks:'Terima kasih kerana membantu saya berani menolak dan mencari penjaga.',steps:['TIDAK, saya tidak mahu.','Beredar ke tempat selamat.','Beritahu penjaga yang dipercayai.']},
  Aini:{thanks:'Terima kasih! Saya tidak menyentuh bungkusan itu dan sudah memberitahu guru.',steps:['Jangan sentuh bungkusan ini.','Jauhkan diri ke tempat selamat.','Beritahu guru supaya mendapat bantuan.']}
 },
 bank:{
  tobacco:[
   ['Lihat daun dan rokok dengan simbol larangan. Apakah bahan ketagihan yang berkaitan?',0],
   ['Kad ini menunjukkan daun yang digunakan dalam rokok. Apakah nama bahan tersebut?',1],
   ['Perhatikan rokok dan tanda larangan pada papan ini. Pilih kategori bahan yang sepadan.',2]
  ],
  alcohol:[
   ['Botol dan gelas minuman beramaran ini mewakili bahan apa?',0],
   ['Kad pendidikan ini menunjukkan botol dan gelas minuman dengan tanda larangan. Padankan dengan kategori yang betul.',1],
   ['Lihat ilustrasi botol dan gelas pada kad amaran. Pilih jenis minuman yang perlu dijauhi.',2]
  ],
  drugs:[
   ['Ilustrasi pendidikan bungkusan dengan amaran ini mewakili bahan terlarang. Pilih kategorinya.',0],
   ['Kad pendidikan ini melambangkan bahan terlarang yang perlu dijauhi. Kategori manakah yang sepadan?',1],
   ['Lihat ilustrasi bahan terlarang dengan simbol amaran. Pilih kategori bahan tersebut.',2]
  ],
  leave:[
   ['Hud melihat asap rokok di laluan taman. Bagaimanakah kamu membantunya?', ['Lalu sahaja dalam asap','Pilih laluan lain yang bersih dan beritahu guru','Tunggu dekat orang yang merokok'],1],
   ['Laluan berhampiran jambatan berasap rokok. Apakah pilihan selamat untuk Hud?', ['Cari laluan berudara bersih dan beritahu guru','Dekati asap untuk melihat','Duduk di kawasan berasap'],0],
   ['Hud mahu ke peti tetapi ada asap rokok di tepi bangku. Apakah tindakan yang sesuai?', ['Berdiri dekat bangku','Ikut laluan yang berasap','Beredar melalui laluan bersih dan dapatkan bantuan guru'],2]
  ],
  refuse:[
   ['Izz ditawarkan minuman beralkohol di taman. Apakah tindakan selamat?', ['Tolak, beredar dan beritahu penjaga','Cuba sedikit sahaja','Ikut orang yang menawarkan minuman'],0],
   ['Semasa majlis, seorang kenalan mengajak Izz mencuba minuman beralkohol. Apakah pilihannya?', ['Terima supaya tidak malu','Katakan tidak, beredar dan beritahu penjaga','Simpan minuman itu untuk kemudian'],1],
   ['Di kawasan rekreasi, seseorang memujuk Izz mencuba minuman beralkohol. Bagaimanakah Izz bertindak?', ['Minum kerana dipujuk','Terima hadiah minuman itu','Tolak pelawaan, beredar dan cari penjaga'],2]
  ],
  help:[
   ['Aini menjumpai bungkusan tidak dikenali di sekolah. Apakah tindakan selamat?', ['Buka untuk melihat isinya','Jangan sentuh, jauhkan diri dan beritahu guru','Bawa pulang bungkusan itu'],1],
   ['Ada bungkusan tanpa pemilik di tepi perpustakaan. Apakah yang patut Aini lakukan?', ['Jangan sentuh dan minta bantuan guru dari tempat selamat','Cuba isinya','Serahkan kepada rakan untuk dibuka'],0],
   ['Aini melihat bungkusan tidak dikenali dekat pintu kelas. Apakah pilihannya?', ['Alihkan sendiri','Teka kandungannya lalu membukanya','Jauhkan diri, jangan sentuh dan beritahu guru'],2]
  ]
 }
};
(()=>{
 const C=CAMPAIGN;
 C.evidence=[
  {cards:['Asap rokok boleh mengganggu pernafasan.','Menghidu asap rokok boleh membahayakan kesihatan.','Udara yang berasap rokok tidak baik untuk kesihatan.'],symbol:'🚭',answer:0,hint:'Kad ini menerangkan kesan buruk kepada tubuh.',explanation:'Betul! Kesan buruk asap rokok termasuk dalam risiko kesihatan. Pilih udara bersih.'},
  {cards:['Saya memilih air kosong sebagai minuman.','Saya membawa air kosong ke aktiviti sukan.','Saya meminta air kosong ketika makan.'],symbol:'💧',answer:1,hint:'Kad ini menunjukkan pilihan minuman yang selamat.',explanation:'Tepat! Memilih air kosong ialah pilihan selamat. Minuman beralkohol perlu dijauhi.'},
  {cards:['Doktor menerangkan cara mengambil ubat kepada keluarga.','Penjaga membantu membaca arahan ubat yang diberikan doktor.','Ahli farmasi menerangkan arahan ubat kepada penjaga.'],symbol:'✚',answer:2,hint:'Perhatikan orang yang memberikan penerangan dan bimbingan.',explanation:'Bagus! Kad ini menunjukkan bantuan orang dewasa. Ubat diambil mengikut arahan yang betul, bukan dicuba sendiri.'}
 ];
 C.controlExercise={id:'practice-control',cardText:'E · Siasat',cardSymbol:'⌕',prompt:'Kamu sudah berhenti dekat peti. Butang manakah membuka peti itu?',options:['Siasat','Terus berjalan','Tutup permainan'],answer:0,hint:'Tekan Siasat pada skrin atau kekunci E.',explanation:'Betul! Dekati objek, berhenti dan tekan Siasat untuk membukanya.'};

 C.makeSet=variant=>{
  const v=((variant%3)+3)%3,questions=[];
  ['tobacco','alcohol','drugs'].forEach((focus,i)=>{const row=C.bank[focus][v],base=PULAU.questions[i];questions.push({...base,prompt:row[0],variant:row[1],focus:['Kenali tembakau','Kenali alkohol','Kenali dadah terlarang'][i],wrong:['Perhatikan objek dalam gambar. Rokok berkaitan dengan tembakau.','Botol dan gelas amaran ini mewakili alkohol.','Kad ini mewakili dadah terlarang. Rupa bungkusan sebenar sahaja tidak menentukan kandungannya.'][i]});});
  for(let i=0;i<3;i++){const card=C.evidence[i];questions.push({...PULAU.questions[i+3],prompt:'Kad bukti: '+card.cards[v]+' Apakah jenis maklumat ini?',cardText:card.cards[v],cardSymbol:card.symbol,options:['Risiko kesihatan','Pilihan selamat','Bantuan orang dewasa'],answer:card.answer,hint:card.hint,explanation:card.explanation,wrong:null,variant:(v+1)%3,focus:'Susun bukti',mechanic:'sort'});}
  ['leave','refuse','help'].forEach((focus,i)=>{const row=C.bank[focus][v],who=['Hud','Izz','Aini'][i];questions.push({...PULAU.questions[i+6],title:['Misi Hud — Cari Laluan Selamat','Misi Izz — Berani Menolak','Misi Aini — Dapatkan Bantuan'][i],prompt:row[0],options:row[1],answer:row[2],variant:v,character:who,focus:['Beredar ke tempat selamat','Menolak pelawaan','Mendapatkan bantuan'][i],hint:['Jauhi asap rokok. Cari laluan berudara bersih dan minta bantuan guru.','Kamu berhak menolak pelawaan, beredar dan memberitahu penjaga.','Rupa bungkusan sahaja tidak menentukan isinya. Jangan sentuh; jauhkan diri dan beritahu guru.'][i],explanation:['Bagus! Hud memilih laluan berudara bersih, menjauhi asap rokok dan memberitahu guru.','Berani dan bijak! Izz menolak pelawaan, beredar ke tempat selamat dan memberitahu penjaga.','Tepat! Aini tidak menyentuh bungkusan itu, menjauhkan diri dan memberitahu guru. Kita tidak boleh menentukan kandungannya hanya berdasarkan rupa.'][i],wrong:row[1].map((text,n)=>n===row[2]?'':i===0?'Berada dekat asap boleh mendedahkan Hud kepada asap rokok. Pilih laluan lain yang bersih.':i===1?(n===0?'Menerima pelawaan itu boleh membahayakan Izz. Dia berhak berkata tidak.':'Mencuba atau menyimpan minuman itu bukan pilihan selamat. Tolak dan cari penjaga.'):(text.includes('Buka')||text.includes('buka')?'Membuka bungkusan tidak dikenali boleh mendedahkan Aini kepada bahaya. Jangan sentuh dan beritahu guru.':'Jangan alihkan atau cuba isi bungkusan tidak dikenali. Jauhkan diri dan dapatkan bantuan guru.')),scene:C.reactions[who].thanks});});
  return questions;
 };
 C.makeFinalSet=variant=>{
  const v=((variant%3)+3)%3,pairs=[['tembakau','alkohol'],['alkohol','dadah'],['tembakau','dadah']],names=[['Tembakau dan alkohol','Alkohol dan dadah terlarang','Dadah terlarang dan tembakau'],['Tembakau dan alkohol','Alkohol dan dadah terlarang','Dadah terlarang dan tembakau'],['Alkohol dan tembakau','Dadah terlarang dan alkohol','Tembakau dan dadah terlarang']];
  const pairPrompts=['Perhatikan gambar kiri dan kanan. Pasangan nama manakah sepadan mengikut susunan gambar?','Dua kad menunggu di rumah api. Apakah nama bahan pada kad kiri, kemudian kad kanan?','Gabungkan dua petunjuk ini. Pilih pasangan bahan mengikut urutan dari kiri ke kanan.'];
  const situations=[['Kamu sudah beredar daripada pelawaan berbahaya, tetapi guru tiada berdekatan. Siapakah yang boleh kamu beritahu?',['Penjaga yang dipercayai','Orang tidak dikenali','Tiada sesiapa'],0],['Selepas menolak pelawaan berbahaya di sekolah, kamu mencari bantuan. Siapakah yang sesuai?',['Orang yang membuat pelawaan','Guru yang dipercayai','Rakan yang menyuruh kamu merahsiakannya'],1],['Seorang adik memberitahu bahawa dia diajak mencuba bahan ketagihan. Apakah bantuan yang boleh kamu berikan?',['Suruh dia merahsiakannya','Minta dia uruskan sendiri','Temani dia berjumpa penjaga yang dipercayai'],2]],row=situations[v];
  return [{...PULAU.questions[1],id:'final-kenali',images:pairs[v],prompt:pairPrompts[v],options:names[v],answer:v,variant:(v+1)%3,hint:'Padankan setiap ilustrasi dengan nama bahan. Baca dari kiri ke kanan.',explanation:'Tepat! Pasangan ini ialah '+names[v][v].toLowerCase()+'. Kamu berjaya menggabungkan dua petunjuk.',focus:'Misi akhir: gabung gambar',final:true},{id:'final-selamat',level:2,title:'Cari bantuan yang sesuai',cardText:'Orang dewasa yang dipercayai',cardSymbol:'♡',final:true,prompt:row[0],options:row[1],answer:row[2],hint:'Guru atau penjaga yang dipercayai boleh membantu kamu.',explanation:'Betul! Beritahu orang dewasa yang dipercayai. Kamu tidak perlu menghadapi situasi berbahaya seorang diri.',focus:'Misi akhir: bantuan'}];
 };
 C.finalQuestions=C.makeFinalSet(0);
 C.isOriginalQuestion=(q,v)=>{const current=C.makeSet(v).find(r=>r.id===q.id);if(!current)return false;const expected=q.level===1?{...PULAU.questions.find(r=>r.id===q.id),prompt:C.sortPrompt}:current;return ['prompt','options','answer','hint','explanation'].every(k=>JSON.stringify(q[k])===JSON.stringify(expected[k]));};
 C.catalog=()=>{const all=[];const add=s=>{if(typeof s==='string'&&s&&!all.includes(s))all.push(s);};for(let v=0;v<3;v++)C.makeSet(v).forEach((q,i)=>{add(`Soalan ${i%3+1}. ${q.prompt}`);q.options.forEach((s,j)=>add(`Pilihan ${'ABC'[j]}. ${s}`));[q.hint,q.explanation,q.scene].forEach(add);(Array.isArray(q.wrong)?q.wrong:[q.wrong]).forEach(add);});[0,1,2].forEach(v=>C.makeFinalSet(v).forEach((q,i)=>{add(`Soalan ${i+1}. ${q.prompt}`);q.options.forEach((s,j)=>add(`Pilihan ${'ABC'[j]}. ${s}`));[q.hint,q.explanation,q.scene].forEach(add);}));const e=C.controlExercise;add("Soalan latihan. "+e.prompt);e.options.forEach((s,i)=>add("Pilihan "+"ABC"[i]+". "+s));[e.hint,e.explanation].forEach(add);C.story.forEach(add);C.demos.forEach(add);[C.finalIntro,C.summary,C.orderPrompt,C.orderHint,C.orderCorrect,C.wrong].forEach(add);C.orderSteps.forEach(add);C.extras.forEach(v=>add(v.text));Object.values(C.reactions).forEach(r=>{add(r.thanks);r.steps.forEach(add);});return all;};
 const originalCatalog=window.audioCatalog;window.audioCatalog=()=>[...new Set([...originalCatalog(),...C.catalog()])];
 C.progress=state=>({lamps:state.completed.includes(0),bridge:state.completed.includes(1),light:!!state.expedition?.opened,parts:state.campaign.legacyFinished?3:state.campaign.finalDone.length});
 C.mapHTML=state=>{const p=C.progress(state);return `<div class="story-map ${p.lamps?'lamps-on':''} ${p.bridge?'bridge-ready':''} ${p.light?'lighthouse-on':''}" role="img" aria-label="Peta pulau: lampu ${p.lamps?'menyala':'padam'}, jambatan ${p.bridge?'dipulihkan':'belum dipulihkan'}, rumah api ${p.light?'menyala sepenuhnya':p.parts+' daripada 3 bahagian menyala'}"><div class="story-island start-island"><span>🌴</span><div class="path-lamps"><i></i><i></i><i></i></div><strong>1 · Lampu laluan</strong></div><div class="story-bridge"><i></i><i></i><i></i><i></i><i></i><small>${p.bridge?'Jambatan pulih':'Jambatan rosak'}</small></div><div class="story-island end-island"><div class="lighthouse"><div class="beacon"></div><div class="tower"><i class="${p.parts>2?'lit':''}"></i><i class="${p.parts>1?'lit':''}"></i><i class="${p.parts>0?'lit':''}"></i></div></div><strong>3 · Rumah Api Selamat</strong></div><p class="map-status">${p.lamps?'✓ Lampu laluan':'○ Lampu laluan'} · ${p.bridge?'✓ Jambatan':'○ Jambatan'} · ${p.parts}/3 cahaya rumah api</p></div>`;};
})();
