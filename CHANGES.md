# Kemas kini 8 November 2026

- Satu dunia Three.js 3D menggantikan labirin 2D. Tanah, bukit, bangunan, watak, sungai, jambatan, kelapa, jeti, bot, pondok, khemah, gua dan peti berengsel mempunyai geometri.
- Tepat tiga stesen × empat soalan: aneka pilihan, padanan dan susun ayat dengan pengganggu.
- Pencarian laluan/perlanggaran, WASD, anak panah, klik/sentuh, pad arah, alih kamera, zum dan Cari Watak.
- Latihan tanpa markah, demonstrasi, petunjuk, cuba semula, padanan betul tersimpan dan draf ayat boleh disambung.
- Tiga digit akhir sahaja; jambatan, laluan menara dan rumah api berubah mengikut kemajuan. Penutup peti berputar pada engsel.
- 122 rakaman Melayu, bacaan item, ulang/henti/kelantangan, ilustrasi sandaran dan ringkasan bersuara.
- Sijil putih/biru/kuning dengan potret detektif dikekalkan. Menu mod, watak dan aksesori dibuang mengikut spesifikasi baharu.
- Rekod lama diarkibkan tanpa memadam kunci asal. CSV guru mengekalkan medan respons pertama dan terkini.

## Pembersihan

Sandaran disahkan sebelum pemadaman. **496 fail** dibuang daripada sumber/penerbitan aktif:

- 8 sumber: app.js, world.js, island-art.js, expedition.js, content.js, learning.js, campaign.js, styles.css.
- 5 ujian struktur lama diganti oleh tests/island3d.html dan tests/audio3d.html.
- 9 gambar/SVG: environment.png, island-hero.png, materials/dadah.png dan enam variasi SVG lama.
- 473 rakaman tidak dirujuk dan audio/ms-MY/legacy.json.

Import, rujukan dinamik, manifest audio dan senarai penerbitan disemak. Tiada service worker dalam aplikasi aktif. 122 audio aktif, dua PNG bahan, sprite potret sijil, fon dan lesen dikekalkan. ZIP eksport terdahulu dikekalkan sebagai bahan pemulihan pengguna. Laporan percubaan diarkibkan berasingan daripada kod terbitan.

Keputusan sebenar dan batas pengesahan ada dalam tests/RESULTS.md. Prestasi peranti fizikal serta tempoh sesi murid belum disahkan.

## Muka depan mengikut rujukan pengguna

Tajuk besar kuning/putih, kad nama dan kelas terus pada halaman, tiga potret Hud/Izz/Aini, dialog sambutan dan jalur tiga misi. Warna hijau laut, krim dan emas mengekalkan tema pulau. Cara Bermain, Bahan Detektif bersuara, bunyi, kurangkan animasi, Ruang Guru dan Sambung tersedia. Misi baharu masih memerlukan pengesahan jika kemajuan tersimpan. `island-home.js` dan `cover.css` mengasingkan reka bentuk muka depan daripada dunia 3D.

## Ilustrasi manusia pada semua soalan

14 ilustrasi 3D kartun baharu menggambarkan murid, rakan dan guru dengan ekspresi dan gerak badan yang jelas. Lapan soalan aneka pilihan/susunan ayat mempunyai gambar situasi utama; setiap empat soalan padanan mempunyai tiga kad bergambar manusia. Gambar berkaitan digunakan semula apabila fokusnya sama. Semua soalan kini bergambar.

Butang Besarkan gambar membuka paparan penuh, boleh ditutup dengan sentuhan, butang Tutup atau Escape. Fokus kembali kepada soalan dan kawalan pulau kekal dijeda. Kegagalan gambar memaparkan huraian Bahasa Melayu, bukannya rajah manusia geometri yang mengelirukan. Soalan, jawapan, audio dan simpanan tidak ditukar. Pemetaan mengikut ID soalan turut berfungsi pada sesi tersimpan.

Fail JPEG di assets/scenes/ (14 fail, 3,590,595 bait keseluruhan), dengan set prompt dan catatan pembaikan dalam assets/scenes/PROMPTS.md. Alat imagegen terbina dalam digunakan; PNG asal disimpan dalam .deploy-tools/scene-originals. Penukaran JPEG mengekalkan dimensi 1536 × 1024, tanpa mengubah kandungan gambar.

Bungkusan tidak dikenali tidak dilabel sebagai dadah. Poster tidak menggunakan pil atau picagari untuk mewakili semua dadah terlarang. Tiada gambar perbuatan mencuba atau mengambil bahan. Gambar Stesen 3 menggambarkan situasi sebelum murid memilih respons; gambar tindakan selamat digunakan pada kad yang memang meminta padanan tindakan dengan tujuan.
