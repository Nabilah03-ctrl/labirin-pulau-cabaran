# Keputusan ujian — Pulau 3D, 8 November 2026

## Ujian yang dijalankan

| Suite | Lulus | Bukti tempatan |
|---|---:|---|
| Aliran permainan 3D | 144 | test-results-island3d-final.html |
| Audio, aset, kegagalan audio dan draf | 264 | test-results-audio3d-cleanup-release.html |
| Input sebenar Chrome CDP | 8 | input3d-world-release-mobile, input3d-match-mobile, input3d-sentence-mobile, input3d-keypad-mobile |

**408 semakan fungsi/aset dan 8 semakan input.** Ujian visual separa serta percubaan terdahulu tidak ditambah kepada jumlah ini. Tiada ralat JavaScript pada ujian berjaya.

Aliran penuh: borang, cerita, lima langkah panduan, latihan bergerak/Siasat tanpa markah, tiga demonstrasi, empat soalan setiap stesen, jawapan salah dan petunjuk, padanan separa yang kekal betul, seret/lepas dan tekan, ayat dengan pengganggu, ganjaran sekali sahaja, tiga digit tersusun, kod salah, peti berengsel, ringkasan, sijil, guru dan migrasi rekod lama.

Pencarian laluan diuji melalui pergerakan fizikal simulasi masa ke semua stesen dan peti. Sungai menghalang stesen kedua sebelum jambatan dipulihkan; laluan menara hanya dibuka selepas stesen kedua. Rekod selesai dan soalan kekal selepas muat semula. CSV baharu menyimpan medan respons; CSV lama mengekalkan ID asal.

Audio: 122 pemetaan teks serta 122 fail MP3 dinyahkod melalui AudioContext Chrome. Bacaan pilihan A/B/C dan sasaran padanan tepat, suara lama dihentikan, kelantangan disimpan. Dengar Semua membaca frasa mengikut paparan tanpa membacakan ayat sasaran. Simulasi kegagalan rakaman dan ketiadaan suara Melayu tidak menghalang jawapan. PNG, SVG sandaran dan fon diperiksa; sijil memuatkan potret terbenam.

Input CDP menggunakan Input.dispatchKeyEvent dan Input.dispatchTouchEvent: papan kekunci bergerak, seretan peta berasingan daripada arahan berjalan, zum/Cari Watak, ketikan tanah hingga Siasat, seretan kad, alternatif tekan, percubaan semula ayat, serta Buku Kod/pad nombor. Lebar paparan sentuh 390 px. Seretan desktop turut disemak melalui DragEvent/DataTransfer dalam suite fungsi.

Paparan desktop dan telefon diperiksa melalui tangkapan skrin: halaman utama, dunia, kad padanan, susunan ayat dan pad kod. Dunia menggunakan WebGLRenderer dengan geometri sebenar. Renderer ujian menggunakan SwiftShader; keputusan ini bukan penanda aras GPU.

## Batas pengesahan

- Belum diuji bersama murid Tahun 2 atau pada komputer sekolah/tablet fizikal. Tempoh 10–15 minit dan kebolehgunaan memerlukan ujian pengguna.
- Tiada pengukuran prestasi peranti sasaran, walaupun had piksel/bayang dan penurunan kualiti automatik tersedia.
- Safari/iOS, cetakan pencetak fizikal dan sebutan melalui pembesar suara sebenar belum disahkan. SVG sijil telah dimuatkan; butang cetak menggunakan dialog pelayar.
- Suntingan guru yang tiada rakaman bergantung pada suara Melayu peranti. Jika tiada, teks dan permainan kekal tersedia.
- Peranti memerlukan WebGL 2. Jika gagal dimulakan, paparan menerangkan cara mencuba semula dan simpanan tidak dipadam.

Suite ujian menggunakan profil Chrome berasingan. Halaman ujian turut menyimpan dan memulihkan kedua-dua kunci simpanan asal setelah ujian penuh selesai. Sandaran kod lama dan aset dibuang disahkan sebelum pembersihan.
