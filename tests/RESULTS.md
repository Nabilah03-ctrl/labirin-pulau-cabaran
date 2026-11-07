# Keputusan ujian sebenar — kempen Rumah Api Selamat

Tarikh: 7 November 2026 (Asia/Kuala_Lumpur). Persekitaran: Windows, Chrome headless, pelayan HTTP tempatan dan profil pelayar ujian berasingan.

## Keputusan

| Suite | Keputusan | Skop utama |
|---|---:|---|
| `tests/browser.html` | 179 lulus | Laluan, dinding, tiga tahap, soalan/cuba semula, pintu automatik dan berkunci, misi akhir, sijil, CSV, simpan/sambung, kamera/pad telefon |
| `tests/learning.html` | 402 lulus | Menu, gambar/sandaran, panduan, latihan tanpa markah, tiga mod, kawalan, audio gagal, sorotan, rekod serta semua fail audio |
| `tests/campaign.html` | 271 lulus | Mekanik berbeza, objek pilihan, cerita/peta, misi watak, ganjaran sekali sahaja, koleksi, seretan/ketikan, variasi sesi, bantuan laluan dan penamat |
| Input sentuh Chrome DevTools | 2 lulus | Seretan kad bermula pada imej sebenar; ketikan kad/kategori selepas jawapan salah |

**852 semakan dalam tiga suite, ditambah dua semakan input sentuh pelayar, semuanya lulus.** Tiada ralat JavaScript direkodkan pada pelaksanaan berjaya ini. Ujian menggunakan kod aplikasi sebenar dalam iframe dan pergerakan melalui laluan labirin.

Ujian sentuh melalui `Input.dispatchTouchEvent` menemui isu penangkapan penuding apabila seretan bermula pada imej di dalam kad. Pengendalian kehilangan penangkapan penuding dibetulkan; ujian seretan serta ketikan dipercayai oleh pelayar kemudian lulus. Ini ialah emulasi Chrome, bukan ujian telefon fizikal.

## Perkara yang disahkan

- Tahap 1 mengenal pasti gambar; label tersembunyi sebelum jawapan. Salah/cuba semula tidak memilih soalan lain.
- Tahap 2 boleh diselesaikan menggunakan HTML drag/drop, ketikan kad kemudian kategori dan peristiwa sentuh. Pengelasan betul membuka pintu yang sepadan.
- Tahap 3 menggunakan Hud/asap, Izz/pelawaan dan Aini/bungkusan. Aini tidak melabel bungkusan tidak dikenali sebagai dadah selepas jawapan tindakan selamat. Animasi/ucapan terima kasih dan butang langkau berfungsi.
- Kemajuan lampu, jambatan dan rumah api sepadan dengan tahap. Sesi boleh disambung ketika cerita tahap belum diteruskan atau ketika hanya sebahagian misi akhir selesai.
- Ganjaran mempunyai pratonton; pengesahan berganda tidak menambah skor atau menduplikasi aksesori. Aini mengekalkan watak/tudung. Koleksi, aksesori dipakai dan koleksi selepas sesi baharu disimpan.
- Objek tambahan tidak membuka dialog secara automatik, boleh diperiksa semula dan ditanda selesai; tidak diwajibkan untuk keluar. Petunjuk arah menuju kemajuan wajib.
- Misi akhir meliputi kenal gambar, tindakan baharu dan susunan dengan konteks pelawaan. Urutan salah boleh dicuba semula; seretan dan ketikan menyokong penamat. Tiga cahaya, ringkasan bergambar/bersuara dan sijil tersedia.
- Bank tetap mempunyai tiga variasi bagi enam fokus. Set baharu berbeza, set semasa kekal selepas muat semula dan grid labirin sama semasa ulang main.
- Bantuan ditawarkan apabila kawasan dilalui berulang kali; bantuan tidak memberi jawapan atau menolak markah. Tempat semakan, kurangkan animasi, hentikan halangan, pad arah dan papan kekunci berfungsi.
- 171 teks katalog mempunyai rakaman sepadan. Semua 171 MP3 berjaya dinyahkod menggunakan AudioContext Chrome; metadata fail turut disahkan dengan Mutagen. Kegagalan fail audio dan ketiadaan suara Melayu tidak menghalang jawapan atau sambungan permainan.
- Tiga PNG dan enam SVG variasi dimuatkan; SVG sandaran juga diuji. Paparan kad telefon 390px, cerita/rumah api dan pratonton aksesori diperiksa melalui tangkapan skrin.

## Rentak permainan

| Tahap | Sel laluan utama | Jarak interaksi pertama | Objek pilihan |
|---|---:|---:|---:|
| Cari dan Kenali | 31 | 3 sel | 3 |
| Susun Bukti | 41 | 3 sel | 3 |
| Bantu Rakan Selamat | 51 | 3 sel | 3 |

Cabang tanpa tujuan dipendekkan kepada maksimum dua langkah dari laluan utama. Semua lokasi wajib, objek tambahan dan jalan keluar mempunyai laluan tanpa memasuki bahaya. Sasaran keseluruhan **10–15 minit belum disahkan bersama murid**; jarak berjalan dipendekkan supaya masa tertumpu pada membaca, mendengar dan berbincang.

## Bukti tempatan dan had

Laporan: `test-results-inspect-startup.html`, `test-results-final-learning2.html`, `test-results-final-campaign2.html`. Semakan sentuhan: pelaksanaan `trusted-touch3-mobile` melalui `.deploy-tools/browser_check.py`. Tangkapan skrin: `release-sort-mobile.png`, `campaign-ending2-desktop.png` dan pratonton aksesori.

Belum diuji: telefon fizikal, Safari/iOS, sesi sebenar bersama murid, dan pendengaran manusia terhadap sebutan/kelantangan pada pembesar suara. Suntingan teks guru memerlukan suara sistem Melayu jika tiada rakaman untuk teks baharu. Bank telah disemak untuk padanan kandungan oleh pembangun; lihat `BANK-REVIEW.md`, bukan pengesahan kurikulum rasmi.

Halaman ujian memulakan sesi contoh. Gunakan profil pelayar ujian berasingan supaya rekod murid sebenar tidak terjejas. Versi diterbitkan turut disemak terus melalui GitHub Pages seperti rekod di bawah.


## Pengesahan GitHub Pages

Versi kod `324e2b5de142bde633a4db4d22ace533b63d7027` disahkan pada 7 November 2026 melalui pautan sebenar https://nabilah03-ctrl.github.io/labirin-pulau-cabaran/.

Ketiga-tiga suite lulus semula: 179 semakan labirin, 402 semakan pembelajaran/audio dan 271 semakan kempen (**852 keseluruhan**). Semua 171 MP3 diterima daripada laman yang diterbitkan dan berjaya dinyahkod dalam Chrome. Tiada ralat JavaScript direkodkan dalam pelaksanaan berjaya.

Pemuatan awal gambar melebihi had masa pelaksanaan pertama pada sambungan ujian. Masa menunggu dilanjutkan; ujian susulan menggunakan profil pelayar ujian yang sama dengan cache aset, serta storan kemajuan dikosongkan antara suite. Sebahagian audio dimuat awal dengan empat permintaan serentak untuk mempercepat semakan; setiap rakaman tetap diuji oleh suite. Ini bukan penanda aras prestasi pemuatan pertama.

Bukti tempatan: `test-results-live-maze-campaign2.html`, `test-results-live-learning-campaign.html` dan `test-results-live-full-campaign2.html`.
