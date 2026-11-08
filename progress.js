'use strict';
window.Progress=(()=>{
 const KEY='pulau-cabaran-3d-v1',OLD='labirin-pulau-v2',copy=x=>JSON.parse(JSON.stringify(x));
 const read=k=>{try{return JSON.parse(localStorage.getItem(k));}catch{return null;}};
 const fresh=()=>({version:1,profile:null,questions:copy(LESSON.questions),answers:{},records:[],completed:[],digits:[null,null,null],position:{x:-23,z:38},training:false,demos:[],storySeen:[],inspected:[],opened:false,settings:{sound:true,voiceEnabled:true,volume:80,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches},legacy:null});
 let state=read(KEY),storageAvailable=true;
 if(!state||state.version!==1||state.questions?.length!==12){state=fresh();const old=read(OLD);if(old?.profile){state.profile={name:old.profile.name,classroom:old.profile.classroom};state.legacy=copy(old);state.settings={...state.settings,...Object.fromEntries(Object.entries(old.settings||{}).filter(([k])=>k in state.settings))};}}
 function save(){try{localStorage.setItem(KEY,JSON.stringify(state));return true;}catch{storageAvailable=false;return false;}}
 function solved(s){return state.questions.filter(q=>q.station===s&&state.answers[q.id]?.done).length;}
 function submit(q,correct,response){const a=state.answers[q.id]??={attempts:0,hints:0,done:false};if(a.done)return false;a.attempts++;a.firstCorrect??=correct;a.firstResponse??=copy(response);a.lastResponse=copy(response);a.done=correct;const row={id:q.id,station:q.station,prompt:q.prompt,firstCorrect:a.firstCorrect,firstResponse:a.firstResponse,response:copy(response),attempts:a.attempts,hints:a.hints,done:correct};const i=state.records.findIndex(r=>r.id===q.id);if(i<0)state.records.push(row);else state.records[i]=row;
  if(correct&&solved(q.station)===4&&!state.completed.includes(q.station)){state.completed.push(q.station);state.digits[q.station]=LESSON.digits[q.station];}save();return true;}
 function hint(q){const a=state.answers[q.id]??={attempts:0,hints:0,done:false};a.hints++;const r=state.records.find(r=>r.id===q.id);if(r)r.hints=a.hints;save();}
 function reset(){const settings=state.settings,legacy=state.legacy;state=fresh();state.settings=settings;state.legacy=legacy;save();return state;}
 function current(){return [0,1,2].find(n=>!state.completed.includes(n))??2;}
 function score(){return state.questions.reduce((n,q)=>n+(state.answers[q.id]?.done?10:0),0);}
 save();return{get state(){return state;},save,solved,submit,hint,reset,current,score,copy,get storageAvailable(){return storageAvailable;},key:KEY};
})();
