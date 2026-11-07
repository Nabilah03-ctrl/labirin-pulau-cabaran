'use strict';
(()=>{
 const normal=text=>String(text).replace(/\s+/g,' ').trim();
 class MalayVoice{
  constructor(){this.player=new Audio();this.player.preload='none';this.volume=.8;this.enabled=true;this.consent=false;this.playing=false;this.token=0;this.last=[];this.active=null;this.cancelWait=null;this.listeners=new Set();this.status='Tekan Dengar untuk mengaktifkan suara Bahasa Melayu.';this.source=null;}
  emit(message){if(message)this.status=message;document.body.classList.toggle('voice-playing',this.playing);this.listeners.forEach(fn=>fn(this));}
  configure({enabled=true,volume=80}={}){this.enabled=enabled;this.volume=Math.max(0,Math.min(1,volume/100));this.player.volume=this.volume;if(!enabled)this.stop();this.emit();}
  stop(){this.token++;this.player.pause();this.player.onended=this.player.onerror=null;try{this.player.currentTime=0;}catch{}window.speechSynthesis?.cancel();if(this.cancelWait){this.cancelWait(false);this.cancelWait=null;}this.active?.classList.remove('speaking');this.active=null;this.playing=false;this.source=null;this.emit('Suara dihentikan.');}
  malayVoice(){return window.speechSynthesis?.getVoices().find(v=>/^ms(?:-|_|$)/i.test(v.lang));}
  async speak(items,{automatic=false}={}){if(automatic&&(!this.consent||!this.enabled))return;const sequence=(Array.isArray(items)?items:[items]).map(v=>typeof v==='string'?{text:v}:v).filter(v=>v.text);this.stop();if(!sequence.length)return;if(!automatic){this.consent=true;this.enabled=true;}if(!this.enabled)return;this.last=sequence;const token=this.token;this.playing=true;this.emit('Sedang membaca dalam Bahasa Melayu.');
   for(const item of sequence){if(token!==this.token)break;this.active?.classList.remove('speaking');this.active=item.el?.isConnected?item.el:null;this.active?.classList.add('speaking');this.active?.scrollIntoView({block:'nearest',behavior:'instant'});const text=normal(item.text),file=window.MALAY_AUDIO?.[text]||window.MALAY_AUDIO_LEGACY?.[text];let ok=false;
    if(file)ok=await this.recording(file,token,text);if(token!==this.token)break;if(!ok){const voice=this.malayVoice();if(voice)ok=await this.synthesize(text,voice,token);else{this.emit(file?'Audio tidak dapat dimainkan. Kamu masih boleh membaca dan meneruskan permainan.':'Tiada rakaman atau suara Bahasa Melayu untuk teks ini. Teruskan membaca teks pada skrin.');break;}}
    if(!ok&&token===this.token){this.emit('Suara tidak tersedia. Kamu masih boleh meneruskan permainan.');break;}
   }if(token===this.token){this.active?.classList.remove('speaking');this.active=null;this.playing=false;this.source=null;if(this.status==='Sedang membaca dalam Bahasa Melayu.')this.status='Bacaan selesai. Tekan Ulang untuk mendengar semula.';this.emit();}
  }
  recording(file,token,text){this.source='recording';return new Promise(resolve=>{let ended=false;const finish=ok=>{if(ended)return;ended=true;clearTimeout(timer);this.cancelWait=null;this.player.onended=this.player.onerror=null;if(!ok)this.player.pause();resolve(ok);};const timer=setTimeout(()=>finish(false),Math.max(20000,text.length*150));this.cancelWait=finish;this.player.onended=()=>finish(true);this.player.onerror=()=>finish(false);this.player.src=file;this.player.volume=this.volume;this.player.play().catch(()=>finish(false));if(token!==this.token)finish(false);});}
  synthesize(text,voice,token){this.source='synthesis';return new Promise(resolve=>{const utterance=new SpeechSynthesisUtterance(text);utterance.voice=voice;utterance.lang='ms-MY';utterance.rate=.88;utterance.volume=this.volume;let ended=false;const finish=ok=>{if(ended)return;ended=true;clearTimeout(timer);this.cancelWait=null;if(!ok)window.speechSynthesis?.cancel();resolve(ok);};const timer=setTimeout(()=>finish(false),Math.max(20000,text.length*150));this.cancelWait=finish;utterance.onend=()=>finish(true);utterance.onerror=()=>finish(false);if(token!==this.token)finish(false);else window.speechSynthesis.speak(utterance);});}
  repeat(){return this.speak(this.last);}
 }
 window.Voice=new MalayVoice();
})();
