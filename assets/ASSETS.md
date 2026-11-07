# Aset visual Labirin Pulau Cabaran

Dijana menggunakan alat imagegen terbina dalam, bukan CLI/API. Gambar rujukan pengguna menjadi panduan gaya kartun 3D; identiti visual aplikasi menggunakan tema pulau tropika dan detektif (hijau, biru kehijauan, pasir keemasan dan coklat).

## Fail yang digunakan

- `assets/island-hero.png`: ilustrasi utama pulau tropika dan tiga detektif.
- `assets/detectives.png`: atlas telus tiga lajur (Hud, Izz, Aini) dan tiga baris (berhenti, berjalan, meraikan).
- `assets/environment.png`: atlas telus tiga lajur dan dua baris: pokok renek, palma, batu, peti petunjuk, pintu dan rumah api.

Semua aset dipindahkan ke dalam projek. Aplikasi tidak bergantung pada lokasi asal di direktori Codex. Teks antara muka dirender dalam HTML dan Canvas supaya kekal jelas dan boleh disunting.

## Prompt akhir: ilustrasi utama

Use case: stylized-concept. Asset type: polished landscape hero illustration for a Malay children's educational adventure videogame website. Create an original highly detailed, delightful premium 3D cartoon render of a tropical detective island maze, bright saturated toy-like aesthetic with rich lighting and soft shadows. Isometric elevated aerial view, clear winding sandy paths forming a coherent maze of lush green rounded hedges, decorative wooden fences, little stone walls, bridges over vivid turquoise streams, clue treasure chests with golden magnifying-glass badges, three friendly blue-and-gold gates, a beautiful large blue-roof white lighthouse with glowing warm light at the back right, tropical trees, flowers, small cascading waterfalls, sparkling ocean around the island and fluffy clouds against blue sky. Foreground: exactly three cute eight-year-old child detectives, big expressive brown eyes and friendly smiles, fully clothed modestly in tan brown plaid detective coats with dark navy trousers and black boots, deerstalker detective hats and magnifying glasses: a boy with short dark hair on left, a girl with long brown ponytail at center, a girl in a dark navy hijab and long modest coat at right. Child-friendly proportions with rounded faces, tactile miniature diorama detail, cinematic cheerful daylight. Palette vivid royal blue, deep navy, golden yellow, bright tropical green, aqua. Wide composition 3:2, full bleed, dense appealing world with clearly visible paths, no interface, no letters, no typography, no text, no watermarks, no logos, no smoking or alcohol objects, no frightening elements. Deliver as production-ready landscape illustration, not a screenshot or web page.

## Prompt akhir: watak

Use case: stylized-concept. Asset type: transparent PNG character sprite atlas for a children's detective adventure game. Create ONE precise 3 columns by 3 rows sprite sheet, nine equal square cells with consistent generous transparent padding, overall square image. Each figure is isolated, full body from hat to shoes, on a genuinely transparent background. Every cell centered on same ground baseline, no contact between cells, no labels, no text, no background. High-quality cute polished detailed 3D cartoon render, big expressive brown eyes, childlike proportions, tan brown tweed plaid detective coats, deerstalker caps, white shirts, dark brown/navy trousers, sensible black boots, magnifying glasses. COLUMN 1: Hud, 8-year-old boy with short dark brown hair. COLUMN 2: Izz, 8-year-old girl with brown ponytail. COLUMN 3: Aini, 8-year-old girl in a dark taupe/navy hijab covering all her hair and neck, long modest tan coat with trousers. SAME identity, clothing, color and proportions within each column. ROW 1: all three face front, friendly smiling idle pose, holding magnifying glasses near their side. ROW 2: same characters in a walking stride, one foot forward, arms gently swinging, slight three-quarter view. ROW 3: same characters celebrating success, joyful raised hands and happy smiles, feet on ground. Style: charming tactile 3D animated family-film miniature figures, beautifully modeled cloth seams, warm soft studio lighting, natural brown/tan detective palette, no police uniforms, no bright blue outfits, no shadows outside individual cells. The figures should occupy 80 percent of each cell height. Output transparent sprite atlas.

## Prompt akhir: persekitaran

Use case: stylized-concept. Asset type: one transparent 3-column by 2-row environment sprite atlas for a tropical island detective maze game. Six equal 512 by 512 square cells in a landscape image, centered individual isolated objects, genuinely transparent background, 12 percent clear padding around each object. Shared cute premium detailed 3D cartoon miniature aesthetic, warm sunny lighting, camera elevated about 55 degrees in a frontal three-quarter game view. Row 1 column 1: a lush dense SQUARE trimmed green hedge block, short cube of glossy tropical small leaves, subtle dark green side shadow, no pot or separate platform, suitable for repeated maze walls. Row 1 column 2: one charming tall tropical palm tree with curved tan trunk, lush green fronds and three coconuts. Row 1 column 3: small cluster of rounded warm gray tropical rocks with moss and tiny ferns. Row 2 column 1: a small closed wooden detective clue treasure chest with antique brass trim and large magnifying glass emblem, friendly design. Row 2 column 2: closed wooden arched gate with antique golden lock, two sandstone posts, green climbing leaves, no blue coloring. Row 2 column 3: charming white lighthouse with terracotta roof, golden glowing lantern, wooden door, small stone steps, green vines and a small red flag. No people, no text, no letters, no borders, no gridlines, no backgrounds, no floor rectangles. Every asset completely separate in its cell, same perspective, high detail, softly shaded, production-quality game sprites. Use emerald, turquoise accents, sandy golden stone, natural wood and warm brown, a lush island detective theme, not a police theme.


## Ilustrasi pembelajaran bahan — 7 November 2026

