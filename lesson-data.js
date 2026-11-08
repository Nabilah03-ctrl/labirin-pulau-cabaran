'use strict';
window.LESSON={
 version:1,digits:['4','7','2'],stationNames:['Kenali Bahan','Siasat dan Padankan','Tindakan Selamat'],
 note:'Ubat hanya diambil mengikut arahan doktor atau orang dewasa yang bertanggungjawab. Bungkusan tidak dikenali tidak semestinya mengandungi dadah.',
 guide:[
 ['Bergerak di pulau','Tekan laluan untuk berjalan. Kamu juga boleh menggunakan anak panah, W, A, S, D atau butang arah. Seret peta untuk melihat kawasan lain; tekan Cari Watak untuk kembali.'],
 ['Masuk stesen','Tekan bangunan stesen, kemudian dekati pintunya dan tekan Masuk Stesen. Objek tambahan boleh disiasat jika kamu mahu.'],
 ['Jawab tiga jenis aktiviti','Di stesen pertama, pilih A, B atau C. Di stesen kedua, seret kad ke sasaran atau tekan kad kemudian sasaran. Di stesen ketiga, susun frasa menjadi ayat tindakan selamat.'],
 ['Kumpulkan tiga digit','Selesaikan empat soalan setiap stesen untuk mendapat satu digit. Buku Kod menyimpannya mengikut ruang pertama, kedua dan ketiga.'],
 ['Buka peti harta','Pergi ke halaman rumah api selepas tiga stesen selesai. Masukkan tiga digit daripada Buku Kod untuk membuka peti dan melihat sijil.']
 ],
 demos:[
 {title:'Cuba memilih jawapan',text:'Ini contoh tanpa markah. Pilih warna langit pada hari cerah, kemudian tekan Semak Jawapan.',options:['Biru','Merah','Hitam'],answer:0},
 {title:'Cuba padankan kad',text:'Ini contoh tanpa markah. Seret kad matahari ke sasaran Siang. Kamu juga boleh tekan kad, kemudian tekan sasaran.',card:'Matahari',target:'Siang'},
 {title:'Cuba susun frasa',text:'Ini contoh tanpa markah. Tekan Saya, kemudian suka belajar. Kamu juga boleh menyeret frasa ke ruang ayat.',cards:['Saya','suka belajar.']}
 ],
 story:[
 'Rumah Api Selamat kehilangan cahaya. Bantu Hud, Izz dan Aini menyelesaikan tiga stesen dan membuka peti harta karun.',
 'Jambatan sudah dipulihkan! Digit pertama ialah empat; mari ke bengkel bukti bersama Izz.',
 'Laluan ke menara sudah dibuka! Digit kedua ialah tujuh; Aini menunggu untuk berlatih tindakan selamat.',
 'Rumah api kembali bercahaya! Digit ketiga ialah dua; pasukan boleh menuju ke peti harta karun.'
 ],
 messages:{
 wrong:'Mari fikir semula. Gunakan petunjuk dan cuba lagi.',correct:'Syabas! Jawapan kamu tepat.',
 match:'Padankan semua kad dengan sasaran. Seret kad atau tekan kad kemudian tekan sasaran, lalu tekan Semak Jawapan.',
 sentence:'Pilih empat frasa yang sesuai dan susun menjadi satu ayat tindakan selamat. Satu frasa tidak diperlukan. Tekan Semak Jawapan apabila siap.',
 code:'Lihat tiga ruang dalam Buku Kod. Masukkan digit pertama, kedua dan ketiga untuk membuka peti.',
 wrongCode:'Semak tiga ruang Kod Harta Karun dalam Buku Kod dan cuba lagi.',
 training:'Latihan tanpa markah. Tekan bulatan bercahaya untuk bergerak, kemudian tekan Siasat apabila dekat.',
 trained:'Bagus! Kamu sudah bergerak dan menyiasat. Sekarang pergi ke Kem Detektif untuk Stesen Pertama.',
 summary:'Kamu sudah mengenali tembakau, alkohol dan dadah terlarang. Kamu boleh memadankan maklumat dan membina ayat tindakan selamat. Katakan TIDAK, beredar ke tempat selamat dan beritahu orang dewasa yang dipercayai.',
 victory:'Peti harta karun sudah terbuka! Kamu memperoleh Lencana Wira Pulau Selamat dan sijil pencapaian.'
 },
 extras:[
 {id:'sign',name:'Papan larangan',symbol:'🚭',text:'Simbol rokok bergaris merah bermaksud dilarang merokok. Pilih kawasan berudara bersih.',x:-12,z:28},
 {id:'book',name:'Buku petunjuk',symbol:'▤',text:'Tembakau, alkohol dan dadah ialah bahan ketagihan. Jauhi bahan ini dan dapatkan bantuan orang dewasa jika tidak pasti.',x:13,z:17},
 {id:'medicine',name:'Pesanan penjaga',symbol:'✚',text:'Ubat digunakan mengikut arahan doktor atau penjaga yang bertanggungjawab. Jangan mengambil ubat orang lain.',x:25,z:-8},
 {id:'help',name:'Pesanan Aini',symbol:'♧',text:'Jika menemui bungkusan tidak dikenali, jangan sentuh. Jauhkan diri dan beritahu guru atau penjaga.',x:-17,z:-20}
 ],questions:[]
};
(()=>{const L=LESSON;const mc=(i,p,options,answer,image,hint,explanation)=>({id:'s1q'+i,station:0,type:'choice',prompt:p,options,answer,image,hint,explanation});
 L.questions.push(
 mc(1,'Rokok mengandungi bahan apa?',['Alkohol','Tembakau','Gula'],1,'tembakau','Fikir tentang daun yang digunakan dalam rokok.','Betul! Rokok mengandungi tembakau. Jauhi rokok dan asapnya.'),
 mc(2,'Apakah bahan yang dinyatakan pada label minuman ini?',['Susu','Jus buah','Alkohol'],2,'alkohol','Baca perkataan pada label minuman.','Tepat! Label itu menyatakan alkohol. Pilih minuman yang selamat seperti air kosong.'),
 mc(3,'Yang manakah bahan ketagihan?',['Dadah terlarang','Air kosong','Buah-buahan'],0,'poster','Air kosong dan buah-buahan ialah pilihan untuk menjaga kesihatan.','Betul! Dadah terlarang ialah bahan ketagihan yang perlu dijauhi. Ubat mengikut arahan doktor berbeza daripada dadah terlarang.'),
 mc(4,'Pilih kumpulan yang mengandungi tiga bahan ketagihan.',['Tembakau, susu dan dadah','Tembakau, alkohol dan dadah','Alkohol, air kosong dan tembakau'],1,'team','Susu dan air kosong bukan bahan ketagihan.','Tepat! Tembakau, alkohol dan dadah ialah tiga bahan ketagihan yang kita pelajari.')
 );
 const match=(i,title,cards,targets,hint,explanation,images=[])=>({id:'s2q'+i,station:1,type:'match',prompt:title,cards,targets,images,answer:[0,1,2],hint,explanation});
 L.questions.push(
 match(1,'Kelaskan tiga bukti ini.',['Rokok','Minuman berlabel alkohol','Poster “Jauhi Dadah Terlarang”'],['Tembakau','Alkohol','Dadah'],'Lihat gambar dan baca label setiap kad.','Bagus! Rokok dipadankan dengan tembakau, minuman berlabel dengan alkohol, dan poster dengan dadah terlarang.',['tembakau','alkohol','poster']),
 match(2,'Padankan tanda dengan maksudnya.',['Simbol dilarang merokok','Papan “Jauhi Alkohol”','Papan “Jauhi Dadah”'],['Jangan merokok di kawasan ini','Elakkan minuman beralkohol','Jauhi dadah terlarang'],'Perhatikan simbol dan perkataan pada papan.','Tepat! Tanda larangan mengingatkan kita supaya menjauhi bahan ketagihan.',['no-smoking','alcohol-sign','drug-sign']),
 match(3,'Padankan situasi dengan tindakan selamat.',['Kawasan berasap rokok','Ditawarkan minuman beralkohol','Menemui bungkusan tidak dikenali'],['Pilih laluan lain','Tolak pelawaan','Jangan sentuh dan beritahu guru'],'Fikir cara menjauhkan diri daripada setiap risiko.','Betul! Pilih laluan bersih, tolak pelawaan dan minta bantuan. Kita tidak mengetahui isi bungkusan hanya daripada rupanya.'),
 match(4,'Padankan tindakan dengan tujuannya.',['Berkata “TIDAK”','Beredar ke tempat selamat','Memberitahu guru atau penjaga'],['Menolak pelawaan','Menjauhkan diri daripada bahaya','Mendapatkan bantuan'],'Fikir sebab kita melakukan setiap tindakan.','Hebat! Menolak, beredar dan memberitahu orang dewasa membantu kita menjaga keselamatan.')
 );
 const sentence=(i,p,cards,distractor,hint,explanation,image)=>({id:'s3q'+i,station:2,type:'sentence',prompt:p,cards:[...cards,distractor],answer:[0,1,2,3],hint,explanation,image});
 L.questions.push(
 sentence(1,'Rakan mengajak kamu mencuba rokok.',['Saya','menolak pelawaan itu','dan','memberitahu guru.'],'mencuba rokok itu','Mulakan dengan siapa yang bertindak. Pilih tindakan menolak dan mendapatkan bantuan.','Saya menolak pelawaan itu dan memberitahu guru. Beredar juga ke tempat selamat.','refuse'),
 sentence(2,'Seseorang menawarkan minuman beralkohol.',['Saya','menolak minuman itu','dan','beredar.'],'meminumnya sedikit','Nyatakan siapa yang bertindak, kemudian tindakan menolak dan meninggalkan tempat itu.','Saya menolak minuman itu dan beredar. Beritahu penjaga tentang pelawaan itu.','alcohol-offer'),
 sentence(3,'Kamu menemui bungkusan yang tidak dikenali.',['Saya','menjauhkan diri','dan','memberitahu guru.'],'membuka bungkusan itu','Mulakan dengan diri kamu. Pilih frasa yang menjauhkan kamu daripada bungkusan.','Saya menjauhkan diri dan memberitahu guru. Jangan sentuh bungkusan; kandungannya tidak diketahui.','package'),
 sentence(4,'Rakan mahu mencuba bahan yang tidak dikenali.',['Saya','menasihati rakan','supaya','tidak mencubanya.'],'mencubanya bersama-sama','Susun siapa yang bertindak, tindakan menasihati, kemudian tujuan nasihat itu.','Saya menasihati rakan supaya tidak mencubanya. Dapatkan juga bantuan guru atau penjaga yang dipercayai.','friend')
 );
 L.audioCatalog=()=>{const texts=new Set(),add=t=>t&&texts.add(t);L.questions.forEach((q,i)=>{add('Soalan '+(i%4+1)+'. '+q.prompt);(q.options||[]).forEach((o,j)=>add('Pilihan '+['A','B','C'][j]+'. '+o));[...(q.cards||[]),...(q.targets||[]),q.hint,q.explanation].forEach(add);});L.guide.forEach(([a,b])=>add(a+'. '+b));L.demos.forEach(d=>{add(d.text);[...(d.options||[]),...(d.cards||[]),d.card,d.target].forEach(add);});L.story.forEach(add);Object.values(L.messages).forEach(add);L.extras.forEach(e=>add(e.text));add(L.note);['Digit pertama ialah empat.','Digit kedua ialah tujuh.','Digit ketiga ialah dua.'].forEach(add);return [...texts];};
 window.audioCatalog=L.audioCatalog;
})();
