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
