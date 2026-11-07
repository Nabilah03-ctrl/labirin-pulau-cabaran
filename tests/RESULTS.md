# Keputusan versi pulau dan kod — 8 November 2026

Chrome pada hos HTTP tempatan, profil ujian berasingan. **1,420 semakan lulus dan empat ujian input sentuh sebenar melalui emulasi Chrome lulus.** Tiada ralat JavaScript dalam pelaksanaan berjaya.

| Suite | Lulus | Liputan |
|---|---:|---|
| Pengembaraan (`expedition.html`) | 419 | Semua 12 stesen, 12 pintu, tiga digit, peti, penamat, sijil, simpan/sambung, migrasi dan bank |
| Pembelajaran/audio (`learning.html`) | 1,001 | Panduan, latihan, mod kelas, bantuan, rekod guru, semua teks audio dan penyahkodan 476 MP3 |
| Input sentuh Chrome | 4 | Seret kad, ketik kad/kategori selepas cuba semula, kod salah, buku kod dan pintu betul |

## Perkara yang disahkan

- Empat stesen tersebar di empat penjuru setiap peta; semua stesen dan pintu dicapai melalui pergerakan fizikal watak. Pintu tertutup tidak boleh dipintas. Semua jalan keluar boleh dicapai selepas pintu selesai.
- Pokok kelapa maksimum empat setiap peta. Jejak bangunan dan batu sepadan dengan perlanggaran. Pantai, jeti, gua dan rumah api diperiksa melalui tangkapan skrin; peta menyeluruh dan kamera mengikuti watak tersedia.
- Tiga set tetap mempunyai empat soalan setiap tahap. Setiap sesi mempunyai 12 prompt berbeza. Untuk 40 benih bagi setiap set, A/B/C seimbang, tiada tiga huruf jawapan sama berturut-turut, jawapan selepas acakan kekal bermakna sama.
- Kod diberikan selepas jawapan selesai, disimpan dengan identiti pintu betul dan boleh dilihat semula. Pad nombor dan input papan kekunci berfungsi. Kod salah mengekalkan rekod dan keadaan pintu. Memasukkan kod tidak dikira sebagai soalan.
- Digit harta belum tersedia sebelum keempat-empat pintu selesai. Buku mengekalkan urutan tiga digit berasingan. Kod peti salah tidak merosakkan kemajuan. Kod betul membuka peti dan penamat; animasi boleh dilangkau.
- Jawapan salah kekal pada soalan sama. Pengesahan berulang tidak memberi ganjaran berganda. Latihan tidak mengubah markah. Urutan seret/susun boleh dicuba semula.
- Muat semula mengekalkan susunan soalan, kod, pintu, kemajuan dan ganjaran yang belum dipilih. Migrasi sesi lama mengekalkan jawapan, pintu terbuka serta koleksi; pemain meneruskan stesen keempat baharu.
- Sijil 1400px dengan potret terbenam masih dirender pada penamat. Ringkasan bersuara dan ganjaran aksesori tersedia. Editor guru menyokong betul/salah tanpa pilihan ketiga palsu.
- Katalog 465 rakaman aktif sepadan dengan teks. 11 rakaman warisan turut boleh dinyahkod. 476 MP3 dimuat dan dinyahkod dalam pelayar. Bacaan pilihan selepas acakan sepadan dengan hurufnya. Kegagalan audio diuji dan permainan masih boleh diteruskan.
- Paparan desktop 1440px dan buku kod 390px diperiksa. Input sentuh menggunakan `Input.dispatchTouchEvent`, bukan sekadar panggilan klik JavaScript.

## Had semakan

Telefon/tablet fizikal, Safari, cetakan pada pencetak sebenar dan ujian pengguna bersama murid belum dilakukan. Penyahkodan audio mengesahkan fail boleh dimainkan, bukan semakan sebutan manusia bagi setiap rakaman. Sasaran masa 10–15 minit belum disahkan dengan murid. Sesi menggunakan semula bank selepas tiga set; tiada jaminan soalan tidak akan berulang selama-lamanya.

Ujian ini memadam storan permainan pada origin ujian. Gunakan profil atau origin berasingan daripada sesi murid. `test-results.html` ialah ringkasan statik yang selamat dilihat tanpa mengubah kemajuan.
