# Labirin Pulau Cabaran: Misi Detektif Cilik

Permainan Pendidikan Kesihatan Tahun 2 dalam Bahasa Melayu, dengan tema pulau tropika dan detektif. Laman awam: https://nabilah03-ctrl.github.io/labirin-pulau-cabaran/

## Misi dan mekanik

Rumah Api Selamat kehilangan cahayanya. Hud, Izz dan Aini menyelesaikan tiga misi untuk membantu pasukan pulang.

1. **Cari dan Kenali:** cari tiga peti, kenali gambar dan pilih kategori. Label jawapan tersembunyi sehingga jawapan betul. Selepas tahap ini, lampu penunjuk menyala.
2. **Susun Bukti:** kelaskan kad maklumat kepada risiko kesihatan, pilihan selamat atau bantuan orang dewasa. Seret kad ke kategori atau tekan kad kemudian kategori. Pengelasan yang disahkan membuka pintu seterusnya. Selepas tahap ini, jambatan dipulihkan.
3. **Bantu Rakan Selamat:** bantu Hud memilih laluan bebas asap, Izz menolak pelawaan alkohol dan Aini meminta bantuan bagi bungkusan tidak dikenali. Animasi menunjukkan tindakan selamat dan ucapan terima kasih.

**Misi Rumah Api Selamat** di hujung tahap ketiga menggabungkan pengenalpastian, situasi baharu dan susunan TIDAK → BEREDAR → BERITAHU. Susunan menyokong seretan dan ketikan. Setiap kejayaan menyalakan satu bahagian rumah api. Kemajuan setiap bahagian disimpan; tiada keperluan mengulang seluruh tahap selepas jawapan salah.

## Pembelajaran dan kawalan

- Menu Kenali Bahan, Cara Bermain, Mula Bermain, Sambung Permainan, Panduan Guru dan Koleksi Saya.
- Galeri besar dengan nota ubat, tiga PNG pendidikan dan enam variasi SVG. Ilustrasi sandaran muncul jika fail gambar gagal.
- Panduan enam langkah, latihan bergerak/berhenti/menjawab tanpa markah, serta demonstrasi sebelum mekanik setiap tahap.
- Mod Berpandu, Kendiri dan Kelas. Mod Kelas membesarkan soalan dan guru memilih masa untuk meneruskan.
- Papan kekunci anak panah/WASD atau pad arah tetikus/sentuh. E untuk Siasat; P untuk petunjuk. Pad berada di luar kanvas.
- Petunjuk arah kekal tersedia di pengepala permainan. Bantuan ditawarkan selepas kawasan dilalui berulang kali. Terdapat tempat semakan, tanda selesai, pilihan kurangkan animasi dan hentikan halangan bergerak.
- Sembilan objek pilihan berhampiran laluan utama: papan tanda, buku, peti pembelajaran dan papan pesanan. Interaksi memerlukan tindakan pemain dan bukan syarat tersembunyi untuk keluar.

## Cerita, koleksi dan ulang main

Peta menunjukkan lampu, jambatan dan rumah api mengikut kemajuan. Dialog cerita maksimum dua ayat, dengan Teruskan, Ulang Suara, Langkau Animasi dan Jeda Animasi. Kegagalan audio tidak menghalang cerita atau soalan.

Setiap tahap menawarkan satu pilihan kosmetik tetap: hiasan topi, beg, kanta pembesar atau lencana. Pratonton menggunakan watak yang dipilih; Aini mengekalkan tudung. Aksesori tidak menambah skor atau kelebihan menjawab. Koleksi dan pilihan pemakaian disimpan, termasuk ketika memulakan set soalan baharu. Tiada pembelian atau ganjaran rawak.

Bank tetap mengandungi sekurang-kurangnya tiga variasi bagi enam fokus pembelajaran. Sesi baharu memilih set seterusnya; set semasa disimpan untuk Sambung Permainan. Soalan tidak berubah ketika cuba semula. Lihat [semakan bank](tests/BANK-REVIEW.md).

## Audio Bahasa Melayu

