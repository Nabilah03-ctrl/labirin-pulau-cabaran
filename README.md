# Labirin Pulau Cabaran: Misi Detektif Cilik

Permainan Pendidikan Kesihatan Tahun 2 dalam Bahasa Melayu. [Main di GitHub Pages](https://nabilah03-ctrl.github.io/labirin-pulau-cabaran/).

## Pengembaraan versi 8 November 2026

Rumah Api Selamat kehilangan cahaya. Hud, Izz dan Aini meneroka tiga pulau, menyelesaikan pembelajaran dan mengumpul kod untuk membuka peti harta di rumah api.

| Peta | Empat stesen utama | Pemandangan |
|---|---|---|
| Pantai & Jeti | Kenali tembakau, alkohol, dadah terlarang; padankan dua gambar | Pantai, jeti nelayan, teluk karang, perkhemahan |
| Batu & Gua | Dua pengelasan bukti; betul/salah; situasi penggunaan ubat | Batu, air terjun, gua cerah, menara tinjau |
| Rumah Api | Bantu Hud, Izz dan Aini; susun langkah keselamatan | Taman pesisir, jambatan, pondok bantuan, rumah api |

**12 soalan utama dalam satu sesi**, dipilih daripada bank tetap 36 entri dalam tiga set. Latihan, cerita dan memasukkan kod tidak dikira sebagai soalan. Tiada prompt utama berulang dalam satu sesi; sesi baharu memilih set berikutnya. Selepas tiga set, bank digunakan semula. Tiada penjanaan soalan secara langsung.

Sebelas aktiviti pilihan mengimbangkan jawapan A/B/C kepada 4/4/3, tanpa tiga huruf jawapan sama berturut-turut. Betul/salah mempunyai dua pilihan. Urutan aktiviti susunan tidak diacak. Pilihan, jawapan dan audio disimpan bersama sesi supaya percubaan semula tidak menukar soalan.

## Pintu dan peti harta

Setiap stesen memberi kad dua digit dengan nama pintu yang sepadan. Gunakan papan kekunci atau pad nombor untuk memasukkannya. **Buku Kod Detektif** sentiasa boleh dibuka; kod tidak perlu dihafal. Kod salah memberikan petunjuk tanpa memadam kemajuan. Pintu terbuka kekal terbuka, termasuk selepas menyambung sesi.

Empat stesen dan empat pintu mesti selesai untuk memperoleh satu digit harta bagi peta tersebut. Tiga ruang berasingan dalam buku menunjukkan urutan digit. Peti akhir berhampiran rumah api hanya terbuka selepas semua misi dan kod lengkap. Penamat menyediakan Lencana Wira Pulau Selamat, ringkasan bergambar dan bersuara, pilihan aksesori serta sijil.

Sijil mengekalkan bingkai biru/kuning, nama dan kelas, watak Hud/Izz, skor, tiga misi, lencana dan tarikh. Pratonton, muat turun dan cetak/simpan PDF dikekalkan.

## Peta, bantuan dan kawalan

Setiap peta mempunyai empat kawasan dengan stesen di empat penjuru. Laluan kayu menghubungkan kawasan; beberapa laluan alternatif wujud di dalam kawasan. Empat pokok kelapa kecil menjadi hiasan, bukannya dinding labirin. Batu, bangunan dan air mempunyai sempadan perlanggaran yang sepadan dengan lukisan. Ombak, burung, bot dan air terjun memberi suasana pulau.

- Kamera mengikuti watak dengan lancar; **Lihat seluruh pulau** memberi pandangan keseluruhan.
- Peta mini, tanda selesai, petunjuk arah dan tawaran bantuan apabila mengulang kawasan.
- Anak panah/WASD, pad arah tetikus/sentuh, E untuk Siasat dan P untuk petunjuk.
- Pengelasan dan susunan menyokong seretan atau ketikan. Soalan menjeda pergerakan.
- Empat objek maklumat pilihan setiap peta, dibuka melalui Siasat. Objek pilihan tidak menjadi syarat keluar.
- Mod Berpandu, Kendiri dan Kelas; latihan tanpa markah; demonstrasi; ulang arahan; kurangkan animasi; kelantangan audio.
- Versi peta ini tidak menggunakan halangan bergerak yang menghukum pemain. Tetapan lama dikekalkan untuk keserasian.

## Audio, cerita dan simpanan

465 rakaman MP3 aktif Bahasa Melayu (`ms-MY-YasminNeural`, bacaan 12% lebih perlahan), bersama 11 rakaman warisan. Katalog meliputi semua huruf pilihan, soalan, penerangan, cerita, panduan, kod dan ringkasan. Bacaan menyorot teks; menukar paparan menghentikan suara lama. Jika rakaman gagal, suara sistem Melayu boleh digunakan; jika tiada, permainan tetap boleh diteruskan dengan teks. Suntingan guru yang tiada rakaman memerlukan suara Melayu peranti.

Kemajuan disimpan dalam localStorage pada peranti yang sama selepas stesen dan pintu. Tiada akaun atau penghantaran nama murid ke pelayan permainan. Sesi lama mengekalkan jawapan, pintu terbuka dan koleksi; stesen keempat baharu perlu diselesaikan sebelum digit harta diberikan. Sepanduk menerangkan perubahan ini.

Ganjaran kosmetik tetap dan pilihan, termasuk bagi murid yang menggunakan bantuan. Aksesori tidak mengubah skor. Aini mengekalkan tudung dan pakaian sopan. Cerita dan animasi peti boleh dilangkau; kegagalan audio tidak menghalang pembelajaran.

## Menjalankan dan menguji

Laman statik tanpa proses binaan. Gunakan hos HTTP dengan semua fail akar dan folder `assets`. Modul tambahan: `expedition.js` (bank, kod, katalog) dan `island-art.js` (pemandangan kanvas). Fon dan audio disertakan secara tempatan.

`tests/expedition.html` menguji pengembaraan, migrasi dan bank. `tests/learning.html` menguji panduan, audio, latihan dan rekod guru. Ujian memadam storan permainan pada origin ujian; gunakan origin/profil pelayar berasingan. Halaman ujian lama menghala kepada suite pengembaraan semasa.

Lihat [keputusan ujian](tests/RESULTS.md), [semakan bank](tests/BANK-REVIEW.md), [perubahan](CHANGES.md) dan [asal aset](assets/ASSETS.md). CSV membantu pemerhatian guru; skor permainan bukan tahap penguasaan rasmi. Tempoh bermain dan kefahaman sebenar masih memerlukan ujian bersama murid.
