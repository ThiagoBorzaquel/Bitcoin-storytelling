(function(){
  var lang = document.documentElement.lang || 'pt';
  try { localStorage.setItem('site-lang', lang); } catch (e) {}
  document.querySelectorAll('[data-lang-switch]').forEach(function(a){
    a.addEventListener('click', function(){ try { localStorage.setItem('site-lang', a.dataset.langSwitch); } catch (e) {} });
  });
})();