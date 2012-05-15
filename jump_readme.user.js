(function() {
  window.onkeydown = function (event) {
    if ( window.location.href.match(/\#readme$/) ) {
      window.location.href += "#readme";
      console.log(event.keyCode);
    }
  }
}
)();
