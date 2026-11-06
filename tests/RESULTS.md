# Keputusan ujian — penambahbaikan pembelajaran

Tarikh: 7 November 2026 (Asia/Kuala_Lumpur). Chrome headless pada Windows; JavaScript aplikasi sebenar dalam iframe, simulasi pergerakan dan interaksi DOM. Pelayan HTTP tempatan digunakan untuk menguji muatan aset dan audio.

## Keputusan tempatan

- `tests/browser.html`: **194 semakan lulus**. Ketiga-tiga labirin diselesaikan, sembilan soalan dijawab, enam pintu dibuka, sijil dan CSV dijana, kemajuan disambung selepas muat semula. Semakan turut meliputi dinding, laluan wajib, bahaya/tempat semakan, tiada penalti pergerakan, kawalan sentuh, kamera 390px dan tiada ralat JavaScript.
- `tests/learning.html`: **203 semakan lulus**. Menu, tiga PNG sebenar, label tersembunyi/didedahkan, SVG sandaran, panduan enam langkah, ulang panduan/latihan, tiga mod, pilihan kawalan, jeda soalan, sambungan oleh guru, simpan/sambung, ringkasan fokus dan petunjuk.
- Katalog mempunyai **72 rakaman Melayu**, sekitar **571 saat** keseluruhannya. Setiap teks katalog mempunyai fail sepadan; kesemua 72 MP3 berjaya dinyahkod menggunakan AudioContext Chrome. Metadata fail juga disahkan menggunakan Mutagen.
- Main/berhenti/ganti bacaan dan sorotan diperiksa dengan audio sebenar. Kes rakaman tidak sah dan tiada suara Melayu disimulasikan; pemain masih boleh menjawab, guru meneruskan dan kemajuan disimpan. Tiada pertukaran automatik ke bahasa lain.
- Paparan galeri desktop 1440px dan soalan kelas telefon 390px diperiksa melalui tangkapan skrin. Gambar jelas dan label tidak membocorkan jawapan; dialog panjang boleh ditatal. Pad berada di luar kanvas.

Jumlah: **397 semakan automatik lulus**, ditambah pemeriksaan visual.

Fail laporan tempatan: `test-results-final-maze2.html`, `test-results-audio-failure-final.html`. Tangkapan skrin: `learn3-desktop.png`, `question3-mobile.png`, `upgrade-home-desktop.png`.

## Had pengesahan

- Ujian tidak menggantikan semakan manusia terhadap sebutan dan bunyi melalui pembesar suara sebenar.
- Paparan telefon diuji pada lebar 390px; belum diuji pada telefon fizikal atau Safari/iOS. Sokongan audio dan gerak isyarat pelayar boleh berbeza.
- Rakaman prajanaan meliputi kandungan asal sahaja. Suntingan guru memerlukan suara sistem Melayu; jika tiada, mesej menerangkan bahawa teks boleh dibaca tanpa audio.
- Semua storan adalah tempatan kepada pelayar/peranti. Tiada penyegerakan akaun atau tahap penguasaan rasmi automatik.

## Semakan selepas penerbitan

Jalankan kedua-dua halaman ujian terhadap domain GitHub Pages menggunakan profil pelayar ujian berasingan. Jangan jalankan halaman ujian dalam profil yang mengandungi kemajuan murid sebenar kerana ujian memulakan sesi contoh.
