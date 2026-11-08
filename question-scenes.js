'use strict';
window.QuestionScenes=(()=>{
 const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const items={
  s1q1:{alt:'Guru menunjukkan rokok yang tidak dinyalakan di atas dulang. Dua murid melihat bahan yang ditunjukkan.'},
  s1q2:{alt:'Guru dan murid melihat botol yang mempunyai label ALKOHOL.'},
  s1q3:{alt:'Guru menerangkan poster JAUHI DADAH TERLARANG kepada dua murid.'},
  s1q4:{alt:'Guru dan murid melihat air, gambar rokok, susu, poster dadah terlarang dan botol berlabel alkohol di atas meja.'},
  s3q1:{alt:'Seorang rakan menghulurkan rokok yang tidak dinyalakan. Murid yang diajak kelihatan ragu-ragu dan belum mengambilnya.'},
  s3q2:{alt:'Seorang dewasa menghulurkan minuman kepada murid. Botol di atas meja berlabel ALKOHOL; murid belum mengambil minuman.'},
  s3q3:{alt:'Dua murid melihat bungkusan tertutup di atas tanah berdekatan bangku. Isi bungkusan tidak diketahui.'},
  s3q4:{alt:'Seorang rakan kelihatan ingin tahu sambil menunjuk bungkusan tertutup di atas bangku. Murid di sebelahnya kelihatan bimbang.'},
  'no-smoking':{alt:'Guru dan murid melihat simbol rokok yang dipangkah dengan garisan merah.'},
  'alcohol-sign':{alt:'Guru menerangkan papan JAUHI ALKOHOL kepada dua murid.'},
  smoke:{alt:'Dua murid berasa tidak selesa berhampiran kawasan berasap rokok. Laluan lain kelihatan di sebelah mereka.'},
  'say-no':{alt:'Murid mengangkat tapak tangan dan berkata TIDAK ketika ditawarkan minuman beralkohol.'},
  'walk-away':{alt:'Dua murid berjalan meninggalkan kawasan berasap menuju bangunan sekolah yang selamat.'},
  'tell-teacher':{alt:'Murid menceritakan kebimbangannya kepada guru. Guru mendengar dengan perhatian.'}
 };
 const matching={s2q1:['s1q1','s1q2','s1q3'],s2q2:['no-smoking','alcohol-sign','s1q3'],s2q3:['smoke','s3q2','s3q3'],s2q4:['say-no','walk-away','tell-teacher']};
 for(const [id,item] of Object.entries(items))item.src='assets/scenes/'+id+'.jpg';
 function figure(id,compact=false){const item=items[id];if(!item)return '';return `<figure class="question-scene ${compact?'scene-card':''}" data-scene="${id}"><button type="button" class="scene-image-button" data-scene-open="${id}" aria-label="Besarkan gambar: ${esc(item.alt)}" aria-haspopup="dialog"><img class="scene-photo" src="${item.src}" alt="${esc(item.alt)}" width="1536" height="1024" decoding="async" draggable="false"><span class="scene-zoom-label">⌕ Besarkan gambar</span></button><figcaption class="scene-fallback" hidden>Gambar tidak dapat dimuatkan. ${esc(item.alt)}</figcaption></figure>`;}
 let dialog=null,invoker=null;
 function viewer(){if(dialog)return dialog;dialog=document.createElement('dialog');dialog.id='scene-viewer';dialog.className='scene-viewer';dialog.setAttribute('aria-labelledby','scene-viewer-title');dialog.innerHTML='<header><h2 id="scene-viewer-title">Lihat gambar</h2><button type="button" id="close-scene">× Tutup</button></header><img class="scene-full" alt=""><p class="scene-description"></p>';
  document.body.append(dialog);dialog.querySelector('#close-scene').onclick=()=>{dialog.close();if(invoker?.isConnected)invoker.focus({preventScroll:true});};dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('close',()=>{const target=invoker;requestAnimationFrame(()=>{if(!dialog.open&&target?.isConnected)target.focus({preventScroll:true});});});return dialog;
 }
 function open(id,button){const item=items[id];if(!item)return;window.Voice?.stop();invoker=button;const d=viewer(),img=d.querySelector('img');img.hidden=false;img.alt=item.alt;img.src=item.src;d.querySelector('p').textContent=item.alt;img.onerror=()=>{img.hidden=true;d.querySelector('p').textContent='Gambar tidak dapat dimuatkan. '+item.alt;};d.showModal();d.querySelector('button').focus({preventScroll:true});}
 function bind(root=document){root.querySelectorAll('[data-scene]').forEach(figure=>{const button=figure.querySelector('[data-scene-open]'),img=figure.querySelector('img'),fallback=figure.querySelector('.scene-fallback');button.onclick=()=>open(button.dataset.sceneOpen,button);img.onerror=()=>{img.hidden=true;fallback.hidden=false;button.disabled=true;button.querySelector('span').textContent='Gambar tidak tersedia';};img.onload=()=>{img.hidden=false;fallback.hidden=true;button.disabled=false;button.querySelector('span').textContent='⌕ Besarkan gambar';};if(img.complete&&!img.naturalWidth)img.onerror();});}
 return {items,matching,question:q=>q.type==='match'?'':figure(q.id),card:(q,i)=>figure(matching[q.id]?.[i],true),bind};
})();
