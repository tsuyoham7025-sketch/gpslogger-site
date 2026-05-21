// GPS Logger サイト 言語切替（data-ja / data-en 属性を切り替える）
function setLang(lang){
  document.querySelectorAll('[data-ja]').forEach(el=>{
    const txt = el.getAttribute('data-' + lang);
    if(txt !== null) el.textContent = txt;
  });
  // 言語専用ブロック（id="ja" / id="en"）の表示切替
  const ja = document.getElementById('ja');
  const en = document.getElementById('en');
  if(ja && en){
    ja.classList.toggle('hidden', lang!=='ja');
    en.classList.toggle('hidden', lang!=='en');
  }
  // ボタンのアクティブ状態
  const bja = document.getElementById('b-ja');
  const ben = document.getElementById('b-en');
  if(bja && ben){
    bja.classList.toggle('active', lang==='ja');
    ben.classList.toggle('active', lang==='en');
  }
  document.documentElement.lang = lang;
  try{ localStorage.setItem('gpslogger-lang', lang); }catch(e){}
}
// ページ読み込み時に保存済み言語を復元
document.addEventListener('DOMContentLoaded', ()=>{
  let saved = 'ja';
  try{ saved = localStorage.getItem('gpslogger-lang') || 'ja'; }catch(e){}
  setLang(saved);
});
