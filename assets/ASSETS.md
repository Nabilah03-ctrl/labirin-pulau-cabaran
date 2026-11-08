# Aset aktif — 8 November 2026

## Dunia 3D

island-world.js membina geometri asal melalui Three.js: terrain, pantai, jalan, bangunan, detektif, kelapa, jambatan, batu, pondok, khemah, jeti, bot, air terjun, gua, rumah api dan peti berengsel. Tekstur rumput/pasir dijana melalui CanvasTexture. Dunia bukan satu gambar latar rata dan tidak memerlukan model GLTF luar.

Three.js r170 dibungkus dalam vendor/three.module.js. [Sumber rasmi r170](https://github.com/mrdoob/three.js/tree/r170); lesen MIT dalam vendor/THREE-LICENSE.txt. Kamera ortografik, cahaya hemisfera/arah dan bayang lembut. Rujukan pulau pengguna digunakan sebagai inspirasi suasana.

## Ilustrasi dan sijil

- detectives.png: sprite asal projek untuk potret Hud/Izz pada sijil.
- materials/tembakau.png: daun dan rokok tidak menyala dengan simbol larangan; tiada jenama/penggunaan.
- materials/alkohol.png: botol dan gelas; label ALKOHOL ditambah oleh HTML.
- illustrations.js: SVG kod asal untuk poster, situasi, pasukan dan sandaran PNG. Bungkusan neutral tidak dianggap dadah berdasarkan rupa.
- certificate.js: SVG berdiri sendiri dengan potret dibenamkan dan bingkai rujukan putih/biru/kuning.

Aset raster dijana dalam kerja terdahulu. Prompt dan dokumentasi asal disimpan dalam sandaran sebelum migrasi; tiada raster baharu dijana untuk dunia 3D ini.

## Audio dan fon

122 MP3 dipetakan oleh audio-manifest.js. audio/ms-MY/catalog.json menyimpan teks, suara dan tempoh tepat. Jumlah 750.1 saat ialah seluruh katalog, bukan satu sesi. Dijana dengan edge-tts, ms-MY-YasminNeural, kadar -12%. Semua MP3 dinyahkod oleh Chrome; sebutan pembesar suara fizikal belum disemak manusia.

Fon tempatan DM Sans dan Fredoka berasal daripada Google Fonts; lesen OFL masing-masing disertakan. Ketiga-tiga PNG, fon, vendor dan 122 audio mempunyai rujukan aktif. Aset tidak digunakan telah diarkibkan dan dikeluarkan daripada penerbitan.

## Ilustrasi manusia pada semua soalan

14 ilustrasi 3D kartun baharu menggambarkan murid, rakan dan guru dengan ekspresi dan gerak badan yang jelas. Lapan soalan aneka pilihan/susunan ayat mempunyai gambar situasi utama; setiap empat soalan padanan mempunyai tiga kad bergambar manusia. Gambar berkaitan digunakan semula apabila fokusnya sama. Semua soalan kini bergambar.

Butang Besarkan gambar membuka paparan penuh, boleh ditutup dengan sentuhan, butang Tutup atau Escape. Fokus kembali kepada soalan dan kawalan pulau kekal dijeda. Kegagalan gambar memaparkan huraian Bahasa Melayu, bukannya rajah manusia geometri yang mengelirukan. Soalan, jawapan, audio dan simpanan tidak ditukar. Pemetaan mengikut ID soalan turut berfungsi pada sesi tersimpan.

Fail JPEG di assets/scenes/ (14 fail, 3,590,595 bait keseluruhan), dengan set prompt dan catatan pembaikan dalam assets/scenes/PROMPTS.md. Alat imagegen terbina dalam digunakan; PNG asal disimpan dalam .deploy-tools/scene-originals. Penukaran JPEG mengekalkan dimensi 1536 × 1024, tanpa mengubah kandungan gambar.

Bungkusan tidak dikenali tidak dilabel sebagai dadah. Poster tidak menggunakan pil atau picagari untuk mewakili semua dadah terlarang. Tiada gambar perbuatan mencuba atau mengambil bahan. Gambar Stesen 3 menggambarkan situasi sebelum murid memilih respons; gambar tindakan selamat digunakan pada kad yang memang meminta padanan tindakan dengan tujuan.
