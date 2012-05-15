
function notreadme() {
  url = window.location.href;
  return url.match(/\#readme$/).length == 0;
}

if ( notreadme() ) {
  window.location.href += "#readme";
}
