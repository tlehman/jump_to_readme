
(function() {
  window.onkeydown = function (event) {
    if ( !window.location.href.match(/\#readme$/) && event.keyCode == 40 ) {
      window.location.href += "#readme";
      console.log(event.keyCode);
    }
  }
}
)();
