window.addEventListener('load', function () {
  var allElements = document.getElementsByTagName('*');
  var includeCount = 0;
  var totalIncludes = 0;

  Array.prototype.forEach.call(allElements, function (el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      totalIncludes++;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
          includeCount++;
          if (includeCount === totalIncludes) {
            initHeaderScript(); // ✅ include 다 끝나면 실행
          }
        }
      };
      xhttp.open('GET', includePath, true);
      xhttp.send();
    }
  });

  if (totalIncludes === 0) {
    initHeaderScript(); // include가 없으면 바로 실행
  }
});