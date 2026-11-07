'use strict';
// Fixed, reviewed learning content. Session selection never generates new questions.
(()=>{
 const legacyTexts=audioCatalog(),E=window.EXPEDITION={version:1,count:4};
 E.regions=[['Pantai Kerang','Jeti Nelayan','Teluk Karang','Kem Kelapa'],['Batu Ombak','Air Terjun','Gua Cerah','Menara Tinjau'],['Taman Pesisir','Jambatan Kayu','Pondok Bantuan','Bukit Rumah Api']];
 E.codes=[['24','57','83','16'],['39','62','45','78'],['91','26','54','87']];E.digits=['4','7','2'];E.words=['sifar','satu','dua','tiga','empat','lima','enam','tujuh','lapan','sembilan'];
 E.door=(level,order)=>({id:`p${level}-d${order}`,level,order,name:'Pintu '+E.regions[level][order],code:E.codes[level][order]});
 E.codeText=d=>'Kod '+d.name+': '+[...d.code].map(n=>E.words[+n]).join(', ')+'.';
 E.digitText=n=>'Digit '+['pertama','kedua','ketiga'][n]+' Kod Harta Karun ialah '+E.words[+E.digits[n]]+'.';
 E.messages={card:'Kad kod disimpan dalam Buku Kod Detektif. Pergi ke pintu yang sepadan. Kamu boleh melihat kad ini semula.',wrong:'Semak kad kod pintu ini dan cuba lagi.',opened:'Kod tepat! Pintu terbuka dan tempat semakan disimpan.',gate:'Masukkan dua digit pada kad kod pintu ini. Buka Buku Kod jika perlu.',treasure:'Tiga digit harta karun sudah lengkap. Masukkan mengikut ruang satu, dua dan tiga dalam Buku Kod Detektif.',wrongTreasure:'Semak tiga ruang Kod Harta Karun dalam Buku Kod dan cuba lagi.',victory:'Peti harta karun terbuka! Kamu memperoleh Lencana Wira Pulau Selamat, sijil dan pilihan aksesori. Mari ingat semula perkara yang dipelajari.',orderHint:'Tolak pelawaan dahulu. Kemudian beredar dan beritahu orang dewasa yang dipercayai.'};
 const q=(id,level,title,prompt,options,answer,hint,explanation,extra={})=>({id,level,title,prompt,options,answer,hint,explanation,focus:title,...extra});
 E.bank=[[],[],[]];
 for(let v=0;v<3;v++){
  const old=CAMPAIGN.makeSet(v);
  E.bank[v].push(...old.filter(x=>x.level===0).map(x=>({...x,variant:v})));
  const pairs=[['tembakau','alkohol'],['alkohol','dadah'],['tembakau','dadah']],answers=[['Tembakau, kemudian alkohol','Alkohol, kemudian tembakau','Tembakau, kemudian dadah'],['Alkohol, kemudian dadah','Dadah, kemudian alkohol','Alkohol, kemudian tembakau'],['Tembakau, kemudian dadah','Dadah, kemudian tembakau','Tembakau, kemudian alkohol']];
  E.bank[v].push(q('kenali-4',0,'Padankan dua gambar',['Peti pantai mengandungi dua kad. Padankan nama bahan dari kiri ke kanan.','Dua ilustrasi dihantar ke jeti. Pasangan nama manakah sepadan dari kiri ke kanan?','Gabungkan dua gambar pada papan petunjuk. Pilih padanan dari kiri ke kanan.'][v],answers[v],0,'Perhatikan setiap gambar satu demi satu, dari kiri ke kanan.','Tepat! '+answers[v][0]+'. Gambar ini ialah kad pembelajaran tentang bahan yang perlu dijauhi.',{images:pairs[v],variant:(v+1)%3}));
  for(let i=0;i<2;i++){const card=CAMPAIGN.evidence[i];E.bank[v].push(q('bukti-'+(i+1),1,['Kelaskan risiko','Kelaskan pilihan selamat'][i],'Kad bukti: '+card.cards[v]+' Apakah jenis maklumat ini?',['Risiko kesihatan','Pilihan selamat','Bantuan orang dewasa'],i,card.hint,card.explanation,{mechanic:'sort',cardText:card.cards[v],cardSymbol:card.symbol}));}
  const tf=[['Kita boleh mengetahui isi bungkusan tidak dikenali hanya dengan melihat rupanya.',false,'Rupa bungkusan tidak memberitahu kandungannya. Jangan sentuh dan minta bantuan guru.'],['Ubat yang diberi doktor mesti diambil mengikut arahan yang betul.',true,'Ubat digunakan mengikut arahan doktor atau penjaga yang bertanggungjawab. Jangan menukar sukatan sendiri.'],['Semua botol minuman mengandungi alkohol.',false,'Bentuk botol sahaja tidak menentukan isinya. Tanya penjaga jika tidak pasti dan pilih minuman yang selamat.']][v];
  E.bank[v].push(q('bukti-3',1,'Semak kenyataan','Betul atau salah? '+tf[0],['Betul','Salah'],tf[1]?0:1,'Fikir sama ada kenyataan ini tepat untuk semua keadaan.',tf[2],{mechanic:'truth',cardText:tf[0],cardSymbol:'?'}));
  const med=[['Doktor memberi ubat kepada Izz. Bagaimanakah ubat itu patut digunakan?',['Ikut arahan doktor dan penjaga','Ikut sukatan ubat seorang rakan','Tambah sukatan supaya cepat pulih']],['Penjaga kurang pasti tentang sukatan ubat pada label. Apakah tindakan sesuai?',['Tanya doktor atau ahli farmasi','Teka sukatan daripada saiz botol','Ikut sukatan yang digunakan jiran']],['Rakan menawarkan ubatnya apabila kamu tidak sihat. Apakah pilihan selamat?',['Tanya penjaga sebelum ambil ubat','Ambil ubat rakan tanpa bertanya','Pilih sendiri ubat yang serupa']]][v];
  E.bank[v].push(q('bukti-4',1,'Situasi penggunaan ubat',med[0],med[1],0,'Ubat dan sukatannya perlu mengikut arahan orang dewasa yang bertanggungjawab.','Betul! Dapatkan arahan doktor, ahli farmasi atau penjaga. Jangan meneka sukatan atau berkongsi ubat sesuka hati.',{cardText:'Ubat: ikut arahan yang betul',cardSymbol:'✚'}));
  const situations=[
   [
    ['Hud melihat asap rokok di laluan ke jeti. Apakah pilihan selamat?',['Pilih laluan bersih bersama guru','Tutup hidung lalu terus dalam asap','Tunggu berhampiran orang merokok']],
    ['Orang di pondok mengajak Izz mencuba minuman beralkohol. Apakah pilihan selamat?',['Tolak, beredar dan beritahu penjaga','Tolak tetapi simpan minuman itu','Terima dahulu dan minum sedikit']],
    ['Aini melihat bungkusan tanpa pemilik di pantai. Apakah tindakannya?',['Jangan sentuh; jauh dan beritahu guru','Alihkan bungkusan itu ke tempat lain','Buka sedikit untuk mencari nama']]
   ],
   [
    ['Hud dan rakannya menunggu bot apabila seseorang mula merokok. Apakah tindakannya?',['Ajak rakan berpindah ke tempat bersih','Duduk lebih rapat dan tutup hidung','Tunggu asap hilang di tempat sama']],
    ['Izz diberi hadiah minuman beralkohol. Apakah tindakan selamat?',['Tolak hadiah dan cari penjaga','Simpan hadiah supaya tidak menyinggung','Terima hadiah dan cuba seteguk']],
    ['Seorang rakan mahu membuka bungkusan tidak dikenali di gua. Bagaimanakah Aini membantu?',['Ajak rakan menjauh dan panggil guru','Bantu rakan membuka dari tepi','Ambil bungkusan untuk diperiksa sendiri']]
   ],
   [
    ['Asap rokok masuk ke tempat Hud berehat. Apakah yang patut dilakukan?',['Beredar ke udara bersih bersama penjaga','Bertahan di situ sambil menutup muka','Dekati punca asap untuk memeriksa']],
    ['Izz dicabar mencuba alkohol supaya dianggap berani. Apakah responsnya?',['Tolak cabaran, beredar dan cari penjaga','Cuba sedikit supaya diterima kumpulan','Simpan minuman untuk dicuba kemudian']],
    ['Aini ternampak adik menghampiri bungkusan tidak dikenali. Apakah tindakan selamat?',['Ajak adik menjauh dan beritahu penjaga','Suruh adik membawa bungkusan itu','Buka bungkusan untuk memastikan isi']]
   ]
  ][v];
  situations.forEach((row,i)=>{const who=['Hud','Izz','Aini'][i];E.bank[v].push(q('selamat-'+(i+1),2,['Cari laluan selamat','Berani menolak','Dapatkan bantuan'][i],row[0],row[1],0,['Cari udara bersih dan kekal bersama guru atau penjaga.','Kamu boleh menolak pelawaan, beredar dan mendapatkan bantuan.','Jangan sentuh bungkusan itu. Jauhkan diri dan beritahu orang dewasa.'][i],['Pilihan selamat! Hud menjauhi asap rokok dan berada bersama orang dewasa yang dipercayai.','Betul! Izz menolak pelawaan, beredar dan memberitahu penjaga. Tidak perlu mencuba untuk menjaga hati orang lain.','Tepat! Aini menjauh, tidak menyentuh bungkusan dan mendapatkan bantuan. Kita tidak tahu kandungannya hanya berdasarkan rupa.'][i],{character:who,image:['tembakau','alkohol','dadah'][i],variant:v,scene:CAMPAIGN.reactions[who].thanks}));});
  E.bank[v].push(q('selamat-4',2,'Susun tindakan selamat',['Dalam perjalanan pulang, seorang kenalan mengajak kamu mencuba rokok. Susun langkah selamat.','Semasa berehat, seseorang memujuk kamu mencuba bahan ketagihan. Susun tindakan kamu.','Di kawasan perkhemahan, kamu diajak mencuba rokok. Susun langkah untuk mendapatkan keselamatan.'][v],CAMPAIGN.orderSteps,0,E.messages.orderHint,CAMPAIGN.orderCorrect,{mechanic:'sequence',cardText:'Tolak pelawaan berbahaya',cardSymbol:'✋'}));
 }
 E.makeSet=(variant,seed=1)=>{
  let n=(seed>>>0)||1;const random=()=>{n=(n*1664525+1013904223)>>>0;return n/4294967296;};
  const set=E.bank[((variant%3)+3)%3].map(x=>({...x,options:[...x.options]}));let targets;
  for(let attempt=0;attempt<1000;attempt++){targets=[0,0,0,0,1,1,1,1,2,2,2];for(let i=targets.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[targets[i],targets[j]]=[targets[j],targets[i]];}if(targets[6]<2&&!targets.some((x,i)=>i>1&&targets[i-1]===x&&targets[i-2]===x))break;}
  if(targets[6]===2||targets.some((x,i)=>i>1&&targets[i-1]===x&&targets[i-2]===x))targets=[1,2,0,2,1,0,1,2,0,1,0];
  set.forEach((item,i)=>{item.order=i%4;if(item.mechanic==='sequence')return;const correct=item.options[item.answer],others=item.options.filter((_,j)=>j!==item.answer);if(random()<.5)others.reverse();item.answer=targets[i];others.splice(item.answer,0,correct);item.options=others;item.wrong=item.options.map((s,j)=>j===item.answer?'':item.hint);});return set;
 };
 CAMPAIGN.demos[0]='Cari empat stesen di pantai, jeti, teluk dan perkhemahan. Selesaikan soalan untuk mendapat kad kod pintu yang sepadan.';
 CAMPAIGN.demos[1]='Seret kad bukti atau tekan kad kemudian kategori. Selepas menjawab, ambil kad kod dan masukkan nombornya di pintu yang sepadan.';
 CAMPAIGN.demos[2]='Bantu tiga rakan membuat pilihan selamat, kemudian susun langkah keselamatan di stesen keempat. Kumpulkan empat kad kod untuk membuka laluan ke rumah api.';
 LEARNING.guide[5]={title:'6. Buka pintu kod',text:'Selepas setiap stesen, lihat kad kod dua digit. Masukkan kod di pintu yang sepadan; semua kad disimpan dalam Buku Kod Detektif.',symbol:'exit'};
 E.catalog=()=>{const all=new Set(),add=s=>{if(s)all.add(s);};E.bank.forEach(set=>set.forEach((x,i)=>{add('Soalan '+(i%4+1)+'. '+x.prompt);add(x.prompt);x.options.forEach(s=>['A','B','C'].forEach(l=>add('Pilihan '+l+'. '+s)));[x.hint,x.explanation,x.scene].forEach(add);}));Object.values(E.messages).forEach(add);CAMPAIGN.demos.forEach(add);LEARNING.guide.forEach(g=>add(g.title+'. '+g.text));for(let n=0;n<3;n++){add(E.digitText(n));for(let i=0;i<4;i++)add(E.codeText(E.door(n,i)));}return [...all];};
 window.audioCatalog=()=>[...new Set([...legacyTexts,...E.catalog()])];
 PULAU.levels.forEach((l,i)=>Object.assign(l,{cols:25,rows:21,name:['Pulau Pantai & Jeti','Pulau Batu & Gua','Pulau Rumah Api'][i],short:['Pantai & Jeti','Batu & Gua','Rumah Api'][i],description:['Teroka pantai, jeti dan teluk. Kenali bahan, kumpul empat kad kod dan digit harta pertama.','Siasat kawasan berbatu, air terjun dan gua. Kelaskan bukti dan semak situasi selamat.','Bantu rakan di pesisir pulau. Lengkapkan empat stesen dan buka peti harta di rumah api.'][i]}));
})();
