# Pulau Cabaran: Misi Detektif Cilik

Permainan Pendidikan Kesihatan Tahun 2 dalam satu pulau 3D sebenar. Kemas kini 8 November 2026 menggantikan labirin 2D dengan tepat tiga stesen dan 12 soalan utama.

[Main permainan](https://nabilah03-ctrl.github.io/labirin-pulau-cabaran/)

## Aliran pembelajaran

1. Nama panggilan dan kelas → cerita → panduan dan latihan kawalan tanpa markah.
2. **Kenali Bahan:** empat soalan aneka pilihan A/B/C.
3. **Siasat dan Padankan:** empat soalan dengan tiga pasangan setiap satu. Seret kad atau tekan kad kemudian sasaran. Padanan betul dikekalkan ketika mencuba semula.
4. **Tindakan Selamat:** empat situasi, setiap satu dengan empat frasa jawapan dan satu pengganggu. Seret atau tekan frasa untuk menyusun ayat. Jawapan penuh muncul selepas respons tepat.
5. Selesai empat soalan memberikan satu digit: **4, 7, 2**. Jambatan dipulihkan, laluan menara dibuka, kemudian rumah api menyala.
6. Gunakan Buku Kod untuk membuka peti 3D, menerima Lencana Wira Pulau Selamat, mendengar ringkasan dan memuat turun/cetak sijil.

Tiada kod pintu, kod setiap soalan, pilihan mod, aksesori, pembelian atau pemasa ketat. Soalan selesai tidak diulang dalam sesi. Kesalahan dan bantuan tidak memadam kemajuan atau mengurangkan markah.

## Kawalan dan audio

- Tekan/sentuh tanah atau objek: cari laluan sah. Anak panah/WASD dan pad arah ialah alternatif.
- Seret peta: alih kamera. Roda tetikus, cubitan atau butang +/−: zum. **Cari Watak** memusatkan kamera.
- **Siasat / Masuk Stesen** berfungsi apabila dekat. Objek tambahan ditandakan pilihan dan bukan syarat kemajuan.
- **Petunjuk Arah** menunjukkan laluan, bukan jawapan. **Jeda** menyediakan kurangkan pergerakan dan panduan.

122 rakaman Bahasa Melayu dibungkus bersama permainan, berjumlah 750.1 saat bagi seluruh katalog. Butang dengar setiap item, Dengar Semua, ulang, henti dan kelantangan tersedia. Teks suntingan guru menggunakan suara Melayu peranti jika tersedia; tiada penggantian senyap dengan bahasa lain. Kegagalan audio tidak menghalang jawapan. Tiada muzik latar yang bersaing dengan bacaan.

## Menjalankan secara tempatan

Gunakan pelayan HTTP statik kerana dunia menggunakan modul JavaScript, contohnya `python -m http.server 8788`, kemudian buka `http://localhost:8788/`. `file://` tidak disokong. Three.js r170 dan fon dibungkus setempat; tiada CDN diperlukan. Pelayar memerlukan WebGL 2 dan pecutan grafik.

| Fail | Tanggungjawab |
|---|---|
| island-world.js | Geometri 3D, kamera, animasi, perlanggaran dan pencarian laluan |
| island-app.js | UI, tiga mekanik, guru, kod dan penamat |
| lesson-data.js | 12 soalan tetap, panduan, dialog dan katalog audio |
| progress.js | Simpanan, rekod respons dan migrasi |
| illustrations.js | SVG/PNG, sandaran dan potret sijil |
| voice.js, audio-manifest.js | Saluran audio tunggal dan rakaman Melayu |
| certificate.js | Sijil SVG dan cetakan |
| island.css | Susun atur responsif dan pengurangan animasi |

## Simpanan dan guru

Simpanan baharu: `pulau-cabaran-3d-v1`. Kunci lama `labirin-pulau-v2` tidak dipadam. Profil diimport dan seluruh keadaan lama diarkibkan dalam simpanan baharu. Respons dan sijil terdahulu tersedia melalui Ruang Guru; soalan baharu bermula belum dijawab kerana aktiviti berbeza. Kemajuan disimpan pada pelayar/peranti, bukan akaun awan.

Ruang Guru menyediakan panduan, suntingan sesi, respons pertama berbanding selepas bantuan, bilangan petunjuk dan CSV semua medan rekod. Skor bukan tahap penguasaan rasmi. Suntingan tidak menambah soalan atau menukar mekanik stesen.

## Pengesahan dan batas

Lihat [laporan ujian](tests/RESULTS.md) dan [semakan kandungan](tests/BANK-REVIEW.md). Ujian meliputi aliran penuh, audio, migrasi dan input papan kekunci/sentuh melalui Chrome CDP. Visual diperiksa pada desktop dan lebar 390 px.

Had piksel, bayang 1024 px dan penurunan kualiti automatik tersedia. Prestasi pada komputer sekolah/tablet fizikal, tempoh sesi murid, kefahaman dan sebutan melalui pembesar suara sebenar belum disahkan. Tiada dakwaan kadar bingkai atau prestasi universal.

Sandaran: `.deploy-tools/backups/pre-3d-20261108.zip` dan `removed-3d-20261108.zip`. Komit terdahulu `501f69bdce9d22fa1fc4362dd5bf0613db4b43c5` ialah titik pemulihan tambahan. Alat dan sandaran tempatan tidak diterbitkan.