Mode: built-in `image_gen`, generate baharu, `transparent_background: true`. Ketiga-tiga PNG disalin ke workspace dan diperiksa secara visual. Label ditambah oleh HTML supaya boleh disembunyikan dalam soalan. SVG sandaran dilukis melalui kod dalam `learning.js`.

### `assets/materials/tembakau.png`

Prompt akhir:

Use case: scientific-educational. Asset type: standalone educational illustration for an eight-year-old Malay health education detective game. Two broad green-brown tobacco leaves next to two unlit plain cigarettes, with a large clear red prohibition circle and diagonal slash over the cigarettes. No smoke, no people, no brands, no text. Friendly polished 3D cartoon educational objects, clearly recognizable uncluttered centered composition, rounded shapes, warm soft studio lighting, modest non-glamorous presentation, large objects fill 75 percent of a square image, genuinely transparent background, no floor, no frightening elements, no watermark. This image teaches children to identify and avoid addictive substances. Do not depict use or show a person using substances. No text anywhere; labels are added by the application.

### `assets/materials/alkohol.png`

Prompt akhir:

Use case: scientific-educational. Asset type: standalone educational illustration for an eight-year-old Malay health education detective game. One plain unbranded amber beverage bottle with a blank cream rectangular label and one short stemmed drinking glass containing a little amber liquid. A clear red prohibition circle at upper right. The bottle label must be blank; its Malay category will be added with accessible HTML. No brand, no text, no people. Friendly polished 3D cartoon educational objects, clearly recognizable uncluttered centered composition, rounded shapes, warm soft studio lighting, modest non-glamorous presentation, large objects fill 75 percent of a square image, genuinely transparent background, no floor, no frightening elements, no watermark. This image teaches children to identify and avoid addictive substances. Do not depict use or show a person using substances. No text anywhere; labels are added by the application.

### `assets/materials/dadah.png`

Prompt akhir:

Use case: scientific-educational. Asset type: standalone educational illustration for an eight-year-old Malay health education detective game. Two small sealed opaque brown-paper packets and one transparent sealed pouch of an unspecified white illegal substance, alongside a large yellow triangular exclamation warning sign and red prohibition mark. Unbranded simple educational evidence illustration. No pills, no syringes, no consumption, no preparation, no people, no lettering. Friendly polished 3D cartoon educational objects, clearly recognizable uncluttered centered composition, rounded shapes, warm soft studio lighting, modest non-glamorous presentation, large objects fill 75 percent of a square image, genuinely transparent background, no floor, no frightening elements, no watermark. This image teaches children to identify and avoid addictive substances. Do not depict use or show a person using substances. No text anywhere; labels are added by the application.

## Audio Melayu

Fail aktif: `assets/audio/ms-MY/*.mp3`, dipetakan oleh `audio-manifest.js`. `assets/audio/ms-MY/catalog.json` menyimpan teks tepat, tempoh dan suara bagi 72 rakaman aktif. Dijana menggunakan `edge-tts 7.3.1`, suara `ms-MY-YasminNeural`, kadar `-12%`. Sumber senarai bahasa: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts ; alat: https://github.com/rany2/edge-tts .

Semua 72 rakaman disahkan sebagai MP3 dan dinyahkod oleh Chrome. Teks audio sepadan dengan paparan. Sebutan melalui pembesar suara sebenar belum disemak manusia. Tiga fail versi penerangan terdahulu disimpan tetapi tidak dirujuk oleh manifest.

## Aset kempen Rumah Api Selamat ? 7 November 2026

Enam variasi SVG ialah ilustrasi vektor kod asal yang melanjutkan gaya ilustrasi sandaran sedia ada, bukan imej raster AI: `assets/materials/tembakau-1.svg`, `tembakau-2.svg`, `alkohol-1.svg`, `alkohol-2.svg`, `dadah-1.svg`, `dadah-2.svg`. Kad dan papan pendidikan mengekalkan simbol larangan/amaran serta tiada jenama. Label kategori ditambah oleh aplikasi selepas respons yang betul.

Peta cerita, cahaya rumah api, jambatan dan animasi maklum balas dibina melalui HTML/CSS. Aksesori kosmetik ialah lapisan lukisan canvas dalam `world.js`; imej asal detektif tidak diubah. Tudung dan pakaian Aini dikekalkan.

Katalog audio kini mempunyai 171 rakaman aktif (1343.6 saat untuk semua variasi). Semua menggunakan kaedah, suara dan kadar bacaan yang dinyatakan di atas. Semakan meliputi padanan teks dan penyahkodan MP3; tempoh ini bukan tempoh satu sesi permainan.

Fon Latin DM Sans dan Fredoka dimuat turun daripada Google Fonts dan dibungkus sebagai `assets/fonts/dm-sans-0.woff2` dan `assets/fonts/fredoka-1.woff2`. Lesen OFL daripada repositori rasmi google/fonts disertakan sebagai `assets/fonts/dmsans-OFL.txt` dan `assets/fonts/fredoka-OFL.txt`. Fon tempatan mengelakkan muatan skrip menunggu import CSS luar.

## Sijil dan rakaman susulan

Sijil dibina dalam SVG oleh `certificate.js` mengikut susun atur rujukan pengguna. Watak menggunakan sprite sedia ada, dirender melalui canvas dan dibenamkan sebagai PNG dalam SVG; tiada imej watak baharu dijana. Fail berdiri sendiri untuk dimuat turun/dicetak.

Katalog aktif kini mengandungi 211 rakaman Melayu (1640.5 saat merentas semua teks/set), dengan 11 pemetaan rakaman terdahulu di `assets/audio/ms-MY/legacy.json` bagi sesi lama.
