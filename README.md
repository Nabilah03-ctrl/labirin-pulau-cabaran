# Labirin Pulau Cabaran: Misi Detektif Cilik

Permainan web Pendidikan Kesihatan Tahun 2, sepenuhnya dalam Bahasa Melayu. Tema pulau tropika dan detektif menggunakan laut biru kehijauan, hijau tumbuhan, pasir keemasan dan pakaian detektif coklat. Ilustrasi serta sprite kartun 3D ialah aset asal yang dijana untuk projek ini.

## Mainkan

Buka `index.html` dalam Chrome, Microsoft Edge, Firefox atau Safari. Tiada pemasangan atau proses binaan diperlukan. Kekalkan folder `assets` bersama fail HTML, CSS dan JavaScript.

Untuk penerbitan, muat naik `index.html`, `styles.css`, `content.js`, `learning.js`, `audio-manifest.js`, `voice.js`, `world.js`, `app.js` dan folder `assets` ke hos web statik seperti GitHub Pages. Google Fonts hanya digunakan jika internet tersedia; fon sistem menjadi gantian.

Laman permainan: https://nabilah03-ctrl.github.io/labirin-pulau-cabaran/

## Penambahbaikan 7 November 2026

- **Kenali Bahan:** tiga ilustrasi besar, label, nota ubat, penerangan bersuara dan latihan tanpa markah. SVG sandaran muncul jika PNG gagal.
- **Cara Bermain:** enam langkah bergambar, suara, penerangan simbol dan demonstrasi kawalan. Latihan memerlukan murid bergerak, berhenti dan menjawab soalan contoh; boleh diulang dari jeda tanpa memadam kemajuan.
- **Audio Bahasa Melayu:** 72 fail MP3 tempatan, suara `ms-MY-YasminNeural` dengan kadar bacaan dikurangkan 12%. Dengar soalan, setiap pilihan, semua pilihan, petunjuk, penerangan atau ulang bacaan. Teks disorot; audio sebelumnya dibatalkan. Tiada muzik latar; bunyi ganjaran tidak dimainkan ketika suara membaca.
- **Mod Berpandu, Kendiri dan Kelas:** pilih semasa mendaftar atau dalam jeda. Mod Kelas membesarkan soalan dan memerlukan guru menekan Teruskan selepas jawapan betul. Tiada had masa.
- **Kawalan:** papan kekunci atau pad arah untuk tetikus/sentuh. Pad berada di luar kanvas.
- **Panduan Guru:** objektif, peralatan, langkah pengajaran, aktiviti berpasangan, perbincangan dan penilaian. Rekod mengikut tiga fokus merangkumi jawapan pertama, percubaan dan petunjuk. Skor tidak menentukan tahap penguasaan rasmi.

Label kategori disembunyikan dalam soalan pengecaman sehingga jawapan betul disahkan. Kegagalan audio tidak menghalang jawapan atau kemajuan.

## Audio dan batasan

Rakaman Melayu disertakan bersama aplikasi. Pengaktifan awal memerlukan tindakan pengguna. Jika rakaman gagal, hanya suara sistem berbahasa `ms` digunakan sebagai sandaran; bahasa lain tidak dipilih. Jika kedua-duanya gagal, mesej teks dipaparkan dan permainan boleh diteruskan.

**Teks baharu suntingan guru tidak mempunyai MP3 prajanaan.** Ia memerlukan suara Melayu pada peranti; jika tiada, teks boleh dibaca tanpa suara. Audio asal tidak digunakan untuk membaca teks yang berubah. Bunyi melalui pembesar suara/fon kepala, Safari/iOS dan telefon fizikal masih memerlukan semakan pengguna; ujian automatik menggunakan Chrome Windows dan paparan telefon 390px.

Peta teks/audio: `assets/audio/ms-MY/catalog.json`. Rekod aset dan prompt: `assets/ASSETS.md`. Perubahan: `CHANGES.md`. Keputusan ujian sebenar: `tests/RESULTS.md`.

## Tiga tahap

1. **Labirin Kenali Bahan:** tiga peti memperkenalkan tembakau, alkohol dan dadah. Selesaikan semuanya sebelum keluar.
2. **Labirin Jejak Bukti:** kelaskan tiga kad bukti. Setiap tugasan memberi kunci kepada satu pintu. Kunci digunakan dengan berinteraksi pada pintu.
3. **Labirin Pilihan Selamat:** bantu Hud, Izz dan Aini menolak pelawaan berbahaya, beredar dan mendapatkan bantuan. Lengkapkan semua lokasi sebelum masuk Rumah Api Selamat.

Labirin mempunyai simpang, lorong buntu, dinding dengan perlanggaran, kawasan berasap, jambatan rosak dan halangan perlahan di laluan sampingan. Semua lokasi wajib mempunyai laluan tanpa perlu memasuki kawasan berbahaya. Peta mini dan butang petunjuk menunjukkan kedudukan serta laluan ke sasaran wajib seterusnya.

## Kawalan

- Anak panah / WASD: bergerak.
- E: siasat petunjuk, gunakan kunci atau masuk jalan keluar.
- P: tunjukkan laluan menuju sasaran seterusnya.
- Tekan laluan berpasir untuk berjalan ke situ.
- Telefon/tablet: pad arah, Petunjuk dan Siasat.
- Escape atau butang jeda: rehat, bunyi, kurangkan animasi dan hentikan halangan bergerak.

Dialog menjeda simulasi. Jawapan memerlukan pemilihan serta pengesahan berasingan. Kesilapan pergerakan mengembalikan pemain ke tempat semakan tanpa mengubah jawapan, bintang atau bilangan percubaan pembelajaran. Tiada pemasa lalai.

## Kemajuan, guru dan sijil

Kemajuan serta suntingan soalan disimpan dalam localStorage pelayar pada peranti yang sama. Versi labirin menggunakan kunci storan baharu dan tidak memadam rekod versi lima pulau.

Ruang Guru menyediakan pemilihan mana-mana tahap, suntingan sembilan soalan/pilihan/petunjuk/penerangan, pelarasan halangan, semakan respons pertama dan bilangan percubaan, serta eksport CSV UTF-8. Ia ialah ruang kawalan tempatan tanpa sistem akaun atau pelayan.

Jawapan betul pertama memberi 10 bintang; betul selepas bimbingan memberi 5. Pengulangan tidak menggandakan ganjaran soalan yang sudah selesai. Penguasaan guru dinilai berasingan daripada bintang. Rekod pertama kekal ketika mengulang tahap; gunakan “Mulakan sesi murid baharu” untuk murid seterusnya.

Tiga tahap memberikan tiga lencana. Pada penamat, sijil SVG dengan nama dan kelas boleh dimuat turun dan dicetak melalui pelayar.

## Pengujian

`tests/browser.html` ialah ujian hujung ke hujung dalam pelayar sebenar. Ia menguji laluan selamat setiap labirin, perlanggaran dinding, kawalan, semua soalan, pintu berkunci, kunci, panduan arah, keluar, maklum balas cuba semula, tempat semakan, simpan/sambung, mod guru, CSV, sijil dan paparan 390 piksel.

Jalankan ujian dalam profil pelayar berasingan kerana ia memulakan sesi ujian baharu. Gunakan pelayan statik tempatan atau Chromium dengan `--allow-file-access-from-files` untuk ujian berasaskan fail. Keputusan semakan semasa terdapat dalam `tests/RESULTS.md`.

Maklumat aset dan prompt penjanaan disimpan dalam `assets/ASSETS.md`.