211 rakaman MP3 tempatan menggunakan `ms-MY-YasminNeural`, kadar bacaan dikurangkan 12%. Semua teks berada dalam `assets/audio/ms-MY/catalog.json` dan dipetakan oleh `audio-manifest.js`. Angka ini merangkumi semua variasi, bukan tempoh satu sesi.

Tersedia bacaan soalan, setiap pilihan, semua pilihan, petunjuk, penerangan, dialog, objek dan ringkasan. Bacaan menggunakan satu saluran, menyorot teks dan dibatalkan apabila paparan bertukar. Pengaktifan awal memerlukan tindakan pengguna. Jika fail gagal, hanya suara sistem Melayu digunakan; jika tiada, teks dan permainan tetap tersedia. Bunyi ganjaran tidak bertindih dengan suara; tiada muzik latar.

Teks baharu suntingan guru tidak mempunyai MP3 prajanaan dan memerlukan suara Melayu pada peranti. Audio lama tidak dipadankan kepada teks yang sudah berubah. Suntingan disimpan bersama sesi semasa; sesi baharu memilih bank seterusnya.

## Rekod dan penyimpanan

localStorage menyimpan nama/kelas, watak, set soalan, jawapan pertama, percubaan, petunjuk, kemajuan labirin/cerita/misi akhir, objek diperiksa dan aksesori. Tiada akaun, penghantaran nama ke pelayan atau penyegerakan merentas peranti.

Panduan Guru merangkumi objektif, peralatan, langkah, aktiviti berpasangan, perbincangan dan penilaian. CSV mengandungi respons, fokus pembelajaran, percubaan dan petunjuk. Skor permainan tidak menetapkan tahap penguasaan rasmi. Kesilapan pergerakan tidak mengurangkan skor pembelajaran. Sijil SVG boleh dimuat turun di penamat.

## Menjalankan dan menerbitkan

Buka `index.html` atau gunakan hos HTTP statik. Kekalkan `index.html`, `styles.css`, `content.js`, `learning.js`, `campaign.js`, `voice.js`, `audio-manifest.js`, `world.js`, `certificate.js`, `app.js` dan seluruh folder `assets`. Tiada proses binaan. Fon DM Sans/Fredoka disertakan secara tempatan bersama lesen OFL supaya muatan permainan tidak menunggu Google Fonts.

Lihat [perubahan](CHANGES.md), [keputusan ujian sebenar](tests/RESULTS.md) dan [rekod aset/prompt](assets/ASSETS.md). Halaman ujian memulakan sesi contoh; gunakan profil pelayar berasingan daripada rekod murid.

## Had pengesahan

Laluan utama dipendekkan kepada 19, 23 dan 27 sel; interaksi wajib pertama berada tiga sel dari permulaan. Tempoh 10–15 minit ialah sasaran reka bentuk, belum keputusan ujian bersama murid. Semakan sentuhan dibuat melalui emulasi Chrome; telefon fizikal, Safari/iOS serta pendengaran sebutan melalui perkakasan sebenar belum diuji. Internet diperlukan untuk muatan awal laman; tiada service worker luar talian.

## Sijil dan soalan yang berbeza

Sijil putih berbingkai biru-kuning memaparkan nama, kelas, bintang sebenar, tiga lencana dan watak Hud/Izz. Tersedia pratonton responsif, muat turun SVG lengkap dengan gambar terbenam, serta Cetak / Simpan PDF melalui dialog pelayar. Tiada masa atau kod kurikulum rekaan.

Setiap sesi mempunyai 12 tugasan penilaian dengan teks soalan berbeza. Tiga set menyediakan 33 soalan laluan/misi akhir yang berbeza sebelum kitaran bermula semula; latihan susunan keselamatan dikekalkan. Tahap 2 menilai jenis maklumat, cabaran akhir menggabungkan dua gambar dan memilih bantuan yang sesuai. Latihan kawalan menggunakan soalan Siasat, berbeza daripada latihan keselamatan awal. Soalan yang sudah dicuba dan suntingan guru disimpan ketika naik taraf; 11 rakaman lama dikekalkan untuk keserasian sesi tersebut.
